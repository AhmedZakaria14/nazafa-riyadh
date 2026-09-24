export const TIKTOK_PIXEL_ID = 'DAQOJDBC77U77GG15500';

export interface TikTokContentItem {
  content_id: string;
  content_type?: 'product' | 'product_group' | string;
  content_name?: string;
  content_category?: string;
  price?: number;
  quantity?: number;
}

export interface TikTokStandardEventParams {
  contents?: TikTokContentItem[];
  value?: number;
  currency?: string;
  description?: string;
  search_string?: string;
  status?: string;
  [key: string]: unknown;
}

export interface TikTokUserData {
  email?: string;
  phone_number?: string;
  external_id?: string;
}

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

/**
 * Client-side SHA-256 hashing for TikTok PII data compliance
 */
export async function sha256Hex(value: string): Promise<string> {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return '';
  
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    try {
      const msgBuffer = new TextEncoder().encode(normalized);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch {
      // Fallback
    }
  }
  return normalized;
}

/**
 * Format phone number to E.164 digits without symbols for hashing
 */
export function normalizePhone(phone: string): string {
  let cleaned = phone.replace(/[^0-9]/g, '');
  if (cleaned.startsWith('05')) {
    cleaned = '966' + cleaned.substring(1);
  } else if (cleaned.startsWith('5') && cleaned.length === 9) {
    cleaned = '966' + cleaned;
  }
  return cleaned;
}

/**
 * Identify user with hashed data before sending events where PII is expected
 */
export async function identifyTikTokUser(user: TikTokUserData) {
  if (typeof window === 'undefined' || !window.ttq || typeof window.ttq.identify !== 'function') {
    return;
  }

  const payload: Record<string, string> = {};

  if (user.email) {
    payload.email = await sha256Hex(user.email);
  }

  if (user.phone_number) {
    const cleanedPhone = normalizePhone(user.phone_number);
    payload.phone_number = await sha256Hex(cleanedPhone);
  }

  if (user.external_id) {
    payload.external_id = await sha256Hex(user.external_id);
  }

  try {
    window.ttq.identify(payload);
  } catch {
    // Ignore in production
  }
}

/**
 * Generic event tracking
 */
export const trackTikTokEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track(eventName, params);
    } catch {
      // Ignore in production
    }
  }
};

/**
 * Pageview event
 */
export const trackTikTokPage = () => {
  if (typeof window !== 'undefined' && window.ttq && typeof window.ttq.page === 'function') {
    try {
      window.ttq.page();
    } catch {
      // Ignore in production
    }
  }
};

/**
 * 1. ViewContent
 */
export const trackViewContent = (params: {
  content_id: string;
  content_type?: string;
  content_name: string;
  value?: number;
  currency?: string;
}) => {
  trackTikTokEvent('ViewContent', {
    contents: [
      {
        content_id: params.content_id,
        content_type: params.content_type || 'product',
        content_name: params.content_name,
      },
    ],
    value: params.value ?? 0,
    currency: params.currency || 'SAR',
  });
};

/**
 * 2. AddToWishlist
 */
export const trackAddToWishlist = (params: {
  content_id: string;
  content_type?: string;
  content_name: string;
  value?: number;
  currency?: string;
}) => {
  trackTikTokEvent('AddToWishlist', {
    contents: [
      {
        content_id: params.content_id,
        content_type: params.content_type || 'product',
        content_name: params.content_name,
      },
    ],
    value: params.value ?? 0,
    currency: params.currency || 'SAR',
  });
};

/**
 * 3. Search
 */
export const trackSearch = (params: {
  search_string: string;
  content_id?: string;
  content_name?: string;
  value?: number;
  currency?: string;
}) => {
  trackTikTokEvent('Search', {
    contents: params.content_id
      ? [
          {
            content_id: params.content_id,
            content_type: 'product',
            content_name: params.content_name || params.search_string,
          },
        ]
      : undefined,
    value: params.value ?? 0,
    currency: params.currency || 'SAR',
    search_string: params.search_string,
  });
};

/**
 * 4. AddPaymentInfo
 */
export const trackAddPaymentInfo = (params: {
  content_id: string;
  content_type?: string;
  content_name: string;
  value?: number;
  currency?: string;
}) => {
  trackTikTokEvent('AddPaymentInfo', {
    contents: [
      {
        content_id: params.content_id,
        content_type: params.content_type || 'product',
        content_name: params.content_name,
      },
    ],
    value: params.value ?? 0,
    currency: params.currency || 'SAR',
  });
};

/**
 * 5. AddToCart
 */
export const trackAddToCart = (params: {
  content_id: string;
  content_type?: string;
  content_name: string;
  value?: number;
  currency?: string;
}) => {
  trackTikTokEvent('AddToCart', {
    contents: [
      {
        content_id: params.content_id,
        content_type: params.content_type || 'product',
        content_name: params.content_name,
      },
    ],
    value: params.value ?? 0,
    currency: params.currency || 'SAR',
  });
};

/**
 * 6. InitiateCheckout
 */
export const trackInitiateCheckout = (params: {
  content_id: string;
  content_type?: string;
  content_name: string;
  value?: number;
  currency?: string;
}) => {
  trackTikTokEvent('InitiateCheckout', {
    contents: [
      {
        content_id: params.content_id,
        content_type: params.content_type || 'product',
        content_name: params.content_name,
      },
    ],
    value: params.value ?? 0,
    currency: params.currency || 'SAR',
  });
};

/**
 * 7. PlaceAnOrder
 */
export const trackPlaceAnOrder = (params: {
  content_id: string;
  content_type?: string;
  content_name: string;
  value?: number;
  currency?: string;
}) => {
  trackTikTokEvent('PlaceAnOrder', {
    contents: [
      {
        content_id: params.content_id,
        content_type: params.content_type || 'product',
        content_name: params.content_name,
      },
    ],
    value: params.value ?? 0,
    currency: params.currency || 'SAR',
  });
};

/**
 * 8. CompleteRegistration
 */
export const trackCompleteRegistration = (params?: {
  content_id?: string;
  content_name?: string;
  value?: number;
  currency?: string;
}) => {
  trackTikTokEvent('CompleteRegistration', {
    contents: params?.content_id
      ? [
          {
            content_id: params.content_id,
            content_type: 'product',
            content_name: params.content_name || 'تسجيل عميل جديد',
          },
        ]
      : undefined,
    value: params?.value ?? 0,
    currency: params?.currency || 'SAR',
  });
};

/**
 * 9. Purchase
 */
export const trackPurchase = (params: {
  content_id: string;
  content_type?: string;
  content_name: string;
  value: number;
  currency?: string;
}) => {
  trackTikTokEvent('Purchase', {
    contents: [
      {
        content_id: params.content_id,
        content_type: params.content_type || 'product',
        content_name: params.content_name,
      },
    ],
    value: params.value,
    currency: params.currency || 'SAR',
  });
};
