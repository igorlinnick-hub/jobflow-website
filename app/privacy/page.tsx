import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
            <p>Last updated: March 2026</p>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
              <p>We collect information you provide directly: name, email, resume, job preferences, and writing style samples. We also collect usage data such as pages visited and features used.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
              <p>Your data is used to: find matching jobs, generate personalized cover letters, submit applications on your behalf, and improve our services. We never sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">3. Data Storage & Security</h2>
              <p>Your data is stored securely using Supabase with row-level security. Resumes are stored in encrypted storage. We use industry-standard security practices to protect your information.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">4. Third-Party Services</h2>
              <p>We use third-party services including Supabase (database), Google OAuth (authentication), and job platforms (Indeed, RemoteOK, Wellfound) to provide our services.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Your Rights</h2>
              <p>You can request to view, update, or delete your personal data at any time through your account settings or by contacting us at support@jobflow.app.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Contact</h2>
              <p>If you have questions about this privacy policy, contact us at support@jobflow.app.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
