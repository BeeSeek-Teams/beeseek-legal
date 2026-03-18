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
    <div className="flex bg-surface min-h-screen">
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
              className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 shadow-sm border border-border/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-12 border-b border-border/60">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
                    {title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-grey font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock size={18} weight="bold" className="text-accent" />
                      <span>Last Updated: {lastUpdated}</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-border" />
                    <div className="bg-neutral px-3 py-1 rounded-full text-navy-light text-xs font-bold uppercase tracking-wider">
                        v{version}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => window.print()}
                        className="p-3 rounded-xl bg-neutral text-navy hover:bg-navy hover:text-white transition-all group"
                        title="Print Policy"
                    >
                        <Printer size={22} weight="bold" />
                    </button>
                    <button 
                        onClick={() => {
                            navigator.share?.({
                                title: `BeeSeek ${title}`,
                                url: window.location.href
                            }).catch(() => {});
                        }}
                        className="p-3 rounded-xl bg-neutral text-navy hover:bg-navy hover:text-white transition-all group"
                        title="Share Policy"
                    >
                        <ShareNetwork size={22} weight="bold" />
                    </button>
                </div>
              </div>

              <div className="legal-content prose prose-slate max-w-none">
                {children}
              </div>

              <div className="mt-20 pt-10 border-t border-border/60 text-center">
                <p className="text-sm text-grey mb-4 italic">
                    By continuing to use our platform, you acknowledge that you have read and understood this document.
                </p>
                <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest text-navy-light">
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
