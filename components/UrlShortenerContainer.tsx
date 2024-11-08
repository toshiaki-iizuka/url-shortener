"use client";

import { ShortenForm } from "@/components/ShortenForm";
import { UrlList } from "@/components/UrlList";
import { useState } from "react";

export const UrlShortenerContainer = () => {
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const handleUrlShortened = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div>
      <ShortenForm handleUrlShortened={handleUrlShortened} />
      <UrlList key={refreshKey} />
    </div>
  );
};
