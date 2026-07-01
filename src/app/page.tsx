"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <Link href="/" className="logo-link logo-font" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Image src="/logo.png" alt="PicJob Logo" width={36} height={36} style={{ borderRadius: "0.5rem" }} />
            <span>PicJob</span>
          </Link>

          <button
            className={`mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
              <li>
                <Link href="#problems" onClick={() => setMobileMenuOpen(false)}>
                  The Problem
                </Link>
              </li>
              <li>
                <Link href="#features" onClick={() => setMobileMenuOpen(false)}>
                  Trust Pillars
                </Link>
              </li>
              <li>
                <Link href="/assets" onClick={() => setMobileMenuOpen(false)}>
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/escrow" onClick={() => setMobileMenuOpen(false)}>
                  Escrow
                </Link>
              </li>
              {mobileMenuOpen && (
                <>
                  <li style={{ marginTop: "1rem" }}>
                    <Link
                      href="/login"
                      className="btn btn-secondary"
                      style={{ width: "100%" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log In
                    </Link>
                  </li>
                  <li style={{ marginTop: "0.5rem" }}>
                    <Link
                      href="/get-started"
                      className="btn btn-primary"
                      style={{ width: "100%" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>

          <div className="nav-cta" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/login" style={{ fontWeight: "600", color: "var(--text-dark)", textDecoration: "none" }}>
              Log In
            </Link>
            <Link href="/get-started" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Find the right person. Get the job done. Get paid.
              </h1>
              <p className="hero-description">
                PicJob connects businesses with Africa's top freelance talent.
                Post a gig, hire with confidence, and pay securely through
                built-in escrow.
              </p>
              <div className="hero-ctas">
                <Link href="/get-started?role=client" className="btn btn-primary">
                  Hire Talent
                </Link>
                <Link href="/get-started?role=freelancer" className="btn btn-secondary">
                  Find Work
                </Link>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="backdrop-circle"></div>
              <div className="backdrop-square"></div>
              <div className="hero-image-wrapper">
                <Image
                  src="/hero-creative.jpg"
                  alt="African freelancer working on laptop"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Ribbon Section */}
        <section className="stats-ribbon">
          <div className="container stats-grid">
            <div>
              <div className="stat-val">$455B</div>
              <div className="stat-lbl">Freelance Market Size</div>
            </div>
            <div>
              <div className="stat-val">15%</div>
              <div className="stat-lbl">Annual Growth Rate</div>
            </div>
            <div>
              <div className="stat-val">$50B+</div>
              <div className="stat-lbl">Digital Asset Opportunity</div>
            </div>
            <div>
              <div className="stat-val">59%</div>
              <div className="stat-lbl">Freelancers Facing Payment Issues</div>
            </div>
          </div>
        </section>

        {/* The Problem & Pain Points Section */}
        <section className="problem-section" id="problems">
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className="section-title">The Market Problem</h2>
            <p style={{ color: "var(--text-muted)", marginTop: "-2.5rem", marginBottom: "2rem", fontSize: "1.1rem" }}>
              Freelancers and clients are underserved by rigid systems and payment bottlenecks.
            </p>
            
            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-icon">✖</div>
                <h3 className="problem-title">Inflexible Platforms</h3>
                <p className="problem-desc">Overly strict platform rules limit freelancer flexibility and client options, creating unnecessary friction.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon">✖</div>
                <h3 className="problem-title">Opaque Trust Systems</h3>
                <p className="problem-desc">Lack of transparent verification, review mechanisms, or credentials portfolios to build genuine transactional trust.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon">✖</div>
                <h3 className="problem-title">Emerging Markets Gap</h3>
                <p className="problem-desc">Lack of direct integrations with local payment gateways like Paystack and Flutterwave, causing payment delays.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon">✖</div>
                <h3 className="problem-title">Insecure Asset Trading</h3>
                <p className="problem-desc">Trading YouTube channels, AdSense accounts, and domains is highly complex, insecure, and prone to escrow fraud.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Trust Section */}
        <section className="trust-section" id="features">
          <div className="container">
            <h2 className="section-title">Built for Trust</h2>
            
            <div className="cards-grid">
              {/* Card 1 */}
              <div className="trust-card">
                <div className="card-image-wrapper">
                  <Image
                    src="/escrow.jpg"
                    alt="Professionals shaking hands"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Secure Escrow</h3>
                  <p className="card-text">
                    Funds are held safely until work is approved. No more
                    chasing invoices.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="trust-card">
                <div className="card-image-wrapper">
                  <Image
                    src="/assets.jpg"
                    alt="Laptop showing graphs and metrics"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Digital Assets</h3>
                  <p className="card-text">
                    Sell templates, designs, code, and digital products directly
                    on the platform.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="trust-card">
                <div className="card-image-wrapper">
                  <Image
                    src="/portfolio.jpg"
                    alt="Freelancer using smartphone and smiling"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Social Portfolio</h3>
                  <p className="card-text">
                    Showcase your work, grow your audience, and let clients come
                    to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Ecosystem Pillars Section */}
        <section className="ecosystem-section">
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className="section-title">Our Ecosystem Pillars</h2>
            
            <div className="ecosystem-grid text-left">
              {/* Card 1 */}
              <div className="ecosystem-card">
                <div className="eco-header">
                  <div className="eco-number">01</div>
                  <h3 className="eco-title">Verification Process</h3>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                  Every professional undergoes a rigorous identity and credential verification process to ensure only qualified experts join.
                </p>
                <ul className="eco-list">
                  <li>Portfolio checks and verification</li>
                  <li>Background identity screenings</li>
                  <li>Automated skill assessments</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="ecosystem-card">
                <div className="eco-header">
                  <div className="eco-number">02</div>
                  <h3 className="eco-title">AI-Powered Rankings</h3>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                  Our AI ranking engine dynamically evaluates and scores professionals, prioritizing quality talent for clients.
                </p>
                <ul className="eco-list">
                  <li>Delivery speed evaluations</li>
                  <li>Client rating and feedback reviews</li>
                  <li>Dispute history and repeat hire rates</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="ecosystem-card">
                <div className="eco-header">
                  <div className="eco-number">03</div>
                  <h3 className="eco-title">Flexible Milestone Terms</h3>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                  Reduce contract risk with structured payment phases, giving security to both clients and service providers.
                </p>
                <ul className="eco-list">
                  <li>Upfront terms setup (e.g. 50% terms)</li>
                  <li>Automated deal contract generation</li>
                  <li>DNS and file verification checks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Flow Section */}
        <section className="flow-section">
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            
            <div className="flow-grid">
              <div className="flow-card">
                <div className="flow-badge">1</div>
                <h3 className="flow-title">Set Up Deal</h3>
                <p className="flow-desc">Define details, milestones, and asset specs on our wizard portal.</p>
              </div>
              <div className="flow-card">
                <div className="flow-badge">2</div>
                <h3 className="flow-title">Fund Escrow</h3>
                <p className="flow-desc">Client deposits funds safely using Paystack or Flutterwave.</p>
              </div>
              <div className="flow-card">
                <div className="flow-badge">3</div>
                <h3 className="flow-title">Deliver & Verify</h3>
                <p className="flow-desc">Freelancer completes the work; our assistant runs quality audits.</p>
              </div>
              <div className="flow-card">
                <div className="flow-badge">4</div>
                <h3 className="flow-title">Painless Payout</h3>
                <p className="flow-desc">Upon approval, funds settle directly to the seller's local currency bank account.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="biz-section">
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className="section-title">Our Revenue Model</h2>
            <p style={{ color: "var(--text-muted)", marginTop: "-2.5rem", marginBottom: "2rem", fontSize: "1.1rem" }}>
              Transparent fee structures aligned with freelancer and buyer success.
            </p>
            
            <div className="biz-grid">
              <div className="biz-card">
                <div className="biz-icon">💼</div>
                <h3 className="biz-title">Freelance Matches</h3>
                <div className="biz-fee">5% – 10%</div>
                <p className="biz-desc">Commission fee on completed freelance service transactions.</p>
              </div>
              <div className="biz-card">
                <div className="biz-icon">🪙</div>
                <h3 className="biz-title">Asset Marketplace</h3>
                <div className="biz-fee">Revenue Split</div>
                <p className="biz-desc">Commission fee on completed YouTube, AdSense, and domain listings.</p>
              </div>
              <div className="biz-card">
                <div className="biz-icon">🛡️</div>
                <h3 className="biz-title">AI Escrow Service</h3>
                <div className="biz-fee">Facilitation Fee</div>
                <p className="biz-desc">Service fee for managing secure third-party contract transactions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Banner Section */}
        <section className="footer-banner-section">
          <div className="container footer-banner-container">
            <div className="footer-image-wrapper">
              <Image
                src="/team-creatives.jpg"
                alt="Creative African team collaborating around a laptop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="footer-content">
              <h2 className="footer-banner-title">
                Built by Africans, for Africa's future.
              </h2>
              <p className="footer-banner-text">
                We believe talent is everywhere. Opportunity should be too. PicJob levels the playing field for freelancers across the continent.
              </p>
              <Link href="/get-started" className="btn btn-accent">
                Join the Community
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer Links */}
      <Footer />

      {/* Orange Stripe Base */}
      <footer className="footer-bottom-stripe"></footer>
    </>
  );
}
