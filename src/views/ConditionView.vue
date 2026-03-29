<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const conditions = [
  { icon: '', key: 'payment', color: '#1f4f80', span: 'wide' },
  { icon: '', key: 'taxes', color: '#1f4f80', span: 'normal' },
  { icon: '', key: 'fuel', color: '#ce4028', span: 'normal' },
  { icon: '', key: 'minAge', color: '#1f4f80', span: 'normal' },
  { icon: '', key: 'scdw', color: '#ce4028', span: 'wide' },
  { icon: '', key: 'delivery', color: '#1f4f80', span: 'normal' },
  { icon: '', key: 'extension', color: '#ce4028', span: 'normal' },
  { icon: '', key: 'documents', color: '#1f4f80', span: 'normal' },
]

const faqs = computed(() => [
  { q: t('faq.q1'), a: t('faq.a1') },
  { q: t('faq.q2'), a: t('faq.a2') },
  { q: t('faq.q3'), a: t('faq.a3') },
  { q: t('faq.q4'), a: t('faq.a4') },
  { q: t('faq.q5'), a: t('faq.a5') },
  { q: t('faq.q6'), a: t('faq.a6') },
  { q: t('faq.q7'), a: t('faq.a7') },
  { q: t('faq.q8'), a: t('faq.a8') },
])

onMounted(() => {
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
  <main class="conditions-page">
    <!-- ░░ HERO ░░ -->
    <section class="page-hero">
      <div class="hero-lines" aria-hidden="true">
        <span v-for="n in 8" :key="n" class="diag-line" :style="{ '--i': n }"></span>
      </div>
      <div class="hero-blob blob-1" aria-hidden="true"></div>
      <div class="hero-blob blob-2" aria-hidden="true"></div>

      <div class="hero-inner">
        <div class="hero-tag-row">
          <span class="hero-eyebrow">{{ t('conditions.label') }}</span>
          <span class="hero-divider">—</span>
          <span class="hero-year">Rent a Car Express</span>
        </div>
        <h1 class="hero-title">
          <span class="title-block">{{ t('conditions.heroTitle') }}</span>
        </h1>
        <p class="hero-subtitle">{{ t('conditions.heroSubtitle') }}</p>
        <div class="hero-scroll-hint" aria-hidden="true">
          <span class="scroll-line"></span>
        </div>
      </div>

      <div class="hero-deco-num" aria-hidden="true">08</div>
    </section>

    <!-- ░░ GRID CONDIZIONI ░░ -->
    <section class="conditions-section">
      <div class="container">
        <div class="section-intro observe"></div>

        <div class="conditions-grid">
          <article
            v-for="(condition, index) in conditions"
            :key="condition.key"
            class="condition-card observe"
            :class="[`span-${condition.span}`]"
            :style="{ '--card-color': condition.color, '--delay': index * 0.08 + 's' }"
          >
            <span class="card-num" aria-hidden="true">{{
              String(index + 1).padStart(2, '0')
            }}</span>

            <div class="card-body">
              <div class="card-header">
                <h3 class="card-title">{{ t(`conditions.${condition.key}Title`) }}</h3>
              </div>
              <p class="card-text">{{ t(`conditions.${condition.key}Text`) }}</p>
            </div>

            <div class="card-underline" aria-hidden="true"></div>
          </article>
        </div>

        <div class="conditions-note observe">
          <div class="note-bar" aria-hidden="true"></div>
          <div class="note-content">
            <span class="note-label">Nota</span>
            <p>{{ t('conditions.note') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ FAQ ░░ -->
    <section class="section-wrap bg-white">
      <div class="container">
        <div class="section-intro observe">
          <span class="intro-dash">—</span>
          <p class="intro-text">{{ t('faq.sectionLabel') }}</p>
        </div>
        <h2 class="section-heading observe" style="--delay: 0.05s">{{ t('faq.sectionTitle') }}</h2>
        <p class="section-sub observe" style="--delay: 0.1s">{{ t('faq.sectionSubtitle') }}</p>

        <div class="faq-list">
          <details v-for="(faq, i) in faqs" :key="i" class="faq-item">
            <summary class="faq-question">
              <span class="faq-num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="faq-q-text">{{ faq.q }}</span>
              <span class="faq-icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div class="faq-answer">
              <p>{{ faq.a }}</p>
            </div>
          </details>
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
  padding: 9rem 3rem 5rem;
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
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(31, 79, 128, 0.7) 0%, transparent 70%);
  top: -120px;
  left: -80px;
  animation: blobDrift 20s ease-in-out infinite alternate;
}
.blob-2 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(206, 64, 40, 0.55) 0%, transparent 70%);
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
  max-width: 780px;
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
  font-size: 0.9rem;
}
.hero-year {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
}

.hero-title {
  margin-bottom: 1.5rem;
}
.title-block {
  display: block;
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  max-width: 520px;
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
  background: rgba(255, 255, 255, 0.3);
}

/* ─── SEZIONE CONDIZIONI ────────────────────────────────────────── */
.conditions-section {
  padding: 5rem 2rem 7rem;
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
  font-size: 0.88rem;
  color: #888;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.intro-index {
  font-size: 1.2rem;
  color: #ce4028;
  font-weight: 700;
}

