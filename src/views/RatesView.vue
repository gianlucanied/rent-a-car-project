<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const isVisible = ref(false)

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
      <div class="hero-lines" aria-hidden="true">
        <span v-for="n in 8" :key="n" class="diag-line" :style="{ '--i': n }"></span>
      </div>
      <div class="hero-blob blob-1" aria-hidden="true"></div>
      <div class="hero-blob blob-2" aria-hidden="true"></div>

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

      <div class="hero-deco-num" aria-hidden="true">02</div>
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
            <div class="qr-icon-wrap" aria-hidden="true">💬</div>
            <h3 class="qr-title">{{ t('contacts.qrCodeTitle') }}</h3>
            <p class="qr-desc">{{ t('contacts.qrCodeDescription') }}</p>
            <a
              href="https://wa.me/393400743137"
              target="_blank"
              rel="noopener noreferrer"
              class="wa-cta"
            >
              <span>💬</span>
              <span>Apri WhatsApp</span>
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
  background: #0e2d4e;
  overflow: hidden;
}

.hero-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.diag-line {
  position: absolute;
  left: calc(var(--i) * 13% - 10%);
  top: -20%;
  width: 1px;
  height: 160%;
  background: rgba(255, 255, 255, 0.04);
  transform: rotate(20deg);
  transform-origin: top center;
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.blob-1 {
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(31, 79, 128, 0.7) 0%, transparent 70%);
  top: -130px;
  left: -80px;
  animation: blobDrift 20s ease-in-out infinite alternate;
}
.blob-2 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(206, 64, 40, 0.5) 0%, transparent 70%);
  bottom: -80px;
  right: 5%;
  animation: blobDrift 26s ease-in-out infinite alternate-reverse;
}
@keyframes blobDrift {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(40px, 30px) scale(1.08);
  }
}

.hero-deco-num {
  position: absolute;
  right: 3rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: clamp(7rem, 15vw, 14rem);
  font-weight: 900;
  color: rgba(255, 255, 255, 0.04);
  letter-spacing: -0.05em;
  line-height: 1;
  user-select: none;
  pointer-events: none;
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
  color: rgba(255, 255, 255, 0.58);
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
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
  background: rgba(255, 255, 255, 0.28);
}
.scroll-text {
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.32);
}

/* ─── SEZIONE ───────────────────────────────────────────────────── */
.section-wrap {
  padding: 5.5rem 2rem 6.5rem;
}
.bg-light {
  background: #f4f6f9;
}

.container {
  max-width: 900px;
  margin: 0 auto;
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
  padding-bottom: 0.75rem;
}
.section-sub {
  font-size: 1.05rem;
  color: #6a7a8a;
  line-height: 1.7;
  margin-bottom: 3.5rem;
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

.qr-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 13px;
  background: linear-gradient(135deg, #25d366, #128c7e);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
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
  font-weight: 700;
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
.cta-arrow {
  transition: transform 0.3s ease;
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
  font-weight: 700;
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
  font-weight: 700;
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
@media (max-width: 860px) {
  .hero-deco-num {
    display: none;
  }
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
