// Page for Dispute Resolution
import PolicyLayout from "@/components/PolicyLayout";

export default function DisputePage() {
  return (
    <PolicyLayout title="Dispute Resolution Policy" lastUpdated="March 23, 2026" version="3.0">
      <section>
        <p>BeeSeek&rsquo;s Dispute Resolution system ensures all parties have a voice in the event of a service or payment disagreement. This policy covers prevention mechanisms, internal resolution stages, and escalation procedures.</p>
      </section>

      <section>
        <h2>1. PREVENTION MECHANISMS</h2>
        <p>BeeSeek has built-in safeguards to prevent disputes before they occur:</p>
        <ul>
          <li><strong>Transparent Quoting:</strong> All costs (workmanship, transport, materials, service fee, commission) are shown before payment.</li>
          <li><strong>Arrival Verification:</strong> A 4-digit code confirms physical presence at the job site.</li>
          <li><strong>Step-by-Step Tracking:</strong> Forensic timestamps on every job step provide an indisputable timeline.</li>
          <li><strong>Chat Records:</strong> All in-app communications are preserved as evidence.</li>
          <li><strong>48-Hour Auto-Release:</strong> If a Client doesn&rsquo;t confirm job completion, escrow is automatically released after 48 hours.</li>
          <li><strong>Stale Job Watchdog:</strong> Automated detection of no-shows and abandoned jobs per the <a href="/infractions" className="text-blue-600 hover:underline font-semibold">Service Level &amp; Infraction Policy</a>.</li>
        </ul>
      </section>

      <section>
        <h2>2. STAGES OF INTERNAL RESOLUTION</h2>
        <ul>
          <li><strong>Stage 1: Direct Communication (0–4 hours)</strong> — Parties attempt to resolve issues directly through in-app chat. Most issues are resolved at this stage.</li>
          <li><strong>Stage 2: Support Review (4–48 hours)</strong> — Either party can escalate by filing a Support Ticket. A BeeSeek support agent reviews all available evidence and proposes a resolution.</li>
          <li><strong>Stage 3: Mediated Resolution (48–120 hours)</strong> — For complex disputes, a senior administrator conducts a full review of chat archives, job timelines, financial records, and GPS data. Both parties may provide additional evidence.</li>
        </ul>
      </section>

      <section>
        <h2>3. EVIDENCE REVIEW</h2>
        <p>BeeSeek administrators resolve disputes using the following sources of truth:</p>
        <ol>
          <li><strong>In-App Chat Archives:</strong> Text messages, images, and voice notes.</li>
          <li><strong>Work Lifecycle Logs:</strong> Timestamped arrivals, materials purchase confirmations, and progress markers.</li>
          <li><strong>Service Quotes:</strong> The final cost breakdown and workmanship specifics.</li>
          <li><strong>GPS Verification:</strong> Arrival code confirmation and agent location data.</li>
          <li><strong>Transaction Records:</strong> Complete financial audit trail of all payments, refunds, and fee distributions.</li>
        </ol>
      </section>

      <section>
        <h2>4. ADMIN POWERS</h2>
        <p>During dispute resolution, administrators may:</p>
        <ul>
          <li>Freeze wallet withdrawals for either or both parties during investigation.</li>
          <li>Override job status (escalate, cancel, or complete).</li>
          <li>Force-cancel with full financial reversal (per the <a href="/refund" className="text-blue-600 hover:underline font-semibold">Cancellation &amp; Refund Policy</a>).</li>
          <li>Release or reverse escrow payments.</li>
          <li>Issue warnings or apply infractions per the <a href="/infractions" className="text-blue-600 hover:underline font-semibold">Service Level &amp; Infraction Policy</a>.</li>
        </ul>
      </section>

      <section>
        <h2>5. RESOLUTION ACTIONS</h2>
        <p>Possible outcomes include: partial fund release, full escrow refund to Client, Agent payout, infraction recording, account suspension, or permanent ban. All resolution actions are recorded in an audit trail.</p>
      </section>

      <section>
        <h2>6. FINANCIAL DISPUTE RULES</h2>
        <ul>
          <li><strong>Escrow Protection:</strong> Workmanship funds remain locked until job completion or cancellation. No premature release.</li>
          <li><strong>Transport Fare:</strong> Always non-refundable, even in disputes, as it compensates the Agent&rsquo;s logistics commitment.</li>
          <li><strong>Platform Fee:</strong> Refunded in cases of Agent fault. Not refunded in Client-initiated cancellations.</li>
          <li><strong>Materials:</strong> Determined by whether &ldquo;Materials Purchased&rdquo; was marked before the dispute arose.</li>
        </ul>
      </section>

      <section>
        <h2>7. EXTERNAL LEGAL RECOURSE</h2>
        <p>If internal resolution is unsatisfactory, either party may pursue external legal remedies. All disputes arising from BeeSeek services are subject to binding arbitration under the laws of the Federal Republic of Nigeria. The arbitration venue shall be Lagos, Nigeria.</p>
      </section>

      <section>
        <h2>8. CONTACT</h2>
        <p>For dispute-related inquiries:</p>
        <ul>
          <li><strong>Email:</strong> support@beeseek.site</li>
          <li><strong>In-App:</strong> Support Hub → Create Ticket (select the relevant Job)</li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
