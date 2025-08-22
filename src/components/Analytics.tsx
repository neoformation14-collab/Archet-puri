import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    // Google Analytics placeholder - replace with actual GA tracking ID when deploying
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'Archet Puri - Cinematographer',
        page_location: window.location.href
      });
    }
  }, []);

  return null;
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}