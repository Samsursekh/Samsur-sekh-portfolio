"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GrowthFunnel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const layers: THREE.Mesh[] = [];
    const layerCount = 4;
    const colors = [0x3b82f6, 0x00c8ff, 0x3b82f6, 0x00c8ff];
    const sizes = [4, 3, 2, 1];

    for (let i = 0; i < layerCount; i++) {
      const geometry = new THREE.CylinderGeometry(
        sizes[i],
        i < layerCount - 1 ? sizes[i + 1] : 0.5,
        1.5,
        32
      );
      const material = new THREE.MeshPhongMaterial({
        color: colors[i],
        transparent: true,
        opacity: 0.6,
        shininess: 100,
        specular: 0xffffff,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = (layerCount / 2 - i) * 2;
      scene.add(mesh);
      layers.push(mesh);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00c8ff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    let raf = 0;
    function animate() {
      raf = requestAnimationFrame(animate);
      layers.forEach((layer, i) => {
        layer.rotation.y += 0.01 * (i + 1);
        layer.position.y += Math.sin(Date.now() * 0.002 + i) * 0.005;
      });
      renderer.render(scene, camera);
    }
    animate();

    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      layers.forEach((l) => {
        l.geometry.dispose();
        (l.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative h-[60vh] rounded-2xl glass-panel noise-bg overflow-hidden border border-t-primary/20">
      <div className="absolute inset-0 w-full h-full opacity-80" ref={containerRef} style={{ width: "100%", height: "100%" }} />

      <div className="absolute inset-0 flex items-end justify-center pb-10 pointer-events-none">
        <div className="flex gap-10 md:gap-20 text-center">
          {["TRAFFIC", "LEADS", "CUSTOMERS", "REVENUE"].map((label) => (
            <span key={label} className="text-[10px] md:text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
