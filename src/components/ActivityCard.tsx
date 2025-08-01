import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActivityCardProps {
  activity: {
    id: string;
    title: string;
    time: string;
    duration?: string;
    location?: string;
    category: 'vip' | 'transport' | 'dining' | 'event' | 'accommodation';
    description?: string;
  };
  onClick?: () => void;
}

const categoryConfig = {
  vip: { label: 'VIP', className: 'badge-vip' },
  transport: { label: 'Transport', className: 'badge-transport' },
  dining: { label: 'Dining', className: 'badge-dining' },
  event: { label: 'Event', className: 'badge-event' },
  accommodation: { label: 'Stay', className: 'badge-accommodation' },
};

export const ActivityCard = ({ activity, onClick }: ActivityCardProps) => {
  const categoryInfo = categoryConfig[activity.category];
  
  return (
    <Card className="p-4 shadow-soft hover:shadow-medium transition-smooth cursor-pointer" onClick={onClick}>
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className={cn("text-xs", categoryInfo.className)}>
              {categoryInfo.label}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {activity.time}
            </div>
          </div>
          
          <h3 className="text-base font-semibold text-foreground mb-2 leading-tight">
            {activity.title}
          </h3>
          
          {activity.location && (
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{activity.location}</span>
            </div>
          )}
          
          {activity.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {activity.description}
            </p>
          )}
        </div>
        
        <Button variant="ghost" size="icon" className="ml-2 flex-shrink-0">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

export default ActivityCard;