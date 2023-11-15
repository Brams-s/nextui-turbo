"use client";

import type { NextUIProviderProps } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";

interface AppUIProviderProps extends NextUIProviderProps {
  children: React.ReactNode;
}

export function AppUIProvider({ navigate, children }: AppUIProviderProps) {
  return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
}
