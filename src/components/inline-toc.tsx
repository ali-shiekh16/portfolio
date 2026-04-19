"use client";

import type { TOCItemType } from "fumadocs-core/server";
import { ChevronsDownUpIcon, ChevronsUpDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

export function InlineTOC({
  items,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible> & {
  items: TOCItemType[];
}) {
  const itemIds = items.map((item) => item.url.split("#")[1]).filter(Boolean);
  const activeId = useActiveItem(itemIds);

  if (!items.length) {
    return null;
  }

  return (
    <Collapsible
      className={cn("not-prose rounded-lg bg-code font-sans", className)}
      {...props}
    >
      <CollapsibleTrigger className="group/toc inline-flex w-full items-center justify-between p-3 pl-4 text-sm font-medium">
        {children ?? "Table of Contents"}
        <div
          className="shrink-0 text-muted-foreground [&_svg]:size-4"
          aria-hidden
        >
          <ChevronsDownUpIcon className="hidden group-data-[state=open]/toc:block" />
          <ChevronsUpDownIcon className="hidden group-data-[state=closed]/toc:block" />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <ul className="flex flex-col px-4 pb-3 text-sm text-muted-foreground">
          {items.map((item) => {
            const isActive = activeId === item.url.split("#")[1];
            return (
              <li
                key={item.url}
                className="flex py-1"
                style={{
                  paddingInlineStart: 16 * Math.max(item.depth - 2, 0),
                }}
              >
                <a
                  className={cn(
                    "underline-offset-4 transition-colors hover:text-accent-foreground hover:underline",
                    isActive ? "text-foreground font-medium" : ""
                  )}
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
