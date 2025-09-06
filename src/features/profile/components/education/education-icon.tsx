import type { LucideProps } from "lucide-react";
import {
  AwardIcon,
  FileTextIcon,
  GraduationCapIcon,
  SchoolIcon,
} from "lucide-react";

import type { EducationIcon } from "../../types/education";

const iconMap: Record<EducationIcon, React.ComponentType<LucideProps>> = {
  education: SchoolIcon,
  graduation: GraduationCapIcon,
  certificate: FileTextIcon,
  award: AwardIcon,
};

export function EducationIcon({
  icon,
  ...props
}: {
  icon: EducationIcon | undefined;
} & LucideProps) {
  const IconComponent = icon ? iconMap[icon] : GraduationCapIcon;
  return <IconComponent {...props} />;
}
