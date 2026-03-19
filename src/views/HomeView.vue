<script setup>
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const services = computed(() => [
  {
    icon: '💳',
    title: t('home.servicePaymentTitle'),
    description: t('home.servicePaymentText'),
    color: '#1f4f80',
    span: 'normal',
  },
  {
    icon: '🔧',
    title: t('home.serviceAssistanceTitle'),
    description: t('home.serviceAssistanceText'),
    color: '#ce4028',
    span: 'normal',
  },
])

const stats = computed(() => [
  { number: '10+', label: t('home.yearsExperience') },
  { number: '24/7', label: t('home.assistance') },
])

const features = computed(() => [
  {
    num: '01',
    title: t('home.aboutFeature1Title'),
    text: t('home.aboutFeature1Text'),
    color: '#1f4f80',
  },
  {
    num: '02',
    title: t('home.aboutFeature2Title'),
    text: t('home.aboutFeature2Text'),
    color: '#ce4028',
  },
  {
    num: '03',
    title: t('home.aboutFeature3Title'),
    text: t('home.aboutFeature3Text'),
    color: '#1f4f80',
  },
  {
    num: '04',
    title: t('home.aboutFeature4Title'),
    text: t('home.aboutFeature4Text'),
    color: '#ce4028',
  },
])

const steps = computed(() => [
  { n: '01', title: t('home.step1Title'), text: t('home.step1Text') },
  { n: '02', title: t('home.step2Title'), text: t('home.step2Text') },
  { n: '03', title: t('home.step3Title'), text: t('home.step3Text') },
])

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
    { threshold: 0.08, rootMargin: '0px 0px -80px 0px' },
  )
  document.querySelectorAll('.observe').forEach((el) => observer.observe(el))
})
</script>

