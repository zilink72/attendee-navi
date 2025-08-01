import { useState } from 'react';
import Layout from '@/components/Layout';
import ActivityCard from '@/components/ActivityCard';
import DayDivider from '@/components/DayDivider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { User, Bell, Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Mock data
const mockItinerary = {
  user: {
    firstName: 'John',
    groupName: 'VIP Hospitality',
  },
  days: [
    {
      date: new Date('2024-09-05'),
      activities: [
        {
          id: '1',
          title: 'Airport Pickup',
          time: '09:00',
          duration: '30 mins',
          location: 'Terminal 3 Arrivals',
          category: 'transport' as const,
          description: 'Meet your dedicated driver at the arrivals hall'
        },
        {
          id: '2',
          title: 'Welcome Lunch',
          time: '12:00',
          duration: '2 hours',
          location: 'Executive Lounge',
          category: 'dining' as const,
          description: 'Network with fellow VIP guests and receive your welcome package'
        },
        {
          id: '3',
          title: 'Gala Dinner',
          time: '19:00',
          duration: '3 hours',
          location: 'Grand Ballroom',
          category: 'event' as const,
          description: 'Black-tie evening reception with keynote presentations'
        }
      ]
    },
    {
      date: new Date('2024-09-06'),
      activities: [
        {
          id: '4',
          title: 'Executive Breakfast',
          time: '08:00',
          duration: '1 hour',
          location: 'Sky Lounge',
          category: 'dining' as const,
          description: 'Private breakfast with industry leaders'
        },
        {
          id: '5',
          title: 'F1 Practice Session',
          time: '14:00',
          duration: '3 hours',
          location: 'Monaco Circuit',
          category: 'event' as const,
          description: 'Trackside viewing from the VIP hospitality suite'
        }
      ]
    }
  ]
};

const Itinerary = () => {
  const navigate = useNavigate();
  const [itinerary] = useState(mockItinerary);

  const handleActivityClick = (activityId: string) => {
    navigate(`/activity/${activityId}`);
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-primary">
              Welcome, {itinerary.user.firstName}
            </h1>
            <p className="text-sm text-muted-foreground">Premium Corporate Event</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/notifications">
                <Bell className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/profile">
                <User className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Group Badge */}
        <div className="mb-6">
          <Badge variant="secondary" className="badge-vip text-sm px-3 py-1">
            {itinerary.user.groupName}
          </Badge>
        </div>

        {/* Itinerary Content */}
        <div className="space-y-6">
          {itinerary.days.map((day) => (
            <div key={day.date.toISOString()}>
              <DayDivider date={day.date} />
              
              <div className="space-y-4">
                {day.activities.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    activity={activity}
                    onClick={() => handleActivityClick(activity.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="p-4 mt-8 shadow-soft">
          <h3 className="font-semibold text-primary mb-3">Quick Actions</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Calendar className="w-4 h-4 mr-2" />
              Export Calendar
            </Button>
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Itinerary;