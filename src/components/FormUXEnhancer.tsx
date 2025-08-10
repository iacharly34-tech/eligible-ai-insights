import { useEffect } from 'react';

// Enhances forms for better mobile UX + basic spam protection (honeypot)
export const FormUXEnhancer = () => {
  useEffect(() => {
    const enhance = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        // Honeypot field (once)
        if (!form.querySelector('input[name="website"]')) {
          const honeypot = document.createElement('input');
          honeypot.type = 'text';
          honeypot.name = 'website';
          honeypot.tabIndex = -1;
          honeypot.autocomplete = 'off';
          honeypot.setAttribute('aria-hidden', 'true');
          honeypot.style.position = 'absolute';
          honeypot.style.left = '-10000px';
          form.appendChild(honeypot);
        }

        // Improve inputs
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach((el) => {
          const input = el as HTMLInputElement | HTMLTextAreaElement;
          const id = (input.getAttribute('id') || '').toLowerCase();

          // tap target size via CSS class if using shadcn input
          if (!input.className.includes('h-12')) input.classList.add('h-12');

          if (id.includes('email')) {
            (input as HTMLInputElement).type = 'email';
            input.setAttribute('inputmode', 'email');
            input.setAttribute('autocomplete', 'email');
            input.setAttribute('name', input.getAttribute('name') || 'email');
          } else if (id.includes('first')) {
            input.setAttribute('autocomplete', 'given-name');
            input.setAttribute('name', input.getAttribute('name') || 'givenName');
          } else if (id.includes('last')) {
            input.setAttribute('autocomplete', 'family-name');
            input.setAttribute('name', input.getAttribute('name') || 'familyName');
          } else if (id.includes('company')) {
            input.setAttribute('autocomplete', 'organization');
            input.setAttribute('name', input.getAttribute('name') || 'organization');
          } else if (id.includes('phone') || id.includes('tel')) {
            (input as HTMLInputElement).type = 'tel';
            input.setAttribute('inputmode', 'tel');
            input.setAttribute('autocomplete', 'tel');
            input.setAttribute('name', input.getAttribute('name') || 'phone');
          } else if (input.tagName.toLowerCase() === 'textarea') {
            input.setAttribute('autocomplete', 'off');
          }
        });
      });
    };

    // Run on mount and after a tick for dynamically mounted forms
    const tid = window.setTimeout(enhance, 0);
    enhance();

    return () => window.clearTimeout(tid);
  }, []);

  return null;
};
