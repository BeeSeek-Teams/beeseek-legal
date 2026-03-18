"use client";

import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import { 
  ShieldCheck, 
  Handshake, 
  RocketLaunch, 
  LockKey, 
  Hammer, 
  Scroll
} from "@phosphor-icons/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const cards = [
    { title: "Privacy Policy", icon: ShieldCheck, href: "/privacy", text: "How we collect, use, and protect your data." },
    { title: "Terms of Service", icon: Handshake, href: "/terms", text: "Rules governing usage of BeeSeek." },
    { title: "EULA", icon: RocketLaunch, href: "/eula", text: "End User License Agreement for our apps." },
    { title: "Dispute Resolution", icon: Hammer, href: "/dispute", text: "How we handle conflict between users." },
    { title: "Security Protocols", icon: LockKey, href: "/safety", text: "Our commitment to user safety." },
    { title: "All Policies", icon: Scroll, href: "/privacy", text: "Explore the full directory of legal documents." },
  ];

  return (
    <div className="flex bg-surface min-h-screen">
      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-0 md:py-16">
        {/* Mobile Header */}
        <MobileNav />

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 px-4 md:px-0">
          <div className="hidden md:block">
            <SideNav />
          </div>

          <main className="flex-1 py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-8">
                Official <span className="text-accent underline decoration-4 decoration-accent/30">Legal</span> Resources
              </h1>
              <p className="text-lg md:text-xl text-navy opacity-70 mb-12 max-w-2xl leading-relaxed font-medium">
                Trust is at the core of BeeSeek. Our legal frameworks are 
                designed to protect both Clients and Agents in Nigeria's service economy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                  <Link 
                    key={idx} 
                    href={card.href}
                    className="group flex flex-col p-8 bg-white rounded-3xl border border-border/50 hover:border-accent/40 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-neutral rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                      <card.icon size={28} weight="duotone" className="text-navy group-hover:text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">{card.title}</h3>
                    <p className="text-grey text-sm mb-6 leading-relaxed flex-1">{card.text}</p>
                    <div className="text-navy font-bold text-sm flex items-center gap-2 group-hover:text-accent transition-colors">
                        View Document <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
