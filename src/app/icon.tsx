import {ImageResponse} from 'next/og';
export const size={width:64,height:64};export const contentType='image/png';
export default function Icon(){return new ImageResponse(<div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#050608',color:'#00f2fe',fontSize:48,width:'100%',height:'100%'}}>S</div>,size)}