<template>
  <main class="home-page">
    <!-- ░░ HERO ░░ -->
    <section class="page-hero">
      <div class="hero-lines" aria-hidden="true">
        <span v-for="n in 8" :key="n" class="diag-line" :style="{ '--i': n }"></span>
      </div>
      <div class="hero-blob blob-1" aria-hidden="true"></div>
      <div class="hero-blob blob-2" aria-hidden="true"></div>

      <!-- auto flottanti -->
      <div class="floating-car car-1" aria-hidden="true">🚗</div>
      <div class="floating-car car-2" aria-hidden="true">🚙</div>
      <div class="floating-car car-3" aria-hidden="true">🚘</div>

      <div class="hero-inner" :class="{ visible: isVisible }">
        <div class="hero-tag-row">
          <span class="hero-eyebrow">Alghero · Sardegna</span>
          <span class="hero-divider">—</span>
          <span class="hero-brand">Rent a Car Express</span>
        </div>

        <h1 class="hero-title">
          <span class="title-block">{{ t('home.heroTitle') }}</span>
          <span class="title-accent">{{ t('home.heroSubtitle') }}</span>
        </h1>

        <div class="hero-buttons">
          <RouterLink to="/rates" class="btn-primary">
            <span class="btn-text">{{ t('home.discoverRates') }}</span>
            <span class="btn-arrow">→</span>
          </RouterLink>
          <RouterLink to="/contacts" class="btn-secondary">
            <span>📞</span>
            <span class="btn-text">{{ t('home.contactUs') }}</span>
          </RouterLink>
        </div>

        <div class="hero-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-deco-num" aria-hidden="true">01</div>
    </section>

    <!-- ░░ CHI SIAMO ░░ -->
    <section class="section-wrap bg-white">
      <div class="container">
        <div class="section-intro observe">
          <span class="intro-dash">—</span>
          <p class="intro-text">{{ t('home.aboutLabel') }}</p>
        </div>
        <h2 class="section-heading observe" style="--delay: 0.05s">{{ t('home.aboutTitle') }}</h2>
        <p class="section-sub observe" style="--delay: 0.1s">{{ t('home.aboutSubtitle') }}</p>

        <div class="about-layout">
          <!-- colonna sinistra: highlight + descrizione + features -->
          <div class="about-left">
            <div class="about-highlight observe" style="--delay: 0.15s">
              <div class="note-bar" aria-hidden="true"></div>
              <div class="ah-body">
                <div>
                  <h3 class="ah-title">{{ t('home.aboutCompany') }}</h3>
                  <p class="ah-sub">{{ t('home.aboutCompanySubtitle') }}</p>
                </div>
              </div>
            </div>

            <p
              class="about-description observe"
              style="--delay: 0.2s"
              v-html="t('home.aboutDescription')"
            ></p>

            <div class="features-grid">
              <article
                v-for="(feat, i) in features"
                :key="feat.num"
                class="feat-card observe"
                :style="{ '--card-color': feat.color, '--delay': i * 0.08 + 0.25 + 's' }"
              >
                <span class="feat-num" aria-hidden="true">{{ feat.num }}</span>
                <div class="feat-body">
                  <div class="feat-icon-wrap">
                    <div class="feat-dot"></div>
                  </div>
                  <div>
                    <h4 class="feat-title">{{ feat.title }}</h4>
                    <p class="feat-text">{{ feat.text }}</p>
                  </div>
                </div>
                <div class="card-underline" aria-hidden="true"></div>
              </article>
            </div>
          </div>

          <!-- colonna destra: card decorativa -->
          <div class="about-right observe" style="--delay: 0.3s">
            <div class="about-deco-blob blob-a" aria-hidden="true"></div>
            <div class="about-deco-blob blob-b" aria-hidden="true"></div>
            <div class="about-card">
              <div class="about-card-icon">🚗</div>
              <h4 class="about-card-title">{{ t('home.aboutImageTitle') }}</h4>
              <p class="about-card-sub">{{ t('home.aboutImageSubtitle') }}</p>
              <div class="about-card-stats">
                <div v-for="stat in stats" :key="stat.label" class="acs-item">
                  <span class="acs-num">{{ stat.number }}</span>
                  <span class="acs-label">{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ PERCHÉ NOI ░░ -->
    <section class="section-wrap bg-light">
      <div class="container">
        <div class="section-intro observe">
          <span class="intro-dash">—</span>
          <p class="intro-text">{{ t('home.whyUsLabel') }}</p>
        </div>
        <h2 class="section-heading observe" style="--delay: 0.05s">{{ t('home.whyUsTitle') }}</h2>
        <p class="section-sub observe" style="--delay: 0.1s">{{ t('home.whyUsSubtitle') }}</p>

        <div class="services-grid">
          <article
            v-for="(service, index) in services"
            :key="service.title"
            class="service-card observe"
            :style="{ '--card-color': service.color, '--delay': index * 0.1 + 0.15 + 's' }"
          >
            <span class="card-num" aria-hidden="true">{{
              String(index + 1).padStart(2, '0')
            }}</span>
            <div class="card-body">
              <div class="card-header">
                <div class="card-icon-wrap">
                  <span class="card-icon">{{ service.icon }}</span>
                </div>
                <h3 class="card-title">{{ service.title }}</h3>
              </div>
              <p class="card-text">{{ service.description }}</p>
            </div>
            <div class="card-underline" aria-hidden="true"></div>
          </article>
        </div>
      </div>
    </section>

    <!-- ░░ COME FUNZIONA ░░ -->
    <section class="section-wrap bg-white">
      <div class="container">
        <div class="section-intro observe">
          <span class="intro-dash">—</span>
          <p class="intro-text">{{ t('home.howItWorksLabel') }}</p>
        </div>
        <h2 class="section-heading observe" style="--delay: 0.05s">
          {{ t('home.howItWorksTitle') }}
        </h2>
        <p class="section-sub observe" style="--delay: 0.1s">{{ t('home.howItWorksSubtitle') }}</p>

        <div class="steps-grid">
          <div
            v-for="(step, i) in steps"
            :key="step.n"
            class="step-card observe"
            :style="{ '--delay': i * 0.12 + 0.15 + 's' }"
          >
            <!-- connettore -->
            <div v-if="i < steps.length - 1" class="step-connector" aria-hidden="true"></div>

            <div class="step-badge">
              <span class="step-n">{{ step.n }}</span>
              <div class="step-ring" aria-hidden="true"></div>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-text">{{ step.text }}</p>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: rgba(255, 255, 255, 0.035);
  transform: rotate(20deg);
  transform-origin: top center;
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}
.blob-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(31, 79, 128, 0.65) 0%, transparent 70%);
  top: -160px;
  left: -120px;
  animation: blobDrift 22s ease-in-out infinite alternate;
}
.blob-2 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(206, 64, 40, 0.5) 0%, transparent 70%);
  bottom: -100px;
  right: 5%;
  animation: blobDrift 28s ease-in-out infinite alternate-reverse;
}
@keyframes blobDrift {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(40px, 30px) scale(1.08);
  }
}

