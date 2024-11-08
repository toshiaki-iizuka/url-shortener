"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ShortenFormProps {
  handleUrlShortened: () => void;
}

export const ShortenForm = ({ handleUrlShortened }: ShortenFormProps) => {
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      await response.json();
      setUrl("");
      handleUrlShortened();
    } catch (error) {
      console.error("Error shortening URL: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="space-y-4">
        <Input
          type="url"
          value={url}
          className="h-12"
          placeholder="Enter URL to shorten"
          onChange={e => setUrl(e.target.value)}
          required
        />
        <Button type="submit" className="w-full p-2" disabled={isLoading}>
          {isLoading ? "Shortening..." : "Shorten URL"}
        </Button>
      </div>
    </form>
  );
};
