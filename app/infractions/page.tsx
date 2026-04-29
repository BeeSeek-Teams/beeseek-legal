// Page for Service Level & Infraction Policy
import PolicyLayout from "@/components/PolicyLayout";

export default function InfractionsPage() {
  return (
    <PolicyLayout title="Service Level & Infraction Policy" lastUpdated="April 29, 2026" version="1.2">
      <section>
        <p>This Policy establishes enforceable service level expectations for Agents operating on the BeeSeek platform and defines the automated and manual enforcement mechanisms for violations. This policy is modelled after industry-standard practices used by leading service marketplaces and adapted for the Nigerian service context.</p>
      </section>

      <section>
        <h2>1. SERVICE LEVEL EXPECTATIONS</h2>
        <p><strong>Timeliness:</strong> Agents must progress through job steps in a timely manner. Once a Client has paid for a service request, the Agent is contractually committed to performing the work at the agreed date and time.</p>
        <p><strong>No-Show Policy:</strong> An Agent is considered a &ldquo;no-show&rdquo; when the scheduled start time has passed by <strong>2 or more hours</strong> and the Agent&rsquo;s job step remains at &ldquo;All Set&rdquo; (no progress updates made).</p>
        <p><strong>Transit Expectations:</strong> Once an Agent marks &ldquo;On The Way,&rdquo; they are expected to arrive within a reasonable timeframe. If the job remains in transit for <strong>3 or more hours</strong> without arrival confirmation, the system will flag the job.</p>
        <p><strong>Work Completion:</strong> Once started, jobs are expected to be marked as &ldquo;Finished&rdquo; within a reasonable timeframe. Jobs in progress for <strong>12 or more hours</strong> will trigger a duration alert.</p>
        <p><strong>Communication:</strong> Agents are expected to communicate delays, emergencies, or issues proactively through the in-app chat.</p>
      </section>

      <section>
        <h2>2. AUTOMATED DETECTION</h2>
        <p>BeeSeek operates a <strong>Stale Job Watchdog</strong>, an automated system that runs every 30 minutes to monitor job progress:</p>
        <ul>
          <li><strong>No-Show Detection:</strong> Agent hasn&rsquo;t moved from &ldquo;All Set&rdquo; 2+ hours after scheduled start → Auto-escalation + infraction recorded.</li>
          <li><strong>Stale Transit Detection:</strong> Agent has been &ldquo;On The Way&rdquo; for 3+ hours → Auto-escalation + both parties notified.</li>
          <li><strong>Extended Work Alert:</strong> Job has been &ldquo;Started&rdquo; for 12+ hours → Duration alerts sent (no auto-cancel, as some jobs genuinely take longer).</li>
        </ul>
        <p>Upon detection, the system automatically sends push notifications and emails to both parties, updates the job status in real-time, and logs the event for administrative review.</p>
      </section>

      <section>
        <h2>3. INFRACTION CATEGORIES</h2>
        <ul>
          <li><strong>NO_SHOW (High):</strong> Agent failed to appear for a confirmed, paid job.</li>
          <li><strong>AGENT_CANCEL (Medium):</strong> Agent cancelled a confirmed job.</li>
          <li><strong>STALE_TRANSIT (High):</strong> Agent marked &ldquo;On The Way&rdquo; but never arrived.</li>
          <li><strong>ADMIN_CANCEL (High):</strong> Admin cancelled the job due to agent fault.</li>
          <li><strong>UNPROFESSIONAL (Variable):</strong> Reported unprofessional conduct during a job.</li>
        </ul>
      </section>

      <section>
        <h2>4. ESCALATING ENFORCEMENT</h2>
        <p>Enforcement actions escalate based on the total number of infractions accumulated by an Agent over their account lifetime:</p>
        <ul>
          <li><strong>1st–2nd offence:</strong> Warning notification via push and email.</li>
          <li><strong>3rd offence:</strong> 72-hour wallet withdrawal freeze.</li>
          <li><strong>4th offence:</strong> 72-hour wallet freeze + mandatory support call.</li>
          <li><strong>5th offence:</strong> 7-day full account suspension.</li>
          <li><strong>6th+ offence:</strong> Permanent account review and potential termination.</li>
        </ul>
        <p>A <strong>wallet freeze</strong> prevents withdrawals but does not affect receiving payments from active jobs. An <strong>account suspension</strong> prevents accepting new requests and appearing in search results.</p>
      </section>

      <section>
        <h2>5. ADMIN FORCE-CANCEL</h2>
        <p>Administrators can force-cancel any active or escalated job with full financial reversal. When marked as an Agent infraction:</p>
        <ul>
          <li><strong>Workmanship:</strong> 100% refunded to Client.</li>
          <li><strong>Transport Fare:</strong> Retained by Agent (non-refundable).</li>
          <li><strong>Materials:</strong> Refunded if not purchased; retained by Agent if purchased.</li>
          <li><strong>Service Fee (₦200):</strong> Refunded to Client. Platform absorbs the cost.</li>
          <li><strong>Agent Commission (5%):</strong> Reversed. Platform does not profit.</li>
        </ul>
      </section>

      <section>
        <h2>6. AGENT PROTECTIONS</h2>
        <p><strong>Emergency Appeals:</strong> Agents who miss jobs due to genuine emergencies may appeal infractions through the support system. Successful appeals result in removal from the Agent&rsquo;s record.</p>
        <p><strong>Conservative Thresholds:</strong> The detection thresholds (2h no-show, 3h transit, 12h work) are deliberately generous to account for traffic, distance, and complex jobs. The watchdog runs every 30 minutes, not in real-time, to avoid premature escalation.</p>
        <p><strong>Notification Before Enforcement:</strong> Agents always receive push and email notifications before any enforcement action is applied.</p>
      </section>

      <section>
        <h2>7. CLIENT PROTECTIONS</h2>
        <p>Clients are immediately notified when a no-show or transit delay is detected, when an admin intervenes, or when the agent updates their status. Clients may also proactively open support tickets at any time.</p>
      </section>

      <section>
        <h2>8. LISTING FLAGGING SYSTEM</h2>
        <p>BeeSeek operates a manual listing flagging system that allows administrators to flag individual service listings that violate platform policies, contain misleading information, or have been the subject of user complaints.</p>
        <p><strong>Escalating Consequences:</strong></p>
        <ul>
          <li><strong>1st flag:</strong> Warning — Agent receives an email and in-app notification about the issue. The listing remains active.</li>
          <li><strong>2nd flag:</strong> Listing Deactivated — The listing is hidden from search results. Agent is warned that a third flag will result in account suspension.</li>
          <li><strong>3rd+ flag:</strong> Account Suspension — The listing is deactivated and the agent&rsquo;s account is suspended for 7 days. The agent cannot accept new jobs or appear in search results during the suspension period.</li>
        </ul>
        <p>For every flag, the agent receives an email, an in-app push notification, and an internal notification with the flag reason. Agents who believe a flag was issued in error may contact support.</p>
      </section>

      <section>
        <h2>9. ERRAND MATCHING EXPANSION</h2>
        <p>Errand matching uses adaptive radius expansion to balance response speed with location relevance:</p>
        <ul>
          <li><strong>Normal errands:</strong> Start at 3km, expand by 2km every 2 minutes, max 12km.</li>
          <li><strong>Emergency errands:</strong> Start at 4km, expand by 3km every 1 minute, max 12km.</li>
          <li><strong>Pause on responses:</strong> If at least one offer exists, expansion pauses for that request.</li>
        </ul>
      </section>

      <section>
        <h2>10. RELATED POLICIES</h2>
        <p>This Policy works in conjunction with the <a href="/refund">Cancellation &amp; Refund Policy</a>, <a href="/dispute">Dispute Resolution Policy</a>, <a href="/community">Community Guidelines</a>, and <a href="/dual-accounts">Dual Account Policy</a>.</p>
      </section>

      <section>
        <h2>11. CONTACT</h2>
        <p>For infraction-related inquiries, appeals, or support:</p>
        <ul>
          <li><strong>Email:</strong> support@beeseek.site</li>
          <li><strong>In-App:</strong> Support Hub → Create Ticket</li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
