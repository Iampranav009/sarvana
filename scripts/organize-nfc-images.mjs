import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const sourceRoot=path.resolve(process.argv[2] || 'C:/myfile/NFC-project/image');
const siteRoot=path.resolve(import.meta.dirname,'..');
const entries=JSON.parse(await fs.readFile(new URL('./nfc-additional-images.json',import.meta.url),'utf8'));
const manifest=[];
const hashes=new Map();
for(const entry of entries){
  const original=path.join(sourceRoot,entry.source);
  const input=await fs.readFile(original);
  const hash=crypto.createHash('sha256').update(input).digest('hex');
  if(hashes.has(hash))throw new Error(`Duplicate source: ${entry.source} and ${hashes.get(hash)}`);
  hashes.set(hash,entry.source);
  const organized=path.join(sourceRoot,'organized',entry.category,entry.format,entry.slug+path.extname(entry.source).toLowerCase());
  await fs.mkdir(path.dirname(organized),{recursive:true});
  if(path.resolve(original)!==path.resolve(organized))await fs.copyFile(original,organized);
  const imageId=`${entry.category}/${entry.slug}`;
  const output=path.join(siteRoot,'public/nfc',imageId+'.webp');
  await fs.mkdir(path.dirname(output),{recursive:true});
  const info=await sharp(input).rotate().resize({width:1400,height:1400,fit:'inside',withoutEnlargement:true}).webp({quality:88,effort:6}).toFile(output);
  manifest.push({...entry,imageId,organized:path.relative(sourceRoot,organized).replaceAll('\\','/'),url:`/nfc/${imageId}.webp`,width:info.width,height:info.height,sourceBytes:input.length,webpBytes:info.size,sha256:hash});
}
await fs.writeFile(path.join(sourceRoot,'organized/manifest.json'),JSON.stringify(manifest,null,2)+'\n');
await fs.writeFile(path.join(siteRoot,'src/data/nfc-additional-images.json'),JSON.stringify(manifest.map(({category,format,alsoIn,imageId,width,height})=>({category,format,alsoIn,imageId,width,height})),null,2)+'\n');
const readme=`# Organized NFC source images\n\n28 original images are preserved at the parent folder. These are named copies, grouped by purpose and format after visual inspection.\n\n- google-review: cards, plates, stickers, stands and sets\n- instagram: cards and stands\n- whatsapp: cards and stands\n- keychains: Google Review and Instagram variants\n- facebook: review cards\n\nmanifest.json records original filenames, organized copies, website paths, dimensions and source checksums. Google Review and Instagram keychains also appear in their platform galleries. The restaurant bill holder requests Google reviews, so it is classified under Google Review, not digital menus.\n\nWebsite copies live in C:/myfile/Sarvana-agency/public/nfc by category, converted to WebP without upscaling. Regenerate using node scripts/organize-nfc-images.mjs from the website checkout. Final artwork and product availability are confirmed on enquiry; these images are references.\n`;
await fs.writeFile(path.join(sourceRoot,'organized/README.md'),readme);
console.log(JSON.stringify({images:manifest.length,sourceBytes:manifest.reduce((s,e)=>s+e.sourceBytes,0),webpBytes:manifest.reduce((s,e)=>s+e.webpBytes,0),groups:manifest.reduce((s,e)=>(s[e.category]=(s[e.category]||0)+1,s),{})},null,2));
