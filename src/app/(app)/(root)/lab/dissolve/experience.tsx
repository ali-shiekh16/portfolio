"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";
import { useMounted } from "@/lib/hooks/use-mounted";
import Demo from "./demo";
import { cn } from "@/lib/utils";

const Experience = () => {
  const hash = process.env.NODE_ENV === "development" ? uuidv4() : undefined;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isHover = useMediaQuery(
    "(any-hover: hover), (hover: hover) and (pointer: fine)"
  );
  const isMobile = useMediaQuery("(max-width: 1199px)");
  const isMounted = useMounted();

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
      <canvas ref={canvasRef} className="responsive__item"></canvas>
      <div
        className={cn("absolute bottom-10 left-1/2 -translate-x-1/2 transform")}
      >
        {isMounted && isHover ? "Press SPACE" : "CLICK"}
      </div>
    </div>
  );
};

export default Experience;
