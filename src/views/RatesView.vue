<script setup>
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const pricingPlans = computed(() => [
  {
    name: t('rates.economyName'),
    icon: '🚗',
    price: '25',
    period: t('rates.perDay'),
    features: [
      t('rates.economyFeature1'),
      t('rates.economyFeature2'),
      t('rates.economyFeature3'),
      t('rates.economyFeature4'),
      t('rates.economyFeature5'),
    ],
    popular: false,
    color: '#3a6fa0',
  },
  {
    name: t('rates.comfortName'),
    icon: '🚘',
    price: '35',
    period: t('rates.perDay'),
    features: [
      t('rates.comfortFeature1'),
      t('rates.comfortFeature2'),
      t('rates.comfortFeature3'),
      t('rates.comfortFeature4'),
      t('rates.comfortFeature5'),
      t('rates.comfortFeature6'),
    ],
    popular: true,
    color: '#ce4028',
  },
  {
    name: t('rates.premiumName'),
    icon: '🚙',
    price: '50',
    period: t('rates.perDay'),
    features: [
      t('rates.premiumFeature1'),
      t('rates.premiumFeature2'),
      t('rates.premiumFeature3'),
      t('rates.premiumFeature4'),
      t('rates.premiumFeature5'),
      t('rates.premiumFeature6'),
      t('rates.premiumFeature7'),
    ],
    popular: false,
    color: '#1f4f80',
  },
])

const extraServices = computed(() => [
  { name: t('rates.gpsNavigator'), price: '5', icon: '🗺️', color: '#3a6fa0' },
  { name: t('rates.childSeat'), price: '8', icon: '👶', color: '#ce4028' },
  { name: t('rates.additionalDriver'), price: '10', icon: '👥', color: '#1f4f80' },
  { name: t('rates.snowChains'), price: '15', icon: '❄️', color: '#2d5f8f' },
])

