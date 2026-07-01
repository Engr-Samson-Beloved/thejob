"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

function EscrowWizardContent() {
  const searchParams = useSearchParams();
  const assetTitle = searchParams.get("title") || "";
  const assetPrice = searchParams.get("price") || "";

  const [step, setStep] = useState(1);
  const [dealType, setDealType] = useState<"freelance" | "asset">("freelance");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [freelancerEmail, setFreelancerEmail] = useState("");
  const [terms, setTerms] = useState("50% upfront, 50% on approval of deliverables");
  const [isLoading, setIsLoading] = useState(false);

  // Pre-fill parameters if redirected from Marketplace
  useEffect(() => {
    if (assetTitle) {
      setTitle(assetTitle);
      setDealType("asset");
    }
    if (assetPrice) {
      setAmount(assetPrice);
    }
  }, [assetTitle, assetPrice]);

  const handleCreateDeal = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2); // Move to Payment Step
    }, 1200);
  };

  const handleSimulatePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3); // Move to Escrow Active Step
    }, 1500);
  };

  const handleReleaseFunds = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(4); // Move to Completed Step
    }, 1200);
  };

  return (
    <div className="page-wrap">
      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <Link href="/" className="logo-link logo-font" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Image src="/logo.png" alt="PicJob Logo" width={36} height={36} style={{ borderRadius: "0.5rem" }} />
            <span>PicJob</span>
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/assets">Marketplace</Link></li>
              <li><Link href="/escrow" className="active" style={{ color: "var(--brand-orange)" }}>Escrow</Link></li>
            </ul>
          </nav>
          <div className="nav-cta">
            <Link href="/get-started" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ padding: "4rem 1.5rem 6rem 1.5rem", maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 className="logo-font" style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>AI-Powered Escrow</h1>
          <p style={{ color: "var(--text-muted)" }}>
            Secure transactions and milestone management for digital assets and freelancing.
          </p>
        </div>

        {/* Wizard Progress Bar */}
        <div className="timeline">
          <div
            className="timeline-progress"
            style={{ width: step === 1 ? "12%" : step === 2 ? "37%" : step === 3 ? "62%" : "88%" }}
          ></div>
          <div className={`timeline-step ${step >= 1 ? "active" : ""} ${step > 1 ? "completed" : ""}`}>
            <div className="step-node">{step > 1 ? "✓" : "1"}</div>
            <div className="step-label">Deal Details</div>
          </div>
          <div className={`timeline-step ${step >= 2 ? "active" : ""} ${step > 2 ? "completed" : ""}`}>
            <div className="step-node">{step > 2 ? "✓" : "2"}</div>
            <div className="step-label">Payment</div>
          </div>
          <div className={`timeline-step ${step >= 3 ? "active" : ""} ${step > 3 ? "completed" : ""}`}>
            <div className="step-node">{step > 3 ? "✓" : "3"}</div>
            <div className="step-label">Escrow Hold</div>
          </div>
          <div className={`timeline-step ${step >= 4 ? "active" : ""}`}>
            <div className="step-node">4</div>
            <div className="step-label">Completed</div>
          </div>
        </div>

        {/* Step Cards */}
        {step === 1 && (
          <div className="form-card" style={{ maxWidth: "100%", margin: "0 auto" }}>
            <h2 className="logo-font" style={{ fontSize: "1.6rem" }}>Step 1: Set Up Your Deal</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "-1rem" }}>
              Define the agreement terms and pricing structure.
            </p>

            <form onSubmit={handleCreateDeal} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div className="form-group">
                <label className="form-label">Deal Type</label>
                <div className="role-selectors">
                  <button
                    type="button"
                    className={`role-selector ${dealType === "freelance" ? "active" : ""}`}
                    onClick={() => setDealType("freelance")}
                  >
                    <div className="role-selector-title">Freelance Work</div>
                    <div className="role-selector-desc">Milestone based services</div>
                  </button>
                  <button
                    type="button"
                    className={`role-selector ${dealType === "asset" ? "active" : ""}`}
                    onClick={() => setDealType("asset")}
                  >
                    <div className="role-selector-title">Digital Asset</div>
                    <div className="role-selector-desc">Accounts / domains buy</div>
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="title">Deal Title / Item Name</label>
                <input
                  type="text"
                  id="title"
                  className="form-input"
                  placeholder="e.g. Next.js Website Build / tech blog AdSense"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="amount">Deal Value (USD)</label>
                <input
                  type="number"
                  id="amount"
                  className="form-input"
                  placeholder="1000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="client">Client Email</label>
                  <input
                    type="email"
                    id="client"
                    className="form-input"
                    placeholder="client@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="freelancer">Freelancer/Seller Email</label>
                  <input
                    type="email"
                    id="freelancer"
                    className="form-input"
                    placeholder="seller@example.com"
                    value={freelancerEmail}
                    onChange={(e) => setFreelancerEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="terms">Release Milestone Terms</label>
                <textarea
                  id="terms"
                  className="form-textarea"
                  style={{ minHeight: "80px", resize: "vertical" }}
                  value={terms}
                  onChange={(e) => setTerms(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }} disabled={isLoading}>
                {isLoading ? "Creating Deal..." : "Generate Secured Deal Link"}
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="form-card" style={{ maxWidth: "100%", margin: "0 auto", textAlign: "center" }}>
            <h2 className="logo-font" style={{ fontSize: "1.8rem" }}>Step 2: Fund the Escrow Contract</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "-1rem" }}>
              Secure the funds before any work starts.
            </p>

            <div style={{ padding: "1.5rem", backgroundColor: "rgba(255, 92, 34, 0.03)", border: "1px solid rgba(255, 92, 34, 0.2)", borderRadius: "1rem", margin: "1.5rem 0", textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", borderBottom: "1px solid #F1F1F1", paddingBottom: "0.75rem" }}>
                <span style={{ fontWeight: "700" }}>Deal:</span>
                <span>{title}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", borderBottom: "1px solid #F1F1F1", paddingBottom: "0.75rem" }}>
                <span style={{ fontWeight: "700" }}>Secured Amount:</span>
                <span style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--brand-orange)" }}>${parseFloat(amount).toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: "700" }}>Escrow Terms:</span>
                <span style={{ maxWidth: "70%", textAlign: "right", fontSize: "0.9rem", color: "var(--text-muted)" }}>{terms}</span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              We partner with **Paystack** and **Flutterwave** to secure local transactions. Clicking below simulates payment verification.
            </p>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                onClick={() => setStep(1)}
                className="btn btn-secondary"
                style={{ flex: 1 }}
                disabled={isLoading}
              >
                Back
              </button>
              <button
                onClick={handleSimulatePayment}
                className="btn btn-primary"
                style={{ flex: 2 }}
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : `Pay $${parseFloat(amount).toLocaleString()}`}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-card" style={{ maxWidth: "100%", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#27AE60", fontWeight: "800", marginBottom: "0.5rem" }}>
              <span className="card-badge badge-green" style={{ margin: 0 }}>Secured</span>
              Funds Held in AI Escrow
            </div>
            
            <h2 className="logo-font" style={{ fontSize: "1.8rem" }}>Step 3: Deal Active & Escrow Hold</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "-1rem" }}>
              Client funds are held in a secure lock-box. Work is currently in progress.
            </p>

            <div style={{ border: "1px solid #E2E8F0", borderRadius: "1rem", padding: "1.5rem", margin: "1.5rem 0", backgroundColor: "#FAF8F5" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.25rem" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "var(--brand-orange)" }}></div>
                <div>
                  <h4 style={{ fontWeight: "700" }}>Milestone Active</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Freelancer uploads files and requests review.</p>
                </div>
              </div>
              
              <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "1.25rem" }}>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                  **AI Verification Report:** Our assistant verifies deliverables (domains DNS / website file structure) to guarantee matches before the client releases funds.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#27AE60", fontSize: "0.85rem", fontWeight: "700" }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  All automated checklist audits passed!
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                onClick={() => setStep(2)}
                className="btn btn-secondary"
                style={{ flex: 1 }}
                disabled={isLoading}
              >
                Back
              </button>
              <button
                onClick={handleReleaseFunds}
                className="btn btn-primary"
                style={{ flex: 2 }}
                disabled={isLoading}
              >
                {isLoading ? "Releasing..." : "Release Funds to Seller"}
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="form-card" style={{ maxWidth: "100%", margin: "0 auto", textAlign: "center", padding: "4rem 2.5rem" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#EAF9F1", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#27AE60", fontSize: "2rem", marginBottom: "1.5rem" }}>
              ✓
            </div>
            <h2 className="logo-font" style={{ fontSize: "2.2rem" }}>Transaction Completed</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginTop: "-0.5rem", marginBottom: "2rem" }}>
              The payment has been released to the seller's verified local bank account successfully.
            </p>

            <div style={{ border: "1px dashed #E2E8F0", padding: "1.5rem", borderRadius: "1rem", backgroundColor: "#FFFDF9", marginBottom: "2.5rem", textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Total Paid:</span>
                <span style={{ fontWeight: "700" }}>${parseFloat(amount).toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Escrow Fee (5%):</span>
                <span style={{ fontWeight: "700" }}>${(parseFloat(amount) * 0.05).toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #E2E8F0", paddingTop: "0.5rem", marginTop: "0.5rem" }}>
                <span style={{ fontWeight: "700" }}>Payout Status:</span>
                <span style={{ color: "#27AE60", fontWeight: "800" }}>Released / Settled</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="/" className="btn btn-secondary" style={{ flex: 1 }}>
                Return Home
              </Link>
              <button onClick={() => setStep(1)} className="btn btn-primary" style={{ flex: 1 }}>
                Create New Deal
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Shared Footer Links */}
      <Footer />

      <footer className="footer-bottom-stripe" style={{ marginTop: "auto" }}></footer>
    </div>
  );
}

export default function EscrowPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "5rem", fontSize: "1.2rem", fontFamily: "var(--font-sans)", color: "var(--text-muted)" }}>Loading Escrow System...</div>}>
      <EscrowWizardContent />
    </Suspense>
  );
}
