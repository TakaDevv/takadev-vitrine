import {
  Boxes,
  Cloud,
  Globe,
  GraduationCap,
  LifeBuoy,
  LineChart,
  PenTool,
  Shield,
  Smartphone,
  Workflow,
} from "lucide-react";

const icons = {
  Boxes,
  Cloud,
  Globe,
  GraduationCap,
  LifeBuoy,
  LineChart,
  PenTool,
  Shield,
  Smartphone,
  Workflow,
};

export default function ServiceIcon({ name, size = 20 }) {
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return <Icon aria-hidden="true" size={size} />;
}
