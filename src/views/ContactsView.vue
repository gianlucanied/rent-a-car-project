<script setup>
import { onMounted, ref } from 'vue'

const contactMethods = [
  {
    icon: '📞',
    title: 'Telefono',
    value: '+39 079 123 4567',
    description: 'Lun-Sab: 9:00-18:00',
    link: 'tel:+390791234567',
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: '📧',
    title: 'Email',
    value: 'info@rentacarexpress.it',
    description: 'Risposta entro 24h',
    link: 'mailto:info@rentacarexpress.it',
    gradient: 'from-red-500 via-red-600 to-rose-600',
    iconBg: 'bg-red-50',
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    value: '+39 333 123 4567',
    description: 'Assistenza rapida',
    link: 'https://wa.me/393331234567',
    gradient: 'from-green-500 via-emerald-600 to-teal-600',
    iconBg: 'bg-green-50',
  },
]

const privacyData = [
  {
    icon: '📋',
    title: 'Quali dati raccogliamo',
    items: [
      'Nome e Cognome',
      "Nome dell'azienda (se specificata)",
      'Numero di telefono (se specificato)',
      'Indirizzo email',
      'Informazioni inserite come richiesta',
    ],
    color: '#1f4f80',
  },
  {
    icon: '⏱️',
    title: 'Modalità e durata del trattamento',
    description:
      "Il trattamento viene effettuato mediante raccolta, elaborazione e raffronto dei dati attraverso strumenti informatici o telematici con misure di sicurezza idonee a garantirne la riservatezza. I dati rimangono in nostro possesso per il tempo strettamente necessario allo svolgimento delle attività aziendali e all'eventuale gestione di dispute legali, nel rispetto delle normative vigenti.",
    color: '#ce4028',
  },
  {
    icon: '🔒',
    title: "Diritti dell'interessato",
    description:
      "È possibile far valere i diritti previsti dall'art.7 del D.Lgs n°196/03 e dal GDPR, tra cui l'accesso, la cancellazione, l'aggiornamento, la rettifica o l'integrazione dei dati scrivendo all'indirizzo della nostra sede o via email.",
    color: '#2d5f8f',
  },
]

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.observe').forEach((el) => observer.observe(el))
})
</script>

