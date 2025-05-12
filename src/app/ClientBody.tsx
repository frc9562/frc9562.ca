"use client";

import { useEffect } from "react";
import { Toaster } from "sonner";

export function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="antialiased">
      <Toaster richColors position="top-right" />
      {children}
    </div>
  );
}
