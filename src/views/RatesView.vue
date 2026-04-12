<script setup>
import { computed, onMounted, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, locale } = useI18n()

const isVisible = ref(false)

const cars = computed(() => [
  {
    category: 'A',
    name: 'Fiat Panda',
    seats: 5,
    transmission: t('rates.manual'),
    image: '/cars/panda.jpg',
    color: '#1f4f80',
  },
  {
    category: 'B',
    name: 'Dacia Sandero',
    seats: 5,
    transmission: t('rates.manual'),
    image: '/cars/sandero.jpg',
    color: '#ce4028',
  },
  {
    category: 'C',
    name: 'Citroën C3',
    seats: 5,
    transmission: t('rates.manual'),
    image: '/cars/citroen-c3.webp',
    color: '#1f4f80',
  },
  {
    category: 'D',
    name: 'Hyundai i10',
    seats: 5,
    transmission: t('rates.automatic'),
    image: '/cars/i10.webp',
    color: '#ce4028',
    automaticNote: true,
  },
  {
    category: 'D',
    name: 'Fiat 500',
    seats: 4,
    transmission: t('rates.automatic'),
    image: '/cars/fiat500.jpg',
    color: '#ce4028',
    automaticNote: true,
  },
  {
    category: 'E',
    name: 'Fiat Doblò',
    seats: 7,
    transmission: t('rates.manual'),
    image: '/cars/doblo.jpg',
    color: '#1f4f80',
  },
])

// Messaggio WhatsApp localizzato per lingua
const waBaseMessage = computed(() => {
  const messages = {
    it: 'Ciao%2C%20vorrei%20un%20preventivo%20per%20il%20noleggio%20di%20una%20',
    en: 'Hello%2C%20I%20would%20like%20a%20quote%20for%20renting%20a%20',
    es: 'Hola%2C%20me%20gustar%C3%ADa%20un%20presupuesto%20para%20alquilar%20un%20',
  }
  return messages[locale.value] || messages.it
})

// Link WhatsApp generico (senza modello specifico)
const waGenericLink = computed(() => {
  const messages = {
    it: 'Ciao%2C%20vorrei%20informazioni%20sul%20noleggio%20auto',
    en: 'Hello%2C%20I%20would%20like%20information%20about%20car%20rental',
    es: 'Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20coches',
  }
  return `https://wa.me/393400743137?text=${messages[locale.value] || messages.it}`
})

const waCarLink = (carName) =>
  `https://wa.me/393400743137?text=${waBaseMessage.value}${encodeURIComponent(carName)}`

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 80)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('animate-in')
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
  )
  document.querySelectorAll('.observe').forEach((el) => observer.observe(el))
})
</script>

