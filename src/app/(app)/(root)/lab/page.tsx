"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const items: { src: string; href: string; title: string }[] = [
  { src: "/images/lab/1.jpeg", href: "/lab/black-hole", title: "Blackhole" },
  { src: "/images/lab/2.jpeg", href: "/lab/dissolve", title: "Dissolve" },
  {
    src: "/images/lab/3.jpeg",
    href: "/lab/particles-morphing",
    title: "Particles Morphing",
  },
];

const Page = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + items.length) % items.length),
    []
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, next, prev, close]);

  return (
    <div className="mx-auto my-8 prose max-w-5xl px-4">
      <h1 className="mb-4 text-4xl font-semibold text-foreground">Lab</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, i) => (
          <Link
            key={item.src}
            href={item.href}
            className={cn(
              "group relative overflow-hidden rounded-lg border border-dashed border-edge bg-zinc-950/0.5 hover:shadow-lg focus:outline-none",
              "aspect-[4/3]"
            )}
            aria-label={`Open ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 flex items-end p-3">
              <div className="rounded-md bg-black/70 px-2 py-1 text-sm text-white backdrop-blur">
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="relative bg-black/80">
            <button
              onClick={prev}
              className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-background/60 p-2"
              aria-label="Previous"
            >
              ◀
            </button>

            <div className="relative flex h-[70vh] w-full items-center justify-center">
              <Image
                src={items[index].src}
                alt={`Image ${index + 1}`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <button
              onClick={next}
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-background/60 p-2"
              aria-label="Next"
            >
              ▶
            </button>

            <div className="absolute top-3 right-3">
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
