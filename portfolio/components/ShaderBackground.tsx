"use client";

import { useEffect, useRef } from "react";

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas!.clientWidth || 1280;
      const h = canvas!.clientHeight || 720;
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
    }

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    syncSize();

    const gl = canvas.getContext("webgl") || (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    vec2 mouse = u_mouse / u_resolution;

    float noise1 = sin(uv.x * 10.0 + u_time * 0.5) * 0.5 + 0.5;
    float noise2 = cos(uv.y * 8.0 - u_time * 0.3) * 0.5 + 0.5;

    vec3 color1 = vec3(0.02, 0.02, 0.02);
    vec3 color2 = vec3(0.0, 0.78, 1.0);
    vec3 color3 = vec3(0.23, 0.51, 0.96);

    float dist = distance(uv, vec2(0.5) + 0.2 * vec2(sin(u_time * 0.4), cos(u_time * 0.6)));
    float dist2 = distance(uv, mouse);

    float glow = 0.05 / (dist + 0.5);
    float mouseGlow = 0.02 / (dist2 + 0.1);

    vec3 finalColor = mix(color1, color2, glow * noise1);
    finalColor = mix(finalColor, color3, mouseGlow * noise2 * 0.5);

    vec2 grid = fract(uv * 40.0);
    float gridLine = (step(0.98, grid.x) + step(0.98, grid.y)) * 0.05;
    finalColor += gridLine * color2;

    gl_FragColor = vec4(finalColor, 1.0);
}`;

    function compileShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    let raf = 0;
    function render(t: number) {
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) gl!.uniform1f(uTime, t * 0.001);
      if (uRes) gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      if (uMouse) gl!.uniform2f(uMouse, mouse.x, mouse.y);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    }
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 opacity-60"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
