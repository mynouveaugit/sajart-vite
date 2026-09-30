import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xeaogkar";

export default function Contact() {
  const [tab, setTab]       = useState("client");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) e.target.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="section-note">
        Une idée, un projet, un partenariat ? On est à l'écoute.
      </p>

      <div className="contact-inner">

        {/* ── Colonne gauche : SVG + infos ── */}
        <div className="contact-left">

          {/* SVG décoratif animé */}
          <div className="contact-deco" aria-hidden="true">
            <svg
              viewBox="0 0 260 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="contact-deco-svg"
            >
              {/* Anneaux orbitaux */}
              <circle cx="130" cy="130" r="112" className="cdeco-ring cdeco-ring-1" strokeWidth="1.2" strokeDasharray="10 13">
                <animateTransform attributeName="transform" type="rotate" from="0 130 130" to="360 130 130" dur="22s" repeatCount="indefinite"/>
              </circle>
              <circle cx="130" cy="130" r="86" className="cdeco-ring cdeco-ring-2" strokeWidth="1" strokeDasharray="5 15">
                <animateTransform attributeName="transform" type="rotate" from="360 130 130" to="0 130 130" dur="15s" repeatCount="indefinite"/>
              </circle>
              <circle cx="130" cy="130" r="58" className="cdeco-ring cdeco-ring-3" strokeWidth="0.8" strokeDasharray="3 10">
                <animateTransform attributeName="transform" type="rotate" from="0 130 130" to="360 130 130" dur="30s" repeatCount="indefinite"/>
              </circle>

              {/* Points orbitaux */}
              <circle cx="242" cy="130" r="5.5" className="cdeco-dot cdeco-dot-orange">
                <animateTransform attributeName="transform" type="rotate" from="0 130 130" to="360 130 130" dur="22s" repeatCount="indefinite"/>
              </circle>
              <circle cx="130" cy="44" r="4.5" className="cdeco-dot cdeco-dot-blue">
                <animateTransform attributeName="transform" type="rotate" from="360 130 130" to="0 130 130" dur="15s" repeatCount="indefinite"/>
              </circle>
              <circle cx="130" cy="216" r="3.5" className="cdeco-dot cdeco-dot-orange">
                <animateTransform attributeName="transform" type="rotate" from="90 130 130" to="450 130 130" dur="22s" repeatCount="indefinite"/>
              </circle>
              <circle cx="18" cy="130" r="3" className="cdeco-dot cdeco-dot-blue">
                <animateTransform attributeName="transform" type="rotate" from="180 130 130" to="540 130 130" dur="15s" repeatCount="indefinite"/>
              </circle>

              {/* Halo central */}
              <circle cx="130" cy="130" r="38" className="cdeco-halo" />

              {/* Icône enveloppe centrale */}
              <rect x="88" y="104" width="84" height="56" rx="8" className="cdeco-env-rect" strokeWidth="2"/>
              <path d="M88 114 L130 138 L172 114" className="cdeco-env-line" strokeWidth="2" strokeLinecap="round" fill="none"/>

              {/* Trait pinceau décoratif bas */}
              <path
                d="M30 210 Q80 185 130 192 Q180 200 228 172"
                className="cdeco-brush"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="300"
                strokeDashoffset="300"
              >
                <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2s" fill="freeze" begin="0.5s"/>
              </path>
            </svg>
          </div>

          {/* Infos contact */}
          <div className="contact-info glass">
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </span>
              <span>Ségou, Mali</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </span>
              <a href="tel:+22393688661">+223 93 68 86 61</a>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </span>
              <a href="mailto:mem659611@gmail.com">mem659611@gmail.com</a>
            </div>

            <div className="social-row">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/jacob.sagara.7"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 8h-2a2 2 0 00-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.5c0-.4.3-.5.6-.5H16V8z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/sagarajac"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="4"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <circle cx="17" cy="7" r="1"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/22393688661"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 20l1.3-3.8A7.6 7.6 0 1112 19.6a7.5 7.5 0 01-4.6-1.5L4 20z"/>
                  <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Colonne droite : formulaire ── */}
        <div className="contact-form-col glass">

          {/* Tabs */}
          <div className="contact-tabs" role="tablist">
            <button
              role="tab"
              aria-selected={tab === "client"}
              className={`contact-tab${tab === "client" ? " is-active" : ""}`}
              onClick={() => { setTab("client"); setStatus("idle"); }}
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="10" cy="7" r="3.5"/>
                <path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6"/>
              </svg>
              Demande de service/projet
            </button>
            <button
              role="tab"
              aria-selected={tab === "partenariat"}
              className={`contact-tab${tab === "partenariat" ? " is-active" : ""}`}
              onClick={() => { setTab("partenariat"); setStatus("idle"); }}
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M13 7H7a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2z"/>
                <path d="M13 7V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2"/>
              </svg>
              Proposer un partenariat
            </button>
          </div>

          {/* Formulaire */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="type_demande"
              value={tab === "client" ? "Demande client" : "Partenariat"} />

            <div className="form-group">
              <label htmlFor="nom">Nom complet</label>
              <input id="nom" name="nom" type="text" placeholder="Votre nom" required />
            </div>

            <div className="form-group">
              <label htmlFor="telephone">Téléphone</label>
              <input id="telephone" name="telephone" type="tel"
                placeholder="+223  XX XX XX XX" required />
            </div>

            {tab === "partenariat" && (
              <>
                <div className="form-group">
                  <label htmlFor="email">Email professionnel</label>
                  <input id="email" name="email" type="email"
                    placeholder="vous@entreprise.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="entreprise">Entreprise / Organisation</label>
                  <input id="entreprise" name="entreprise" type="text"
                    placeholder="Nom de votre structure" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contexte">Contexte du partenariat</label>
                  <textarea id="contexte" name="contexte" rows="4"
                    placeholder="Décrivez votre projet, vos objectifs et ce que vous proposez…"
                    required />
                </div>
              </>
            )}

            {tab === "client" && (
              <div className="form-group">
                <label htmlFor="message">Votre message</label>
                <textarea id="message" name="message" rows="4"
                  placeholder="Décrivez votre projet, ce que vous cherchez, votre délai…"
                  required />
              </div>
            )}

            {status === "ok" && (
              <p className="form-status form-status-ok">
                ✓ Message envoyé — on vous répond très vite !
              </p>
            )}
            {status === "err" && (
              <p className="form-status form-status-err">
                ✗ Une erreur s'est produite. Réessayez ou contactez-nous sur WhatsApp.
              </p>
            )}

            <button className="btn btn-primary contact-submit" type="submit"
              disabled={status === "sending"}>
              {status === "sending" ? "Envoi en cours…" : (
                tab === "client" ? "Envoyer ma demande →" : "Proposer un partenariat →"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}