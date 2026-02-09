"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GitHubGraph() {
  return (
    <div className="mx-4">
      <GitHubCalendar 
        username="ali-shiekh16"
        labels={{
          totalCount: '{{count}} contributions in the last year',
        }}
      />
    </div>
  );
}