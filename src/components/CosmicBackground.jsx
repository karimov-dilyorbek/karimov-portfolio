"use client";

import { useEffect, useRef } from "react";

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let streaks = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, document.body.scrollHeight);

      streaks = Array.from({ length: 140 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 180 + 40,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.45 + 0.08,
        width: Math.random() * 1.2 + 0.3,
      }));
    };

    const drawBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#020b1d";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawStreak = (streak) => {
      const gradient = ctx.createLinearGradient(streak.x, streak.y, streak.x, streak.y + streak.length);

      gradient.addColorStop(0, "rgba(96, 165, 250, 0)");
      gradient.addColorStop(0.65, `rgba(96, 165, 250, ${streak.opacity * 0.35})`);
      gradient.addColorStop(1, `rgba(191, 219, 254, ${streak.opacity})`);

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = streak.width;
      ctx.moveTo(streak.x, streak.y);
      ctx.lineTo(streak.x, streak.y + streak.length);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = `rgba(219, 234, 254, ${Math.min(streak.opacity + 0.15, 1)})`;
      ctx.arc(streak.x, streak.y + streak.length, streak.width * 1.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      canvas.height = Math.max(window.innerHeight, document.body.scrollHeight);
      drawBackground();

      streaks.forEach((streak) => {
        streak.y += streak.speed;

        if (streak.y > canvas.height) {
          streak.y = -streak.length - Math.random() * 200;
          streak.x = Math.random() * canvas.width;
          streak.length = Math.random() * 180 + 40;
          streak.speed = Math.random() * 3 + 1;
          streak.opacity = Math.random() * 0.45 + 0.08;
          streak.width = Math.random() * 1.2 + 0.3;
        }

        drawStreak(streak);
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
