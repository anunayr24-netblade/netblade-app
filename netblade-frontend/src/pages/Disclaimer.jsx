export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">
            Disclaimer
          </h1>
          <p className="mt-3 text-slate-600">
            Last updated: January 14, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">General Disclaimer</h2>
            <p className="text-slate-600">
              The information provided on Netblade is for educational and informational purposes only.
              It does not constitute financial advice, investment advice, trading advice, or any other
              type of professional advice. You should not rely on this information as the sole basis
              for making investment or trading decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Investment Risks</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ High Risk Warning</h3>
              <p className="text-red-700 mb-4">
                Trading and investing in financial markets involves substantial risk of loss. You may
                lose some or all of your investment capital. Past performance does not guarantee future
                results. There are no guaranteed returns in trading or investing.
              </p>
              <ul className="list-disc list-inside text-red-700 space-y-2 ml-4">
                <li>You could lose more money than you invest</li>
                <li>Market conditions can change rapidly and unexpectedly</li>
                <li>Leveraged trading can amplify both gains and losses</li>
                <li>You are solely responsible for your trading decisions</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">No Professional Advice</h2>
            <p className="text-slate-600 mb-4">
              Netblade is not a registered investment advisor, broker-dealer, or financial planner.
              The content on this website:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Is not personalized to your financial situation</li>
              <li>Does not consider your risk tolerance or investment objectives</li>
              <li>Should not be construed as an offer to buy or sell securities</li>
              <li>Does not guarantee any specific outcome or return</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Educational Content</h2>
            <p className="text-slate-600">
              All educational materials, articles, tutorials, and resources provided on Netblade are
              for learning purposes only. While we strive to provide accurate and up-to-date information,
              we cannot guarantee the completeness, accuracy, or timeliness of any content. Market
              conditions and regulations change frequently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Content</h2>
            <p className="text-slate-600">
              Netblade may contain links to third-party websites or resources. We are not responsible
              for the availability, accuracy, or content of these external sites. The inclusion of any
              link does not imply endorsement or approval of the linked site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">No Warranty</h2>
            <p className="text-slate-600">
              The service is provided on an "as is" and "as available" basis. Netblade makes no
              representations or warranties of any kind, express or implied, as to the operation of
              the service or the information, content, or materials included therein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-600">
              In no event shall Netblade, its directors, employees, or affiliates be liable for any
              direct, indirect, incidental, special, consequential, or punitive damages arising out
              of your use of the service or inability to use the service, even if advised of the
              possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Jurisdictional Limitations</h2>
            <p className="text-slate-600">
              The content on Netblade may not be appropriate for users in all jurisdictions. Some
              products or services discussed may not be available in all countries. You are responsible
              for ensuring that your use of the website complies with applicable local laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Forward-Looking Statements</h2>
            <p className="text-slate-600">
              Any discussions of future market conditions, economic forecasts, or investment strategies
              are speculative and should not be relied upon as predictions. Actual results may differ
              materially from any forward-looking statements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">User Responsibility</h2>
            <p className="text-slate-600 mb-4">
              By using Netblade, you acknowledge that:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>You understand the risks involved in trading and investing</li>
              <li>You are solely responsible for your financial decisions</li>
              <li>You should consult with qualified financial professionals</li>
              <li>You should never trade with money you cannot afford to lose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-600">
              If you have questions about this disclaimer or need clarification, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-700">Email: support@netblade.com</p>
              <p className="text-slate-700">Address: [Company Address]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}