
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>TrustVault | Immutable Audit Layer for AI</title>
      </Head>

      <header className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <img src="/logo.png" alt="TrustVault Logo" className="mx-auto mb-6 w-24" />
        <h1 className="text-6xl font-bold">TrustVault</h1>
        <p className="text-2xl mt-4 opacity-90">Capture. Certify. Verify. Comply.</p>
      </header>

      <section className="text-center py-16">
        <h2 className="text-4xl text-blue-600 font-bold mb-8">✨ Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow hover:bg-blue-50 transition">🛡️ <b>Immutable Storage + Merkle Hashing</b><p>Ensure tamper-proof records of AI interactions.</p></div>
          <div className="bg-white p-8 rounded-xl shadow hover:bg-blue-50 transition">📜 <b>Daily PDF Certification</b><p>Generate sealed audit reports for traceability.</p></div>
          <div className="bg-white p-8 rounded-xl shadow hover:bg-blue-50 transition">🏪 <b>Evaluator Marketplace</b><p>Access 3rd party evaluators to verify model outputs.</p></div>
          <div className="bg-white p-8 rounded-xl shadow hover:bg-blue-50 transition">⚙️ <b>Compliance Automation</b><p>Automate regulatory compliance processes.</p></div>
        </div>
      </section>

      <section className="text-center py-16">
        <h2 className="text-3xl text-blue-600 font-bold mb-4">📈 Market Opportunity</h2>
        <p className="text-lg">TAM: $15B | SAM: $2.5B | SOM: $100M wedge from regulated AI teams</p>

        <h2 className="text-3xl text-blue-600 font-bold mt-12 mb-4">💰 Business Model</h2>
        <p className="text-lg">Free → $199 Pro → $999 Compliance → $50k+ Enterprise</p>

        <h2 className="text-3xl text-blue-600 font-bold mt-12 mb-4">🗺️ Roadmap</h2>
        <p className="text-lg">Immutable Vault → Real-time Proxy → Evaluator Marketplace → Compliance Automation</p>
      </section>

      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <a href="https://trustvault-investor.streamlit.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition">
          💼 Launch Investor Agent
        </a>
      </section>

      <footer className="text-center py-10 text-gray-500 text-sm">
        <p>© 2025 TrustVault.ai — All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-blue-500">LinkedIn</a> | 
          <a href="#" className="mx-2 hover:text-blue-500">Twitter</a> | 
          <a href="mailto:founder@trustvault.ai" className="mx-2 hover:text-blue-500">Email</a>
        </div>
      </footer>
    </div>
  )
}
