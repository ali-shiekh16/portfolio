"use client";

import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Demo from "./demo";

const Experience = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hash = process.env.NODE_ENV === "development" ? uuidv4() : undefined;

  useEffect(() => {
    if (canvasRef.current) {
      const demo = new Demo(canvasRef.current!);

      return () => {
        demo.destroy();
      };
    }
  }, [hash]);

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full"></canvas>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-2xl">
        CLICK
      </div>
    </div>
  );
};

export default Experience;
