import Link from "next/link";
import { DATA } from "@/lib/constants";

export const Navbar = () => {
    return (
        <nav className="mt-4 py-4 px-6 inline-flex self-center gap-6 bg-surfaceground rounded-xl">
            {DATA.menus.map((menu) => (
                <div key={menu.label} className="hover:text-primary transition-colors ease-in-out">
                    <Link href={menu.href}><menu.icon size={20} /></Link>
                </div>
            ))}
        </nav>
    );
};

