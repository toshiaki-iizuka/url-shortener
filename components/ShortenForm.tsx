"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ShortenForm = () => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      await response.json();
      setUrl("");
    } catch (error) {
      console.error("Error shortening URL: ", error);
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
        <Button type="submit" className="w-full p-2">
          Shorten URL
        </Button>
      </div>
    </form>
  );
};
