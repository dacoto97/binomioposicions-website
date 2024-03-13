import type React from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-full flex-col">
      <main className="h-full w-full">{children}</main>
    </div>
  );
}
