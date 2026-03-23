// SideNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FileText, 
  ShieldCheck, 
  UserMinus, 
  ArrowsLeftRight, 
  Users, 
  Gavel, 
  CloudArrowDown, 
  Wallet, 
  WarningCircle, 
  HandPointing, 
  Copyright,
  Scales
} from "@phosphor-icons/react";
import { clsx } from "clsx";

const navItems = [
  { name: "Privacy Policy", href: "/privacy", icon: ShieldCheck },
  { name: "Terms of Service", href: "/terms", icon: FileText },
  { name: "EULA", href: "/eula", icon: CloudArrowDown },
  { name: "Account Deletion", href: "/account-deletion", icon: UserMinus },
  { name: "Cancellation & Refund", href: "/refund", icon: ArrowsLeftRight },
  { name: "Community Guidelines", href: "/community", icon: Users },
  { name: "Dispute Resolution", href: "/dispute", icon: Gavel },
  { name: "SLA & Infractions", href: "/infractions", icon: Scales },
  { name: "Payments & Wallet", href: "/wallet", icon: Wallet },
  { name: "Safety Disclaimer", href: "/safety", icon: WarningCircle },
  { name: "Acceptable Use", href: "/acceptable-use", icon: HandPointing },
  { name: "Intellectual Property", href: "/ip", icon: Copyright },
];

export default function SideNav({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="w-full md:w-80 h-full p-4 md:p-0 md:sticky md:top-8 md:pr-4 md:border-r border-border scrollbar-hide">
      <div className="mb-10 px-4 md:px-0">
        <Link href="/" className="inline-block" onClick={onItemClick}>
            <h2 className="text-2xl font-bold text-navy">BeeSeek <span className="text-accent">Legal</span></h2>
        </Link>
        <p className="text-sm text-grey mt-2">Official Policy Documentation</p>
      </div>

      <div className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={clsx(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
              pathname === item.href 
                ? "bg-navy text-white shadow-lg shadow-navy/20" 
                : "text-grey hover:bg-neutral hover:text-navy"
            )}
          >
            <item.icon size={20} weight={pathname === item.href ? "fill" : "regular"} className={clsx(
                pathname === item.href ? "text-accent-light" : "text-grey group-hover:text-navy"
            )} />
            <span className="font-medium text-[15px]">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="mt-12 px-5 py-6 bg-navy-dark rounded-2xl text-white">
        <p className="text-[10px] text-navy-light uppercase tracking-widest font-black mb-2">Need Support?</p>
        <p className="text-sm text-white/70 mb-5 leading-relaxed font-medium">Have questions regarding our legal standing or data practices?</p>
        <a 
            href="mailto:support@beeseek.site" 
            className="text-white text-sm font-bold flex items-center gap-2 hover:text-accent transition-colors underline decoration-accent/30 underline-offset-4"
        >
            support@beeseek.site
        </a>
      </div>
    </nav>
  );
}
