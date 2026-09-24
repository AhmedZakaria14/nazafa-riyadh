'use client';

import { useEffect } from 'react';
import { trackViewContent } from '@/lib/tiktok';

interface TikTokTrackerProps {
  contentId: string;
  contentType?: string;
  contentName: string;
  value?: number;
  currency?: string;
}

export default function TikTokTracker({
  contentId,
  contentType = 'product',
  contentName,
  value = 0,
  currency = 'SAR',
}: TikTokTrackerProps) {
  useEffect(() => {
    trackViewContent({
      content_id: contentId,
      content_type: contentType,
      content_name: contentName,
      value: value,
      currency: currency,
    });
  }, [contentId, contentType, contentName, value, currency]);

  return null;
}