/* ─── SEZIONE GENERICA ──────────────────────────────────────────── */
.section-wrap {
  padding: 5.5rem 2rem 6.5rem;
}
.bg-white {
  background: #fff;
}

.section-heading {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 900;
  color: #0e2d4e;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 1rem;
}
.section-sub {
  font-size: 1.05rem;
  color: #6a7a8a;
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: 3rem;
}

/* ─── GRIGLIA ──────────────────────────────────────────────────── */
.conditions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}
.condition-card.span-wide {
  grid-column: span 2;
}

/* ─── CARD ─────────────────────────────────────────────────────── */
.condition-card {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 2.25rem 2rem 2.5rem;
  overflow: hidden;
  cursor: default;
  border: 1px solid rgba(31, 79, 128, 0.07);
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.35s ease;
}
.condition-card:hover {
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
  color: rgba(31, 79, 128, 0.06);
  letter-spacing: -0.04em;
  user-select: none;
  transition: color 0.35s ease;
}
.condition-card:hover .card-num {
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
  width: 48px;
  height: 48px;
  border-radius: 12px;
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
.condition-card:hover .card-icon-wrap {
  transform: scale(1.1) rotate(6deg);
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--card-color) 22%, white),
    color-mix(in srgb, var(--card-color) 12%, white)
  );
}

.card-icon {
  font-size: 1.6rem;
  line-height: 1;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0e2d4e;
  line-height: 1.3;
  transition: color 0.3s ease;
}
.condition-card:hover .card-title {
  color: var(--card-color);
}

.card-text {
  font-size: 0.93rem;
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
.condition-card:hover .card-underline {
  width: 100%;
}

/* ─── NOTA ─────────────────────────────────────────────────────── */
.conditions-note {
  display: flex;
  align-items: stretch;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(31, 79, 128, 0.1);
  box-shadow: 0 4px 20px rgba(14, 45, 78, 0.06);
}
.note-bar {
  width: 5px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #1f4f80, #ce4028);
}
.note-content {
  padding: 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.note-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1f4f80;
}
.conditions-note p {
  font-size: 0.95rem;
  color: #5a6a7a;
  line-height: 1.75;
}

/* ─── FAQ ───────────────────────────────────────────────────────── */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background: #f4f6f9;
  border-radius: 14px;
  border: 1px solid rgba(31, 79, 128, 0.07);
  overflow: hidden;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}
.faq-item:hover {
  border-color: rgba(31, 79, 128, 0.2);
  box-shadow: 0 6px 24px rgba(14, 45, 78, 0.08);
}
.faq-item[open] {
  background: #fff;
  border-color: rgba(31, 79, 128, 0.18);
  box-shadow: 0 8px 30px rgba(14, 45, 78, 0.09);
}

.faq-item summary {
  list-style: none;
}
.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.4rem 1.75rem;
  cursor: pointer;
  user-select: none;
  border-left: 4px solid rgba(31, 79, 128, 0.1);
  transition: border-color 0.3s ease;
}
.faq-item:hover .faq-question {
  border-left-color: rgba(31, 79, 128, 0.3);
}
.faq-item[open] .faq-question {
  border-left-color: #ce4028;
}

.faq-num {
  font-size: 1.6rem;
  font-weight: 900;
  line-height: 1;
  color: rgba(31, 79, 128, 0.1);
  letter-spacing: -0.04em;
  flex-shrink: 0;
  transition: color 0.3s ease;
}
.faq-item:hover .faq-num,
.faq-item[open] .faq-num {
  color: rgba(31, 79, 128, 0.18);
}

.faq-q-text {
  flex: 1;
  font-size: 1rem;
  font-weight: 700;
  color: #0e2d4e;
  line-height: 1.4;
  transition: color 0.3s ease;
}
.faq-item:hover .faq-q-text,
.faq-item[open] .faq-q-text {
  color: #1f4f80;
}

.faq-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(31, 79, 128, 0.07);
  justify-content: center;
  color: #1f4f80;
  transition:
    background 0.3s ease,
    transform 0.3s ease,
    color 0.3s ease;
}
.faq-item[open] .faq-icon {
  background: #ce4028;
  color: #fff;
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 1.75rem 1.5rem;
  padding-left: calc(1.75rem + 1.6rem + 1rem);
}
.faq-answer p {
  font-size: 0.93rem;
  color: #5a6a7a;
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

/* ─── RESPONSIVE ───────────────────────────────────────────────── */
@media (max-width: 900px) {
  .conditions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .condition-card.span-wide {
    grid-column: span 2;
  }
  .hero-deco-num {
    display: none;
  }
}

@media (max-width: 600px) {
  .page-hero {
    padding: 7rem 1.75rem 4rem;
    min-height: auto;
  }
  .conditions-grid {
    grid-template-columns: 1fr;
  }
  .condition-card.span-wide {
    grid-column: span 1;
  }
  .conditions-section {
    padding: 3.5rem 1.25rem 5rem;
  }
  .section-wrap {
    padding: 3.5rem 1.25rem 5rem;
  }
  .card-num {
    font-size: 2.5rem;
  }
}
</style>
