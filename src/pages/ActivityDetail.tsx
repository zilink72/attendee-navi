import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, MapPin, Clock, Calendar, ExternalLink } from 'lucide-react';

// Mock activity data
const mockActivity = {
  id: '1',
  title: 'Welcome Lunch',
  date: '2024-09-05',
  time: '12:00',
  duration: '2 hours',
  location: 'Executive Lounge, Grand Hotel',
  category: 'dining' as const,
  heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
  description: `
    <div class="space-y-4">
      <p>Join us for an exclusive welcome lunch in our sophisticated Executive Lounge. This elegant gathering will set the tone for your premium event experience.</p>
      
      <h3 class="font-semibold text-lg">What to Expect</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Curated gourmet menu by our award-winning chef</li>
        <li>Networking opportunities with fellow VIP guests</li>
        <li>Welcome package presentation</li>
        <li>Event briefing and schedule overview</li>
      </ul>

      <h3 class="font-semibold text-lg">Dress Code</h3>
      <p>Smart casual attire recommended</p>

      <div class="bg-secondary/20 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Special Dietary Requirements</h4>
        <p class="text-sm text-muted-foreground">Please inform our team of any dietary restrictions. Our chef can accommodate most requirements with advance notice.</p>
      </div>
    </div>
  `
};

const categoryConfig = {
  vip: { label: 'VIP', className: 'badge-vip' },
  transport: { label: 'Transport', className: 'badge-transport' },
  dining: { label: 'Dining', className: 'badge-dining' },
  event: { label: 'Event', className: 'badge-event' },
  accommodation: { label: 'Stay', className: 'badge-accommodation' },
};

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity] = useState(mockActivity);

  const categoryInfo = categoryConfig[activity.category];

  const handleAddToCalendar = () => {
    // Mock calendar integration
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(activity.title)}&dates=${activity.date.replace(/-/g, '')}T${activity.time.replace(':', '')}00/${activity.date.replace(/-/g, '')}T${activity.time.replace(':', '')}00&details=${encodeURIComponent(activity.title)}&location=${encodeURIComponent(activity.location)}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <Layout showNavigation={false}>
      <div className="max-w-lg mx-auto pb-20">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/itinerary')}
            className="flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary truncate">
            Activity Details
          </h1>
        </div>

        {/* Hero Image */}
        {activity.heroImage && (
          <div className="mb-6">
            <img 
              src={activity.heroImage} 
              alt={activity.title}
              className="w-full h-48 object-cover rounded-xl shadow-soft"
            />
          </div>
        )}

        {/* Activity Info */}
        <Card className="p-6 mb-6 shadow-soft">
          <div className="space-y-4">
            {/* Title and Badge */}
            <div className="space-y-3">
              <Badge variant="secondary" className={categoryInfo.className}>
                {categoryInfo.label}
              </Badge>
              <h2 className="text-2xl font-bold text-foreground">
                {activity.title}
              </h2>
            </div>

            {/* Time and Duration */}
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">September 5, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{activity.time} ({activity.duration})</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2 flex-1">
                <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{activity.location}</span>
              </div>
              <Button variant="outline" size="sm" className="ml-4">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Map
              </Button>
            </div>
          </div>
        </Card>

        {/* Content */}
        <Card className="p-6 shadow-soft">
          <div 
            className="prose prose-sm max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: activity.description }}
          />
        </Card>

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-4">
          <div className="max-w-lg mx-auto">
            <Button 
              onClick={handleAddToCalendar}
              className="w-full"
              variant="premium"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Add to Calendar
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivityDetail;