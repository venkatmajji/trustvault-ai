import React from "react";
import { Helmet } from "react-helmet";

export default function LandingPage() {
  return (
    <main className="bg-[#102A43] text-white min-h-screen font-sans">
      <Helmet>
        <title>TrustVault AI – Enhancing trust in your AI systems</title>
        <meta name="description" content="Enterprise-Ready AI Verifiability and Compliance Platform" />
      </Helmet>

      {/* Hero Section */}
      <header className="text-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">TrustVault AI</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          AI Verifiability is building the trust layer for AI by making model outputs independently auditable, traceable, and provable — turning AI from a black box into a verifiable system.
        </p>
        <a
          href="YOUR_GOOGLE_FORM_URL_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#3AB0FF] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#329fdc] transition"
        >
          Get Started
        </a>
        <p className="mt-12 text-sm text-slate-300">
          Growing trust with dev leads, Finance and Healthcare companies worldwide!
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
            <p>Drop-in SDK for seamless integration. Tap into trusted evaluators to validate AI behavior and risk.</p>
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
          ></iframe>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="bg-[#627D98] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Waitlist</h2>
        <p className="text-lg mb-6">Be the first to try TrustVault AI and shape the future of Responsible AI.</p>
        <form
          className="max-w-md mx-auto"
          action="YOUR_GOOGLE_FORM_FORMRESPONSE_URL_HERE"
          method="POST"
          target="_blank"
        >
          <input
            type="email"
            name="entry.YOUR_ENTRY_ID_HERE"
            placeholder="Your email"
            className="w-full p-3 rounded-md text-[#102A43] mb-4"
            aria-label="Email address for waitlist subscription"
            required
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