<template>
  <main class="rates-page">
    <!-- ░░ HERO ░░ -->
    <section class="page-hero">
      <div class="hero-inner" :class="{ visible: isVisible }">
        <div class="hero-tag-row">
          <span class="hero-eyebrow">{{ t('rates.heroTag') }}</span>
          <span class="hero-divider">—</span>
          <span class="hero-brand">Rent a Car Express</span>
        </div>
        <h1 class="hero-title">
          <span class="title-block">{{ t('rates.heroTitle') }}</span>
          <span class="title-accent">{{ t('rates.heroSubtitle') }}</span>
        </h1>
        <p class="hero-subtitle">{{ t('rates.heroDescription') }}</p>
        <div class="hero-scroll-hint" aria-hidden="true">
          <span class="scroll-line"></span>
        </div>
      </div>
    </section>

    <!-- ░░ FLOTTA ░░ -->
    <section class="section-wrap bg-white">
      <div class="container container--wide">
        <div class="section-intro observe">
          <span class="intro-dash">—</span>
          <p class="intro-text">{{ t('rates.fleetTag') }}</p>
        </div>
        <h2 class="section-heading observe" style="--delay: 0.05s">{{ t('rates.fleetTitle') }}</h2>
        <p class="section-sub observe" style="--delay: 0.1s">{{ t('rates.fleetSubtitle') }}</p>

        <div class="cars-grid">
          <article
            v-for="(car, i) in cars"
            :key="car.name"
            class="car-card observe"
            :style="{ '--card-color': car.color, '--delay': i * 0.08 + 0.15 + 's' }"
          >
            <!-- badge categoria -->
            <div class="car-category" :style="{ background: car.color }">
              {{ car.category }}
            </div>

            <!-- immagine -->
            <div class="car-img-wrap">
              <img
                :src="car.image"
                :alt="car.name"
                class="car-img"
                loading="lazy"
                @error="(e) => (e.target.style.display = 'none')"
              />
            </div>

            <!-- contenuto -->
            <div class="car-body">
              <h3 class="car-name">{{ car.name }}</h3>

              <ul class="car-specs">
                <li class="spec-item">
                  <span class="spec-icon">👥</span>
                  <span class="spec-label">{{ car.seats }} {{ t('rates.seats') }}</span>
                </li>
                <li class="spec-item">
                  <span class="spec-icon">⚙️</span>
                  <span class="spec-label">{{ car.transmission }}</span>
                </li>
              </ul>

              <a
                :href="waCarLink(car.name)"
                target="_blank"
                rel="noopener noreferrer"
                class="car-cta"
              >
                <span>{{ t('rates.requestQuote') }}</span>
                <span class="cta-arrow">→</span>
              </a>
            </div>

            <div class="card-underline" aria-hidden="true"></div>
          </article>
        </div>
      </div>
    </section>

    <!-- ░░ CANALI DI CONTATTO ░░ -->
    <section class="section-wrap bg-light">
      <div class="container">
        <div class="section-intro observe">
          <span class="intro-dash">—</span>
          <p class="intro-text">{{ t('contacts.channelsTag') }}</p>
        </div>
        <h2 class="section-heading observe" style="--delay: 0.05s">{{ t('rates.ctaTitle') }}</h2>

        <!-- ── QR WHATSAPP ── -->
        <div class="qr-block observe" style="--delay: 0.15s">
          <div class="qr-blob qr-blob-1" aria-hidden="true"></div>
          <div class="qr-blob qr-blob-2" aria-hidden="true"></div>

          <div class="qr-text">
            <h3 class="qr-title">{{ t('contacts.qrCodeTitle') }}</h3>
            <p class="qr-desc">{{ t('contacts.qrCodeDescription') }}</p>
            <a :href="waGenericLink" target="_blank" rel="noopener noreferrer" class="wa-cta">
              <span>{{ t('rates.openWhatsapp') }}</span>
              <span class="cta-arrow">→</span>
            </a>
          </div>

          <div class="qr-image-col">
            <div class="qr-frame">
              <img src="/src/assets/qrcode.jpg" alt="QR Code WhatsApp" class="qr-img" />
            </div>
            <span class="qr-badge">{{ t('contacts.scanNow') }}</span>
          </div>
        </div>

        <!-- ── EMAIL ── -->
        <div class="email-block observe" style="--delay: 0.2s">
          <div class="note-bar" aria-hidden="true"></div>
          <div class="email-body">
            <div class="email-left">
              <div class="email-icon-wrap" aria-hidden="true">
                <span>📧</span>
              </div>
              <div>
                <h3 class="email-title">{{ t('contacts.email') }}</h3>
                <p class="email-desc">{{ t('contacts.emailResponse') }}</p>
              </div>
            </div>
            <a href="mailto:info@rentacarexpress.it" class="email-cta">
              <span class="email-address">info@rentacarexpress.it</span>
              <span class="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ─── HERO ─────────────────────────────────────────────────────── */
