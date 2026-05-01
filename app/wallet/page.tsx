// Page for Payments & Wallet
import PolicyLayout from "@/components/PolicyLayout";

export default function WalletPage() {
  return (
    <PolicyLayout title="Payments & Wallet" lastUpdated="May 1, 2026" version="2.3">
      <section>
        <p>BeeSeek's payment infrastructure is designed for the modern Nigerian service economy, combining secure virtual banking with escrow protection.</p>
      </section>
      <section>
        <h2>1. WALLET STRUCTURE</h2>
        <ul>
            <li><strong>Accessible Balance:</strong> Funds available for immediate use or withdrawal.</li>
            <li><strong>Locked Balance:</strong> Funds currently held in escrow for active Jobs.</li>
        </ul>
      </section>
      <section>
        <h2>2. FUNDING AND WITHDRAWALS</h2>
        <ul>
            <li><strong>Funding:</strong> Clients fund via dedicated virtual bank accounts (NUBAN) generated via Monnify. NIN verification is required.</li>
            <li><strong>Withdrawals:</strong> Agents withdraw accessible funds to Nigerian bank accounts (min ₦900). One free withdrawal per day (additional: ₦50 fee).</li>
        </ul>
      </section>
      <section>
        <h2>3. SERVICE FEES AND COMMISSION</h2>
        <ul>
            <li><strong>Pilot Programme (Tasks and Errands):</strong> Client service fee is ₦0. Agent platform fee or commission is 0%.</li>
            <li><strong>Other categories:</strong> Any applicable fee is displayed before checkout and payout confirmation.</li>
            <li><strong>Notice:</strong> Pilot fee values may change after the programme period, with prior in-app notice and policy updates.</li>
        </ul>
      </section>
      <section>
        <h2>4. ESCROW MECHANISM</h2>
        <p>Client funds are debited from Wallet at payment. Transport and materials move to Agent accessible balance immediately. Workmanship is held in locked balance and released when the Client confirms completion or after 72 hours from Finished state.</p>
      </section>
      <section>
        <h2>5. ERRAND OFFER NOTIFICATIONS</h2>
        <p>When a Client selects an errand offer, BeeSeek notifies the selected Agent and also notifies non-selected Agents who submitted pending offers.</p>
      </section>
    </PolicyLayout>
  );
}
