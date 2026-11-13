import GlassFolder from "@/components/ui/glass-folder-cards";

const folders = [
  { label: "Website work", meta: "Platforms & products", art: "navy" as const, href: "/work/websites", files: [
    { name: "AWS SCD Yavatmal", meta: "Community platform", href: "https://scd.awssbgytl.in/" },
    { name: "Rangtari", meta: "Event experience", href: "https://rangtari.nexuseventplaner.in/" },
    { name: "BJP Yavatmal", meta: "Operations CRM", href: "https://bjpyavatmal.vercel.app/" },
    { name: "Clinic Yavatmal", meta: "Search presence", href: "https://pilesclinicyavatmal.com/" },
  ] },
  { label: "Creative direction", meta: "Identity & campaigns", art: "graphite" as const, href: "/work/creative", files: [
    { name: "Nexus Events", meta: "Festival identity" },
    { name: "FrequencyX", meta: "Motion typography" },
    { name: "Rangtari", meta: "Campaign system" },
  ] },
  { label: "Social media", meta: "Managed presence", art: "cyan" as const, href: "/work/social-media", files: [
    { name: "@nexusevents.in_", meta: "Event storytelling" },
    { name: "@frequencyx_mh29", meta: "Music culture" },
    { name: "@aws_scd_ytl", meta: "Community content" },
  ] },
];

export function CreativeFolders() {
  return <section id="creative-archive" className="creative-folders" aria-labelledby="creative-folders-title">
    <div className="creative-folders-heading"><p>THE CREATIVE ARCHIVE</p><h2 id="creative-folders-title">Open the work.<br/>See what lives inside.</h2><p>Three connected practices, organized as living collections. Open a folder to reveal the projects, systems and communities behind the work.</p></div>
    <div className="creative-folder-grid">{folders.map((folder,index) => <GlassFolder key={folder.label} {...folder} appearDelay={index * 120}/>)}</div>
    <p className="creative-folder-hint">Hover to lean · Click to open · Select a file to visit</p>
  </section>;
}
