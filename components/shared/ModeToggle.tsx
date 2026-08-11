"use client";

import { useState, useEffect, startTransition } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  className?: string;
  showLabels?: boolean;
}

export function ModeToggle({ className, showLabels = false }: ModeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Sun className="size-4 text-muted-foreground" />
        <Switch disabled aria-label="Toggle theme mode" />
        <Moon className="size-4 text-muted-foreground" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className={cn("flex items-center gap-2 select-none", className)}>
      <Sun
        className={cn(
          "size-4 transition-colors",
          isDark ? "text-muted-foreground" : "text-amber-500",
        )}
      />
      <Switch
        id="theme-toggle-switch"
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle light and dark mode"
      />
      <Moon
        className={cn(
          "size-4 transition-colors",
          isDark ? "text-indigo-400" : "text-muted-foreground",
        )}
      />
      {showLabels && (
        <span className="text-xs font-medium text-muted-foreground ml-1">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </div>
  );
}
