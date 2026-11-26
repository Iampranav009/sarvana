"use client";
import { useRef, useState } from 'react';
import { site } from '@/lib/site';
import { serviceCategories } from '@/data/serviceCategories';
const currency = (value: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
export function InquiryForm() {
  const [budget, setBudget] = useState(20000);
  const [undecided, setUndecided] = useState(true);
  const [state, setState] = useState<'idle'|'submitting'|'success'|'failure'>('idle');
  const locked = useRef(false);
  const configured = true;
  return <form id="inquiry" className="inquiry-form" onSubmit={async event => {
    event.preventDefault();
    if (locked.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    locked.current = true; setState('submitting');
    try {
      if (!configured) throw new Error('Unavailable');
      const data = Object.fromEntries(new FormData(form));
      const response = await fetch('/api/inquiry', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...data, budget:undecided?'Not decided yet':currency(budget)})});
      if (!response.ok) throw new Error('Delivery failed');
      form.reset(); setUndecided(true); setBudget(20000); setState('success');
    } catch { setState('failure'); } finally { locked.current = false; }
  }}><h2>Tell us what you have in mind.</h2><div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div><div className="inquiry-grid">{[
    ['name','Name','text',true,'name',100], ['phone','Phone / WhatsApp','tel',true,'tel',30], ['business','Business type','text',false,'organization',150], ['email','Email (optional)','email',false,'email',254],
  ].map(([name,label,type,required,autocomplete,max])=><label key={String(name)}>{label}{required ? ' *' : ''}<input name={String(name)} type={String(type)} required={Boolean(required)} autoComplete={String(autocomplete)} maxLength={Number(max)} pattern={name==='name' ? '.*\\S.*' : undefined}/></label>)}</div><label>Required service *<select name="service" required defaultValue=""><option value="" disabled>Choose a service</option>{serviceCategories.map(category=><optgroup key={category.title} label={category.title}>{category.services.map(service=><option key={service}>{service}</option>)}</optgroup>)}<option>Not sure yet—help me choose.</option></select></label><fieldset className="compact-budget"><legend>Approximate budget</legend><div className="budget-heading"><label className="consent"><input type="checkbox" checked={undecided} onChange={event=>setUndecided(event.target.checked)}/>Not decided yet</label><label className="budget-number"><span className="sr-only">Budget in rupees</span><span aria-hidden="true">₹</span><input type="number" aria-label="Budget in rupees" min="2000" max="200000" step="1" disabled={undecided} value={budget} onChange={event=>setBudget(event.target.valueAsNumber || 0)} onBlur={()=>setBudget(Math.max(2000,Math.min(200000,budget)))}/></label></div><input aria-label="Approximate budget" type="range" min="2000" max="200000" step="1000" disabled={undecided} value={budget} onChange={event=>setBudget(Number(event.target.value))}/><small>{undecided ? 'Optional estimate' : currency(budget)} · Not a quotation</small></fieldset><label>Project description *<textarea name="description" required minLength={20} maxLength={5000} rows={3} placeholder="Your goals, audience and what you would like to create."/></label><label className="consent"><input name="consent" type="checkbox" required/>I agree that Sarvana may use my details to respond to this inquiry.</label><p role="status" aria-live="polite">{state==='success' ? 'Your inquiry was accepted. Thank you—we’ll be in touch.' : state==='failure' ? 'Your inquiry could not be sent. Your details are still here. Retry or contact us directly below.' : !configured ? 'Online inquiries are being configured. Please use WhatsApp or email below.' : ''}</p><button disabled={state==='submitting'} type="submit">{state==='submitting' ? 'Sending…' : 'Send project inquiry ↗'}</button><p><a href={site.whatsapp}>WhatsApp</a> · <a href={`mailto:${site.email}`}>Email Pranav</a></p></form>;
}
