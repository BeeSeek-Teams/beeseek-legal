// Page for Privacy Policy
import PolicyLayout from "@/components/PolicyLayout";

export default function PrivacyPage() {
  return (
    <PolicyLayout 
      title="Privacy Policy" 
      lastUpdated="March 18, 2026" 
      version="2.0"
    >
      <section>
        <p>
            This Privacy Policy describes how BeeSeek Technologies ("BeeSeek," "we," "us," or "our") collects, uses, stores, shares, and protects personal information obtained through the BeeSeek Client and BeeSeek Agent mobile applications (collectively, the "Platform"). This Policy complies with the Nigeria Data Protection Act (NDPA) 2023, the Nigeria Data Protection Regulation (NDPR) 2019, and applicable international data protection principles.
        </p>
        <p>
            By creating a BeeSeek account, you consent to the data practices described in this Policy. If you do not agree with this Policy, do not create an account or use the Platform.
        </p>
      </section>

      <section>
        <h2>1. DATA CONTROLLER</h2>
        <p>
            <strong>BeeSeek Technologies</strong><br />
            Email: support@beeseek.site<br />
            Website: https://beeseek.site<br />
            Role: Data Controller under the NDPA/NDPR
        </p>
      </section>

      <section>
        <h2>2. PERSONAL DATA WE COLLECT</h2>
        <h3>2.1. INFORMATION YOU PROVIDE DIRECTLY</h3>
        <ul>
            <li><strong>Identity:</strong> First name, last name, age (18+).</li>
            <li><strong>Contact:</strong> Email address, mobile phone number (+234).</li>
            <li><strong>Government ID:</strong> 11-digit NIN (National Identification Number) for identity verification via Monnify.</li>
            <li><strong>Security:</strong> Password (hashed with bcrypt), 4-digit transaction PIN.</li>
            <li><strong>Media:</strong> Profile photo, portfolio images (Agents), chat images, voice notes.</li>
            <li><strong>Financial (Agents):</strong> Bank account details for withdrawals.</li>
        </ul>

        <h3>2.2. INFORMATION COLLECTED AUTOMATICALLY</h3>
        <ul>
            <li><strong>Location Data:</strong> GPS coordinates (latitude, longitude) collected in the <strong>foreground only</strong>. We do NOT track location in the background.</li>
            <li><strong>Device Info:</strong> Model, OS version, push notification tokens (FCM/APNs), battery level (SOS only).</li>
            <li><strong>Biometric Capability:</strong> Local check for Face ID/Fingerprint support (we do NOT collect raw biometric data).</li>
        </ul>
      </section>

      <section>
        <h2>3. HOW WE USE YOUR DATA</h2>
        <ul>
            <li><strong>Service Delivery:</strong> Matching clients with nearby agents using geo-proximity (default 15km).</li>
            <li><strong>Identity Verification:</strong> Verifying NIN via Monnify and conducting AML/PEP screening via YouVerify.</li>
            <li><strong>Safety:</strong> SOS alerts sent from the user's own device via the native SMS app, Agent drift detection (50km safety filter).</li>
            <li><strong>Payments:</strong> Processing escrow transactions, virtual accounts, and disbursements.</li>
            <li><strong>Communication:</strong> Real-time chat, transactional emails via Resend, and push notifications.</li>
        </ul>
      </section>

      <section>
        <h2>4. DATA SHARING</h2>
        <p>We share limited data with the following essential third-party processors:</p>
        <ul>
            <li><strong>Monnify:</strong> NIN verification and financial disbursements.</li>
            <li><strong>Google Maps:</strong> Reverse geocoding for location context.</li>
            <li><strong>Termii:</strong> SMS delivery for OTP verification (when enabled).</li>
            <li><strong>YouVerify:</strong> AML/PEP/Sanctions screening.</li>
            <li><strong>Cloudinary:</strong> Secure image hosting and delivery.</li>
            <li><strong>Resend:</strong> Transactional email delivery.</li>
        </ul>
        <p><strong>We NEVER sell, rent, or trade your personal data to third parties or advertisers.</strong></p>
      </section>

      <section>
        <h2>5. DATA SECURITY & RETENTION</h2>
        <ul>
            <li><strong>Encryption:</strong> All traffic uses HTTPS/TLS. Passwords/OTPs are salted and hashed (bcrypt).</li>
            <li><strong>Storage:</strong> Authentication tokens and transaction PINs are stored in hardware-backed SecureStore/Keychain.</li>
            <li><strong>Retention:</strong> Active data persists for the life of the account. Deactivated accounts have a 30-day recovery window before permanent scrubbing.</li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
