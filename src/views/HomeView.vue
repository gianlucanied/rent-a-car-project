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
  },
  {
    icon: '🔧',
    title: t('home.serviceAssistanceTitle'),
    description: t('home.serviceAssistanceText'),
    color: '#e6583f',
  },
])

const fleet = [
  {
    name: 'Auto e Utilitarie',
    description: 'Marche premium del mercato',
    image: '🚙',
    price: 'da €25/giorno',
    features: ['Senza conducente', 'Consegna inclusa', 'Tutte le marche'],
  },
  {
    name: 'Monovolumi e Minibus',
    description: 'Spazio per tutta la famiglia',
    image: '🚐',
    price: 'da €45/giorno',
    features: ['Fino a 9 posti', 'Ideali per gruppi', 'Con o senza autista'],
  },
]

const stats = computed(() => [
  { number: '10+', label: t('home.yearsExperience') },
  { number: '24/7', label: t('home.assistance') },
])

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true

  // Intersection Observer per animazioni allo scroll
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
  <main>
    <!-- Hero Section / Jumbotron -->
    <section class="jumbotron">
      <div class="hero-background">
        <div class="floating-car car-1">🚗</div>
        <div class="floating-car car-2">🚙</div>
        <div class="floating-car car-3">🚘</div>
      </div>

      <div class="hero-content" :class="{ visible: isVisible }">
        <h1 class="hero-title">
          <span class="title-line">{{ t('home.heroTitle') }}</span>
          <span class="title-line gradient-text">{{ t('home.heroSubtitle') }}</span>
        </h1>

        <div class="hero-buttons">
          <RouterLink to="/rates" class="btn-primary">
            <span class="btn-text">{{ t('home.discoverRates') }}</span>
            <span class="btn-icon">→</span>
          </RouterLink>
          <RouterLink to="/contacts" class="btn-secondary">
            <span class="btn-icon">📞</span>
            <span class="btn-text">{{ t('home.contactUs') }}</span>
          </RouterLink>
        </div>

        <!-- Stats rapide -->
        <div class="hero-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <span>{{ t('home.scroll') }}</span>
        <div class="scroll-arrow">↓</div>
      </div>
    </section>

    <!-- Sezione Chi Siamo -->
    <section class="about-us observe">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ t('home.aboutLabel') }}</span>
          <h2>{{ t('home.aboutTitle') }}</h2>
          <p class="section-subtitle">{{ t('home.aboutSubtitle') }}</p>
        </div>

        <div class="about-content">
          <div class="about-text">
            <div class="about-highlight">
              <span class="highlight-icon">🏝️</span>
              <div>
                <h3>{{ t('home.aboutCompany') }}</h3>
                <p class="highlight-subtitle">{{ t('home.aboutCompanySubtitle') }}</p>
              </div>
            </div>

            <p class="about-description" v-html="t('home.aboutDescription')"></p>

            <div class="about-features">
              <div class="about-feature-item">
                <span class="feature-number">01</span>
                <div class="feature-content">
                  <h4>{{ t('home.aboutFeature1Title') }}</h4>
                  <p>{{ t('home.aboutFeature1Text') }}</p>
                </div>
              </div>

              <div class="about-feature-item">
                <span class="feature-number">02</span>
                <div class="feature-content">
                  <h4>{{ t('home.aboutFeature2Title') }}</h4>
                  <p>{{ t('home.aboutFeature2Text') }}</p>
                </div>
              </div>

              <div class="about-feature-item">
                <span class="feature-number">03</span>
                <div class="feature-content">
                  <h4>{{ t('home.aboutFeature3Title') }}</h4>
                  <p>{{ t('home.aboutFeature3Text') }}</p>
                </div>
              </div>

              <div class="about-feature-item">
                <span class="feature-number">04</span>
                <div class="feature-content">
                  <h4>{{ t('home.aboutFeature4Title') }}</h4>
                  <p>{{ t('home.aboutFeature4Text') }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="about-image">
            <div class="image-decoration decoration-1"></div>
            <div class="image-decoration decoration-2"></div>
            <div class="image-card">
              <div class="image-icon">🚗</div>
              <div class="image-content">
                <h4>{{ t('home.aboutImageTitle') }}</h4>
                <p>{{ t('home.aboutImageSubtitle') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione Perché Sceglierci -->
    <section class="why-us observe">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ t('home.whyUsLabel') }}</span>
          <h2>{{ t('home.whyUsTitle') }}</h2>
          <p class="section-subtitle">{{ t('home.whyUsSubtitle') }}</p>
        </div>

        <div class="services-grid">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="service-card"
            :style="{ '--card-color': service.color, '--delay': index * 0.1 + 's' }"
          >
            <div class="card-shine"></div>
            <div class="service-icon">
              <span>{{ service.icon }}</span>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <div class="card-corner"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione Come Funziona -->
    <section class="how-it-works observe">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ t('home.howItWorksLabel') }}</span>
          <h2>{{ t('home.howItWorksTitle') }}</h2>
          <p class="section-subtitle">{{ t('home.howItWorksSubtitle') }}</p>
        </div>

        <div class="steps">
          <div class="step" :style="{ '--delay': '0s' }">
            <div class="step-number">
              <span class="number">1</span>
              <div class="pulse-ring"></div>
            </div>
            <div class="step-content">
              <h3>{{ t('home.step1Title') }}</h3>
              <p>{{ t('home.step1Text') }}</p>
            </div>
            <div class="step-connector"></div>
          </div>

          <div class="step" :style="{ '--delay': '0.2s' }">
            <div class="step-number">
              <span class="number">2</span>
              <div class="pulse-ring"></div>
            </div>
            <div class="step-content">
              <h3>{{ t('home.step2Title') }}</h3>
              <p>{{ t('home.step2Text') }}</p>
            </div>
            <div class="step-connector"></div>
          </div>

          <div class="step" :style="{ '--delay': '0.4s' }">
            <div class="step-number">
              <span class="number">3</span>
              <div class="pulse-ring"></div>
            </div>
            <div class="step-content">
              <h3>{{ t('home.step3Title') }}</h3>
              <p>{{ t('home.step3Text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Hero / Jumbotron Section */
.jumbotron {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1f4f80 0%, #2d5f8f 50%, #ce4028 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.floating-car {
  position: absolute;
  font-size: 4rem;
  opacity: 0.1;
  animation: float 20s ease-in-out infinite;
  filter: blur(2px);
}

.car-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.car-2 {
  top: 60%;
  right: 15%;
  animation-delay: 7s;
}

.car-3 {
  bottom: 20%;
  left: 50%;
  animation-delay: 14s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(5deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(-5deg);
  }
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
}

.title-line {
  font-size: 4rem;
  font-weight: 900;
  color: white;
  line-height: 1;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.gradient-text {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffa500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.btn-primary,
.btn-secondary {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: white;
  color: #1f4f80;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.btn-primary:hover::before {
  opacity: 1;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  color: white;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: translateY(-3px);
}

.btn-text,
.btn-icon {
  position: relative;
  z-index: 1;
}

.btn-icon {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-icon {
  transform: translateX(5px);
}

.hero-stats {
  display: flex;
  gap: 3rem;
  justify-content: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.stat-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-arrow {
  font-size: 1.5rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

/* Sezioni comuni */
section {
  padding: 6rem 2rem;
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
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  color: white;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(206, 64, 40, 0.3);
}

h2 {
  font-size: 3rem;
  font-weight: 900;
  color: #1f4f80;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* About Us Section */
.about-us {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-highlight {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(31, 79, 128, 0.05), rgba(206, 64, 40, 0.05));
  border-radius: 20px;
  border: 2px solid rgba(31, 79, 128, 0.1);
}

.highlight-icon {
  font-size: 3.5rem;
  line-height: 1;
}

.about-highlight h3 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1f4f80;
  margin-bottom: 0.5rem;
}

.highlight-subtitle {
  color: #666;
  font-size: 1rem;
}

.about-description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #444;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-feature-item {
  display: flex;
  gap: 1.5rem;
  align-items: start;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(31, 79, 128, 0.1);
}

.about-feature-item:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(31, 79, 128, 0.1);
  border-color: #ce4028;
}

.feature-number {
  font-size: 2rem;
  font-weight: 900;
  color: #ce4028;
  line-height: 1;
  opacity: 0.3;
  min-width: 60px;
}

.feature-content h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f4f80;
  margin-bottom: 0.75rem;
}

.feature-content p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

.about-image {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-decoration {
  position: absolute;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  border-radius: 30px;
  opacity: 0.1;
}

.decoration-1 {
  top: 0;
  right: 0;
  width: 80%;
  height: 80%;
  animation: float 10s ease-in-out infinite;
}

.decoration-2 {
  bottom: 0;
  left: 0;
  width: 70%;
  height: 70%;
  background: linear-gradient(135deg, #1f4f80, #3a6fa0);
  animation: float 15s ease-in-out infinite reverse;
}

.image-card {
  position: relative;
  z-index: 1;
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 25px;
  box-shadow: 0 20px 60px rgba(31, 79, 128, 0.15);
  text-align: center;
  max-width: 350px;
  border: 3px solid rgba(31, 79, 128, 0.1);
}

.image-icon {
  font-size: 5rem;
  margin-bottom: 1.5rem;
  animation: bounce 3s ease-in-out infinite;
}

.image-content h4 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1f4f80;
  margin-bottom: 0.75rem;
}

.image-content p {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
}

/* Why Us Section */
.why-us {
  background: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
}

.service-card {
  position: relative;
  padding: 3rem 2.5rem;
  background: white;
  border-radius: 25px;
  box-shadow: 0 10px 40px rgba(31, 79, 128, 0.08);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 2px solid rgba(31, 79, 128, 0.05);
  animation: fadeInUp 0.6s ease-out calc(var(--delay)) both;
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

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--card-color),
    color-mix(in srgb, var(--card-color) 70%, white)
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.service-card:hover::before {
  opacity: 0.05;
}

.service-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 60px rgba(31, 79, 128, 0.15);
  border-color: var(--card-color);
}

.card-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(255, 255, 255, 0.8) 50%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.6s;
}

.service-card:hover .card-shine {
  opacity: 1;
  animation: shine 1.5s ease-in-out;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) skewX(-15deg);
  }
  100% {
    transform: translateX(200%) skewX(-15deg);
  }
}

.service-icon {
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-icon {
  transform: scale(1.2) rotate(10deg);
}

.service-card h3 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1f4f80;
  margin-bottom: 1.25rem;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.service-card:hover h3 {
  color: var(--card-color);
}

.service-card p {
  color: #666;
  line-height: 1.8;
  font-size: 1.05rem;
  position: relative;
  z-index: 1;
}

.card-corner {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, transparent 50%, var(--card-color) 50%);
  opacity: 0.1;
  transition: all 0.5s ease;
}

.service-card:hover .card-corner {
  width: 150px;
  height: 150px;
  opacity: 0.15;
}

/* Come Funziona */
.how-it-works {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.step {
  text-align: center;
  position: relative;
  padding: 2rem 1.5rem;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.6s ease-out calc(var(--delay)) both;
}

.step:hover {
  transform: translateY(-15px);
}

.step-connector {
  position: absolute;
  top: 45px;
  right: -1.5rem;
  width: 3rem;
  height: 2px;
  background: linear-gradient(90deg, #ce4028 0%, #e6583f 50%, transparent 100%);
  display: none;
}

@media (min-width: 992px) {
  .step:not(:last-child) .step-connector {
    display: block;
  }
}

.step-number {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #1f4f80, #3a6fa0);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 30px rgba(31, 79, 128, 0.3);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.number {
  position: relative;
  z-index: 2;
}

.pulse-ring {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 3px solid #ce4028;
  opacity: 0;
  animation: pulseRing 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes pulseRing {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.3);
  }
}

.step:hover .pulse-ring {
  animation-duration: 1s;
}

.step:hover .step-number {
  transform: scale(1.15) rotate(360deg);
  box-shadow: 0 15px 40px rgba(31, 79, 128, 0.4);
  background: linear-gradient(135deg, #ce4028, #e6583f);
}

.step-content h3 {
  color: #1f4f80;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.step:hover .step-content h3 {
  color: #ce4028;
}

.step-content p {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
}

/* Animations Observer */
.observe {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.observe.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 1200px) {
  .steps {
    gap: 2.5rem;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-stats {
    gap: 2rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .about-image {
    min-height: 400px;
  }

  .steps {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .step-connector {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .jumbotron {
    min-height: 100vh;
    padding: 8rem 1.5rem 4rem;
  }

  .hero-title {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }

  .title-line {
    font-size: 2.5rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  h2 {
    font-size: 2rem;
  }

  section {
    padding: 4rem 1.5rem;
  }

  .services-grid,
  .steps {
    gap: 2rem;
  }

  .hero-stats {
    gap: 1.5rem;
    flex-direction: column;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .scroll-indicator {
    display: none;
  }

  .floating-car {
    font-size: 3rem;
  }

  .about-content {
    gap: 3rem;
  }

  .about-highlight {
    flex-direction: column;
    text-align: center;
  }

  .about-image {
    min-height: 350px;
  }

  .image-card {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .title-line {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .service-icon {
    font-size: 3.5rem;
  }

  .step-number {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }

  .hero-stats {
    padding: 1.5rem;
  }
}

/* Print Styles */
@media print {
  .hero-buttons,
  .btn-primary,
  .btn-secondary,
  .scroll-indicator {
    display: none;
  }
}
</style>
