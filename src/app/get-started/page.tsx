"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

function GetStartedContent() {
  const searchParams = useSearchParams();
  const initialRole = searchParams.get("role") as "client" | "freelancer" | null;

  const [role, setRole] = useState<"client" | "freelancer">("client");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (initialRole === "client" || initialRole === "freelancer") {
      setRole(initialRole);
    }
  }, [initialRole]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock signup transition
    setTimeout(() => {
      setIsLoading(false);
      router.push("/login");
    }, 1500);
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
          <div className="nav-cta">
            <Link href="/login" style={{ fontWeight: "600", color: "var(--text-dark)", textDecoration: "none" }}>
              Log In
            </Link>
          </div>
        </div>
      </header>

      {/* Main Centered Content */}
      <main style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem 1.5rem" }}>
        <div className="form-card" style={{ margin: 0 }}>
          <div>
            <h1 className="form-title logo-font">Join PicJob</h1>
            <p className="form-subtitle">Create a free account to hire or work</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {/* Role selector */}
            <div className="form-group">
              <label className="form-label">I want to join as a:</label>
              <div className="role-selectors">
                <button
                  type="button"
                  className={`role-selector ${role === "client" ? "active" : ""}`}
                  onClick={() => setRole("client")}
                >
                  <div className="role-selector-title">Client</div>
                  <div className="role-selector-desc">I want to hire talent</div>
                </button>
                <button
                  type="button"
                  className={`role-selector ${role === "freelancer" ? "active" : ""}`}
                  onClick={() => setRole("freelancer")}
                >
                  <div className="role-selector-title">Freelancer</div>
                  <div className="role-selector-desc">I want to find gigs</div>
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Min. 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "0.5rem" }}
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="form-footer">
            Already have an account?{" "}
            <Link href="/login">
              Log In
            </Link>
          </div>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Orange Stripe Base */}
      <footer className="footer-bottom-stripe"></footer>
    </div>
  );
}

export default function GetStarted() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "5rem", fontSize: "1.2rem", fontFamily: "var(--font-sans)", color: "var(--text-muted)" }}>Loading Sign Up...</div>}>
      <GetStartedContent />
    </Suspense>
  );
}
