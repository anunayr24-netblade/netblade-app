export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-slate-600">
            Last updated: January 14, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 mb-4">
              We collect information you provide directly to us, such as when you create an account,
              use our services, or contact us for support. This may include:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Trading preferences and activity data</li>
              <li>Communication preferences</li>
              <li>Device and usage information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Information Sharing</h2>
            <p className="text-slate-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent, except as described in this policy:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>With service providers who assist us in operating our platform</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>In connection with a business transfer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Security</h2>
            <p className="text-slate-600">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Your Rights</h2>
            <p className="text-slate-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-slate-600">
              We use cookies and similar technologies to enhance your experience, analyze usage,
              and assist in our marketing efforts. You can control cookie preferences through your
              browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Changes to This Policy</h2>
            <p className="text-slate-600">
              We may update this privacy policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Contact Us</h2>
            <p className="text-slate-600">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-700">Email: privacy@netblade.com</p>
              <p className="text-slate-700">Address: [Company Address]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}