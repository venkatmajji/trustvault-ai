
import React from "react";
import { Helmet } from "react-helmet";

export default function LandingPage() {
  return (
    <main className="bg-[#102A43] text-white min-h-screen font-sans">
      <Helmet>
        <title>TrustVault AI – Enhancing trust in your AI systems </title>
        <meta name="description" content="Enterprise-Ready AI Verifiability and Compliance Platform" />
        <meta property="og:title" content="TrustVault AI – Enhancing trust in your AI systems" />
        <meta property="og:description" content="Enterprise-Ready AI Verifiability and Compliance Platform" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TrustVault AI – Enhancing trust in your AI systems" />
        <meta name="twitter:description" content="Enterprise-Ready AI Verifiability and Compliance Platform" />
      </Helmet>

      {/* Hero Section */}
      <header className="text-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">TrustVault AI</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          AI Verifiability is building the trust layer for AI by making model outputs independently auditable, traceable, and provable — turning AI from a black box into a verifiable system.
        </p>
        <button className="bg-[#3AB0FF] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#329fdc] transition">
          Get Started
        </button>
        <p className="mt-12 text-sm text-slate-300">
          Gowing trust with dev leads, Finance and Healthcare companies worldwide!
        </p>
      </header>

   


      
      {/* Features Section */}
      <section className="bg-white text-[#102A43] py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why TrustVault AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <article>
            <h3 className="text-xl font-semibold mb-2">🔒 Immutable Audit Layer</h3>
            <p>Ensure AI and LLM decisions can be verified anytime with audit-proof records.</p>
          </article>
          <article>
            <h3 className="text-xl font-semibold mb-2">📜 Easy Compliance</h3>
            <p>Automatically align with EU AI Act, SOC 2, HIPAA and more.</p>
          </article>
          <article>
            <h3 className="text-xl font-semibold mb-2">⚡ Fast Integration & 💡 Evaluator Marketplace</h3>
            <p>Drop-in SDK for seamless integration with your AI workflows.</p>
            <p>Tap into trusted evaluators to validate AI behavior and risk.</p>
          </article>
            </div>
      </section>

      {/* Demo Video Section */}
      <section className="bg-[#F0F4F8] text-[#102A43] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">See TrustVault AI in Action</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Watch a quick walkthrough of how TrustVault AI works to keep customers trusting your AI systems.
        </p>
        <div className="max-w-3xl mx-auto">
          <iframe
            className="w-full aspect-video rounded-xl shadow-lg"
            src="https://www.youtube.com/watch?reload=9&v=h7zb0Y2eoUQ&feature=youtu.be"
            title="TrustVault AI Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            aria-label="Demo video walkthrough for TrustVault AI"
          ></iframe>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-white text-[#102A43] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Built for the AI First Companies </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          TrustVault AI gives every engineering team the power to move faster and deliver value  — no plumbing required to keep your legal, compliance teams and customers happy.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-[#F0F4F8] rounded-lg shadow-md p-6 max-w-xs">
            <h4 className="text-xl font-semibold mb-2">1️⃣ Immutable and Verifiable AI Records </h4>
            <p><b></b>"Never lose trust or get caught without proof." </b></p>
           <p>   Every AI interaction is captured, hashed, and sealed to create tamper-proof, immutable audit trails — making it easy to certify decisions and prove compliance during audits or disputes.
              Why this matters → Customers need verifiable proof of AI behavior to avoid fines, lawsuits, or reputational risk.</p>
          </div>
          <div className="bg-[#F0F4F8] rounded-lg shadow-md p-6 max-w-xs">
            <h4 className="text-xl font-semibold mb-2">2️⃣ Automated Compliance for AI Regulations</h4>
            <p>"EU AI Act, HIPAA, SOC 2 — handled automatically."
                TrustVault auto-generates certified records and supports out-of-the-box alignment with major frameworks → saving legal, security and engineering teams hundreds of hours.</p>
          </div>
          <div className="bg-[#F0F4F8] rounded-lg shadow-md p-6 max-w-xs">
            <h4 className="text-xl font-semibold mb-2">3️⃣ Plug & Play with Any AI / LLM Workflow</h4>
            <p>"Instant SDK integration → no heavy lift."
                With lightweight SDKs and APIs, TrustVault can wrap and track any AI / LLM system in real-time without affecting performance.</p>
          </div>
          <div className="bg-[#F0F4F8] rounded-lg shadow-md p-6 max-w-xs">
            <h4 className="text-xl font-semibold mb-2">4️⃣ Evaluator Marketplace for Independent Verification</h4>
            <p>"Third-party assurance, on-demand."
              Beyond self-certifying, TrustVault offers a growing marketplace of expert evaluators who can assess and certify AI models, offering an additional layer of trust.</p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="bg-[#627D98] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Waitlist</h2>
        <p className="text-lg mb-6">Be the first to try TrustVault AI and shape the future of Responsbile AI </p>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded-md text-[#102A43] mb-4"
            aria-label="Email address for waitlist subscription"
          />
          <button className="bg-[#3AB0FF] w-full py-3 rounded-xl font-semibold hover:bg-[#329fdc] transition">
            Join Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#102A43] text-slate-400 text-center text-sm py-6">
        © 2025 TrustVault AI. All rights reserved.
      </footer>
    </main>
  );
}
