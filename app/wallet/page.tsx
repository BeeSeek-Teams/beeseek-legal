// Page for Payments & Wallet
import PolicyLayout from "@/components/PolicyLayout";

export default function WalletPage() {
  return (
    <PolicyLayout title="Payments & Wallet" lastUpdated="March 18, 2026" version="2.0">
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
            <li><strong>Service Fee (Client):</strong> ₦200 flat fee per Job.</li>
            <li><strong>Commission (Agent):</strong> 5% of workmanship cost, deducted from payout.</li>
        </ul>
      </section>
      <section>
        <h2>4. ESCROW MECHANISM</h2>
        <p>Client funds are debited from their Wallet but held in escrow. Workmanship funds (minus commission) are only released once the Client confirms the Job or 72 hours have passed since work completion.</p>
      </section>
    </PolicyLayout>
  );
}
