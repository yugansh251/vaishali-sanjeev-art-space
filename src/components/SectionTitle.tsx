import { cn } from '@/lib/utils';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}
const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className
}: SectionTitleProps) => {
  return <div className={cn("mb-12", centered && "text-center", className)}>
      
      {subtitle}
    </div>;
};
export default SectionTitle;