// Page for EULA
import PolicyLayout from "@/components/PolicyLayout";

export default function EULAPage() {
  return (
    <PolicyLayout title="End User License Agreement" lastUpdated="March 18, 2026" version="2.0">
      <section>
        <p>This End User License Agreement ("EULA") is a legal agreement between you and BeeSeek Technologies. It governs your use of the BeeSeek Client and BeeSeek Agent mobile applications.</p>
      </section>
      <section>
        <h2>1. LICENSE GRANT</h2>
        <p>BeeSeek grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the Application strictly in accordance with these Terms.</p>
      </section>
      <section>
        <h2>2. APPLE AND GOOGLE STORES</h2>
        <p>You acknowledge that this EULA is between you and BeeSeek only, and not with Apple, Inc. or Google, Inc. BeeSeek, not Apple or Google, is solely responsible for the Application and the content thereof.</p>
      </section>
      <section>
        <h2>3. USER GENERATED CONTENT</h2>
        <p>The Application includes interactive features that allow users to post content. You agree that you will not post content that is illegal, defamatory, or violates the rights of third parties.</p>
      </section>
    </PolicyLayout>
  );
}
