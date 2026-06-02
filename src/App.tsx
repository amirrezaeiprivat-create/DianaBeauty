import React, { useState, useEffect, useRef } from "react";
import { serviceCategories, reviews, salonInfo } from "./data/services";
import "./index.css";

/* ─── Scroll reveal hook ─── */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── Reusable Reveal wrapper ─── */
function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}

function StaggerReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`stagger-children ${className}`}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   App
   ═══════════════════════════════════════════ */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const starString = (rating: number) => "★".repeat(Math.floor(rating)) + (rating % 1 ? "☆" : "");

  return (
    <>
      {/* ─── Navbar ─── */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo" onClick={closeMobile}>
            <img src="/logo.jpg" alt="DianaBeauty logotyp" />
            <span>DianaBeauty</span>
          </a>

          <div className={`navbar-links${mobileOpen ? " open" : ""}`}>
            <a href="#om" onClick={closeMobile}>Om oss</a>
            <a href="#tjanster" onClick={closeMobile}>Tjänster</a>
            <a href="#info" onClick={closeMobile}>Inför besök</a>
            <a href="#omdomen" onClick={closeMobile}>Omdömen</a>
            <a href="#kontakt" onClick={closeMobile}>Kontakt</a>
            <a
              href={salonInfo.bokaDirekt}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta"
              onClick={closeMobile}
            >
              Boka tid
            </a>
          </div>

          <button
            className={`mobile-toggle${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Meny"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="hero" id="hero">
        <div className="hero-decor hero-decor-1" />
        <div className="hero-decor hero-decor-2" />

        <div className="hero-content">
          <img src="/logo.jpg" alt="DianaBeauty" className="hero-logo" />
          <h1 className="hero-title">
            Din <em>skönhets</em>destination i Linköping
          </h1>
          <p className="hero-subtitle">
            Certifierad fransstylist sedan 2018 — passion för skönhet, detaljer
            och personlig service i en lugn hemmamiljö.
          </p>

          <div className="hero-rating">
            <span className="hero-stars">{starString(salonInfo.rating)}</span>
            <span className="hero-rating-text">
              {salonInfo.rating} / 5 — {salonInfo.reviewCount} omdömen på Bokadirekt
            </span>
          </div>

          <div className="hero-actions">
            <a
              href={salonInfo.bokaDirekt}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Boka tid nu
            </a>
            <a href="#tjanster" className="btn-secondary">
              Se behandlingar
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          Scrolla
        </div>
      </section>

      {/* ─── About ─── */}
      <section className="section about" id="om">
        <div className="container">
          <div className="about-grid">
            <Reveal className="">
              <div className="about-text">
                <h2>
                  Välkommen till <br />
                  <span style={{ color: "var(--accent-gold-dark)" }}>DianaBeauty</span>
                </h2>
                <span className="gold-line" style={{ margin: "var(--space-md) 0 var(--space-lg)" }} />
                <p>{salonInfo.description}</p>
                <div className="about-highlights">
                  <div className="highlight-card">
                    <div className="highlight-icon">⭐</div>
                    <div className="highlight-value">{salonInfo.rating}</div>
                    <div className="highlight-label">Snittbetyg</div>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-icon">💬</div>
                    <div className="highlight-value">{salonInfo.reviewCount}+</div>
                    <div className="highlight-label">Omdömen</div>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-icon">📅</div>
                    <div className="highlight-value">2018</div>
                    <div className="highlight-label">Certifierad sedan</div>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-icon">📍</div>
                    <div className="highlight-value">Linköping</div>
                    <div className="highlight-label">Hemmasalong</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="about-image-container">
                <div className="about-logo-wrapper">
                  <img src="/logo.jpg" alt="DianaBeauty logotyp" />
                  <div className="about-logo-ring" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="section services" id="tjanster">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Behandlingar</h2>
            <span className="gold-line" />
          </Reveal>

          <div className="services-tabs">
            {serviceCategories.map((cat, i) => (
              <button
                key={cat.category}
                className={`tab-btn${activeTab === i ? " active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                <span>{cat.icon}</span>
                {cat.category}
              </button>
            ))}
          </div>

          <StaggerReveal key={activeTab} className="services-grid">
            {serviceCategories[activeTab].services.map((service) => (
              <div key={service.name} className="service-card">
                <div className="service-info">
                  <div className="service-name">
                    {service.name}
                    {service.description && (
                      <span className="service-badge">{service.description}</span>
                    )}
                  </div>
                  <div className="service-duration">
                    🕐 {service.duration} min
                  </div>
                </div>
                <div className="service-price-block">
                  <div className="service-price">
                    {service.price} <span className="service-price-unit">kr</span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>

          <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
            <a
              href={salonInfo.bokaDirekt}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Boka behandling
            </a>
          </div>
        </div>
      </section>

      {/* ─── Guidelines ─── */}
      <section className="section guidelines" id="info">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Inför ditt besök</h2>
            <span className="gold-line" />
            <p className="section-subtitle">
              Läs igenom detta innan din bokade tid så att allt flyter på smidigt.
            </p>
          </Reveal>

          <div className="guidelines-grid">
            <Reveal>
              <div className="guideline-block">
                <h3>Riktlinjer</h3>
                {salonInfo.guidelines.map((g, i) => (
                  <div key={i} className="guideline-item">
                    <div className="guideline-icon">✓</div>
                    <p className="guideline-text">{g}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="guideline-block">
                <h3>Avbokning &amp; regler</h3>
                {salonInfo.cancellation.map((c, i) => (
                  <div key={i} className="guideline-item">
                    <div className="guideline-icon">!</div>
                    <p className="guideline-text">{c}</p>
                  </div>
                ))}
              </div>
              <div className="parking-note">
                <span>🅿️</span>
                <p>{salonInfo.parking}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Reviews ─── */}
      <section className="section reviews" id="omdomen">
        <div className="container">
          <Reveal>
            <div className="reviews-header">
              <div className="reviews-score">
                <div className="score-number">{salonInfo.rating}</div>
                <div className="score-details">
                  <div className="score-stars">{starString(5)}</div>
                  <div className="score-count">{salonInfo.reviewCount} omdömen på Bokadirekt</div>
                </div>
              </div>
              <h2 className="section-title">Vad kunderna säger</h2>
              <span className="gold-line" />
            </div>
          </Reveal>

          <StaggerReveal className="reviews-grid">
            {reviews.map((r) => (
              <div key={r.author} className="review-card">
                <div className="review-top">
                  <div className="review-author">
                    <div className="review-avatar">{r.author[0]}</div>
                    <div>
                      <div className="review-name">{r.author}</div>
                      <div className="review-date">{r.date}</div>
                    </div>
                  </div>
                  <div className="review-stars">{starString(r.rating)}</div>
                </div>
                <p className="review-text">{r.text}</p>
              </div>
            ))}
          </StaggerReveal>

          <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
            <a
              href={salonInfo.bokaDirekt}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ background: "var(--text-primary)" }}
            >
              Läs fler omdömen
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="footer" id="kontakt">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-name">DianaBeauty</div>
              <p>
                Certifierad fransstylist sedan 2018. Fransar, bryn, trådning och
                mer i en personlig hemmamiljö i Linköping.
              </p>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>
              <a href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}>
                📞 {salonInfo.phone}
              </a>
              <a href={`mailto:${salonInfo.email}`}>
                ✉️ {salonInfo.email}
              </a>
              <p>📍 {salonInfo.address}</p>
            </div>

            <div className="footer-col">
              <h4>Snabblänkar</h4>
              <a
                href={salonInfo.bokaDirekt}
                target="_blank"
                rel="noopener noreferrer"
              >
                🗓️ Boka tid
              </a>
              <a
                href={salonInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                📸 {salonInfo.instagramHandle}
              </a>
              <a href="#tjanster">💎 Behandlingar</a>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p>© 2026 GARF Webdesign. Alla rättigheter förbehållna.</p>
            <div className="footer-socials">
              <a
                href={salonInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href={salonInfo.bokaDirekt}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Bokadirekt"
              >
                🗓️
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
