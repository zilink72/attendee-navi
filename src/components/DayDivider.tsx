import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface DayDividerProps {
  date: Date;
  className?: string;
}

export const DayDivider = ({ date, className }: DayDividerProps) => {
  return (
    <div className={cn("flex items-center my-6", className)}>
      <div className="flex-1 h-px bg-border"></div>
      <div className="px-4">
        <h2 className="text-lg font-semibold text-primary bg-background">
          {format(date, 'EEEE, MMMM d')}
        </h2>
      </div>
      <div className="flex-1 h-px bg-border"></div>
    </div>
  );
};

export default DayDivider;