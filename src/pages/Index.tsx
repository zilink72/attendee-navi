import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CalendarDays, Users, MapPin, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import eventLogo from '@/assets/event-logo.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 container-mobile pt-8 pb-16">
          <div className="text-center">
            <img 
              src={eventLogo}
              alt="Event Logo"
              className="w-32 h-18 mx-auto mb-6 rounded-lg shadow-elevated object-cover"
            />
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Premium Corporate Event
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Your personalized event experience awaits. Register now to receive your curated itinerary.
            </p>
            
            <div className="space-y-4">
              <Button asChild variant="hero" size="mobile">
                <Link to="/register">Register Now</Link>
              </Button>
              
              <div className="text-center">
                <Link 
                  to="/login" 
                  className="text-white/90 hover:text-white underline-offset-4 hover:underline transition-smooth"
                >
                  Already Registered? View Itinerary
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-16 bg-card-gradient">
        <div className="container-mobile">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Event Highlights</h2>
            <p className="text-muted-foreground">Experience excellence in every detail</p>
          </div>
          
          <div className="grid gap-6">
            <Card className="p-6 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <CalendarDays className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Personalized Itinerary</h3>
                  <p className="text-sm text-muted-foreground">Custom schedule tailored to your guest type and preferences</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-6 h-6 text-accent-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">VIP Hospitality</h3>
                  <p className="text-sm text-muted-foreground">Premium services and exclusive access throughout your visit</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-success/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Seamless Coordination</h3>
                  <p className="text-sm text-muted-foreground">All logistics handled from arrival to departure</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-info/10 rounded-lg">
                  <Clock className="w-6 h-6 text-info" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Real-time Updates</h3>
                  <p className="text-sm text-muted-foreground">Stay informed with instant notifications and schedule changes</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="py-8 bg-secondary">
        <div className="container-mobile">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/faq" className="text-muted-foreground hover:text-primary transition-smooth">
              FAQ
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
              Contact
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2024 Event Concierge Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