/* auto flottanti */
.floating-car {
  position: absolute;
  font-size: 4rem;
  opacity: 0.07;
  filter: blur(2px);
  animation: carFloat 22s ease-in-out infinite;
}
.car-1 {
  top: 18%;
  left: 8%;
  animation-delay: 0s;
}
.car-2 {
  top: 58%;
  right: 10%;
  animation-delay: 8s;
}
.car-3 {
  bottom: 18%;
  left: 48%;
  animation-delay: 16s;
}
@keyframes carFloat {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(28px, -28px) rotate(4deg);
  }
  66% {
    transform: translate(-18px, 18px) rotate(-4deg);
  }
}

.hero-deco-num {
  position: absolute;
  right: 3rem;
  bottom: 4rem;
  font-size: clamp(8rem, 18vw, 18rem);
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  letter-spacing: -0.06em;
  line-height: 1;
  user-select: none;
  pointer-events: none;
}

/* contenuto hero */
.hero-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 860px;
  padding: 2rem 2rem 6rem;
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.hero-inner.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-tag-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}
.hero-eyebrow {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #e6583f;
}
.hero-divider {
  color: rgba(255, 255, 255, 0.2);
}
.hero-brand {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.38);
}

.hero-title {
  margin-bottom: 2.5rem;
}
.title-block {
  display: block;
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  color: #fff;
  line-height: 1;
  letter-spacing: -0.04em;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}
.title-accent {
  display: block;
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  background: linear-gradient(90deg, #e6583f 0%, #ffa07a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 0.4rem;
}

/* bottoni */
.hero-buttons {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}
.btn-primary,
.btn-secondary {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.1rem 2.25rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s ease,
    background 0.35s ease;
  position: relative;
  overflow: hidden;
}
.btn-primary {
  background: #fff;
  color: #1f4f80;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
}
.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  opacity: 0;
  transition: opacity 0.35s ease;
}
.btn-primary:hover::before {
  opacity: 1;
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.25);
  color: #fff;
}
.btn-text,
.btn-arrow {
  position: relative;
  z-index: 1;
}
.btn-arrow {
  transition: transform 0.3s ease;
}
.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
}

/* stats */
.hero-stats {
  display: inline-flex;
  gap: 0;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  overflow: hidden;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 2.5rem;
  gap: 0.3rem;
  position: relative;
}
.stat-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 20%;
  bottom: 20%;
  width: 1px;
  background: rgba(255, 255, 255, 0.15);
}
.stat-number {
  font-size: 2.2rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
  letter-spacing: -0.03em;
}
.stat-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

/* scroll hint */
.hero-scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 3rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 2;
}
.scroll-line {
  display: block;
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
}
.scroll-text {
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
}

/* ─── SEZIONI ───────────────────────────────────────────────────── */
.section-wrap {
  padding: 6rem 2rem 7rem;
}
.bg-white {
  background: #fff;
}
.bg-light {
  background: #f4f6f9;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
}

.section-intro {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(31, 79, 128, 0.1);
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
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #0e2d4e;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 0.75rem;
}
.section-sub {
  font-size: 1.05rem;
  color: #6a7a8a;
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: 3.5rem;
}

