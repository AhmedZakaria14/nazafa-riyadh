export const TIKTOK_PIXEL_ID = 'DAQOJDBC77U77GG15500';

declare global {
  interface Window {
    ttq?: {
      page: () => void;
      track: (event: string, params?: Record<string, unknown>) => void;
      identify: (params?: Record<string, unknown>) => void;
      [key: string]: unknown;
    };
  }
}

export const trackTikTokEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track(eventName, params);
    } catch (e) {
      // Ignore in production
    }
  }
};

export const trackTikTokPage = () => {
  if (typeof window !== 'undefined' && window.ttq && typeof window.ttq.page === 'function') {
    try {
      window.ttq.page();
    } catch (e) {
      // Ignore in production
    }
  }
};
