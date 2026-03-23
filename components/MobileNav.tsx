// MobileNav.tsx
"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import SideNav from "./SideNav";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/[0.04] px-6 py-4 flex items-center justify-between">
        <Link href="/" onClick={() => setIsOpen(false)}>
            <h2 className="text-xl font-black text-navy tracking-tight">BeeSeek <span className="text-accent">Legal</span></h2>
        </Link>
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2.5 rounded-xl bg-black/[0.03] text-navy hover:bg-navy hover:text-white transition-all"
        >
          <List size={22} weight="bold" />
        </button>
      </div>

      {/* Slide-over Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-navy/30 backdrop-blur-sm"
            />

            {/* Content Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col pt-6"
            >
              <div className="flex items-center justify-between px-6 mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-black/30">Directory</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-black/[0.03] text-navy hover:bg-accent hover:text-white transition-all"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-2 pb-10">
                <SideNav onItemClick={() => setIsOpen(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
