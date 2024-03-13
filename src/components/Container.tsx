import type React from "react";
import { clsx } from "clsx";

export default function Container({ children, className }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={clsx("container mx-auto px-6 py-2.5 sm:px-3.5", className)}>{children}</div>;
}
