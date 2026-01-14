export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">
            Terms of Service
          </h1>
          <p className="mt-3 text-slate-600">
            Last updated: January 14, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600">
              By accessing and using Netblade, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Use License</h2>
            <p className="text-slate-600 mb-4">
              Permission is granted to temporarily access the materials (information or software)
              on Netblade's website for personal, non-commercial transitory viewing only. This is
              the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Accounts</h2>
            <p className="text-slate-600 mb-4">
              When you create an account with us, you must provide information that is accurate,
              complete, and current at all times. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Safeguarding your password and account information</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring you are of legal age to use our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Trading and Investment Risks</h2>
            <p className="text-slate-600 mb-4">
              <strong>IMPORTANT:</strong> Trading and investing in financial markets involves substantial risk
              of loss and is not suitable for every investor. You acknowledge that:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>You may lose all or more than your initial investment</li>
              <li>Past performance does not guarantee future results</li>
              <li>You are solely responsible for your trading decisions</li>
              <li>Netblade does not provide personalized investment advice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Educational Content</h2>
            <p className="text-slate-600">
              The educational content provided on Netblade is for informational purposes only and
              should not be considered as financial advice. We strive to provide accurate information,
              but we cannot guarantee the completeness or accuracy of all content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Prohibited Uses</h2>
            <p className="text-slate-600 mb-4">
              You may not use our service:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Termination</h2>
            <p className="text-slate-600">
              We may terminate or suspend your account and bar access to the service immediately,
              without prior notice or liability, under our sole discretion, for any reason whatsoever
              and without limitation, including but not limited to a breach of the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-slate-600">
              In no event shall Netblade, nor its directors, employees, partners, agents, suppliers,
              or affiliates, be liable for any indirect, incidental, special, consequential, or punitive
              damages, including without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Governing Law</h2>
            <p className="text-slate-600">
              These Terms shall be interpreted and governed by the laws of India, without regard to
              its conflict of law provisions. Our failure to enforce any right or provision of these
              Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Changes to Terms</h2>
            <p className="text-slate-600">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any
              time. If a revision is material, we will provide at least 30 days notice prior to any
              new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Contact Information</h2>
            <p className="text-slate-600">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-700">Email: legal@netblade.com</p>
              <p className="text-slate-700">Address: [Company Address]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}