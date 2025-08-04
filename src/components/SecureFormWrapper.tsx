import React from 'react';
import { SecurityErrorBoundary } from './SecurityErrorBoundary';

interface SecureFormWrapperProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}

export const SecureFormWrapper: React.FC<SecureFormWrapperProps> = ({ 
  children, 
  onSubmit, 
  className 
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic security checks
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Check for suspicious patterns
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string' && value.length > 10000) {
        console.warn('Suspicious form input detected:', key);
        return;
      }
    }
    
    onSubmit?.(e);
  };

  return (
    <SecurityErrorBoundary>
      <form onSubmit={handleSubmit} className={className}>
        {children}
      </form>
    </SecurityErrorBoundary>
  );
};