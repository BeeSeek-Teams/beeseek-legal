// Page for Cancellation & Refund
import PolicyLayout from "@/components/PolicyLayout";

export default function RefundPage() {
  return (
    <PolicyLayout title="Cancellation & Refund" lastUpdated="March 18, 2026" version="2.0">
      <section>
        <p>BeeSeek's cancellation system uses a balanced escrow approach to protect both Clients and Agents.</p>
      </section>
      <section>
        <h2>1. PRE-ARRIVAL CANCELLATION</h2>
        <p>At the <strong>"ALL SET"</strong> stage (payment made, job confirmed), both parties may cancel via the app.</p>
        <p><strong>Workmanship & Service Fee:</strong> Fully refunded to the Client's Wallet. No charge occurs.</p>
        <p><strong>Transport Fare:</strong> This is a <strong>NON-REFUNDABLE</strong> payment released immediately to the Agent to cover logistics costs.</p>
      </section>
      <section>
        <h2>2. POST-ARRIVAL CANCELLATION</h2>
        <p>Once the Agent has physically arrived and entered the 4-digit code, self-service cancellation is <strong>DISABLED</strong>. Any cancellation from this point forward must be mediated by support.</p>
      </section>
      <section>
        <h2>3. UNPROFESSIONAL CONDUCT</h2>
        <p>If an Agent fails to arrive, the Client may contact support. Evidence will be reviewed against the Agent's real-time GPS presence data at the time of the scheduled job.</p>
      </section>
    </PolicyLayout>
  );
}
