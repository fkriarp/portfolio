import Link from "next/link";
import { DATA } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="max-w-2xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground border-t border-border py-6 mt-20">
        <p>© {new Date().getFullYear()} Fidev. All rights reserved.</p>

        <div className="flex items-center gap-4">
          {DATA.menus.map((menu) => (
            <Link
              key={menu.label}
              href={menu.href}
              className="capitalize hover:text-primary transition-colors"
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};