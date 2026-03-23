// PolicyLayout.tsx
"use client";

import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import { motion } from "framer-motion";
import { Clock, ShareNetwork, Printer } from "@phosphor-icons/react";

interface PolicyLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
  version: string;
}

export default function PolicyLayout({ children, title, lastUpdated, version }: PolicyLayoutProps) {
  return (
    <div className="flex bg-background min-h-screen">
      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-0 md:py-16">
        {/* Mobile Header */}
        <MobileNav />

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 px-4 md:px-0 mt-8 md:mt-0">
          <div className="hidden md:block">
            <SideNav />
          </div>

          <main className="flex-1 pb-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 shadow-sm border border-black/[0.04]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-12 border-b border-black/[0.04]">
                <div>
                  <h1 className="text-3xl md:text-4xl font-black text-navy mb-4 tracking-tight">
                    {title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-[13px] text-black/40 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} weight="bold" className="text-accent" />
                      <span>Last Updated: {lastUpdated}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-black/10" />
                    <div className="bg-black/[0.03] px-3 py-1 rounded-full text-black/50 text-[11px] font-bold uppercase tracking-wider">
                        v{version}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => window.print()}
                        className="p-2.5 rounded-xl bg-black/[0.03] text-black/40 hover:bg-navy hover:text-white transition-all"
                        title="Print Policy"
                    >
                        <Printer size={20} weight="bold" />
                    </button>
                    <button 
                        onClick={() => {
                            navigator.share?.({
                                title: `BeeSeek ${title}`,
                                url: window.location.href
                            }).catch(() => {});
                        }}
                        className="p-2.5 rounded-xl bg-black/[0.03] text-black/40 hover:bg-navy hover:text-white transition-all"
                        title="Share Policy"
                    >
                        <ShareNetwork size={20} weight="bold" />
                    </button>
                </div>
              </div>

              <div className="legal-content prose prose-slate max-w-none">
                {children}
              </div>

              <div className="mt-20 pt-10 border-t border-black/[0.04] text-center">
                <p className="text-[13px] text-black/30 mb-4">
                    By using our platform, you acknowledge that you have read and understood this document.
                </p>
                <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-black/20">
                    <span>© 2026 BeeSeek Technologies</span>
                    <span>•</span>
                    <span>RC: 12345678</span>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
