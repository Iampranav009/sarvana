import Image from 'next/image';

/** Approved vector artwork; preserve its original proportions and foreground color. */
export function Wordmark({ tone = 'white', className = '', priority = false }: { tone?: 'white' | 'black'; className?: string; priority?: boolean }) {
  return <Image src={`/Sarvana_Brand_Assets/01_Wordmark/sarvana-wordmark-${tone}.svg`} alt="Sarvana" width={656} height={109} className={`sarvana-wordmark ${className}`} priority={priority} loading={priority ? "eager" : "lazy"} unoptimized />;
}
