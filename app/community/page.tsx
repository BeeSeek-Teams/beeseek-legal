// Page for Community Guidelines
import PolicyLayout from "@/components/PolicyLayout";

export default function CommunityPage() {
  return (
    <PolicyLayout title="Community Guidelines" lastUpdated="March 18, 2026" version="2.0">
      <section>
        <p>BeeSeek's purpose is to safely and professionally connect Nigeria's service economy. Our guidelines are building Trust and Quality for our users.</p>
      </section>
      <section>
        <h2>1. PROFESSIONALISM</h2>
        <ul>
            <li><strong>Reliability:</strong> Agents must arrive on time for scheduled Jobs. Repeated cancellations or delays will lead to account restrictions.</li>
            <li><strong>Accuracy:</strong> Bee descriptions and portfolio images MUST be your own original work and accurately reflect the service being provided.</li>
        </ul>
      </section>
      <section>
        <h2>2. SAFETY & RESPECT</h2>
        <ul>
            <li><strong>No Harassment:</strong> We have a zero-tolerance policy for abusive language, threats, or harassment in chat or during physical service.</li>
            <li><strong>No Discrimination:</strong> Discriminating based on religion, gender, ethnicity, or disability is strictly prohibited in our Nigerian community.</li>
        </ul>
      </section>
      <section>
        <h2>3. PLATFORM INTEGRITY</h2>
        <ul>
            <li><strong>No Off-Platform Solicitation:</strong> Bypassing the BeeSeek Escrow system to conduct business is forbidden and voids all platform safety protections.</li>
            <li><strong>Transparency:</strong> No hidden costs. Always provide an itemized Service Quote before starting work.</li>
        </ul>
      </section>
      <section>
        <h2>4. AGENT ACHIEVEMENT BADGES</h2>
        <p>BeeSeek awards achievement badges to Agents who meet specific criteria. Badges are visible on the Agent's profile.</p>
        <ul>
            <li><strong>Early Access:</strong> Awarded to founding Agents who registered during the BeeSeek beta phase. This badge cannot be requested and is granted from verified sign-up records.</li>
            <li><strong>Top Rated:</strong> Awarded automatically to Agents who maintain a rating of 4.8 or above across at least 50 completed Jobs.</li>
            <li><strong>Golden Badge:</strong> Handpicked by the BeeSeek team for exceptional, consistent service quality. There are no fixed numeric criteria.</li>
        </ul>
        <p>Attempting to manipulate metrics to obtain badges (e.g., creating fake Jobs, soliciting inflated reviews) will result in badge revocation and enforcement action.</p>
      </section>
    </PolicyLayout>
  );
}
