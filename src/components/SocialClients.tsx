import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_CLIENTS } from '@/data/socialClients';
import './social-clients.css';

export function SocialClients() {
  return <section className="social-clients" aria-labelledby="social-clients-title">
    <div className="social-clients-heading"><div><p className="social-clients-kicker">Currently working together</p><h2 id="social-clients-title">Brands we keep<br/>in the conversation.</h2></div><p>Content management and social media management for these businesses. Explore their Instagram profiles.</p></div>
    <div className="social-clients-grid">{SOCIAL_CLIENTS.map(client => <a className="social-client" key={client.id} href={`https://www.instagram.com/${client.handle}/`} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${client.name} on Instagram (opens in a new tab)`}>
      <div className="social-client-top"><Image src={`/logos/${client.id}.webp`} alt={`${client.name} logo`} width={150} height={150} sizes="80px"/><ArrowUpRight size={22} aria-hidden="true"/></div>
      <p className="social-client-category">{client.category}</p><h3>{client.name}</h3><p className="social-client-description">{client.description}</p><p className="social-client-scope">Content management · Social media management</p><span className="social-client-profile">@{client.handle}</span>
    </a>)}</div>
  </section>;
}
