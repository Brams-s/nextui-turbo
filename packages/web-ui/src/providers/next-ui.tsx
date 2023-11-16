"use client";

import { NextUIProvider } from "@nextui-org/react";
import type { NextUIProviderProps } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface AppUIProviderProps extends NextUIProviderProps {
  children: React.ReactNode;
}

export function AppUIProvider({ navigate, children }: AppUIProviderProps) {
  return (
    <NextUIProvider navigate={navigate}>
      <NextThemesProvider>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
