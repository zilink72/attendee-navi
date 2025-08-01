import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Clock, ArrowLeft } from 'lucide-react';

const MagicLinkSent = () => {
  const location = useLocation();
  const email = location.state?.email || 'your email';
  const [isResending, setIsResending] = useState(false);
  const [resent, setResent] = useState(false);

  const handleResend = () => {
    setIsResending(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      setResent(true);
      
      // Reset resent state after 3 seconds
      setTimeout(() => setResent(false), 3000);
    }, 1000);
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto text-center">
        <Card className="p-8 shadow-medium">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-2xl font-bold text-primary mb-4">
            Check Your Email
          </h1>
          
          <p className="text-muted-foreground mb-2">
            We've sent a magic link to:
          </p>
          <p className="font-medium text-foreground mb-6">
            {email}
          </p>
          
          <div className="bg-secondary rounded-lg p-4 mb-6">
            <p className="text-sm text-secondary-foreground">
              Click the link in the email to access your itinerary
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Clock className="w-4 h-4" />
            <span>Link expires in 24 hours</span>
          </div>
          
          <div className="space-y-4">
            <Button
              variant="outline"
              onClick={handleResend}
              disabled={isResending || resent}
              size="mobile"
            >
              {isResending ? 'Sending...' : resent ? 'Link Sent!' : "Didn't receive? Resend"}
            </Button>
            
            <div className="text-center">
              <Link 
                to="/login" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Login
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default MagicLinkSent;