.page-hero {
  position: relative;
  min-height: 52vh;
  display: flex;
  align-items: flex-end;
  padding: 9rem 3rem 5.5rem;
  background:
    linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url('/jumbo2.webp') center center / cover no-repeat;
  overflow: hidden;
}

.hero-inner {
  position: relative;
  z-index: 2;
  max-width: 820px;
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.hero-inner.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-tag-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.hero-eyebrow {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #e6583f;
}
.hero-divider {
  color: rgba(255, 255, 255, 0.25);
}
.hero-brand {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}

.hero-title {
  margin-bottom: 1.5rem;
}
.title-block {
  display: block;
  font-size: clamp(2.6rem, 5.5vw, 4.4rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.05;
  letter-spacing: -0.03em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
.title-accent {
  display: block;
  font-size: clamp(2.6rem, 5.5vw, 4.4rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  background: linear-gradient(90deg, #e6583f 0%, #ffa07a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-scroll-hint {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.scroll-line {
  display: block;
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
}

/* ─── SEZIONI ───────────────────────────────────────────────────── */
.section-wrap {
  padding: 5.5rem 2rem 6.5rem;
}
.bg-white {
  background: #fff;
}
.bg-light {
  background: #f4f6f9;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}
.container--wide {
  max-width: 1180px;
}

.section-intro {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(31, 79, 128, 0.12);
}
.intro-dash {
  font-size: 1.2rem;
  color: #ce4028;
  font-weight: 700;
}
.intro-text {
  font-size: 0.82rem;
  color: #999;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.section-heading {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 900;
  color: #0e2d4e;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 0.75rem;
}
.section-sub {
  font-size: 1.05rem;
  color: #6a7a8a;
  line-height: 1.7;
  margin-bottom: 3rem;
}

/* ─── GRIGLIA AUTO ──────────────────────────────────────────────── */
.cars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

/* ─── CARD AUTO ─────────────────────────────────────────────────── */
.car-card {
  position: relative;
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(31, 79, 128, 0.08);
  box-shadow: 0 4px 20px rgba(14, 45, 78, 0.06);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}
.car-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(14, 45, 78, 0.13);
  border-color: var(--card-color);
}

.car-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.car-img-wrap {
  position: relative;
  width: 100%;
  height: 190px;
  background: #f4f6f9;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.car-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.car-card:hover .car-img {
  transform: scale(1.05);
}
.car-img-fallback {
  position: absolute;
  font-size: 5rem;
  opacity: 0.15;
  pointer-events: none;
}

.car-body {
  padding: 1.5rem 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.car-name {
  font-size: 1.2rem;
  color: #0e2d4e;
  letter-spacing: -0.02em;
  line-height: 1.2;
  transition: color 0.3s ease;
}
.car-card:hover .car-name {
  color: var(--card-color);
}

.car-badges {
  min-height: 1.5rem;
}
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.badge--auto {
  background: linear-gradient(135deg, rgba(206, 64, 40, 0.1), rgba(206, 64, 40, 0.06));
  color: #ce4028;
  border: 1px solid rgba(206, 64, 40, 0.2);
}

.car-specs {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.spec-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.spec-icon {
  font-size: 0.95rem;
  line-height: 1;
  flex-shrink: 0;
}
.spec-label {
  font-size: 0.88rem;
  color: #5a6a7a;
}

.car-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: auto;
  padding: 0.85rem 1.25rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: #fff;
  font-size: 0.88rem;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease;
}
.car-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
}
.cta-arrow {
  transition: transform 0.25s ease;
  display: inline-block;
}
.car-cta:hover .cta-arrow {
  transform: translateX(4px);
}

.card-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0;
  background: linear-gradient(
    90deg,
    var(--card-color),
    color-mix(in srgb, var(--card-color) 50%, white)
  );
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.car-card:hover .card-underline {
  width: 100%;
}

/* ─── QR BLOCK ──────────────────────────────────────────────────── */
.qr-block {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3.5rem;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  padding: 3rem 3.5rem;
  border: 1px solid rgba(31, 79, 128, 0.08);
  box-shadow: 0 8px 40px rgba(14, 45, 78, 0.08);
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.qr-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.qr-blob-1 {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, transparent 70%);
  top: -80px;
  right: -50px;
  animation: blobDrift 18s ease-in-out infinite alternate;
}
.qr-blob-2 {
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(31, 79, 128, 0.1) 0%, transparent 70%);
  bottom: -50px;
  left: -30px;
  animation: blobDrift 24s ease-in-out infinite alternate-reverse;
}
@keyframes blobDrift {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(40px, 30px) scale(1.08);
  }
}

.qr-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #0e2d4e;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 0.85rem;
}
.qr-desc {
  font-size: 0.95rem;
  color: #6a7a8a;
  line-height: 1.75;
  max-width: 400px;
  margin-bottom: 1.75rem;
}

.wa-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.75rem;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: #fff;
  font-size: 0.95rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.wa-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(37, 211, 102, 0.4);
}
.wa-cta:hover .cta-arrow {
  transform: translateX(4px);
}

.qr-image-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}
.qr-frame {
  padding: 1.25rem;
  background: #fff;
  border-radius: 16px;
  border: 2px solid #25d366;
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.15);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}
.qr-frame:hover {
  transform: scale(1.04);
  box-shadow: 0 14px 42px rgba(37, 211, 102, 0.25);
}
.qr-img {
  display: block;
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 8px;
}

