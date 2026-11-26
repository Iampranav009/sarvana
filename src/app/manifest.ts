import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
export default function manifest(): MetadataRoute.Manifest {
  return { name: site.name, short_name: site.name, start_url: site.url, display: 'standalone', background_color: '#090b0d', theme_color: '#090b0d', icons: [192, 512].map(size => ({ src: `/Sarvana_Brand_Assets/03_Favicon/sarvana-favicon-white-${size}.png`, sizes: `${size}x${size}`, type: 'image/png', purpose: 'any' })) };
}
