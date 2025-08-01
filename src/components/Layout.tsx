import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  showNavigation?: boolean;
}

export const Layout = ({ children, className, showNavigation = true }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {showNavigation && (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
          <div className="container-mobile">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold text-primary">Event Concierge</h1>
              </div>
            </div>
          </div>
        </nav>
      )}
      
      <main className={cn("container-mobile py-6", className)}>
        {children}
      </main>
    </div>
  );
};

export default Layout;