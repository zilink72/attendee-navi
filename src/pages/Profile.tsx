import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, Plane, Hotel, Utensils, ArrowLeft, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock user data
const mockUser = {
  firstName: 'John',
  lastName: 'Smith',
  email: 'john.smith@email.com',
  phone: '+1 (555) 123-4567',
  guestType: 'VIP',
  travel: {
    airline: 'Emirates',
    flightNumber: 'EK123',
    arrivalDate: '2024-09-05',
    arrivalTime: '08:30',
    departureDate: '2024-09-07',
    departureTime: '22:15',
    arrivalAirport: 'Monaco Airport',
    departureAirport: 'Monaco Airport'
  },
  accommodation: {
    required: true,
    hotelName: 'Hotel Hermitage Monte-Carlo',
    checkIn: '2024-09-05',
    checkOut: '2024-09-07',
    specialRequests: 'Ocean view room preferred'
  },
  requirements: {
    dietary: 'Vegetarian, no nuts',
    medical: 'None',
    accessibility: 'None'
  },
  preferences: {
    email: true,
    whatsapp: true
  }
};

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState(mockUser);

  const handlePreferenceChange = (type: 'email' | 'whatsapp', value: boolean) => {
    setUser(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [type]: value
      }
    }));
  };

  const handleSavePreferences = () => {
    // Mock save preferences
    toast({
      title: "Preferences Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const handleLogout = () => {
    // Mock logout
    navigate('/login');
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto">
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
          <h1 className="text-xl font-semibold text-primary">
            Profile & Settings
          </h1>
        </div>

        <div className="space-y-6">
          {/* Personal Information */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Personal Information</h2>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Name</span>
                <span className="text-sm text-foreground">{user.firstName} {user.lastName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Email</span>
                <span className="text-sm text-foreground">{user.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Phone</span>
                <span className="text-sm text-foreground">{user.phone}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Guest Type</span>
                <Badge variant="secondary" className="badge-vip">
                  {user.guestType}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Travel Information */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Plane className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Travel Information</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Arrival</h3>
                <div className="space-y-1">
                  <p className="text-sm text-foreground">{user.travel.airline} {user.travel.flightNumber}</p>
                  <p className="text-sm text-muted-foreground">
                    {user.travel.arrivalDate} at {user.travel.arrivalTime}
                  </p>
                  <p className="text-sm text-muted-foreground">{user.travel.arrivalAirport}</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Departure</h3>
                <div className="space-y-1">
                  <p className="text-sm text-foreground">{user.travel.airline} {user.travel.flightNumber}</p>
                  <p className="text-sm text-muted-foreground">
                    {user.travel.departureDate} at {user.travel.departureTime}
                  </p>
                  <p className="text-sm text-muted-foreground">{user.travel.departureAirport}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Accommodation */}
          {user.accommodation.required && (
            <Card className="p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Hotel className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Accommodation</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Hotel</span>
                  <span className="text-sm text-foreground">{user.accommodation.hotelName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Check-in</span>
                  <span className="text-sm text-foreground">{user.accommodation.checkIn}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Check-out</span>
                  <span className="text-sm text-foreground">{user.accommodation.checkOut}</span>
                </div>
                {user.accommodation.specialRequests && (
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Special Requests</span>
                    <p className="text-sm text-foreground mt-1">{user.accommodation.specialRequests}</p>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Requirements */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <Utensils className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Requirements</h2>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Dietary</span>
                <p className="text-sm text-foreground mt-1">
                  {user.requirements.dietary || 'None specified'}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Medical</span>
                <p className="text-sm text-foreground mt-1">
                  {user.requirements.medical || 'None specified'}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Accessibility</span>
                <p className="text-sm text-foreground mt-1">
                  {user.requirements.accessibility || 'None specified'}
                </p>
              </div>
            </div>
          </Card>

          {/* Communication Preferences */}
          <Card className="p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Notification Preferences
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Email Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch
                  checked={user.preferences.email}
                  onCheckedChange={(checked) => handlePreferenceChange('email', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive updates via WhatsApp</p>
                </div>
                <Switch
                  checked={user.preferences.whatsapp}
                  onCheckedChange={(checked) => handlePreferenceChange('whatsapp', checked)}
                />
              </div>
            </div>
            
            <Button 
              onClick={handleSavePreferences}
              className="w-full mt-6"
              variant="premium"
            >
              Save Preferences
            </Button>
          </Card>

          {/* Logout */}
          <Card className="p-6 shadow-soft">
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;