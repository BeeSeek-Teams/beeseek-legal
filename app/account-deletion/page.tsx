// Page for Account Deletion
import PolicyLayout from "@/components/PolicyLayout";

export default function AccountDeletionPage() {
  return (
    <PolicyLayout title="Account Deletion Policy" lastUpdated="March 18, 2026" version="2.0">
      <section>
        <p>In accordance with Apple App Store Review Guideline 5.1.1(v) and Google Play policy, BeeSeek provides a simple and transparent method to delete your account and associated personal data.</p>
      </section>
      <section>
        <h2>1. THE DELETION PROCESS</h2>
        <p>Removing your account is a two-phase process designed for security and to allow for recovery if done in error.</p>
        <ol>
            <li><strong>Deactivation (30 Days):</strong> Once initiated, your account is immediately hidden. You cannot be seen or hired. All active jobs and wallets are settled.</li>
            <li><strong>Permanent Scrubbing:</strong> After 30 days of inactivity, our system permanently purges your identity records (First/Last name, email, phone, profile photo).</li>
        </ol>
      </section>
      <section>
        <h2>2. HOW TO INITIATE</h2>
        <p>Go to <strong>Settings → Security → Delete Account</strong> within either the BeeSeek Client or BeeSeek Agent apps. You must provide your password to confirm.</p>
      </section>
      <section>
        <h2>3. DATA PERSISTENCE</h2>
        <p>Transaction records, dispute evidence, and chat archives are retained for financial audit and safety purposes, but these will no longer be linked to your personal profile once the 30-day window passes.</p>
      </section>
    </PolicyLayout>
  );
}
