// Page for Cancellation & Refund
import PolicyLayout from "@/components/PolicyLayout";

export default function RefundPage() {
  return (
    <PolicyLayout title="Cancellation & Refund Policy" lastUpdated="March 23, 2026" version="4.0">
      <section>
        <p>BeeSeek&rsquo;s cancellation system uses a balanced escrow approach to protect both Clients and Agents. All cancellations are processed within an atomic database transaction to ensure data integrity.</p>
      </section>

      <section>
        <h2>1. JOB LIFECYCLE</h2>
        <p>A Job progresses through the following steps once active:</p>
        <p><strong>All Set → Materials Purchased → On The Way → Arrived → Started → Finished → Home Safe</strong></p>
        <p>Terminal statuses: <strong>Completed</strong>, <strong>Cancelled</strong>, <strong>Escalated</strong>.</p>
      </section>

      <section>
        <h2>2. SELF-SERVICE CANCELLATION</h2>
        <p>At the <strong>&ldquo;All Set&rdquo;</strong> stage (payment made, job confirmed), both parties may cancel via the in-app cancel button. A cancellation modal collects a required reason category and optional free-text context.</p>
        <p>At any step beyond All Set, the cancel button is replaced with a <strong>&ldquo;Contact Support&rdquo;</strong> link. The backend API blocks cancellation entirely at the <strong>Started</strong>, <strong>Finished</strong>, and <strong>Home Safe</strong> steps.</p>
      </section>

      <section>
        <h2>3. CLIENT CANCELLATION (AT ALL SET)</h2>
        <ul>
          <li><strong>Workmanship:</strong> 100% refunded to Client wallet.</li>
          <li><strong>Transport Fare:</strong> NON-REFUNDABLE. Retained by agent as a booking commitment fee.</li>
          <li><strong>Materials (not purchased):</strong> Refunded to Client.</li>
          <li><strong>Materials (already purchased):</strong> Retained by Agent.</li>
          <li><strong>Service Fee (₦200):</strong> NOT refunded. Retained by platform.</li>
          <li><strong>Agent Commission (5%):</strong> Reversed. Platform does not profit.</li>
        </ul>
        <p>Client-initiated cancellation is NOT recorded as an infraction.</p>
      </section>

      <section>
        <h2>4. AGENT CANCELLATION (AT ALL SET)</h2>
        <ul>
          <li><strong>Workmanship:</strong> 100% refunded to Client wallet.</li>
          <li><strong>Transport Fare:</strong> Retained by Agent regardless of who cancels.</li>
          <li><strong>Materials (not purchased):</strong> Refunded to Client.</li>
          <li><strong>Materials (already purchased):</strong> Retained by Agent.</li>
          <li><strong>Service Fee (₦200):</strong> REFUNDED to Client. Platform absorbs cost.</li>
          <li><strong>Agent Commission (5%):</strong> Reversed. Platform does not profit.</li>
        </ul>
        <p>Agent-initiated cancellation <strong>IS</strong> recorded as an infraction. Repeated infractions trigger escalating enforcement per our <a href="/infractions" className="text-blue-600 hover:underline font-semibold">Service Level &amp; Infraction Policy</a>.</p>
      </section>

      <section>
        <h2>5. ADMIN FORCE-CANCEL</h2>
        <p>Administrators can force-cancel any active or escalated job with full financial reversal, regardless of job step. Details are covered in the <a href="/infractions" className="text-blue-600 hover:underline font-semibold">Service Level &amp; Infraction Policy</a>.</p>
      </section>

      <section>
        <h2>6. POST-CANCELLATION ACTIONS</h2>
        <p>Upon cancellation, the system automatically:</p>
        <ol>
          <li>Sets Job and Contract status to CANCELLED.</li>
          <li>Applies all financial distributions within the same database transaction.</li>
          <li>Clears the Agent&rsquo;s booking status (available for new jobs).</li>
          <li>Broadcasts availability change in real-time via WebSocket.</li>
          <li>Sends push notifications to the non-cancelling party with the reason.</li>
        </ol>
      </section>

      <section>
        <h2>7. CANCELLATION AUDIT</h2>
        <p>Every cancellation creates a permanent audit record containing: who initiated it, the reason, infraction status, refund amount, agent retention amount, and timestamp. Administrators have access via the Integrity Care dashboard.</p>
      </section>

      <section>
        <h2>8. NON-CANCELLABLE STEPS</h2>
        <p>At steps beyond All Set, both apps display a <strong>&ldquo;Contact Support&rdquo;</strong> link. Support mediation may result in partial refunds, job escalation, material custody arrangements, or full resolution under the <a href="/dispute" className="text-blue-600 hover:underline font-semibold">Dispute Resolution Policy</a>.</p>
      </section>

      <section>
        <h2>9. NO REFUNDS AFTER PAYMENT RELEASE</h2>
        <p>Once escrow payment is released (manually by client or via 48-hour automatic release), the Job is considered COMPLETED. Post-completion refunds are handled exclusively through the <a href="/dispute" className="text-blue-600 hover:underline font-semibold">Dispute Resolution Policy</a>.</p>
      </section>

      <section>
        <h2>10. CONTACT</h2>
        <p>For cancellation-related inquiries or support-mediated cancellations:</p>
        <ul>
          <li><strong>Email:</strong> support@beeseek.site</li>
          <li><strong>In-App:</strong> Support Hub → Create Ticket (select the relevant Job)</li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
