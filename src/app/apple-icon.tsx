import {ImageResponse} from 'next/og';
export const size={width:180,height:180};export const contentType='image/png';
export default function Icon(){return new ImageResponse(<div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#050608',color:'#00f2fe',fontSize:120,width:'100%',height:'100%'}}>S</div>,size)}
