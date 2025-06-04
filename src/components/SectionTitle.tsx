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
      <h2 className="text-3xl font-sans font-bold text-gray-900 mb-4 md:text-4xl">
        {title}
      </h2>
      {subtitle}
    </div>;
};
export default SectionTitle;