<template>
  <main class="contacts-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
        <div class="grid-pattern"></div>
      </div>

      <div class="hero-content" :class="{ visible: isVisible }">
        <div class="hero-badge">
          <span class="badge-icon">💬</span>
          <span class="badge-text">Siamo Qui per Te</span>
        </div>

        <h1 class="hero-title">
          <span class="title-main">Contattaci</span>
          <span class="title-gradient">Subito!</span>
        </h1>

        <p class="hero-description">
          Scegli il modo che preferisci per raggiungerci.<br />
          Ti risponderemo nel minor tempo possibile!
        </p>

        <div class="scroll-indicator">
          <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Methods Section -->
    <section class="methods-section observe">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Canali di Contatto</span>
          <h2 class="section-title">Come Preferisci Contattarci?</h2>
        </div>

        <div class="methods-grid">
          <a
            v-for="(method, index) in contactMethods"
            :key="index"
            :href="method.link"
            class="method-card"
          >
            <div class="card-shine"></div>
            <div :class="['method-icon-wrapper', method.iconBg]">
              <span class="method-icon">{{ method.icon }}</span>
            </div>
            <h3 class="method-title">{{ method.title }}</h3>
            <p class="method-value">{{ method.value }}</p>
            <p class="method-desc">{{ method.description }}</p>
            <div class="card-arrow">
              <span>→</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section observe" id="map">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Dove Siamo</span>
          <h2 class="section-title">📍 La Nostra Sede</h2>
          <p class="section-subtitle">Vieni a trovarci ad Alghero, Sardegna</p>
        </div>

        <div class="map-wrapper">
          <div class="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.7890234567!2d8.315!3d40.556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d73b5e5c3e8e9d%3A0x123456789abcdef!2sVia%20Sebastiano%20Satta%2C%2052%2C%2007041%20Alghero%20SS!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div class="location-info">
            <div class="info-card">
              <div class="info-icon">📍</div>
              <div>
                <strong>Indirizzo Completo</strong>
                <p>Via Sebastiano Satta, 52<br />07041 Alghero (SS) - Sardegna, Italia</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">🕒</div>
              <div>
                <strong>Orari di Apertura</strong>
                <p>Lunedì - Sabato: 9:00 - 18:00<br />Domenica: Chiuso</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">🚗</div>
              <div>
                <strong>Servizi Premium</strong>
                <p>Consegna e ritiro gratuiti<br />Assistenza 24/7 in Sardegna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Condizioni di Noleggio Section -->
    <section class="conditions-section observe">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Informazioni Utili</span>
          <h2 class="section-title">📋 Condizioni di Noleggio</h2>
          <p class="section-subtitle">
            Tutto ciò che devi sapere per noleggiare con noi in modo semplice e trasparente
          </p>
        </div>

        <div class="conditions-grid">
          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #1f4f80">
                <span>💳</span>
              </div>
              <h3>Pagamento</h3>
            </div>
            <div class="condition-content">
              <p>
                Il pagamento del servizio di noleggio viene effettuato alla consegna
                dell'autovettura. Vengono accettate le principali carte di credito (Visa e
                MasterCard) oppure contanti.
              </p>
              <div class="highlight-box">
                <strong>💰 Deposito Cauzionale:</strong> In caso di pagamento in contanti si dovrà
                versare un deposito cauzionale di <strong>€ 500,00</strong>
              </div>
              <p class="note-text">
                La tariffa applicata viene garantita, per noleggi continuativi, sino alla data di
                previsto rientro presente nella lettera di noleggio.
              </p>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #ce4028">
                <span>📊</span>
              </div>
              <h3>Tasse</h3>
            </div>
            <div class="condition-content">
              <p>
                Tutti i prezzi indicati sono da intendersi
                <strong>comprensivi di IVA 22%</strong> se non diversamente specificato.
              </p>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #2d5f8f">
                <span>⛽</span>
              </div>
              <h3>Carburante</h3>
            </div>
            <div class="condition-content">
              <p>Il costo del carburante è da intendersi a carico del cliente.</p>
              <div class="highlight-box warning">
                <strong>⚠️ Attenzione:</strong> Se il veicolo viene affidato con il pieno di
                carburante e riconsegnato senza lo stesso, verrà conteggiato in aumento oltre
                l'importo dei litri mancanti, il costo di servizio di rifornimento pari a
                <strong>€ 15,00</strong>
              </div>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #e6583f">
                <span>🎂</span>
              </div>
              <h3>Età Minima</h3>
            </div>
            <div class="condition-content">
              <p>
                <strong>21 anni</strong> con patente di cat. B in corso di validità ed emessa da
                almeno <strong>1 anno</strong>.
              </p>
              <p class="note-text">
                Non è possibile noleggiare l'autovettura ai clienti al di sotto dei 21 anni.
              </p>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #1f4f80">
                <span>🛡️</span>
              </div>
              <h3>Super CDW (SCDW)</h3>
            </div>
            <div class="condition-content">
              <p>
                La copertura opzionale Super CDW costituisce l'esonero da ogni responsabilità per
                danni al veicolo con conseguente eliminazione della penalità risarcitoria
                (franchigia).
              </p>
              <div class="pricing-box">
                <div class="price-item">
                  <span class="price-label">Gruppi A-B-C-E</span>
                  <span class="price-value">€ 18,00</span>
                </div>
                <div class="price-item">
                  <span class="price-label">Gruppi F-G</span>
                  <span class="price-value">€ 19,00</span>
                </div>
              </div>
              <p class="note-text">
                ⚠️ L'assicurazione Super Kasko non copre i danni alle ruote, al sotto scocca e agli
                interni dell'autovettura.
              </p>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #ce4028">
                <span>🚗</span>
              </div>
              <h3>Consegna e Ritiro</h3>
            </div>
            <div class="condition-content">
              <p>
                <strong>Gratuita in città</strong> - La consegna e la ripresa dell'autovettura sono
                incluse nel prezzo entro i limiti della città di Alghero.
              </p>
              <p class="note-text">
                Per consegne in altre località della Sardegna, si prega di contattarci per un
                preventivo personalizzato.
              </p>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #2d5f8f">
                <span>📅</span>
              </div>
              <h3>Estensione del Noleggio</h3>
            </div>
            <div class="condition-content">
              <p>
                Se il Cliente volesse prolungare il noleggio oltre i termini prefissati ne deve dare
                <strong>immediata comunicazione</strong> alla stazione di noleggio onde permettere
                l'estensione della copertura assicurativa.
              </p>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #e6583f">
                <span>🔑</span>
              </div>
              <h3>Smarrimento Documenti e Chiavi</h3>
            </div>
            <div class="condition-content">
              <div class="penalty-list">
                <div class="penalty-item">
                  <span class="penalty-icon">📄</span>
                  <div>
                    <strong>Smarrimento documenti autovettura</strong>
                    <p>Penale di <strong>€ 300,00</strong></p>
                  </div>
                </div>
                <div class="penalty-item">
                  <span class="penalty-icon">🔑</span>
                  <div>
                    <strong>Smarrimento, rottura o furto chiavi</strong>
                    <p>Penale di <strong>€ 220,00</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #1f4f80">
                <span>👶</span>
              </div>
              <h3>Seggiolino per Bambini</h3>
            </div>
            <div class="condition-content">
              <p>
                Il costo per tutto il periodo di noleggio è di <strong>€ 4,00 al giorno</strong>.
              </p>
            </div>
          </div>
        </div>

        <div class="conditions-footer">
          <div class="footer-notice">
            <div class="notice-icon">ℹ️</div>
            <div class="notice-content">
              <h4>Hai bisogno di chiarimenti?</h4>
              <p>
                Per ulteriori informazioni sulle condizioni di noleggio, non esitare a contattarci.
                Il nostro staff è a tua disposizione per rispondere a tutte le tue domande.
              </p>
              <a href="tel:+390791234567" class="notice-button">
                <span>📞</span>
                Chiamaci ora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy Section -->
    <section class="privacy-section observe">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Tutela della Privacy</span>
          <h2 class="section-title">🔒 Privacy e Trattamento Dati</h2>
          <p class="section-subtitle">
            La tua privacy è importante per noi. Ecco come trattiamo i tuoi dati personali
          </p>
        </div>

        <div class="privacy-intro">
          <div class="privacy-highlight">
            <div class="highlight-icon">🛡️</div>
            <div class="highlight-content">
              <h3>Garanzia di Privacy</h3>
              <p>
                Rent a Car Express garantisce che il trattamento dei dati, che dovessero pervenire
                via posta elettronica o moduli elettronici, è conforme a quanto previsto dal
                <strong>Codice sulla Privacy</strong> (D.Lgs n°196/03) e dal
                <strong>General Data Protection Regulation (GDPR)</strong> europeo.
              </p>
              <p class="highlight-note">
                ℹ️ Il sito non utilizza sistemi di tracciatura delle abitudini di navigazione
                (cookies) degli utenti.
              </p>
            </div>
          </div>
        </div>

        <div class="privacy-grid">
          <div
            v-for="(item, index) in privacyData"
            :key="index"
            class="privacy-card"
            :style="{ '--card-delay': index * 0.1 + 's' }"
          >
            <div class="privacy-card-header">
              <div class="privacy-icon" :style="{ background: item.color }">
                <span>{{ item.icon }}</span>
              </div>
              <h3>{{ item.title }}</h3>
            </div>

            <div class="privacy-card-content">
              <ul v-if="item.items" class="privacy-list">
                <li v-for="(listItem, i) in item.items" :key="i">
                  <span class="list-icon">✓</span>
                  {{ listItem }}
                </li>
              </ul>
              <p v-else class="privacy-description">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div class="privacy-footer">
          <div class="footer-card">
            <div class="footer-icon">📝</div>
            <div class="footer-content">
              <h3>Nota Informativa sulla Privacy</h3>
              <p>
                Rent a Car Express svolge alcune attività di trattamento dei dati personali inviati
                via posta elettronica o moduli elettronici. Tali attività sono necessarie per
                soddisfare richieste, suggerimenti e per tutti i fini commerciali, fiscali,
                amministrativi e informativi inerenti la nostra attività.
              </p>
              <p>
                Il titolare del trattamento dei dati personali è
                <strong>Rent a Car Express</strong>. Le attività sono svolte attraverso procedure
                automatizzate e informatizzate, esclusivamente presso i nostri sistemi di
                elaborazione dati.
              </p>
            </div>
          </div>

          <div class="footer-card">
            <div class="footer-icon">💬</div>
            <div class="footer-content">
              <h3>Comunicazione Dati</h3>
              <p>
                Nell'ambito del trattamento i dati personali potranno essere utilizzati ai
                <strong>soli fini istituzionali e gestionali</strong> dei servizi resi. I dati non
                verranno mai ceduti a terzi per finalità commerciali o di marketing senza il tuo
                esplicito consenso.
              </p>
            </div>
          </div>

          <div class="contact-privacy-card">
            <div class="contact-privacy-icon">📧</div>
            <div class="contact-privacy-content">
              <h3>Esercita i Tuoi Diritti</h3>
              <p>
                Per esercitare i tuoi diritti (accesso, cancellazione, aggiornamento, rettifica o
                integrazione dei dati) puoi scrivere a:
              </p>
              <div class="contact-details">
                <div class="detail-item">
                  <strong>Rent a Car Express</strong>
                  <p>Via S. Satta, 52<br />07041 Alghero (SS) - Italia</p>
                </div>
                <div class="detail-item">
                  <strong>Email:</strong>
                  <a href="mailto:info@rentacarexpress.it">info@rentacarexpress.it</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

