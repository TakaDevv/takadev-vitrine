import {
  Boxes,
  Cloud,
  Code,
  Globe,
  GraduationCap,
  LifeBuoy,
  LineChart,
  PenTool,
  Shield,
  Smartphone,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

const icons = {
  Boxes,
  Cloud,
  Code,
  Globe,
  GraduationCap,
  LifeBuoy,
  LineChart,
  PenTool,
  Shield,
  Server,
  Smartphone,
  Sparkles,
  Workflow,
};

export default function ServiceIcon({ name, size = 20, className }) {
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return <Icon aria-hidden="true" size={size} strokeWidth={1.6} className={className} />;
}
