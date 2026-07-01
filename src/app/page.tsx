"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="/" className="logo-link logo-font">
            THE Job
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
                <Link href="#freelancers" onClick={() => setMobileMenuOpen(false)}>
                  Freelancers
                </Link>
              </li>
              <li>
                <Link href="#businesses" onClick={() => setMobileMenuOpen(false)}>
                  Businesses
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
                THE Job connects businesses with Africa's top freelance talent.
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

        {/* Built for Trust Section */}
        <section className="trust-section" id="escrow">
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
              <div className="trust-card" id="assets">
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
              <div className="trust-card" id="freelancers">
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

        {/* Footer Banner Section */}
        <section className="footer-banner-section" id="businesses">
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
                We believe talent is everywhere. Opportunity should be too. THE
                Job levels the playing field for freelancers across the continent.
              </p>
              <Link href="/get-started" className="btn btn-accent">
                Join the Community
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Orange Stripe Base */}
      <footer className="footer-bottom-stripe"></footer>
    </>
  );
}
