import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  InfinityIcon,
} from "lucide-react";
import React from "react";

import { Markdown } from "@/components/markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import type { EducationItem } from "../../types/education";
import { EducationIcon } from "./education-icon";

export function EducationItemComponent({
  education,
}: {
  education: EducationItem;
}) {
  const { start, end } = education.period;
  const isOngoing = !end;

  return (
    <Collapsible defaultOpen={education.isExpanded} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger
          className={cn(
            "group/education block w-full text-left select-none",
            "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-accent/50"
          )}
        >
          <div className="relative z-1 mb-1 flex items-center gap-3">
            <div
              className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15"
              aria-hidden
            >
              <EducationIcon className="size-4" icon={education.icon} />
            </div>

            <div className="flex-1">
              <h4 className="font-medium text-balance">{education.degree}</h4>
              {education.fieldOfStudy && (
                <p className="text-sm text-muted-foreground">
                  {education.fieldOfStudy}
                </p>
              )}
            </div>

            <div
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
              aria-hidden
            >
              <ChevronsDownUpIcon className="hidden group-data-[state=open]/education:block" />
              <ChevronsUpDownIcon className="hidden group-data-[state=closed]/education:block" />
            </div>
          </div>

          <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
            <dl>
              <dt className="sr-only">Institution</dt>
              <dd>{education.institutionName}</dd>
            </dl>

            <Separator
              className="data-[orientation=vertical]:h-4"
              orientation="vertical"
            />

            <dl>
              <dt className="sr-only">Study Period</dt>
              <dd className="flex items-center gap-0.5">
                <span>{start}</span>
                <span className="font-mono">—</span>
                {isOngoing ? (
                  <>
                    <InfinityIcon
                      className="size-4.5 translate-y-[0.5px]"
                      aria-hidden
                    />
                    <span className="sr-only">Present</span>
                  </>
                ) : (
                  <span>{end}</span>
                )}
              </dd>
            </dl>

            {education.grade && (
              <>
                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
                <dl>
                  <dt className="sr-only">Grade</dt>
                  <dd>{education.grade}</dd>
                </dl>
              </>
            )}

            {education.isCurrent && (
              <span className="relative ml-2 flex items-center justify-center">
                <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-info" />
                <span className="sr-only">Current Education</span>
              </span>
            )}
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {education.description && (
            <Prose className="pt-2 pl-9">
              <Markdown>{education.description}</Markdown>
            </Prose>
          )}

          {Array.isArray(education.achievements) &&
            education.achievements.length > 0 && (
              <div className="pt-2 pl-9">
                <h5 className="mb-2 text-sm font-medium text-muted-foreground">
                  Achievements
                </h5>
                <ul className="flex flex-wrap gap-1.5">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="flex">
                      <Tag>{achievement}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
