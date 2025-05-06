
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>TrustVault | Verifiable & Compliant AI for Teams</title>
      </Head>

      <header className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <img src="/logo.png" alt="TrustVault Logo" className="mx-auto mb-6 w-24" />
        <h1 className="text-5xl font-bold">TrustVault</h1>
        <p className="text-xl mt-4 opacity-90">Enterprise-Ready AI Verifiability and Compliance Platform</p>
        <a href="#signup" className="inline-block bg-white text-blue-600 px-8 py-3 mt-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition">Join the Waitlist</a>
      </header>

      <section className="text-center py-16">
        <h2 className="text-3xl text-blue-600 font-bold mb-8">Why TrustVault?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow hover:bg-blue-50 transition">🔒 <b>Immutable Audit Layer</b><p>Ensure AI and LLM decisions can be verified anytime with audit-proof records.</p></div>
          <div className="bg-white p-8 rounded-xl shadow hover:bg-blue-50 transition">📜 <b>Easy Compliance</b><p>Automatically align with EU AI Act, SOC 2, HIPAA and more.</p></div>
          <div className="bg-white p-8 rounded-xl shadow hover:bg-blue-50 transition">⚡ <b>Fast Integration</b><p>Drop-in SDK for seamless integration with your AI workflows.</p></div>
          <div className="bg-white p-8 rounded-xl shadow hover:bg-blue-50 transition">💡 <b>Evaluator Marketplace</b><p>Tap into trusted evaluators to validate AI behavior and risk.</p></div>
        </div>
      </section>

      <section id="signup" className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h2 className="text-3xl font-bold mb-4">Be First to Get Access</h2>
        <p className="text-lg mb-6">Join the waitlist and get early access + special launch offers.</p>
        <form className="max-w-lg mx-auto">
          <input type="email" placeholder="Your email" className="p-4 w-2/3 rounded-l-lg text-gray-900" />
          <button type="submit" className="p-4 bg-white text-blue-600 font-bold rounded-r-lg">Notify Me</button>
        </form>
      </section>

      <footer className="text-center py-10 text-gray-500 text-sm">
        <p>© 2025 TrustVault.ai — Built for compliant AI teams.</p>
      </footer>
    </div>
  )
}
