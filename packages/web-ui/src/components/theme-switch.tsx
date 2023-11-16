"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from ".";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "Light" : "Dark"}
      </Button>
    </div>
  );
}
