"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import NewsSection from "@/components/home/NewsSection";
import Link from "next/link";

export default function HomePage() {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <main>
      <Hero />

      {/* CTA khi đã login */}
      {isAuthenticated && (
        <div className="bg-blue-50 py-6 text-center">
          <Link
            href="/dashboard"
            className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Vào Dashboard
          </Link>
        </div>
      )}

      <InfoSection />
      <NewsSection />
    </main>
  );
}