* {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
}

.contacts-page {
  min-height: 100vh;
  background: linear-gradient(to-br, #f8f9fa 0%, #ffffff 50%, #f0f4f8 100%);
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1f4f80 0%, #2d5f8f 50%, #3a6fa0 100%);
  color: white;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
  animation: float 8s ease-in-out infinite;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  top: -100px;
  right: -100px;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #ffd93d, #ce4028);
  bottom: -100px;
  left: -100px;
  animation-delay: 2s;
}

.blob-3 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #ffffff, #3a6fa0);
  top: 50%;
  left: 50%;
  animation-delay: 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.badge-icon {
  font-size: 1.5rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.badge-text {
  font-weight: 700;
  font-size: 1rem;
}

.hero-title {
  margin-bottom: 2rem;
}

.title-main {
  display: block;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  margin-bottom: 0.5rem;
}

.title-gradient {
  display: block;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  background: linear-gradient(135deg, #ffd93d 0%, #ce4028 50%, #e6583f 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

.hero-description {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.8;
  opacity: 0.95;
  font-weight: 300;
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s ease-in-out infinite;
}

.scroll-mouse {
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8px 0;
}

.scroll-wheel {
  width: 4px;
  height: 12px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  animation: scroll 1.5s ease-in-out infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}

/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  color: #ce4028;
  font-size: 0.875rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #1f4f80;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Observe Animation */
.observe {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.observe.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Methods Section */
.methods-section {
  padding: 7rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.method-card {
  position: relative;
  background: white;
  padding: 3rem 2rem;
  border-radius: 24px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.method-card:hover {
  transform: translateY(-16px) scale(1.02);
  box-shadow: 0 20px 60px rgba(31, 79, 128, 0.2);
  border-color: #1f4f80;
}

.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  transition: left 0.6s;
}

.method-card:hover .card-shine {
  left: 100%;
}

.method-icon-wrapper {
  width: 90px;
  height: 90px;
  margin: 0 auto 1.5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: linear-gradient(135deg, rgba(31, 79, 128, 0.1), rgba(206, 64, 40, 0.1));
}

.method-card:hover .method-icon-wrapper {
  transform: scale(1.1) rotate(-5deg);
}

.method-icon {
  font-size: 3rem;
}

.method-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f4f80;
  margin-bottom: 0.75rem;
}

.method-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ce4028;
  margin-bottom: 0.5rem;
}

.method-desc {
  font-size: 0.9375rem;
  color: #666;
}

.card-arrow {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  opacity: 0;
  transform: translate(20px, 20px);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.method-card:hover .card-arrow {
  opacity: 1;
  transform: translate(0, 0);
}

/* Map Section */
.map-section {
  padding: 7rem 0;
  background: white;
}

.map-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: start;
}

.map-frame {
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
  border: 3px solid #f0f0f0;
}

.map-frame:hover {
  transform: scale(1.02);
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  border: 2px solid #e5e7eb;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.info-card:hover {
  transform: translateX(10px);
  border-color: #ce4028;
  box-shadow: 0 10px 30px rgba(206, 64, 40, 0.15);
}

.info-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(31, 79, 128, 0.3);
}

.info-card strong {
  display: block;
  color: #1f4f80;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.info-card p {
  color: #666;
  line-height: 1.7;
  margin: 0;
  font-size: 0.9375rem;
}

/* Condizioni di Noleggio Section */
.conditions-section {
  padding: 7rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
}

.conditions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.condition-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.condition-card:hover {
  transform: translateY(-12px);
  border-color: #e5e7eb;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.condition-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(31, 79, 128, 0.05), rgba(206, 64, 40, 0.05));
  border-bottom: 2px solid #f0f0f0;
}

.condition-icon {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.condition-card:hover .condition-icon {
  transform: scale(1.15) rotate(-5deg);
}

.condition-header h3 {
  color: #1f4f80;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

.condition-content {
  padding: 2rem;
}

.condition-content p {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.condition-content p:last-child {
  margin-bottom: 0;
}

.condition-content strong {
  color: #1f4f80;
  font-weight: 700;
}

.highlight-box {
  background: linear-gradient(135deg, rgba(31, 79, 128, 0.08), rgba(206, 64, 40, 0.08));
  padding: 1.25rem;
  border-radius: 12px;
  border-left: 4px solid #1f4f80;
  margin: 1.5rem 0;
  font-size: 0.95rem;
}

.highlight-box.warning {
  background: linear-gradient(135deg, rgba(206, 64, 40, 0.08), rgba(230, 88, 63, 0.08));
  border-left-color: #ce4028;
}

.highlight-box strong {
  display: block;
  margin-bottom: 0.5rem;
  color: #1f4f80;
}

.note-text {
  font-size: 0.9rem !important;
  color: #888 !important;
  font-style: italic;
  margin-top: 1rem !important;
}

.pricing-box {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.price-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.price-item:hover {
  border-color: #1f4f80;
  transform: translateX(5px);
}

.price-label {
  color: #666;
  font-weight: 600;
  font-size: 0.95rem;
}

.price-value {
  color: #ce4028;
  font-weight: 800;
  font-size: 1.25rem;
}

.penalty-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.penalty-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.25rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.penalty-item:hover {
  background: white;
  border-color: #ce4028;
  transform: translateX(5px);
}

.penalty-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.penalty-item strong {
  display: block;
  color: #1f4f80;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.penalty-item p {
  margin: 0;
  color: #ce4028;
  font-weight: 700;
  font-size: 1.1rem;
}

.conditions-footer {
  margin-top: 4rem;
}

.footer-notice {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  padding: 3rem;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  border-radius: 24px;
  color: white;
  position: relative;
  overflow: hidden;
}

.footer-notice::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.notice-icon {
  font-size: 4rem;
  flex-shrink: 0;
  width: 90px;
  height: 90px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}

.notice-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.notice-content h4 {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.notice-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.95;
  margin-bottom: 1.5rem;
}

.notice-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  color: #1f4f80;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.notice-button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.notice-button span {
  font-size: 1.25rem;
}

/* Privacy Section */
.privacy-section {
  padding: 7rem 0;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.privacy-intro {
  margin-bottom: 4rem;
}

.privacy-highlight {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(31, 79, 128, 0.05), rgba(206, 64, 40, 0.05));
  border-radius: 24px;
  border-left: 6px solid #ce4028;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.highlight-icon {
  font-size: 4rem;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.highlight-content h3 {
  color: #1f4f80;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
}

.highlight-content p {
  color: #444;
  line-height: 1.8;
  font-size: 1.0625rem;
  margin-bottom: 1rem;
}

.highlight-content strong {
  color: #1f4f80;
  font-weight: 700;
}

.highlight-note {
  background: rgba(31, 79, 128, 0.1);
  padding: 1.25rem;
  border-radius: 16px;
  border-left: 4px solid #1f4f80;
  font-weight: 600;
  color: #1f4f80;
  margin-top: 1.5rem !important;
}

.privacy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.privacy-card {
  background: white;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: fadeInUp 0.8s ease-out calc(var(--card-delay)) both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.privacy-card:hover {
  transform: translateY(-12px);
  border-color: #e5e7eb;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.privacy-card-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.privacy-icon {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.privacy-card:hover .privacy-icon {
  transform: scale(1.15) rotate(-5deg);
}

.privacy-card-header h3 {
  color: #1f4f80;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

.privacy-card-content {
  color: #666;
  line-height: 1.8;
}

.privacy-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.privacy-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(31, 79, 128, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.privacy-list li:hover {
  background: rgba(31, 79, 128, 0.08);
  transform: translateX(8px);
}

.list-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.privacy-description {
  font-size: 1rem;
  margin: 0;
}

.privacy-footer {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.footer-card {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  padding: 3rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 2px solid #e5e7eb;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.footer-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
  border-color: #1f4f80;
}

.footer-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(31, 79, 128, 0.1), rgba(206, 64, 40, 0.1));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  flex-shrink: 0;
  transition: transform 0.4s ease;
}

.footer-card:hover .footer-icon {
  transform: scale(1.1) rotate(-5deg);
}

.footer-content {
  flex: 1;
}

.footer-content h3 {
  color: #1f4f80;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.footer-content p {
  color: #666;
  line-height: 1.8;
  font-size: 1.0625rem;
  margin-bottom: 1rem;
}

.footer-content p:last-child {
  margin-bottom: 0;
}

.footer-content strong {
  color: #1f4f80;
  font-weight: 700;
}

.contact-privacy-card {
  padding: 3.5rem;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  color: white;
  border-radius: 24px;
  box-shadow: 0 15px 50px rgba(31, 79, 128, 0.3);
  position: relative;
  overflow: hidden;
}

.contact-privacy-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: rotate 10s linear infinite;
}

.contact-privacy-icon {
  width: 90px;
  height: 90px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}

.contact-privacy-content {
  position: relative;
  z-index: 1;
}

.contact-privacy-content h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.contact-privacy-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  opacity: 0.95;
  margin-bottom: 2rem;
}

.contact-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.detail-item {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.detail-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
}

.detail-item strong {
  display: block;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #ffd93d;
}

.detail-item p {
  font-size: 1rem;
  opacity: 0.95;
  margin: 0;
  line-height: 1.6;
}

.detail-item a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.detail-item a:hover {
  color: #ffd93d;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .map-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .map-frame {
    height: 400px;
  }

  .privacy-highlight {
    flex-direction: column;
    text-align: center;
  }

  .highlight-icon {
    margin: 0 auto;
  }

  .footer-card {
    flex-direction: column;
    text-align: center;
  }

  .footer-icon {
    margin: 0 auto;
  }

  .contact-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .title-main,
  .title-gradient {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .methods-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .privacy-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .conditions-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-notice {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem;
  }

  .notice-icon {
    margin: 0 auto;
  }

  .hero-section {
    min-height: 70vh;
  }

  .methods-section,
  .map-section,
  .conditions-section,
  .privacy-section {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .privacy-highlight {
    padding: 2rem;
  }

  .footer-card {
    padding: 2rem;
  }

  .contact-privacy-card {
    padding: 2.5rem;
  }

  .highlight-content h3 {
    font-size: 1.5rem;
  }

  .footer-content h3 {
    font-size: 1.5rem;
  }

  .contact-privacy-content h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  .hero-badge {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  .badge-icon {
    font-size: 1.25rem;
  }

  .title-main,
  .title-gradient {
    font-size: 2rem;
  }

  .method-card {
    padding: 2rem 1.5rem;
  }

  .privacy-card {
    padding: 2rem;
  }

  .privacy-card-header {
    flex-direction: column;
    text-align: center;
  }

  .highlight-icon {
    width: 80px;
    height: 80px;
    font-size: 3rem;
  }

  .privacy-icon {
    width: 60px;
    height: 60px;
    font-size: 1.75rem;
  }

  .footer-icon,
  .contact-privacy-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }

  .scroll-indicator {
    display: none;
  }
}

/* Print Styles */
@media print {
  .hero-section,
  .scroll-indicator,
  .card-arrow,
  .method-card:hover {
    display: none;
  }

  .privacy-section {
    page-break-inside: avoid;
  }
}
</style>
