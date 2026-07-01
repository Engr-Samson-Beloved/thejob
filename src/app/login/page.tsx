"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const [role, setRole] = useState<"client" | "freelancer">("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock authentication transition
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <div className="page-wrap" style={{ justifyContent: "center", alignItems: "center", padding: "1.5rem" }}>
      <header style={{ position: "absolute", top: "2rem", left: "2rem" }}>
        <Link href="/" className="logo-link logo-font" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image src="/logo.jpg" alt="PicJob Logo" width={32} height={32} style={{ borderRadius: "0.25rem" }} />
          <span>PicJob</span>
        </Link>
      </header>

      <div className="form-card">
        <div>
          <h1 className="form-title logo-font">Welcome Back</h1>
          <p className="form-subtitle">Log in to manage your gigs and payments</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {/* Role selector */}
          <div className="form-group">
            <label className="form-label">I want to log in as:</label>
            <div className="role-selectors">
              <button
                type="button"
                className={`role-selector ${role === "client" ? "active" : ""}`}
                onClick={() => setRole("client")}
              >
                <div className="role-selector-title">Client</div>
                <div className="role-selector-desc">Hiring talent</div>
              </button>
              <button
                type="button"
                className={`role-selector ${role === "freelancer" ? "active" : ""}`}
                onClick={() => setRole("freelancer")}
              >
                <div className="role-selector-title">Freelancer</div>
                <div className="role-selector-desc">Looking for gigs</div>
              </button>
            </div>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label className="form-label" htmlFor="password">Password</label>
              <Link href="#forgot" style={{ fontSize: "0.8rem", color: "var(--brand-orange)" }}>
                Forgot?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "0.5rem" }}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="form-footer">
          Don't have an account?{" "}
          <Link href="/get-started">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
