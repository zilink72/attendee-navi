import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { TextField } from '@/components/FormField';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMagicLink = async () => {
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login/magic-link-sent', { state: { email } });
    }, 1000);
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-2xl font-bold text-primary mb-2">
            Access Your Itinerary
          </h1>
          <p className="text-muted-foreground">
            Enter your email to receive a secure access link
          </p>
        </div>

        <Card className="p-6 shadow-medium">
          <div className="space-y-6">
            <TextField
              label="Email Address"
              required
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="Enter your registered email"
            />
            
            <Button
              variant="default"
              size="mobile"
              onClick={handleSendMagicLink}
              disabled={!email || isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Magic Link'}
            </Button>
            
            <div className="text-center text-sm">
              <p className="text-muted-foreground mb-2">
                Don't have an itinerary yet?
              </p>
              <Link 
                to="/register" 
                className="text-primary hover:underline font-medium"
              >
                Register here
              </Link>
            </div>
          </div>
        </Card>
        
        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;