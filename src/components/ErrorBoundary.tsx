import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  retryCount: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, retryCount: 0 };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, retryCount: 0 };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Log to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would send to your monitoring service
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, _errorInfo: any) => {
    // Privacy-preserving error reporting
    try {
      const sanitizedUrl = `${window.location.origin}${window.location.pathname}`;
      const payload = {
        message: String(error?.message || 'Unknown error'),
        timestamp: new Date().toISOString(),
        url: sanitizedUrl,
      };

      const data = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('/api/errors', data);
      } else {
        fetch('/api/errors', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' },
          keepalive: true,
        }).catch(() => {/* noop */});
      }
    } catch {
      // Silently ignore reporting failures
    }
  };

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      retryCount: prevState.retryCount + 1
    }));
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="w-12 h-12 text-destructive" />
              </div>
              <CardTitle className="text-xl">Une erreur est survenue</CardTitle>
              <CardDescription>
                Nous nous excusons pour ce désagrément. Notre équipe a été notifiée.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                <strong>Détails techniques :</strong><br />
                {this.state.error?.message || 'Erreur inconnue'}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={this.handleRetry}
                  className="flex-1"
                  variant="outline"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Réessayer
                </Button>
                <Button 
                  onClick={this.handleReload}
                  className="flex-1"
                >
                  Recharger la page
                </Button>
              </div>
              
              <div className="text-xs text-center text-muted-foreground">
                Si le problème persiste, contactez notre support à{' '}
                <a href="mailto:support@eligibly.ai" className="text-primary hover:underline">
                  support@eligibly.ai
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}