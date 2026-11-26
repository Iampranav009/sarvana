"use client";

import { useEffect, useRef } from 'react';

type Person = { element: HTMLDivElement; image: HTMLImageElement; x: number; y: number; direction: number; speed: number; depth: number };

/** The walking-character portion of the supplied component, isolated for the footer. */
export function FooterCrowd() {
  const crowdRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const crowd=crowdRef.current;
    if(!crowd)return;
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    const mobile=matchMedia('(max-width: 600px)').matches;
    const count=mobile?18:48;
    const people:Person[]=[];
    let frame=0,last=0,visible=false;
    let pointer=0,drift=0;
    // Preserve the reference: large overlapping busts, depth blur and horizontal travel.
    for(let i=0;i<count;i++){
      const element=document.createElement('div');
      element.className='footer-person';
      const image=document.createElement('img');
      image.alt='';image.draggable=false;image.decoding='async';image.width=240;image.height=324;
      image.src=`/footer/people/person-${String(i%15+1).padStart(2,'0')}.webp`;
      const depth=((i*19)%count)/(count-1);
      const width=(mobile?100:146)+depth*(mobile?85:140);
      element.style.width=`${width}px`;
      element.style.top=`${31+depth*54}%`;
      element.style.zIndex=String(Math.round(depth*100));
      const direction=i%2===0?-1:1;
      image.style.transform=`scaleX(${direction})`;
      image.style.filter=`blur(${Math.max(.04,(.8-depth)*2.1)}px)`;
      element.appendChild(image);crowd.appendChild(element);
      people.push({element,image,x:(i*43)%120-10,y:depth,direction,speed:8+depth*6,depth});
    }
    let sceneWidth=crowd.clientWidth;
    const draw=()=>people.forEach(person=>{person.element.style.transform=`translate3d(${(person.x-drift*person.depth*3)*sceneWidth/100}px,0,0) translate(-50%,-50%)`;});
    const resize=new ResizeObserver(()=>{sceneWidth=crowd.clientWidth;draw();});
    resize.observe(crowd);
    draw();
    const animate=(now:number)=>{
      const dt=last?Math.min(.05,(now-last)/1000):0;last=now;
      drift+=(pointer-drift)*.06;
      people.forEach(person=>{
        person.x+=person.direction*person.speed*dt;
        if(person.x>115)person.x=-15;
        if(person.x< -15)person.x=115;
      });draw();frame=requestAnimationFrame(animate);
    };
    const sync=()=>{
      cancelAnimationFrame(frame);last=0;
      if(visible&&!reduced.matches&&!document.hidden)frame=requestAnimationFrame(animate);
    };
    const onPointer=(event:PointerEvent)=>{pointer=event.clientX/window.innerWidth-.5;};
    window.addEventListener('pointermove',onPointer,{passive:true});
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.01});
    observer.observe(crowd);
    reduced.addEventListener('change',sync);
    document.addEventListener('visibilitychange',sync);
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('pointermove',onPointer);observer.disconnect();resize.disconnect();reduced.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync);crowd.replaceChildren();};
  },[]);

  return <div className="footer-crowd-scene" aria-hidden="true"><div className="footer-crowd-glow"/><div className="footer-crowd" ref={crowdRef}/></div>;
}
