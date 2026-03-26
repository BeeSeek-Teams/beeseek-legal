"use client";

import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import { motion, AnimatePresence } from "framer-motion";
import { UserMinus, EnvelopeSimple, User, Warning, CheckCircle, SpinnerGap, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://beeseek-backend-production.up.railway.app";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !fullName.trim()) {
      setError("Please fill in both your email address and full name.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/deletion-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          fullName: fullName.trim(),
          reason: reason.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
    } catch {
      setError("Unable to connect. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-background min-h-screen">
      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-0 md:py-16">
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
              {/* Header */}
              <div className="flex flex-col gap-4 mb-10 pb-10 border-b border-black/[0.04]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                    <UserMinus size={24} weight="duotone" className="text-red-500" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-black text-navy tracking-tight">
                      Request Account Deletion
                    </h1>
                    <p className="text-[13px] text-black/40 font-medium mt-1">
                      Submit a request to delete your BeeSeek account and data
                    </p>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} weight="duotone" className="text-green" />
                    </div>
                    <h2 className="text-2xl font-black text-navy mb-3">Request Submitted</h2>
                    <p className="text-black/50 text-[15px] leading-relaxed max-w-md mx-auto mb-8">
                      We&apos;ve received your deletion request. Our team will review it and send a confirmation email to <strong className="text-navy">{email}</strong> within 48 hours.
                    </p>

                    <div className="bg-orange/5 border border-orange/10 rounded-2xl p-5 max-w-md mx-auto text-left mb-8">
                      <p className="text-[13px] font-bold text-orange-dark mb-2">What happens next?</p>
                      <ol className="text-[13px] text-orange-dark/80 leading-relaxed space-y-1 list-decimal list-inside">
                        <li>You&apos;ll receive a confirmation email</li>
                        <li>Reply to confirm you want to proceed</li>
                        <li>Your account will be deactivated</li>
                        <li>After 30 days, all personal data is permanently scrubbed</li>
                      </ol>
                    </div>

                    <Link
                      href="/account-deletion"
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-navy transition-colors"
                    >
                      <ArrowLeft size={16} weight="bold" />
                      Read our full deletion policy
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {/* Warning */}
                    <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mb-8">
                      <div className="flex items-start gap-3">
                        <Warning size={20} weight="duotone" className="text-red-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-[13px] font-bold text-red-800 mb-1">This action is irreversible</p>
                          <p className="text-[13px] text-red-700/70 leading-relaxed">
                            Once your deletion request is confirmed and processed, your account will be deactivated immediately. After 30 days, all personal data — including your name, email, phone number, and profile photo — will be permanently scrubbed from our systems.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="bg-blue/5 border border-blue/10 rounded-2xl p-5 mb-8">
                      <p className="text-[13px] text-blue-dark leading-relaxed">
                        <strong>Note:</strong> This form submits a deletion <em>request</em>. Our team will review it and send you a confirmation email. Your account will not be deleted until the request is verified and confirmed. You can also delete your account directly from within the BeeSeek app under <strong>Settings → Manage Profile → Delete Account</strong>.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
                      <div>
                        <label className="block text-[13px] font-bold text-navy mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <EnvelopeSimple
                            size={18}
                            weight="duotone"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-black/25"
                          />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter the email linked to your BeeSeek account"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-black/10 bg-white text-[14px] text-navy placeholder:text-black/25 focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy/20 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-navy mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User
                            size={18}
                            weight="duotone"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-black/25"
                          />
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter your full name as registered on BeeSeek"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-black/10 bg-white text-[14px] text-navy placeholder:text-black/25 focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy/20 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-navy mb-2">
                          Reason <span className="text-black/25 font-medium">(optional)</span>
                        </label>
                        <textarea
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          placeholder="Let us know why you're leaving — this helps us improve"
                          rows={3}
                          className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-white text-[14px] text-navy placeholder:text-black/25 focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy/20 transition-all resize-none"
                        />
                      </div>

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 border border-red-100 rounded-xl p-4 text-[13px] text-red-700 font-medium"
                        >
                          {error}
                        </motion.div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <SpinnerGap size={18} weight="bold" className="animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <UserMinus size={18} weight="bold" />
                            Submit Deletion Request
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-black/30 text-center leading-relaxed">
                        By submitting, you acknowledge that you have read our{" "}
                        <Link href="/account-deletion" className="text-blue underline underline-offset-2">
                          Account Deletion Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-blue underline underline-offset-2">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