/* ─── CHI SIAMO ─────────────────────────────────────────────────── */
.about-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
  align-items: start;
}

.about-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* highlight box con barra laterale */
.about-highlight {
  display: flex;
  align-items: stretch;
  background: #f4f6f9;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(31, 79, 128, 0.08);
}
.note-bar {
  width: 4px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #1f4f80, #ce4028);
}
.ah-body {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem 1.75rem;
}
.ah-icon {
  font-size: 2.5rem;
  line-height: 1;
  flex-shrink: 0;
}
.ah-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: #0e2d4e;
  margin-bottom: 0.3rem;
}
.ah-sub {
  font-size: 0.92rem;
  color: #6a7a8a;
}

.about-description {
  font-size: 1.05rem;
  color: #5a6a7a;
  line-height: 1.85;
}

/* features grid 2 colonne */
.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.feat-card {
  position: relative;
  background: #fff;
  border-radius: 14px;
  padding: 1.75rem 1.5rem 2rem;
  border: 1px solid rgba(31, 79, 128, 0.07);
  overflow: hidden;
  transition:
    transform 0.32s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.32s ease,
    border-color 0.32s ease;
}
.feat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 40px rgba(14, 45, 78, 0.1);
  border-color: var(--card-color);
}

.feat-num {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 1;
  color: rgba(31, 79, 128, 0.055);
  letter-spacing: -0.04em;
  user-select: none;
  transition: color 0.3s ease;
}
.feat-card:hover .feat-num {
  color: rgba(31, 79, 128, 0.1);
}

.feat-body {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  position: relative;
  z-index: 1;
}
.feat-icon-wrap {
  width: 10px;
  flex-shrink: 0;
  margin-top: 0.5rem;
}
.feat-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--card-color);
  transition: transform 0.3s ease;
}
.feat-card:hover .feat-dot {
  transform: scale(1.4);
}

.feat-title {
  font-size: 0.97rem;
  font-weight: 800;
  color: #0e2d4e;
  margin-bottom: 0.4rem;
  transition: color 0.3s;
}
.feat-card:hover .feat-title {
  color: var(--card-color);
}
.feat-text {
  font-size: 0.87rem;
  color: #6a7a8a;
  line-height: 1.7;
}

/* colonna destra about */
.about-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 420px;
}
.about-deco-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
}
.blob-a {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(206, 64, 40, 0.12) 0%, transparent 70%);
  top: 0;
  right: 0;
  animation: blobDrift 18s ease-in-out infinite alternate;
}
.blob-b {
  width: 260px;
  height: 260px;
  background: radial-gradient(circle, rgba(31, 79, 128, 0.1) 0%, transparent 70%);
  bottom: 0;
  left: 0;
  animation: blobDrift 24s ease-in-out infinite alternate-reverse;
}
.about-card {
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(31, 79, 128, 0.1);
  box-shadow: 0 12px 50px rgba(14, 45, 78, 0.1);
  text-align: center;
  width: 100%;
  max-width: 320px;
}
.about-card-icon {
  font-size: 4rem;
  margin-bottom: 1.25rem;
  animation: carFloat 5s ease-in-out infinite;
}
.about-card-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: #0e2d4e;
  margin-bottom: 0.5rem;
}
.about-card-sub {
  font-size: 0.9rem;
  color: #6a7a8a;
  margin-bottom: 1.75rem;
  line-height: 1.6;
}
.about-card-stats {
  display: flex;
  gap: 0;
  background: #f4f6f9;
  border-radius: 12px;
  overflow: hidden;
}
.acs-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  gap: 0.2rem;
  position: relative;
}
.acs-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 20%;
  bottom: 20%;
  width: 1px;
  background: rgba(31, 79, 128, 0.12);
}
.acs-num {
  font-size: 1.6rem;
  font-weight: 900;
  color: #1f4f80;
  letter-spacing: -0.03em;
}
.acs-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6a7a8a;
}

