<script setup>
import { computed, onMounted, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const contactMethods = computed(() => [
  {
    icon: '📞',
    title: t('contacts.phone'),
    value: '+39 079 98 5937',
    description: t('contacts.phoneSchedule'),
    link: 'tel:+39079985937',
    color: '#1f4f80',
  },
  {
    icon: '📧',
    title: t('contacts.email'),
    value: 'info@rentacarexpress.it',
    description: t('contacts.emailResponse'),
    link: 'mailto:info@rentacarexpress.it',
    color: '#ce4028',
  },
  {
    icon: '💬',
    title: t('contacts.whatsapp'),
    value: '+39 340 074 3137',
    description: t('contacts.whatsappAssistance'),
    link: 'https://wa.me/393400743137',
    color: '#1f4f80',
  },
])

const locationInfo = computed(() => [
  { icon: '', label: t('contacts.addressFull'), value: t('contacts.addressDetails'), html: true },
  {
    icon: '',
    label: t('contacts.openingHoursTitle'),
    value: t('contacts.openingHoursDetails'),
    html: true,
  },
  {
    icon: '',
    label: t('contacts.premiumServices'),
    value: t('contacts.premiumDetails'),
    html: true,
  },
])

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)

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
  <main class="contacts-page">
    <!-- ░░ HERO ░░ -->
    <section class="page-hero">
      <div class="hero-inner" :class="{ visible: isVisible }">
        <div class="hero-tag-row">
          <span class="hero-eyebrow">{{ t('contacts.heroTag') }}</span>
          <span class="hero-divider">—</span>
          <span class="hero-brand">Rent a Car Express</span>
        </div>
        <h1 class="hero-title">
          <span class="title-block">{{ t('contacts.heroTitle') }}</span>
          <span class="title-accent">{{ t('contacts.heroSubtitle') }}</span>
        </h1>
        <p class="hero-subtitle">{{ t('contacts.heroDescription') }}</p>
        <div class="hero-scroll-hint" aria-hidden="true">
          <span class="scroll-line"></span>
        </div>
      </div>
    </section>

    <!-- ░░ METODI DI CONTATTO ░░ -->
    <section class="section-wrap bg-light">
      <div class="container">
        <div class="section-intro observe">
          <span class="intro-dash">—</span>
          <p class="intro-text">{{ t('contacts.channelsTag') }}</p>
        </div>
        <h2 class="section-heading observe" style="--delay: 0.05s">
          {{ t('contacts.channelsTitle') }}
        </h2>

        <div class="methods-grid">
          <a
            v-for="(method, index) in contactMethods"
            :key="index"
            :href="method.link"
            class="method-card observe"
            :style="{ '--card-color': method.color, '--delay': index * 0.1 + 0.1 + 's' }"
          >
            <span class="card-num" aria-hidden="true">{{
              String(index + 1).padStart(2, '0')
            }}</span>
            <div class="card-body">
              <div class="card-header">
                <div class="card-icon-wrap">
                  <span class="card-icon">{{ method.icon }}</span>
                </div>
                <h3 class="card-title">{{ method.title }}</h3>
              </div>
              <p class="method-value">{{ method.value }}</p>
              <p class="card-text">{{ method.description }}</p>
            </div>
            <div class="card-arrow" aria-hidden="true">→</div>
            <div class="card-underline" aria-hidden="true"></div>
          </a>
        </div>
      </div>
    </section>

    <!-- ░░ MAPPA ░░ -->
    <section class="section-wrap bg-light" id="map">
      <div class="container">
        <div class="section-intro observe">
          <span class="intro-dash">—</span>
          <p class="intro-text">{{ t('contacts.locationTag') }}</p>
        </div>
        <h2 class="section-heading observe" style="--delay: 0.05s">
          {{ t('contacts.locationTitle') }}
        </h2>
        <p class="section-sub observe" style="--delay: 0.1s">
          {{ t('contacts.locationSubtitle') }}
        </p>

        <div class="map-wrapper observe" style="--delay: 0.15s">
          <div class="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.7890234567!2d8.315!3d40.556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d73b5e5c3e8e9d%3A0x123456789abcdef!2sVia%20Sebastiano%20Satta%2C%2052%2C%2007041%20Alghero%20SS!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>

          <div class="location-cards">
            <div
              v-for="(info, i) in locationInfo"
              :key="i"
              class="location-card"
              :style="{ '--delay': i * 0.08 + 0.2 + 's' }"
            >
              <div class="note-bar" aria-hidden="true"></div>
              <div class="lc-body">
                <div class="lc-icon">{{ info.icon }}</div>
                <div>
                  <strong class="lc-label">{{ info.label }}</strong>
                  <p v-if="info.html" v-html="info.value" class="lc-value"></p>
                  <p v-else class="lc-value">{{ info.value }}</p>
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
  min-height: 56vh;
  display: flex;
  align-items: flex-end;
  padding: 9rem 3rem 5.5rem;
  background:
    linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url('/jumbo3.jpg') center center / cover no-repeat;
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
.bg-light {
  background: #f4f6f9;
}
.bg-white {
  background: #fff;
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
  border-bottom: 1px solid rgba(31, 79, 128, 0.12);
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

/* ─── GRIGLIA METODI ────────────────────────────────────────────── */
.methods-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}