const longTermRates = [
  { period: '1 Settimana', discount: '10%', badge: 'Risparmia', icon: '📅' },
  { period: '2 Settimane', discount: '15%', badge: 'Conveniente', icon: '🎯' },
  { period: '1 Mese+', discount: '25%', badge: 'Best Deal', icon: '⭐' },
]

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true

  // Intersection Observer per animazioni allo scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
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
  <main class="rates-page">
    <!-- Hero Section -->
    <section class="rates-hero">
      <div class="hero-background">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
      </div>

      <div class="hero-content" :class="{ visible: isVisible }">
        <div class="hero-badge">
          <span class="badge-icon">💎</span>
          <span>{{ t('rates.heroTag') }}</span>
        </div>

        <h1 class="hero-title">
          <span class="title-line">{{ t('rates.heroTitle') }}</span>
          <span class="title-line gradient-text">{{ t('rates.heroSubtitle') }}</span>
        </h1>

        <p class="hero-description" v-html="t('rates.heroDescription')"></p>

        <div class="hero-features">
          <div class="feature-item">
            <span class="feature-icon">✓</span>
            <span>{{ t('rates.transparentPrices') }}</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">✓</span>
            <span>{{ t('rates.freeCancellation') }}</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">✓</span>
            <span>{{ t('rates.noHiddenCosts') }}</span>
          </div>
        </div>
      </div>

      <div class="scroll-down">
        <span>{{ t('rates.discoverOffers') }}</span>
        <div class="scroll-arrow">↓</div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="pricing-section observe">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ t('rates.plansLabel') }}</span>
          <h2>{{ t('rates.plansTitle') }}</h2>
          <p class="section-subtitle">{{ t('rates.plansSubtitle') }}</p>
        </div>

        <div class="pricing-grid">
          <div
            v-for="(plan, index) in pricingPlans"
            :key="plan.name"
            class="pricing-card"
            :class="{ popular: plan.popular }"
            :style="{ '--card-color': plan.color, '--delay': index * 0.15 + 's' }"
          >
            <div v-if="plan.popular" class="popular-badge">
              <span class="badge-star">⭐</span>
              <span>{{ t('rates.mostChosen') }}</span>
            </div>

            <div class="card-glow"></div>

            <div class="card-header">
              <div class="plan-icon">
                <span>{{ plan.icon }}</span>
              </div>
              <h3>{{ plan.name }}</h3>
            </div>

            <div class="card-price">
              <div class="price-wrapper">
                <span class="currency">€</span>
                <span class="amount">{{ plan.price }}</span>
              </div>
              <span class="period">{{ plan.period }}</span>
            </div>

            <ul class="features-list">
              <li
                v-for="(feature, idx) in plan.features"
                :key="feature"
                :style="{ '--item-delay': idx * 0.05 + 's' }"
              >
                <span class="check-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <RouterLink to="/contacts" class="select-button">
              <span class="btn-text">{{ t('rates.bookNow') }}</span>
              <span class="btn-arrow">→</span>
            </RouterLink>
          </div>
        </div>

        <div class="pricing-note">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>{{ t('rates.priceNote') }}</span>
        </div>
      </div>
    </section>

    <!-- Extra Services -->
    <section class="extras-section observe">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ t('rates.extrasLabel') }}</span>
          <h2>{{ t('rates.extrasTitle') }}</h2>
          <p class="section-subtitle">{{ t('rates.extrasSubtitle') }}</p>
        </div>

        <div class="extras-grid">
          <div
            v-for="(extra, index) in extraServices"
            :key="extra.name"
            class="extra-card"
            :style="{ '--card-color': extra.color, '--delay': index * 0.1 + 's' }"
          >
            <div class="extra-icon-wrapper">
              <div class="icon-bg"></div>
              <div class="extra-icon">{{ extra.icon }}</div>
            </div>

            <h4>{{ extra.name }}</h4>

            <div class="extra-price">
              <span class="price-amount">€{{ extra.price }}</span>
              <span class="price-period"
                >/{{
                  t('rates.perDay').replace('al ', '').replace('per ', '').replace('por ', '')
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="rates-cta observe">
      <div class="cta-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>

      <div class="container">
        <div class="cta-content">
          <div class="cta-icon">💬</div>

          <h2>{{ t('rates.ctaTitle') }}</h2>
          <p>{{ t('rates.ctaSubtitle') }}</p>

          <div class="cta-buttons">
            <RouterLink to="/contacts" class="cta-primary">
              <span class="btn-glow"></span>
              <span class="btn-content">
                <span>{{ t('rates.requestQuote') }}</span>
                <span class="btn-icon">📧</span>
              </span>
            </RouterLink>
          </div>

          <div class="cta-trust">
            <div class="trust-item">
              <span class="trust-number">500+</span>
              <span class="trust-label">{{ t('rates.happyClients') }}</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <span class="trust-number">4.9/5</span>
              <span class="trust-label">{{ t('rates.reviews') }}</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <span class="trust-number">24/7</span>
              <span class="trust-label">{{ t('rates.support') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero Section */
.rates-hero {
  min-height: 70vh;
  background: linear-gradient(135deg, #1f4f80 0%, #3a6fa0 50%, #2d5f8f 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 6rem 2rem 4rem;
}

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 8s ease-in-out infinite;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #ffd93d, #ce4028);
  bottom: -80px;
  left: -80px;
  animation-delay: 2s;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: white;
  top: 40%;
  left: 10%;
  animation-delay: 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: slideDown 0.8s ease-out 0.3s both;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.badge-icon {
  font-size: 1.3rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.1;
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

.title-line {
  display: block;
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #ffd93d 50%, #ce4028 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
  background-size: 200% auto;
}

@keyframes shimmer {
  0%,
  100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
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

.hero-description {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  font-weight: 300;
  line-height: 1.8;
  animation: fadeInUp 0.8s ease-out 0.7s both;
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.9s both;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.feature-icon {
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffd93d;
  font-size: 1.1rem;
  backdrop-filter: blur(10px);
}

.scroll-down {
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.8;
  animation:
    fadeIn 1s ease-out 1.5s both,
    floatUpDown 2s ease-in-out infinite;
}

@keyframes floatUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.scroll-down span {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-arrow {
  font-size: 1.5rem;
}

/* Sezioni Comuni */
section {
  padding: 6rem 2rem;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  color: #ce4028;
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  position: relative;
  padding: 0 1.5rem;
}

.section-label.light {
  color: white;
}

.section-label::before,
.section-label::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30px;
  height: 2px;
  background: currentColor;
}

.section-label::before {
  left: 0;
}

.section-label::after {
  right: 0;
}

h2 {
  font-size: 3rem;
  color: #1f4f80;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -1px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Animazioni Scroll */
.observe {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.observe.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Pricing Section */
.pricing-section {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.pricing-card {
  background: white;
  border-radius: 28px;
  padding: 3rem 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 3px solid transparent;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out calc(var(--delay)) both;
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, var(--card-color), transparent, var(--card-color));
  background-size: 300% 300%;
  border-radius: 28px;
  opacity: 0;
  animation: gradientRotate 4s linear infinite;
  transition: opacity 0.3s;
  z-index: 0;
}

@keyframes gradientRotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.pricing-card:hover .card-glow {
  opacity: 1;
}

.pricing-card::before {
  content: '';
  position: absolute;
  inset: 3px;
  background: white;
  border-radius: 26px;
  z-index: 1;
}

.pricing-card > * {
  position: relative;
  z-index: 2;
}

.pricing-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}

.pricing-card.popular {
  border-color: var(--card-color);
  transform: scale(1.05);
}

.pricing-card.popular:hover {
  transform: scale(1.05) translateY(-15px);
}

.popular-badge {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #ce4028, #e6583f);
  color: white;
  padding: 0.6rem 1.8rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  box-shadow: 0 6px 20px rgba(206, 64, 40, 0.4);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: pulse 2s ease-in-out infinite;
  z-index: 3;
}

.badge-star {
  font-size: 1rem;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.card-header {
  text-align: center;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 3px solid var(--card-color);
}

.plan-icon {
  margin-bottom: 1.5rem;
}

.plan-icon span {
  font-size: 4.5rem;
  display: inline-block;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));
}

.pricing-card:hover .plan-icon span {
  transform: scale(1.2) rotate(10deg);
}

.card-header h3 {
  font-size: 2rem;
  color: #1f4f80;
  font-weight: 800;
}

.card-price {
  text-align: center;
  margin-bottom: 2.5rem;
}

.price-wrapper {
  display: inline-flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.currency {
  font-size: 1.8rem;
  color: var(--card-color);
  font-weight: 800;
  margin-right: 0.3rem;
  margin-top: 0.5rem;
}

.amount {
  font-size: 4.5rem;
  color: #1f4f80;
  font-weight: 800;
  line-height: 1;
  transition: transform 0.3s ease;
}

.pricing-card:hover .amount {
  transform: scale(1.1);
}

.period {
  display: block;
  color: #666;
  font-size: 1rem;
  font-weight: 600;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  color: #333;
  font-size: 1rem;
  border-bottom: 1px solid #f0f0f0;
  opacity: 0;
  animation: fadeInLeft 0.4s ease-out calc(var(--item-delay) + var(--delay)) both;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.features-list li:last-child {
  border-bottom: none;
}

.check-icon {
  width: 26px;
  height: 26px;
  background: rgba(206, 64, 40, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.check-icon svg {
  color: #ce4028;
}

.pricing-card:hover .check-icon {
  background: var(--card-color);
}

.pricing-card:hover .check-icon svg {
  color: white;
}

.select-button {
  width: 100%;
  padding: 1.2rem 2rem;
  border: none;
  border-radius: 50px;
  background: var(--card-color);
  color: white;
  font-weight: 800;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  text-decoration: none;
}

.select-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.5s,
    height 0.5s;
}

.select-button:hover::before {
  width: 400px;
  height: 400px;
}

.select-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.btn-text,
.btn-arrow {
  position: relative;
  z-index: 1;
}

.btn-arrow {
  transition: transform 0.3s ease;
  font-size: 1.3rem;
}

.select-button:hover .btn-arrow {
  transform: translateX(5px);
  animation: bounceRight 0.6s ease infinite;
}

@keyframes bounceRight {
  0%,
  100% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(10px);
  }
}

.pricing-note {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: rgba(31, 79, 128, 0.05);
  border-left: 4px solid #1f4f80;
  border-radius: 12px;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.7;
}

.pricing-note svg {
  color: #1f4f80;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

/* Extras Section */
.extras-section {
  background: white;
}

.extras-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;
}

.extra-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 2.5rem 2rem;
  border-radius: 24px;
  text-align: center;
  border: 2px solid #e5e7eb;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out calc(var(--delay)) both;
}

.extra-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(206, 64, 40, 0.05) 0%, rgba(31, 79, 128, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.5s;
}

.extra-card:hover::before {
  opacity: 1;
}

.extra-card:hover {
  border-color: var(--card-color);
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.extra-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.icon-bg {
  position: absolute;
  inset: -10px;
  background: var(--card-color);
  opacity: 0.1;
  border-radius: 50%;
  transition: all 0.4s ease;
}

.extra-card:hover .icon-bg {
  opacity: 0.2;
  transform: scale(1.2);
}

.extra-icon {
  font-size: 4rem;
  display: block;
  position: relative;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.extra-card:hover .extra-icon {
  transform: scale(1.2) rotate(10deg);
}

.extra-card h4 {
  color: #1f4f80;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.extra-card:hover h4 {
  color: var(--card-color);
}

.extra-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.price-amount {
  font-size: 2.2rem;
  color: var(--card-color);
  font-weight: 800;
  transition: transform 0.3s ease;
}

.extra-card:hover .price-amount {
  transform: scale(1.1);
}

.price-period {
  color: #666;
  font-size: 0.9rem;
  font-weight: 600;
}

.add-button {
  width: 100%;
  padding: 0.9rem 1.5rem;
  background: transparent;
  color: var(--card-color);
  border: 2px solid var(--card-color);
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.add-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: var(--card-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.5s,
    height 0.5s;
  z-index: 0;
}

.add-button:hover::before {
  width: 400px;
  height: 400px;
}

.add-button:hover {
  color: white;
  transform: translateY(-2px);
}

.add-button span {
  position: relative;
  z-index: 1;
}

.plus-icon {
  font-size: 1.3rem;
  transition: transform 0.3s ease;
}

.add-button:hover .plus-icon {
  transform: rotate(90deg);
}

/* Long Term Section */
.long-term-section {
  background: linear-gradient(135deg, #1f4f80 0%, #2d5f8f 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.long-term-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.bg-shape.shape-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  top: -200px;
  right: -200px;
  animation: float 10s ease-in-out infinite;
}

.bg-shape.shape-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #ffd93d, #ce4028);
  bottom: -150px;
  left: -150px;
  animation: float 12s ease-in-out infinite reverse;
}

.bg-shape.shape-3 {
  width: 300px;
  height: 300px;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 8s ease-in-out infinite;
}

.long-term-section .container {
  position: relative;
  z-index: 1;
}

.long-term-section h2 {
  color: white;
}

.long-term-section .section-subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.long-term-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.term-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 28px;
  padding: 3.5rem 2.5rem;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out calc(var(--delay)) both;
}

.term-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(206, 64, 40, 0.1), rgba(255, 215, 61, 0.1));
  opacity: 0;
  transition: opacity 0.5s;
}

.term-card:hover::before {
  opacity: 1;
}

.term-card:hover {
  transform: translateY(-15px) scale(1.03);
  background: rgba(255, 255, 255, 0.15);
  border-color: #ce4028;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.term-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.term-card:hover .term-icon {
  transform: scale(1.2) rotate(360deg);
}

.term-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

.term-card h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 800;
  transition: all 0.3s ease;
}

.term-card:hover h3 {
  color: #ffd93d;
}

.discount-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.discount-circle {
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(206, 64, 40, 0.4);
  margin-bottom: 1rem;
  position: relative;
  transition: all 0.5s ease;
}

.discount-circle::before {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 3px solid #ffd93d;
  opacity: 0;
  transition: opacity 0.5s;
}

.term-card:hover .discount-circle {
  transform: scale(1.1);
}

.term-card:hover .discount-circle::before {
  opacity: 1;
}

.discount-value {
  font-size: 3.5rem;
  font-weight: 800;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.discount-label {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 600;
}

.term-features {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.term-feature {
  font-size: 0.95rem;
  font-weight: 600;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.term-card:hover .term-feature {
  opacity: 1;
  transform: translateX(5px);
}

/* CTA Section */
.rates-cta {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-decoration {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.05;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: #1f4f80;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation: float 10s ease-in-out infinite reverse;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 30%;
  animation: pulse 6s ease-in-out infinite;
}

.cta-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.rates-cta h2 {
  margin-bottom: 1.5rem;
}

.rates-cta p {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.8;
}

.cta-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.cta-primary,
.cta-secondary {
  padding: 1.3rem 3rem;
  border-radius: 50px;
  font-weight: 800;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.cta-primary {
  background: linear-gradient(135deg, #ce4028, #e6583f);
  color: white;
  box-shadow: 0 10px 30px rgba(206, 64, 40, 0.3);
}

.btn-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #ce4028, #e6583f, #ffd93d, #ce4028);
  background-size: 300% 300%;
  border-radius: 50px;
  opacity: 0;
  animation: gradientRotate 4s linear infinite;
  transition: opacity 0.3s;
}

.cta-primary:hover .btn-glow {
  opacity: 1;
}

.btn-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0 0.5rem;
  border-radius: 50px;
}

.cta-primary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 40px rgba(206, 64, 40, 0.5);
}

.btn-icon {
  font-size: 1.3rem;
  transition: transform 0.3s ease;
}

.cta-primary:hover .btn-icon {
  transform: scale(1.2) rotate(10deg);
}

.cta-secondary {
  background: white;
  color: #1f4f80;
  border: 2px solid #1f4f80;
  box-shadow: 0 5px 20px rgba(31, 79, 128, 0.15);
}

.cta-secondary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #1f4f80;
  border-radius: 50px;
  transform: scale(0);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.cta-secondary:hover::before {
  transform: scale(1);
}

.cta-secondary .btn-content {
  position: relative;
  z-index: 1;
  gap: 0.8rem;
}

.cta-secondary:hover {
  color: white;
  border-color: #1f4f80;
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(31, 79, 128, 0.3);
}

.cta-secondary svg {
  transition: transform 0.3s ease;
}

.cta-secondary:hover svg {
  transform: scale(1.1) rotate(10deg);
}

.cta-trust {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2.5rem;
  background: rgba(31, 79, 128, 0.05);
  border-radius: 20px;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.trust-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1f4f80, #ce4028);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.trust-label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.trust-divider {
  width: 1px;
  height: 50px;
  background: #ddd;
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  .long-term-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .rates-hero {
    min-height: 80vh;
    padding: 5rem 1.5rem 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .hero-features {
    gap: 1.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  section {
    padding: 4rem 1.5rem;
  }

  .pricing-grid,
  .extras-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .pricing-card.popular {
    transform: scale(1);
  }

  .pricing-card.popular:hover {
    transform: translateY(-15px);
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }

  .cta-trust {
    gap: 2rem;
  }

  .trust-divider {
    display: none;
  }

  .scroll-down {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-badge {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
  }

  .hero-features {
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .plan-icon span {
    font-size: 3.5rem;
  }

  .amount {
    font-size: 3.5rem;
  }

  .extra-icon {
    font-size: 3rem;
  }

  .cta-icon {
    font-size: 3rem;
  }

  .trust-number {
    font-size: 2rem;
  }

  .discount-circle {
    width: 120px;
    height: 120px;
  }

  .discount-value {
    font-size: 2.8rem;
  }
}
</style>