/* ─── PERCHÉ NOI ────────────────────────────────────────────────── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

/* card base (stessa logica ConditionsView) */
.service-card,
.feat-card {
  position: relative;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(31, 79, 128, 0.07);
}
.service-card {
  padding: 2.5rem 2.25rem 3rem;
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(14, 45, 78, 0.13);
  border-color: var(--card-color);
}

.card-num {
  position: absolute;
  top: 1.5rem;
  right: 1.75rem;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  color: rgba(31, 79, 128, 0.055);
  letter-spacing: -0.04em;
  user-select: none;
  transition: color 0.35s ease;
}
.service-card:hover .card-num {
  color: rgba(31, 79, 128, 0.1);
}

.card-body {
  position: relative;
  z-index: 1;
}
.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.card-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 13px;
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--card-color) 12%, white),
    color-mix(in srgb, var(--card-color) 6%, white)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.35s ease;
}
.service-card:hover .card-icon-wrap {
  transform: scale(1.1) rotate(6deg);
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--card-color) 22%, white),
    color-mix(in srgb, var(--card-color) 12%, white)
  );
}
.card-icon {
  font-size: 1.75rem;
  line-height: 1;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #0e2d4e;
  line-height: 1.3;
  transition: color 0.3s ease;
}
.service-card:hover .card-title {
  color: var(--card-color);
}
.card-text {
  font-size: 0.95rem;
  color: #5a6a7a;
  line-height: 1.8;
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
  border-radius: 0 0 16px 16px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.service-card:hover .card-underline,
.feat-card:hover .card-underline {
  width: 100%;
}

/* ─── COME FUNZIONA ─────────────────────────────────────────────── */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
}

.step-card {
  position: relative;
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: #fff;
  border-radius: 16px;
  border: 1px solid rgba(31, 79, 128, 0.07);
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s ease;
}
.step-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 48px rgba(14, 45, 78, 0.1);
}

/* connettore orizzontale tra step */
.step-connector {
  position: absolute;
  top: 58px;
  right: -1rem;
  width: 2rem;
  height: 2px;
  background: linear-gradient(90deg, #ce4028, transparent);
  z-index: 1;
}
@media (max-width: 860px) {
  .step-connector {
    display: none;
  }
}

.step-badge {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #0e2d4e, #1f4f80);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.75rem;
  box-shadow: 0 10px 30px rgba(14, 45, 78, 0.25);
  position: relative;
  transition:
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.5s ease,
    background 0.5s ease;
}
.step-card:hover .step-badge {
  transform: scale(1.12) rotate(360deg);
  background: linear-gradient(135deg, #ce4028, #e6583f);
  box-shadow: 0 14px 38px rgba(206, 64, 40, 0.35);
}

.step-n {
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
  position: relative;
  z-index: 2;
  letter-spacing: -0.03em;
}

.step-ring {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 2.5px solid #ce4028;
  opacity: 0;
  animation: pulseRing 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes pulseRing {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: scale(1.35);
  }
}

.step-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0e2d4e;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}
.step-card:hover .step-title {
  color: #ce4028;
}
.step-text {
  font-size: 0.93rem;
  color: #6a7a8a;
  line-height: 1.8;
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
  .about-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .about-right {
    min-height: auto;
  }
  .about-card {
    max-width: 100%;
  }
}

@media (max-width: 860px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .hero-deco-num {
    display: none;
  }
  .hero-scroll-hint {
    display: none;
  }
}

@media (max-width: 600px) {
  .page-hero {
    min-height: 100svh;
  }
  .hero-inner {
    padding-bottom: 4rem;
  }
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  .btn-primary,
  .btn-secondary {
    justify-content: center;
  }
  .hero-stats {
    flex-direction: column;
    gap: 0;
    border-radius: 14px;
  }
  .stat-item:not(:last-child)::after {
    display: none;
  }
  .section-wrap {
    padding: 4rem 1.25rem 5rem;
  }
  .feat-card {
    padding: 1.5rem 1.25rem 1.75rem;
  }
}
</style>
