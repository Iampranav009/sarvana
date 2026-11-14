import {site} from '@/config/site';
export async function POST(request:Request){
  if(Number(request.headers.get('content-length')||0)>20000)return Response.json({error:'Request too large'},{status:413});
  const origin=request.headers.get('origin');
  if(origin && origin!==new URL(request.url).origin && origin!==site.url)return Response.json({error:'Invalid origin'},{status:403});
  let data:Record<string,unknown>;
  try{const raw=await request.text();if(raw.length>20000)throw new Error();data=JSON.parse(raw);if(!data||Array.isArray(data)||typeof data!=='object')throw new Error();}catch{return Response.json({error:'Invalid request'},{status:400})}
  if(data.website)return Response.json({error:'Unable to submit'},{status:400});
  const limits:Record<string,number>={name:100,phone:30,business:150,service:150,budget:100,description:5000,email:254};
  const fields:Record<string,string>={};
  for(const [key,max]of Object.entries(limits)){const value=data[key];if(value!==undefined&&typeof value!=='string')return Response.json({error:'Invalid fields'},{status:400});fields[key]=typeof value==='string'?value.trim():'';if(fields[key].length>max)return Response.json({error:'Please shorten your message'},{status:400})}
  if(!fields.name||!/^\+?[\d\s()\-]{7,30}$/.test(fields.phone)||!fields.service||fields.description.length<20||data.consent!=='on'||(fields.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)))return Response.json({error:'Check your name, phone, service, message and consent.'},{status:400});
  const service=process.env.EMAILJS_SERVICE_ID,template=process.env.EMAILJS_TEMPLATE_ID,key=process.env.EMAILJS_PUBLIC_KEY;
  if(!service||!template||!key)return Response.json({error:'Please contact us on WhatsApp or email while online delivery is being configured.'},{status:503});
  try{const response=await fetch('https://api.emailjs.com/api/v1.0/email/send',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({service_id:service,template_id:template,user_id:key,...(process.env.EMAILJS_PRIVATE_KEY?{accessToken:process.env.EMAILJS_PRIVATE_KEY}:{}),template_params:{...fields,reply_to:fields.email||site.email,source:site.url+'/contact',submitted_at:new Date().toISOString(),consent:'Agreed'}}),signal:AbortSignal.timeout(15000)});if(!response.ok)throw new Error();return Response.json({accepted:true})}catch{return Response.json({error:'Delivery failed. Retry or use WhatsApp or email.'},{status:502})}
}
