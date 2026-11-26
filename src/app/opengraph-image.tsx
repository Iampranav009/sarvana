import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { site } from '@/config/site';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Sarvana creative technology studio in Yavatmal';
export default async function Image() {
  const artwork = await readFile(path.join(process.cwd(), 'public/Sarvana_Brand_Assets/01_Wordmark/sarvana-wordmark-white.svg'));
  const src = `data:image/svg+xml;base64,${artwork.toString('base64')}`;
  return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#090b0d', color: '#f1f0ea', padding: 80, width: '100%', height: '100%' }}>
    {/* The supplied logo is embedded as a data URI for the image renderer. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt="Sarvana" width={656} height={109}/>
    <div style={{ fontSize: 46, marginTop: 60 }}>{site.tagline}</div>
    <div style={{ color: '#20d9d2', fontSize: 24, marginTop: 30 }}>Yavatmal · Working across India</div>
  </div>, size);
}
