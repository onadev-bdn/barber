"use client";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ThemeSwitch } from "@/components/theme/theme-switch";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isRootRoute = pathname === "/";

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-transparent dark:bg-[#09090b] flex items-center justify-between">
      {!isRootRoute && (
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Back</span>
        </button>
      )}
      <ThemeSwitch />
    </header>
  );
}