.qr-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 1.4rem;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: #fff;
  font-size: 0.85rem;
  border-radius: 50px;
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.28);
  animation: pulse 2.5s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}

/* ─── EMAIL BLOCK ───────────────────────────────────────────────── */
.email-block {
  display: flex;
  align-items: stretch;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(31, 79, 128, 0.08);
  box-shadow: 0 4px 20px rgba(14, 45, 78, 0.06);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}
.email-block:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(14, 45, 78, 0.1);
  border-color: rgba(31, 79, 128, 0.2);
}

.note-bar {
  width: 4px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #1f4f80, #ce4028);
}

.email-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.75rem 2rem;
  flex-wrap: wrap;
}

.email-left {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.email-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    color-mix(in srgb, #ce4028 12%, white),
    color-mix(in srgb, #ce4028 6%, white)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.email-block:hover .email-icon-wrap {
  transform: scale(1.1) rotate(6deg);
}

.email-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #0e2d4e;
  margin-bottom: 0.2rem;
}
.email-desc {
  font-size: 0.87rem;
  color: #6a7a8a;
}

.email-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.75rem;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  color: #fff;
  font-size: 0.95rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(31, 79, 128, 0.25);
  white-space: nowrap;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.email-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(31, 79, 128, 0.35);
}
.email-address {
  font-size: 0.9rem;
}
.email-cta:hover .cta-arrow {
  transform: translateX(4px);
}

/* ─── SCROLL ANIMATION ──────────────────────────────────────────── */
.observe {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.65s ease-out calc(var(--delay, 0s)),
    transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) calc(var(--delay, 0s));
}
.observe.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* ─── RESPONSIVE ────────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .cars-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 860px) {
  .qr-block {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem;
    text-align: center;
  }
  .qr-desc {
    margin: 0 auto 1.5rem;
  }
  .qr-image-col {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 600px) {
  .page-hero {
    padding: 7rem 1.75rem 4.5rem;
    min-height: auto;
  }
  .section-wrap {
    padding: 3.5rem 1.25rem 5rem;
  }
  .cars-grid {
    grid-template-columns: 1fr;
  }
  .qr-block {
    padding: 2rem 1.5rem;
  }
  .qr-img {
    width: 160px;
    height: 160px;
  }
  .email-body {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
  .email-cta {
    width: 100%;
    justify-content: center;
  }
  .email-address {
    font-size: 0.82rem;
  }
}
</style>
