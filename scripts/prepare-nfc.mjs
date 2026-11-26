import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
const root = 'C:/myfile/NFC-project/nfc-reference-pack';
(async()=>{let before=0,after=0;for(const item of JSON.parse(fs.readFileSync(root+'/manifest.json','utf8'))){const src=path.join(root,item.local);if(!fs.existsSync(src))continue;const target='public/nfc/'+path.parse(item.local).name+'.webp';await sharp(src).rotate().resize({width:1400,height:1400,fit:'inside',withoutEnlargement:true}).webp({quality:85,effort:6}).toFile(target);before+=fs.statSync(src).size;after+=fs.statSync(target).size;}console.log({before,after});})();
