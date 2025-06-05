
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
  return (
    <div className={cn(
      "mb-8",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
