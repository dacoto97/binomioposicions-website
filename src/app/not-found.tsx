import Container from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "No s&apos;ha trobat la pàgina",
};

export default function NotFound() {
  return (
    <Container className="flex max-w-xl py-40 flex-col items-center text-center">
      <p className="font-display text-4xl font-semibold text-gray-950 sm:text-5xl">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-gray-950">No s&apos;ha trobat la pàgina</h1>
      <p className="mt-2 text-sm text-gray-600">Ho sentim, no hem pogut trobar la pàgina que estàs cercant.</p>
      <Link href="/" className="mt-4 text-sm font-semibold text-gray-950 transition hover:text-gray-700">
        Anar a la pàgina d&apos;inici
      </Link>
    </Container>
  );
}
