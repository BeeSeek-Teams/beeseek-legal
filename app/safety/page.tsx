// Page for Safety Disclaimer
import PolicyLayout from "@/components/PolicyLayout";

export default function SafetyPage() {
  return (
    <PolicyLayout title="Safety & Emergency Disclaimer" lastUpdated="March 18, 2026" version="2.0">
      <section>
        <p>BeeSeek prioritizes the physical and digital safety of our community. Please review our safety frameworks and limitations.</p>
      </section>
      <section>
        <h2>1. SOS EMERGENCY SYSTEM</h2>
        <p>Both app platforms provide one-tap access to Nigerian emergency numbers: General Emergency (112), Police (199), and Medical (122).</p>
      </section>
      <section>
        <h2>2. ALERTS & NOTIFICATIONS</h2>
        <p>The "Alert Emergency Contact" feature sends your <strong>real-time GPS coordinates</strong> and device battery level to your designated emergency contact via SMS (Termii gateway).</p>
      </section>
      <section>
        <h2>3. SAFETY PROTOCOLS</h2>
        <ul>
            <li><strong>Agent Drift Detection:</strong> Agents more than 50km from their Bee locations are hidden from search to prevent unauthorized off-area services.</li>
            <li><strong>Arrival Verification:</strong> Our 4-digit code system ensures physical arrival logs and prevents "ghost" jobs.</li>
        </ul>
      </section>
      <section>
        <h2>4. LIMITATION OF LIABILITY</h2>
        <p>BeeSeek's SOS feature is <strong>NOT</strong> a substitute for direct communication with law enforcement or emergency services. BeeSeek is not responsible for SMS network delays or third-party response times.</p>
      </section>
    </PolicyLayout>
  );
}
