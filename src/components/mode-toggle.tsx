"use client";

import { Button } from "./ui/button";

import { MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 hidden dark:block dark:text-neutral-200" />
    </Button>
  );
}
