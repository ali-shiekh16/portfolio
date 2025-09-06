export type EducationIcon =
  /** Icon key used to render the education type in the UI. */
  "education" | "graduation" | "certificate" | "award";

export type EducationItem = {
  id: string;
  institutionName: string;
  /** URL to the institution logo (absolute URL or path under /public). */
  institutionLogo?: string;
  degree: string;
  fieldOfStudy?: string;
  /**
   * Study period.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for ongoing studies.
   */
  period: {
    /** Start date (e.g., "08.2018" or "2020"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Grade/GPA information. */
  grade?: string;
  description?: string;
  /** UI icon to represent the education type. */
  icon?: EducationIcon;
  achievements?: string[];
  /** Whether the education item is expanded by default in the UI. */
  isExpanded?: boolean;
  /** Marks as current education for highlighting. */
  isCurrent?: boolean;
};

export type Education = EducationItem[];
