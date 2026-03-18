// Page for Dispute Resolution
import PolicyLayout from "@/components/PolicyLayout";

export default function DisputePage() {
  return (
    <PolicyLayout title="Dispute Resolution Policy" lastUpdated="March 18, 2026" version="2.0">
      <section>
        <p>BeeSeek's Dispute Resolution system ensures all parties have a voice in the event of a service or payment disagreement.</p>
      </section>
      <section>
        <h2>1. STAGES OF DISPUTE</h2>
        <ul>
            <li><strong>Stage 1: Direct Communication (Negotiation)</strong> - Parties attempt to resolve issues directly through the in-app chat.</li>
            <li><strong>Stage 2: Platform Mediation (Support Ticket)</strong> - Either party can escalate the issue by filing a Support Ticket.</li>
            <li><strong>Stage 3: Administrative Escalation (Integrity Dashboard)</strong> - For complex disputes, our support team reviews all records available.</li>
        </ul>
      </section>
      <section>
        <h2>2. EVIDENCE REVIEW</h2>
        <p>BeeSeek's administrators conduct reviews using the follow sources of truth:</p>
        <ol>
            <li><strong>In-app Chat Archives:</strong> Text, images, and voice notes.</li>
            <li><strong>Work Lifecycle Logs:</strong> Timestamped GPS arrivals, materials purchase confirmations, and progress markers.</li>
            <li><strong>Service Quotes:</strong> The final cost breakdown and workmanship specifics.</li>
        </ol>
      </section>
      <section>
        <h2>3. RESOLUTION ACTIONS</h2>
        <p>Our resolutions may include: Partial fund release, full escrow refund to Client, Agent payout, account suspension, or permanent ban.</p>
      </section>
    </PolicyLayout>
  );
}
