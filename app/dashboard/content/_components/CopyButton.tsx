// app/components/CopyButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button variant="ghost" className="text-primary" onClick={handleClick}>
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}
