"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ShortenForm = () => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(url);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="space-y-4">
        <Input
          type="url"
          value={url}
          className="h-12"
          placeholder="Enter URL to shorten"
          onChange={e => setUrl(e.target.value)}
          required
        />
        <Button type="submit" className="w-full p-2">
          Shorten URL
        </Button>
      </div>
    </form>
  );
};
