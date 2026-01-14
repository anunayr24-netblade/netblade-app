export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Contact Us
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Have questions or need support? Get in touch with the Netblade team.
            We're here to help you succeed in your trading journey.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Form */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-teal-600 py-2 text-sm font-semibold text-white
                         hover:bg-teal-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Get in Touch</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 text-xs">📧</span>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>support@netblade.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 text-xs">💬</span>
                  </div>
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p>Available 9 AM - 6 PM IST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 text-xs">📚</span>
                  </div>
                  <div>
                    <p className="font-medium">Help Center</p>
                    <p>FAQs and guides</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Office Hours</h3>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}