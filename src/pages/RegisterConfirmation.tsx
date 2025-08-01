import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegisterConfirmation = () => {
  return (
    <Layout>
      <div className="max-w-lg mx-auto text-center">
        <Card className="p-8 shadow-elevated">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-success" />
          </div>
          
          <h1 className="text-2xl font-bold text-primary mb-4">
            Registration Complete!
          </h1>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Thank you <strong>John</strong>. Your registration has been confirmed.
          </p>
          
          <div className="bg-secondary rounded-lg p-4 mb-6">
            <p className="text-sm text-secondary-foreground">
              You'll receive updates via <strong>Email</strong> and <strong>WhatsApp</strong> once your personalized itinerary is ready.
            </p>
          </div>
          
          <div className="space-y-4 text-sm text-muted-foreground mb-8">
            <div className="flex justify-between">
              <span>Event:</span>
              <span className="font-medium">Premium Corporate Event</span>
            </div>
            <div className="flex justify-between">
              <span>Guest Type:</span>
              <span className="font-medium">VIP</span>
            </div>
            <div className="flex justify-between">
              <span>Email:</span>
              <span className="font-medium">john@example.com</span>
            </div>
          </div>
          
          <Button asChild variant="default" size="mobile">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
          </Button>
        </Card>
      </div>
    </Layout>
  );
};

export default RegisterConfirmation;