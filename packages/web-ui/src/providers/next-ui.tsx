"use client";

import { NextUIProvider } from "@nextui-org/react";

export function AppUIProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
