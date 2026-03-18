// Page for Terms of Service
import PolicyLayout from "@/components/PolicyLayout";

export default function TermsPage() {
  return (
    <PolicyLayout 
      title="Terms of Service" 
      lastUpdated="March 18, 2026" 
      version="2.0"
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
            <li><strong>"Arrival Code"</strong> is a 4-digit safety code provided by the Client to the Agent upon arrival.</li>
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
            <strong>Service Fee:</strong> ₦200 flat (charged to Client). 
            <strong>Commission:</strong> 5% of workmanship (deducted from Agent payout).
        </p>
      </section>

      <section>
        <h2>4. JOB LIFECYCLE & SAFETY</h2>
        <ul>
            <li><strong>Arrival Verification:</strong> Agents must enter the Client's 4-digit Arrival Code to start the timer.</li>
            <li><strong>Auto-Release:</strong> If a Client does not release payment within 72 hours of work being marked "Finished", funds are automatically moved to the Agent's wallet.</li>
            <li><strong>SOS System:</strong> Provides one-tap access to 112/199/122 and alerts emergency contacts via SMS (Termii) with GPS coordinates.</li>
        </ul>
      </section>

      <section>
        <h2>5. INDEPENDENT CONTRACTOR STATUS</h2>
        <p>
            Agents are <strong>Independent Contractors</strong> and not employees of BeeSeek. Agents set their own pricing (min ₦500), provide their own tools, and manage their own taxes. BeeSeek acts solely as a marketplace facilitator.
        </p>
      </section>

      <section>
        <h2>6. LIMITATION OF LIABILITY</h2>
        <p>
            BeeSeek is not liable for the quality of work performed, any property damage, or disputes arising between users. Users use the platform at their own risk.
        </p>
      </section>
    </PolicyLayout>
  );
}
