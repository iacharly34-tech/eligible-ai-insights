import DOMPurify from 'dompurify';
import { z } from 'zod';

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [] 
  }).trim();
};

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'span'],
    ALLOWED_ATTR: ['class']
  });
};

// Form validation schemas
export const contactFormSchema = z.object({
  firstName: z.string()
    .min(1, "Le prénom est requis")
    .max(50, "Prénom trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, "Caractères invalides"),
  lastName: z.string()
    .min(1, "Le nom est requis")
    .max(50, "Nom trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, "Caractères invalides"),
  email: z.string()
    .email("Email invalide")
    .max(255, "Email trop long"),
  company: z.string()
    .min(1, "L'entreprise est requise")
    .max(100, "Nom d'entreprise trop long"),
  sector: z.string()
    .max(100, "Secteur trop long"),
  message: z.string()
    .max(1000, "Message trop long")
    .optional()
});

export const loginFormSchema = z.object({
  email: z.string()
    .email("Email invalide")
    .max(255, "Email trop long"),
  password: z.string()
    .min(8, "Mot de passe trop court")
    .max(128, "Mot de passe trop long")
});

// Rate limiting utility
class RateLimiter {
  private attempts: Map<string, { count: number; resetTime: number }> = new Map();
  
  checkLimit(key: string, maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000): boolean {
    const now = Date.now();
    const entry = this.attempts.get(key);
    
    if (!entry || now > entry.resetTime) {
      this.attempts.set(key, { count: 1, resetTime: now + windowMs });
      return true;
    }
    
    if (entry.count >= maxAttempts) {
      return false;
    }
    
    entry.count++;
    return true;
  }
}

export const rateLimiter = new RateLimiter();

// CSRF token generation (for client-side)
export const generateCSRFToken = (): string => {
  return crypto.getRandomValues(new Uint32Array(4)).join('-');
};

// Secure localStorage operations
export const secureStorage = {
  setItem: (key: string, value: any): void => {
    try {
      const sanitizedValue = typeof value === 'string' ? sanitizeInput(value) : value;
      localStorage.setItem(key, JSON.stringify(sanitizedValue));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  },
  
  getItem: (key: string, fallback: any = null): any => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return fallback;
      
      const parsed = JSON.parse(item);
      return typeof parsed === 'string' ? sanitizeInput(parsed) : parsed;
    } catch (error) {
      console.warn('Failed to read from localStorage:', error);
      return fallback;
    }
  },
  
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  }
};