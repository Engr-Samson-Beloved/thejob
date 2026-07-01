import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-links-section">
      <div className="container footer-links-grid">
        <div className="footer-brand">
          <Link href="/" className="logo-link logo-font" style={{ color: "var(--white)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Image src="/logo.png" alt="PicJob Logo" width={30} height={30} style={{ borderRadius: "0.25rem" }} />
            <span>PicJob</span>
          </Link>
          <p className="footer-brand-text">
            Africa's premier marketplace for freelance services and verified digital assets. Secure milestone payments via escrow.
          </p>
        </div>
        <div className="footer-nav-col">
          <h4>For Clients</h4>
          <ul>
            <li><Link href="/get-started?role=client">Hire Talent</Link></li>
            <li><Link href="/assets">Browse Assets</Link></li>
            <li><Link href="/escrow">Secure Escrow</Link></li>
          </ul>
        </div>
        <div className="footer-nav-col">
          <h4>For Freelancers</h4>
          <ul>
            <li><Link href="/get-started?role=freelancer">Find Gigs</Link></li>
            <li><Link href="/assets">Sell Assets</Link></li>
          </ul>
        </div>
        <div className="footer-nav-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/login">Log In</Link></li>
            <li><Link href="/get-started">Register</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-copyright">
        <p>&copy; {new Date().getFullYear()} PicJob. All rights reserved. Built by Africans, for Africa's future.</p>
      </div>
    </footer>
  );
}
