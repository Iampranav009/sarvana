"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type LiveOrbProps = {
  className?: string;
  size?: number;
  color?: string;
  colors?: string[];
  eyeColor?: string;
  interactive?: boolean;
  blink?: boolean;
  label?: string;
};

const vertexShader = `
attribute vec2 a_position;
void main(){ gl_Position = vec4(a_position, 0.0, 1.0); }
`;

const fragmentShader = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_look;
uniform float u_blink;
uniform vec3 u_body;
uniform vec3 u_eye;

float capsule(vec2 p, vec2 a, vec2 b, float r){
  vec2 pa=p-a, ba=b-a;
  float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);
  return length(pa-ba*h)-r;
}

void main(){
  vec2 uv=(gl_FragCoord.xy/u_resolution.xy)*2.0-1.0;
  uv.x*=u_resolution.x/max(u_resolution.y,1.0);
  float r=length(uv);
  float alpha=1.0-smoothstep(.94,.97,r);
  if(alpha<.001){gl_FragColor=vec4(0.0);return;}
  float z=sqrt(max(0.0,1.0-r*r));
  vec3 light=normalize(vec3(-.55,.72,1.0));
  float shade=.76+.24*max(0.0,dot(normalize(vec3(uv,z)),light));
  float glow=.035*sin(u_time*.72+uv.y*3.0)+.035*cos(u_time*.46+uv.x*3.8);
  vec3 body=u_body*(shade+glow);
  vec2 gaze=u_look*vec2(.12,.09);
  float h=mix(.16,.018,u_blink);
  float left=capsule(uv-gaze,vec2(-.29,-h),vec2(-.29,h),.054);
  float right=capsule(uv-gaze,vec2(.29,-h),vec2(.29,h),.054);
  float eyes=1.0-smoothstep(-.008,.008,min(left,right));
  vec3 col=mix(body,u_eye,eyes);
  gl_FragColor=vec4(col,alpha);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const value = Number.parseInt(hex.replace("#", ""), 16);
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

function makeShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function LiveOrb({ className, size = 360, color, colors, eyeColor = "#090b0d", interactive = true, blink = true, label = "A responsive Servana orb looking toward the pointer" }: LiveOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  const bodyColor = color ?? colors?.[1] ?? "#f1f0ea";

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const gl = canvas.getContext("webgl", { alpha: true, antialias: true, powerPreference: "high-performance" });
    if (!gl) return;
    const vs = makeShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fs = makeShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vs || !fs) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const time = gl.getUniformLocation(program, "u_time");
    const lookUniform = gl.getUniformLocation(program, "u_look");
    const blinkUniform = gl.getUniformLocation(program, "u_blink");
    const bodyUniform = gl.getUniformLocation(program, "u_body");
    const eyeUniform = gl.getUniformLocation(program, "u_eye");
    const body = hexToRgb(bodyColor);
    const eye = hexToRgb(eyeColor);
    const look = { x: 0, y: .06 };
    const target = { x: 0, y: .06 };
    let frame = 0;
    let visible = true;
    let nextBlink = performance.now() + 2200;
    let blinkStarted = -1;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(host.clientWidth * dpr));
      const height = Math.max(1, Math.floor(host.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };
    const pointerMove = (event: PointerEvent) => {
      if (!interactive) return;
      const rect = host.getBoundingClientRect();
      target.x = Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)));
      target.y = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - event.clientY) / (rect.height / 2)));
    };
    const draw = (now: number) => {
      resize();
      look.x += (target.x - look.x) * .11;
      look.y += (target.y - look.y) * .11;
      if (blink && !reduced.matches && now > nextBlink) {
        blinkStarted = now;
        nextBlink = now + 2600 + Math.random() * 2600;
      }
      const elapsed = blinkStarted < 0 ? 999 : (now - blinkStarted) / 180;
      const blinkValue = elapsed < 1 ? Math.sin(elapsed * Math.PI) : 0;
      gl.clearColor(0,0,0,0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, reduced.matches ? 0 : now / 1000);
      gl.uniform2f(lookUniform, look.x, look.y);
      gl.uniform1f(blinkUniform, blinkValue);
      gl.uniform3f(bodyUniform, body[0], body[1], body[2]);
      gl.uniform3f(eyeUniform, eye[0], eye[1], eye[2]);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      if (visible) frame = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !frame) frame = requestAnimationFrame(draw);
      if (!visible) { cancelAnimationFrame(frame); frame = 0; }
    });
    observer.observe(canvas);
    window.addEventListener("pointermove", pointerMove, { passive: true });
    setReady(true);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", pointerMove);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, [blink, bodyColor, eyeColor, interactive]);

  return <div role="img" aria-label={label} className={cn("live-orb", className)} style={{ width: size, height: size }}>
    {!ready && <div className="live-orb-fallback" aria-hidden="true"><i/><i/></div>}
    <canvas ref={canvasRef} aria-hidden="true" />
  </div>;
}
