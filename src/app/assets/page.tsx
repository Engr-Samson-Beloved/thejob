"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Asset {
  id: string;
  title: string;
  type: "youtube" | "adsense" | "domain";
  badge: string;
  verification: string;
  metric1Val: string;
  metric1Lbl: string;
  metric2Val: string;
  metric2Lbl: string;
  metric3Val: string;
  metric3Lbl: string;
  price: number;
  image: string;
}

const MOCK_ASSETS: Asset[] = [
  {
    id: "yt-1",
    title: "Tech & Gadgets Review Channel",
    type: "youtube",
    badge: "YouTube Channel",
    verification: "Verified Analytics",
    metric1Val: "145K",
    metric1Lbl: "Subscribers",
    metric2Val: "$1,200",
    metric2Lbl: "Monthly Rev",
    metric3Val: "3 Yrs",
    metric3Lbl: "Channel Age",
    price: 3500,
    image: "/assets.jpg",
  },
  {
    id: "ads-1",
    title: "Approved Niche Tech Blog AdSense",
    type: "adsense",
    badge: "AdSense Account",
    verification: "Verified Revenue",
    metric1Val: "$450",
    metric1Lbl: "Monthly Avg",
    metric2Val: "Clean",
    metric2Lbl: "Policy State",
    metric3Val: "Nigeria",
    metric3Lbl: "Country",
    price: 1400,
    image: "/assets.jpg",
  },
  {
    id: "dom-1",
    title: "codeflow.dev (Premium Domain)",
    type: "domain",
    badge: "Domain Name",
    verification: "Owner Verified",
    metric1Val: "DA 24",
    metric1Lbl: "Authority",
    metric2Val: "Namecheap",
    metric2Lbl: "Registrar",
    metric3Val: "2029",
    metric3Lbl: "Expiry Year",
    price: 850,
    image: "/assets.jpg",
  },
  {
    id: "yt-2",
    title: "Lo-Fi Beats Music Hub",
    type: "youtube",
    badge: "YouTube Channel",
    verification: "Verified Analytics",
    metric1Val: "82K",
    metric1Lbl: "Subscribers",
    metric2Val: "$600",
    metric2Lbl: "Monthly Rev",
    metric3Val: "2 Yrs",
    metric3Lbl: "Channel Age",
    price: 1800,
    image: "/assets.jpg",
  },
  {
    id: "dom-2",
    title: "africastartups.co",
    type: "domain",
    badge: "Domain Name",
    verification: "Owner Verified",
    metric1Val: "DA 18",
    metric1Lbl: "Authority",
    metric2Val: "GoDaddy",
    metric2Lbl: "Registrar",
    metric3Val: "2027",
    metric3Lbl: "Expiry Year",
    price: 1200,
    image: "/assets.jpg",
  },
  {
    id: "ads-2",
    title: "Lifestyle & Travel Magazine AdSense",
    type: "adsense",
    badge: "AdSense Account",
    verification: "Verified Revenue",
    metric1Val: "$950",
    metric1Lbl: "Monthly Avg",
    metric2Val: "Clean",
    metric2Lbl: "Policy State",
    metric3Val: "Kenya",
    metric3Lbl: "Country",
    price: 2900,
    image: "/assets.jpg",
  },
];

export default function Marketplace() {
  const [filter, setFilter] = useState<"all" | "youtube" | "adsense" | "domain">("all");
  const [search, setSearch] = useState("");

  const filteredAssets = MOCK_ASSETS.filter((asset) => {
    const matchesFilter = filter === "all" || asset.type === filter;
    const matchesSearch = asset.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="page-wrap">
      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <Link href="/" className="logo-link logo-font">
            THE Job
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/assets" className="active" style={{ color: "var(--brand-orange)" }}>Marketplace</Link></li>
              <li><Link href="/escrow">Escrow</Link></li>
            </ul>
          </nav>
          <div className="nav-cta">
            <Link href="/get-started" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ padding: "4rem 1.5rem 6rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 className="logo-font" style={{ fontSize: "3rem", marginBottom: "1rem" }}>Digital Asset Marketplace</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Buy and sell verified AdSense, YouTube, and domain assets with secure AI-escrow.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {(["all", "youtube", "adsense", "domain"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className="btn"
                style={{
                  padding: "0.5rem 1.25rem",
                  fontSize: "0.9rem",
                  backgroundColor: filter === t ? "var(--brand-orange)" : "var(--white)",
                  color: filter === t ? "var(--white)" : "var(--text-dark)",
                  border: "1px solid #E2E8F0",
                  borderRadius: "9999px",
                }}
              >
                {t === "all" ? "All Assets" : t === "youtube" ? "YouTube" : t === "adsense" ? "AdSense" : "Domains"}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search assets..."
            className="form-input"
            style={{ maxWidth: "300px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Assets Grid */}
        {filteredAssets.length > 0 ? (
          <div className="explore-grid">
            {filteredAssets.map((asset) => (
              <div key={asset.id} className="trust-card" style={{ height: "100%" }}>
                <div className="card-image-wrapper">
                  <Image
                    src={asset.image}
                    alt={asset.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                    <span className={`card-badge ${asset.type === "youtube" ? "badge-orange" : asset.type === "adsense" ? "badge-yellow" : "badge-blue"}`}>
                      {asset.badge}
                    </span>
                  </div>
                </div>

                <div className="card-content">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#27AE60", fontWeight: "700" }}>
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                    </svg>
                    {asset.verification}
                  </div>
                  <h3 className="card-title" style={{ fontSize: "1.15rem", marginTop: "0.25rem" }}>{asset.title}</h3>

                  <div className="metrics-grid">
                    <div className="metric-item">
                      <span className="metric-val">{asset.metric1Val}</span>
                      <span className="metric-lbl">{asset.metric1Lbl}</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-val">{asset.metric2Val}</span>
                      <span className="metric-lbl">{asset.metric2Lbl}</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-val">{asset.metric3Val}</span>
                      <span className="metric-lbl">{asset.metric3Lbl}</span>
                    </div>
                  </div>

                  <div className="card-footer">
                    <span className="card-price">${asset.price.toLocaleString()}</span>
                    <Link
                      href={`/escrow?assetId=${asset.id}&title=${encodeURIComponent(asset.title)}&price=${asset.price}`}
                      className="btn btn-primary"
                      style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
                    >
                      Buy via Escrow
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem", backgroundColor: "var(--white)", borderRadius: "1.5rem", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>No matching assets found.</p>
          </div>
        )}
      </main>

      {/* Footer stripe */}
      <footer className="footer-bottom-stripe" style={{ marginTop: "auto" }}></footer>
    </div>
  );
}