/* ─── CARD BASE ─────────────────────────────────────────────────── */
.method-card {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 2.25rem 2rem 2.75rem;
  overflow: hidden;
  text-decoration: none;
  border: 1px solid rgba(31, 79, 128, 0.07);
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.35s ease;
}
.method-card:hover {
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
.method-card:hover .card-num {
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
  margin-bottom: 1rem;
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
.method-card:hover .card-icon-wrap {
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
.method-card:hover .card-title {
  color: var(--card-color);
}

.method-value {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1f4f80;
  margin-bottom: 0.5rem;
}
.card-text {
  font-size: 0.93rem;
  color: #5a6a7a;
  line-height: 1.75;
}

.card-arrow {
  position: absolute;
  bottom: 1.5rem;
  right: 1.75rem;
  font-size: 1.1rem;
  color: var(--card-color);
  opacity: 0;
  transform: translate(6px, 0);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.method-card:hover .card-arrow {
  opacity: 1;
  transform: translate(0, 0);
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
.method-card:hover .card-underline {
  width: 100%;
}

/* ─── MAPPA ─────────────────────────────────────────────────────── */
.map-wrapper {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 2rem;
  align-items: start;
}

.map-frame {
  border-radius: 16px;
  overflow: hidden;
  height: 460px;
  box-shadow: 0 8px 36px rgba(14, 45, 78, 0.1);
  border: 1px solid rgba(31, 79, 128, 0.08);
}

.location-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.location-card {
  display: flex;
  align-items: stretch;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(31, 79, 128, 0.08);
  box-shadow: 0 3px 14px rgba(14, 45, 78, 0.06);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}
.location-card:hover {
  transform: translateX(5px);
  box-shadow: 0 8px 28px rgba(14, 45, 78, 0.12);
  border-color: rgba(31, 79, 128, 0.2);
}

.note-bar {
  width: 4px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #1f4f80, #ce4028);
}

.lc-body {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.4rem 1.5rem;
}
.lc-icon {
  font-size: 1.5rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.lc-label {
  display: block;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1f4f80;
  margin-bottom: 0.4rem;
}
.lc-value {
  font-size: 0.93rem;
  color: #5a6a7a;
  line-height: 1.65;
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
  .map-wrapper {
    grid-template-columns: 1fr;
  }
  .map-frame {
    height: 380px;
  }
}

@media (max-width: 860px) {
  .methods-grid {
    grid-template-columns: 1fr;
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
  .map-frame {
    height: 300px;
  }
  .card-num {
    font-size: 2.5rem;
  }
}
</style>
