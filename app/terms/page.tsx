// Page for Terms of Service
import PolicyLayout from "@/components/PolicyLayout";

export default function TermsPage() {
  return (
    <PolicyLayout 
      title="Terms of Service" 
      lastUpdated="May 1, 2026" 
      version="2.3"
    >
      <section>
        <p>
            Please read these Terms of Service ("Terms") carefully before using the BeeSeek platform. By creating an account or using any BeeSeek application, you agree to be bound by these Terms.
        </p>
      </section>

      <section>
        <h2>1. DEFINITIONS</h2>
        <ul>
            <li><strong>"BeeSeek"</strong> refers to the mobile applications (Client and Agent), the website, and backend systems.</li>
            <li><strong>"Client"</strong> refers to a user who hires and pays for services.</li>
            <li><strong>"Agent"</strong> refers to a professional who lists services ("Bees") and performs work.</li>
            <li><strong>"Escrow"</strong> refers to our secure payment-holding mechanism.</li>
            <li><strong>"Verification Code"</strong> is a 4-digit safety code used in workflow checkpoints. For regular jobs it is used at arrival. For errands it is used at final delivery confirmation.</li>
        </ul>
      </section>

      <section>
        <h2>2. ELIGIBILITY & REGISTRATION</h2>
        <ul>
            <li>You must be at least <strong>18 years of age</strong> to use BeeSeek.</li>
            <li>You must reside or operate within <strong>Nigeria</strong>.</li>
            <li><strong>NIN Verification:</strong> All users must submit an 11-digit NIN, verified via Monnify, before access to financial features is granted.</li>
            <li><strong>Security:</strong> All accounts require a secure password and a 4-digit Transaction PIN.</li>
        </ul>
      </section>

      <section>
        <h2>3. THE MARKETPLACE PROCESS</h2>
        <h3>3.1. SEARCH & DISCOVERY</h3>
        <p>
            Clients search for nearby Agents based on category, rating, and proximity (15km default). We use a heartbeat system to track real-time availability. Agents more than 50km from their listed Bee location are automatically hidden for safety.
        </p>
        <h3>3.2. ESCROW PAYMENTS</h3>
        <p>
            When a job is contracted, funds are moved to Escrow. 
            <strong>Pilot Programme (Tasks and Errands):</strong> Service Fee ₦0, Platform Fee or Commission 0%.
            <strong>Other categories:</strong> Any applicable fee is shown clearly before payment confirmation.
        </p>
      </section>
      <section>
        <h2>4A. PILOT FEE NOTICE</h2>
        <p>
            BeeSeek is currently operating a pilot fee programme for Tasks and Errands. During this pilot, client-facing service fee and agent-facing platform fee or commission for Tasks and Errands are set to zero. These values may be updated in future policy versions with prior notice to users.
        </p>
      </section>

      <section>
        <h2>5. JOB LIFECYCLE & SAFETY</h2>
        <ul>
            <li><strong>Verification:</strong> Regular jobs use code at arrival. Errands use code at final delivery.</li>
            <li><strong>Auto-Release:</strong> If a Client does not release payment within 72 hours of work being marked "Finished", funds are automatically moved to the Agent's wallet.</li>
            <li><strong>SOS System:</strong> Provides one-tap access to 112/199/122 and opens the device SMS app with a pre-filled emergency message containing GPS coordinates to alert your emergency contact.</li>
        </ul>
      </section>
      <section>
        <h2>6. ERRAND DISCOVERY AND OFFER FLOW</h2>
        <ul>
            <li><strong>Adaptive Radius:</strong> Errands are matched using expanding distance rules with a maximum radius cap.</li>
            <li><strong>Offer Outcome Notices:</strong> When a Client chooses one offer, selected and non-selected Agents receive notifications.</li>
            <li><strong>Client Take-Down:</strong> Eligible pre-contract errand requests can be taken down by the Client in-app.</li>
        </ul>
      </section>

      <section>
        <h2>7. INDEPENDENT CONTRACTOR STATUS</h2>
        <p>
            Agents are <strong>Independent Contractors</strong> and not employees of BeeSeek. Agents set their own pricing (min ₦500), provide their own tools, and manage their own taxes. BeeSeek acts solely as a marketplace facilitator.
        </p>
      </section>

      <section>
        <h2>8. LIMITATION OF LIABILITY</h2>
        <p>
            BeeSeek is not liable for the quality of work performed, any property damage, or disputes arising between users. Users use the platform at their own risk.
        </p>
      </section>
    </PolicyLayout>
  );
}
