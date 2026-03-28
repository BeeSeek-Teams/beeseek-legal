// Page for Dual Account Policy
import PolicyLayout from "@/components/PolicyLayout";

export default function DualAccountsPage() {
  return (
    <PolicyLayout title="Dual Account Policy" lastUpdated="July 14, 2026" version="1.0">
      <section>
        <p>This Policy defines the conditions under which a single individual may hold both an Agent account and a Client account on the BeeSeek platform. This addresses the legitimate need for service providers to also use BeeSeek as consumers of services.</p>
      </section>

      <section>
        <h2>1. OVERVIEW</h2>
        <p>BeeSeek recognises that many professional service providers (Agents) may also wish to hire other professionals for their own needs. To support this, BeeSeek permits a single individual to maintain one Agent account and one Client account simultaneously, subject to the conditions defined in this Policy.</p>
      </section>

      <section>
        <h2>2. ELIGIBILITY</h2>
        <p>To hold dual accounts, the individual must:</p>
        <ul>
          <li>Be a natural person (not a business entity) with a valid Nigerian National Identification Number (NIN).</li>
          <li>Have completed NIN verification on at least one account.</li>
          <li>Meet all standard registration requirements for both account types.</li>
        </ul>
      </section>

      <section>
        <h2>3. IDENTITY REQUIREMENTS</h2>
        <p><strong>Same NIN, Same Legal Name:</strong> Both accounts must be registered under the same NIN and the same legal name (first name and last name) as registered with NIMC. BeeSeek verifies identity via NIN lookup &mdash; the name on both accounts must match the NIN holder&rsquo;s official name.</p>
        <p><strong>Different Email Addresses:</strong> Each account must use a unique email address. Two accounts cannot share the same email. This is enforced at registration.</p>
        <p><strong>Same or Different Phone Numbers:</strong> Phone numbers may be shared across accounts or be different. BeeSeek recommends using different phone numbers for operational clarity.</p>
      </section>

      <section>
        <h2>4. ACCOUNT ISOLATION</h2>
        <ul>
          <li><strong>Separate Wallets:</strong> Each account maintains its own independent wallet balance. Funds cannot be transferred between the Agent wallet and the Client wallet.</li>
          <li><strong>Separate Transaction Histories:</strong> Each account has its own transaction history, job history, and notification feed. These are not shared or merged.</li>
          <li><strong>Separate Reviews and Ratings:</strong> Reviews and ratings for each account are independent. An Agent&rsquo;s professional rating is not affected by their activity as a Client, and vice versa.</li>
          <li><strong>Separate Notification Preferences:</strong> Each account may have its own push notification token and notification preferences.</li>
        </ul>
      </section>

      <section>
        <h2>5. RESTRICTIONS</h2>
        <ul>
          <li><strong>No Self-Dealing:</strong> An individual may NOT hire themselves. If BeeSeek detects that a Client account is hiring an Agent account belonging to the same NIN holder, the transaction will be blocked and both accounts may be flagged for review.</li>
          <li><strong>No Review Manipulation:</strong> An individual may NOT leave reviews on their own listings through their Client account. This constitutes review fraud and is grounds for both accounts being suspended.</li>
          <li><strong>Single NIN, Single Pair:</strong> A single NIN may be associated with at most ONE Agent account and ONE Client account. Creating multiple Agent accounts or multiple Client accounts under the same NIN is prohibited.</li>
          <li><strong>Cross-Account Enforcement:</strong> If enforcement action (suspension, wallet freeze, flag) is taken against one account due to fraud or policy violation, BeeSeek reserves the right to apply the same enforcement to the linked account if the violation affects platform integrity.</li>
        </ul>
      </section>

      <section>
        <h2>6. DETECTION AND LINKING</h2>
        <p>BeeSeek automatically detects dual accounts through NIN matching. When two accounts share the same NIN, an internal link is recorded for administrative visibility. The Admin Dashboard shows the linked account on each user&rsquo;s detail page. This linking is invisible to other users on the platform.</p>
      </section>

      <section>
        <h2>7. ACCOUNT DELETION</h2>
        <p>If an individual requests deletion of one account while maintaining the other, only the requested account will be deleted. The remaining account is unaffected. Wallet balances on the deleted account will be handled per the <a href="/account-deletion">Account Deletion Policy</a>.</p>
        <p>If an individual requests deletion of both accounts, the standard deletion process applies to each independently.</p>
      </section>

      <section>
        <h2>8. RELATED POLICIES</h2>
        <p>This Policy operates alongside the <a href="/terms">Terms of Service</a>, <a href="/acceptable-use">Acceptable Use Policy</a>, <a href="/privacy">Privacy Policy</a>, <a href="/account-deletion">Account Deletion Policy</a>, and <a href="/infractions">Service Level &amp; Infraction Policy</a>.</p>
      </section>

      <section>
        <h2>9. CONTACT</h2>
        <p>For questions about dual accounts:</p>
        <ul>
          <li><strong>Email:</strong> support@beeseek.site</li>
          <li><strong>In-App:</strong> Support Hub → Create Ticket</li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
