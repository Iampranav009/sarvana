import {ImageResponse} from 'next/og';
import {site} from '@/config/site';
export const size={width:1200,height:630};export const contentType='image/png';export const alt='Servana creative technology studio in Yavatmal';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'center',background:'#050608',color:'#f4f6fa',padding:80,width:'100%',height:'100%'}}><div style={{color:'#00f2fe',fontSize:28}}>SERVANA · YAVATMAL</div><div style={{fontSize:62,marginTop:40}}>{site.tagline}</div></div>,size)}
