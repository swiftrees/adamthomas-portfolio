'use client';

import { useMousePosition } from '@/utils/useMousePosition';
import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface MatrixParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function MatrixParticles({
  className = '',
  quantity = 100,
  staticity = 50,
  ease = 50,
  refresh = false,
}: MatrixParticlesProps) {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<any[]>([]);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext('2d');
    }
    initCanvas();
    animate();

    const shouldAddResizeListener = () => window.innerWidth > 1024;

    if (shouldAddResizeListener()) {
      window.addEventListener('resize', initCanvas);
    }

    return () => {
      if (shouldAddResizeListener()) {
        window.removeEventListener('resize', initCanvas);
      }
    };
  }, []);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition.x, mousePosition.y]);

  useEffect(() => {
    initCanvas();
  }, [refresh, pathname]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const onMouseMove = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = mousePosition.x - rect.left - w / 2;
      const y = mousePosition.y - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    }
  };

  type Particle = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    char: string;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
  };

  const resizeCanvas = () => {
    console.log('resizing canvas');
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      particles.current.length = 0;

      const width = window.innerWidth;

      const height = document.body.scrollHeight;
      console.log({ height });
      canvasSize.current.w = width;
      canvasSize.current.h = height;

      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const particleParams = (): Particle => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const char = String.fromCharCode(Math.random() * 128);
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = Math.random() * 0.5;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      char,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const drawParticle = (particle: Particle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, char, alpha } = particle;
      context.current.translate(translateX, translateY);
      context.current.fillStyle = `rgba(0, 255, 0, ${alpha})`;
      context.current.font = '15pt monospace';
      context.current.fillText(char, x, y);
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        particles.current.push(particle);
      }
    }
  };

  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h,
      );
    }
  };

  const drawParticles = () => {
    clearContext();
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const particle = particleParams();
      drawParticle(particle);
    }
  };

  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number,
  ): number => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  const animate = () => {
    clearContext();
    particles.current.forEach((particle: Particle, i: number) => {
      const edge = [
        particle.x + particle.translateX,
        canvasSize.current.w - particle.x - particle.translateX,
        particle.y + particle.translateY,
        canvasSize.current.h - particle.y - particle.translateY,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
      );
      if (remapClosestEdge > 1) {
        particle.alpha += 0.02;
        if (particle.alpha > particle.targetAlpha) {
          particle.alpha = particle.targetAlpha;
        }
      } else {
        particle.alpha = particle.targetAlpha * remapClosestEdge;
      }
      particle.x += particle.dx;
      particle.y += particle.dy;
      particle.translateX +=
        (mouse.current.x / (staticity / particle.magnetism) -
          particle.translateX) /
        ease;
      particle.translateY +=
        (mouse.current.y / (staticity / particle.magnetism) -
          particle.translateY) /
        ease;

      if (particle.y > canvasSize.current.h) {
        particle.y = -20;
      }

      drawParticle(
        {
          ...particle,
          x: particle.x,
          y: particle.y,
          translateX: particle.translateX,
          translateY: particle.translateY,
          alpha: particle.alpha,
        },
        true,
      );
    });
    window.requestAnimationFrame(animate);
  };

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
