import React from "react";

import { EDUCATION } from "../../data/education";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { EducationItemComponent } from "./education-item";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="space-y-4 py-4 pr-2 pl-4">
        <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
          {EDUCATION.map((education) => (
            <EducationItemComponent key={education.id} education={education} />
          ))}
        </div>
      </div>
    </Panel>
  );
}
