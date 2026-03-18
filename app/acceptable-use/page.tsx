// Page for Acceptable Use
import PolicyLayout from "@/components/PolicyLayout";

export default function AcceptableUsePage() {
  return (
    <PolicyLayout title="Acceptable Use Policy" lastUpdated="March 18, 2026" version="2.0">
      <section>
        <p>This Acceptable Use Policy defines the standards of conduct and types of service that are prohibited on BeeSeek.</p>
      </section>
      <section>
        <h2>1. PROHIBITED CONTENT</h2>
        <ul>
            <li><strong>Illegal Activity:</strong> Services involving drugs, illegal substances, or criminal activity.</li>
            <li><strong>Vulgar/Offensive Content:</strong> Profile photos or descriptions containing nudity, violence, or hate speech.</li>
            <li><strong>Spam/Advertising:</strong> Promoting non-BeeSeek services or using chat for marketing.</li>
        </ul>
      </section>
      <section>
        <h2>2. PROHIBITED SERVICES</h2>
        <p>Agents are strictly prohibited from listing "Bees" for the following services:</p>
        <ol>
            <li>Financial or investment advice.</li>
            <li>Medical or healthcare services (unless properly licensed).</li>
            <li>Adult/Escort services.</li>
            <li>Debt collection or enforcement.</li>
        </ol>
      </section>
      <section>
        <h2>3. SYSTEM INTEGRITY</h2>
        <p>Bypassing the BeeSeek platform's security mechanisms, scraping data, or conducting fraudulent transactions will result in permanent termination of your account and NIN-based blacklisting.</p>
      </section>
    </PolicyLayout>
  );
}
