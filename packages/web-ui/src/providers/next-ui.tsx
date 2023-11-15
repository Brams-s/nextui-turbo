"use client";

import type { NextUIProviderProps } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";

interface AppUIProviderProps extends NextUIProviderProps {
  children: React.ReactNode;
}

export function AppUIProvider({ children }: AppUIProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
