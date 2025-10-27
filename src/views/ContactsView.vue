<script setup>
import { computed, onMounted, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const contactMethods = computed(() => [
  {
    icon: '📞',
    title: t('contacts.phone'),
    value: '+39 079 123 4567',
    description: t('contacts.phoneSchedule'),
    link: 'tel:+390791234567',
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: '📧',
    title: t('contacts.email'),
    value: 'info@rentacarexpress.it',
    description: t('contacts.emailResponse'),
    link: 'mailto:info@rentacarexpress.it',
    gradient: 'from-red-500 via-red-600 to-rose-600',
    iconBg: 'bg-red-50',
  },
  {
    icon: '💬',
    title: t('contacts.whatsapp'),
    value: '+39 333 123 4567',
    description: t('contacts.whatsappAssistance'),
    link: 'https://wa.me/393331234567',
    gradient: 'from-green-500 via-emerald-600 to-teal-600',
    iconBg: 'bg-green-50',
  },
])

const privacyData = computed(() => [
  {
    icon: '📋',
    title: t('contacts.privacyDataCollected'),
    items: [
      t('contacts.privacyName'),
      t('contacts.privacyCompany'),
      t('contacts.privacyPhone'),
      t('contacts.privacyEmail'),
      t('contacts.privacyRequest'),
    ],
    color: '#1f4f80',
  },
  {
    icon: '⏱️',
    title: t('contacts.privacyTreatment'),
    description: t('contacts.privacyTreatmentText'),
    color: '#ce4028',
  },
  {
    icon: '🔒',
    title: t('contacts.privacyRights'),
    description: t('contacts.privacyRightsText'),
    color: '#2d5f8f',
  },
])

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
          <span class="badge-text">{{ t('contacts.heroTag') }}</span>
        </div>

        <h1 class="hero-title">
          <span class="title-main">{{ t('contacts.heroTitle') }}</span>
          <span class="title-gradient">{{ t('contacts.heroSubtitle') }}</span>
        </h1>

        <p class="hero-description" v-html="t('contacts.heroDescription')"></p>

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
          <span class="section-tag">{{ t('contacts.channelsTag') }}</span>
          <h2 class="section-title">{{ t('contacts.channelsTitle') }}</h2>
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

    <!-- QR Code WhatsApp Section -->
    <section class="qrcode-section observe">
      <div class="container">
        <div class="qrcode-card">
          <div class="qrcode-decoration">
            <div class="qrcode-blob qrcode-blob-1"></div>
            <div class="qrcode-blob qrcode-blob-2"></div>
          </div>

          <div class="qrcode-content">
            <div class="qrcode-text">
              <div class="qrcode-icon">💬</div>
              <h2 class="qrcode-title">{{ t('contacts.qrCodeTitle') }}</h2>
              <p class="qrcode-description">{{ t('contacts.qrCodeDescription') }}</p>
            </div>

            <div class="qrcode-image-wrapper">
              <div class="qrcode-frame">
                <img src="/src/assets/qrcode.jpg" alt="QR Code WhatsApp" class="qrcode-img" />
              </div>
              <div class="qrcode-badge">
                <span>{{ t('contacts.scanNow') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section observe" id="map">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('contacts.locationTag') }}</span>
          <h2 class="section-title">{{ t('contacts.locationTitle') }}</h2>
          <p class="section-subtitle">{{ t('contacts.locationSubtitle') }}</p>
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
                <strong>{{ t('contacts.addressFull') }}</strong>
                <p v-html="t('contacts.addressDetails')"></p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">🕒</div>
              <div>
                <strong>{{ t('contacts.openingHoursTitle') }}</strong>
                <p v-html="t('contacts.openingHoursDetails')"></p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">🚗</div>
              <div>
                <strong>{{ t('contacts.premiumServices') }}</strong>
                <p v-html="t('contacts.premiumDetails')"></p>
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
          <span class="section-tag">{{ t('contacts.conditionsTag') }}</span>
          <h2 class="section-title">{{ t('contacts.conditionsTitle') }}</h2>
          <p class="section-subtitle">{{ t('contacts.conditionsSubtitle') }}</p>
        </div>

        <div class="conditions-grid">
          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #1f4f80">
                <span>💳</span>
              </div>
              <h3>{{ t('contacts.payment') }}</h3>
            </div>
            <div class="condition-content">
              <p>{{ t('contacts.paymentText') }}</p>
              <div class="highlight-box">
                <strong>{{ t('contacts.deposit') }}</strong> {{ t('contacts.depositText') }}
                <strong>{{ t('contacts.depositAmount') }}</strong>
              </div>
              <p class="note-text">{{ t('contacts.paymentNote') }}</p>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #ce4028">
                <span>📊</span>
              </div>
              <h3>{{ t('contacts.taxes') }}</h3>
            </div>
            <div class="condition-content">
              <p>{{ t('contacts.taxesText') }}</p>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #2d5f8f">
                <span>⛽</span>
              </div>
              <h3>{{ t('contacts.fuel') }}</h3>
            </div>
            <div class="condition-content">
              <p>{{ t('contacts.fuelText') }}</p>
              <div class="highlight-box warning">
                <strong>{{ t('contacts.fuelWarning') }}</strong>
                {{ t('contacts.fuelWarningText') }} <strong>{{ t('contacts.fuelCost') }}</strong>
              </div>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #e6583f">
                <span>🎂</span>
              </div>
              <h3>{{ t('contacts.minAge') }}</h3>
            </div>
            <div class="condition-content">
              <p>{{ t('contacts.minAgeText') }}</p>
              <p class="note-text">{{ t('contacts.minAgeNote') }}</p>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #1f4f80">
                <span>🛡️</span>
              </div>
              <h3>{{ t('contacts.superCDW') }}</h3>
            </div>
            <div class="condition-content">
              <p>{{ t('contacts.superCDWText') }}</p>
              <div class="highlight-box">
                <strong>{{ t('contacts.superCDWCost') }}</strong>
                {{ t('contacts.superCDWCostAmount') }}
              </div>
              <p class="note-text">{{ t('contacts.superCDWNote') }}</p>
            </div>
          </div>

          <div class="condition-card">
            <div class="condition-header">
              <div class="condition-icon" style="background: #ce4028">
                <span>📋</span>
              </div>
              <h3>{{ t('contacts.documentation') }}</h3>
            </div>
            <div class="condition-content">
              <ul class="requirements-list">
                <li>{{ t('contacts.docLicense') }}</li>
                <li>{{ t('contacts.docID') }}</li>
                <li>{{ t('contacts.docCard') }}</li>
                <li>{{ t('contacts.docFiscalCode') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy Section -->
    <section class="privacy-section observe">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('contacts.privacyTag') }}</span>
          <h2 class="section-title">{{ t('contacts.privacyTitle') }}</h2>
          <p class="section-subtitle">{{ t('contacts.privacySubtitle') }}</p>
        </div>

        <div class="privacy-highlight">
          <div class="highlight-icon">
            <span>🛡️</span>
          </div>
          <div class="highlight-content">
            <h3>{{ t('contacts.privacyGuarantee') }}</h3>
            <p>{{ t('contacts.privacyGuaranteeText') }}</p>
          </div>
        </div>

        <div class="privacy-grid">
          <div v-for="(item, index) in privacyData" :key="index" class="privacy-card">
            <div class="privacy-card-header">
              <div class="privacy-icon" :style="{ background: item.color }">
                <span>{{ item.icon }}</span>
              </div>
              <h3>{{ item.title }}</h3>
            </div>

            <div class="privacy-card-content">
              <ul v-if="item.items" class="privacy-list">
                <li v-for="(listItem, i) in item.items" :key="i">
                  <span class="list-bullet">✓</span>
                  <span>{{ listItem }}</span>
                </li>
              </ul>
              <p v-else class="privacy-description">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div class="footer-cards">
          <div class="footer-card">
            <div class="footer-icon">
              <span>🎯</span>
            </div>
            <div class="footer-content">
              <h3>{{ t('contacts.privacyPurpose') }}</h3>
              <p v-html="t('contacts.privacyPurposeText')"></p>
            </div>
          </div>

          <div class="footer-card">
            <div class="footer-icon">
              <span>🔐</span>
            </div>
            <div class="footer-content">
              <h3>{{ t('contacts.dataSecurity') }}</h3>
              <p v-html="t('contacts.dataSecurityText')"></p>
            </div>
          </div>

          <div class="contact-privacy-card">
            <div class="contact-privacy-icon">
              <span>📞</span>
            </div>
            <div class="contact-privacy-content">
              <h3>{{ t('contacts.privacyQuestions') }}</h3>
              <p>{{ t('contacts.privacyQuestionsText') }}</p>
              <div class="contact-details">
                <div class="detail-item">
                  <strong>📧 {{ t('contacts.email') }}</strong>
                  <p>
                    <a href="mailto:info@rentacarexpress.it">info@rentacarexpress.it</a>
                  </p>
                </div>
                <div class="detail-item">
                  <strong>📞 {{ t('contacts.phone') }}</strong>
                  <p>+39 079 123 4567</p>
                </div>
                <div class="detail-item">
                  <strong>📍 {{ t('contacts.legalHeadquarters') }}</strong>
                  <p>Via Sebastiano Satta, 52<br />07041 Alghero (SS)</p>
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
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.contacts-page {
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
  overflow-x: hidden;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1f4f80 0%, #2d5f8f 50%, #3a6f9e 100%);
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 20s ease-in-out infinite;
}

.blob-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(45deg, #ffd93d, #ff6b9d);
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #00f2fe, #4facfe);
  bottom: -150px;
  right: -150px;
  animation-delay: 5s;
}

.blob-3 {
  width: 400px;
  height: 400px;
  background: linear-gradient(225deg, #f093fb, #f5576c);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 10s;
}

.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
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

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  padding: 4rem 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.badge-icon {
  font-size: 1.5rem;
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
  margin-bottom: 2rem;
}

.title-main,
.title-gradient {
  display: block;
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
}

.title-main {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.title-gradient {
  background: linear-gradient(135deg, #ffd93d 0%, #ff6b9d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 0.5rem;
}

.hero-description {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.375rem;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-mouse {
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  position: relative;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {
  0%,
  100% {
    top: 8px;
    opacity: 1;
  }
  50% {
    top: 20px;
    opacity: 0.5;
  }
}

/* Common Section Styles */
.methods-section,
.qrcode-section,
.map-section,
.conditions-section,
.privacy-section {
  padding: 6rem 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  padding: 0.625rem 1.5rem;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  color: white;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(31, 79, 128, 0.3);
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #1f4f80;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #666;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* Observe Animation */
.observe {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.observe.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Contact Methods Grid */
.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.method-card {
  position: relative;
  padding: 3rem 2.5rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
}

.method-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #1f4f80, #2d5f8f, #3a6f9e);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.method-card:hover::before {
  opacity: 1;
}

.card-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.6s ease;
}

.method-card:hover .card-shine {
  left: 100%;
}

.method-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(31, 79, 128, 0.2);
  border-color: rgba(31, 79, 128, 0.2);
}

.method-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.4s ease;
}

.method-card:hover .method-icon-wrapper {
  transform: scale(1.1) rotate(-5deg);
}

.method-icon {
  font-size: 2.5rem;
}

.method-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f4f80;
  margin-bottom: 1rem;
}

.method-value {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
}

.method-desc {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
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
  transform: translate(10px, 10px);
  transition: all 0.4s ease;
}

.method-card:hover .card-arrow {
  opacity: 1;
  transform: translate(0, 0);
}

/* QR Code Section Styles */
.qrcode-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e8f4f8 100%);
}

.qrcode-card {
  position: relative;
  background: white;
  border-radius: 32px;
  padding: 4rem;
  box-shadow: 0 20px 60px rgba(31, 79, 128, 0.15);
  overflow: hidden;
}

.qrcode-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.qrcode-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
}

.qrcode-blob-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #25d366, #128c7e);
  top: -100px;
  right: -100px;
  animation: float 15s ease-in-out infinite;
}

.qrcode-blob-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #25d366, #34e89e);
  bottom: -80px;
  left: -80px;
  animation: float 20s ease-in-out infinite reverse;
}

.qrcode-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.qrcode-text {
  text-align: left;
}

.qrcode-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #25d366, #128c7e);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
}

.qrcode-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f4f80;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.qrcode-description {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.8;
}

.qrcode-image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.qrcode-frame {
  position: relative;
  padding: 2rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  border: 3px solid #25d366;
  transition: all 0.4s ease;
}

.qrcode-frame:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 60px rgba(37, 211, 102, 0.3);
}

.qrcode-img {
  display: block;
  width: 280px;
  height: 280px;
  object-fit: contain;
  border-radius: 12px;
}

.qrcode-badge {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

/* Map Section */
.map-section {
  background: white;
}

.map-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.map-frame {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  height: 500px;
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc, #ffffff);
  border-radius: 20px;
  border: 2px solid rgba(31, 79, 128, 0.1);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(31, 79, 128, 0.15);
  border-color: rgba(31, 79, 128, 0.3);
}

.info-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(31, 79, 128, 0.25);
}

.info-card strong {
  display: block;
  font-size: 1.25rem;
  color: #1f4f80;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.info-card p {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
}

/* Conditions Section */
.conditions-section {
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
}

.conditions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .conditions-grid {
    grid-template-columns: 1fr;
  }
}

.condition-card {
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  border: 2px solid transparent;
  color: #333;
}

.condition-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(31, 79, 128, 0.15);
  border-color: rgba(31, 79, 128, 0.2);
}

.condition-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.condition-icon {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.condition-header h3 {
  font-size: 1.625rem;
  font-weight: 700;
  color: #1f4f80;
}

.condition-content {
  color: #333;
  line-height: 1.8;
  font-size: 1.0625rem;
}

.condition-content p {
  margin-bottom: 1.25rem;
  color: #333;
}

.condition-content p:last-child {
  margin-bottom: 0;
}

.highlight-box {
  padding: 1.5rem;
  background: linear-gradient(135deg, #e8f4f8, #f0f9ff);
  border-left: 4px solid #1f4f80;
  border-radius: 12px;
  margin: 1.5rem 0;
  color: #333;
}

.highlight-box strong {
  color: #1f4f80;
  font-weight: 700;
}

.highlight-box.warning {
  background: linear-gradient(135deg, #fff4e6, #ffe8cc);
  border-left-color: #ce4028;
  color: #333;
}

.highlight-box.warning strong {
  color: #ce4028;
}

.note-text {
  font-size: 0.9375rem;
  color: #777;
  font-style: italic;
  margin-top: 1rem;
}

.pricing-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  color: #333;
}

.price-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.price-label {
  font-weight: 600;
  color: #333;
  font-size: 1rem;
}

.price-value {
  font-weight: 700;
  color: #1f4f80;
  font-size: 1.25rem;
}

/* Privacy Section */
.privacy-section {
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
}

.privacy-highlight {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  border-radius: 24px;
  color: white;
  margin-bottom: 4rem;
  box-shadow: 0 15px 50px rgba(31, 79, 128, 0.3);
}

.highlight-icon {
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.highlight-content h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.highlight-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  opacity: 0.95;
}

.privacy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.privacy-card {
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  border: 2px solid transparent;
}

.privacy-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(31, 79, 128, 0.15);
  border-color: rgba(31, 79, 128, 0.2);
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.privacy-card-header h3 {
  font-size: 1.625rem;
  font-weight: 700;
  color: #1f4f80;
  line-height: 1.3;
}

.privacy-list {
  list-style: none;
  padding: 0;
}

.privacy-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(31, 79, 128, 0.1);
  color: #555;
  font-size: 1.0625rem;
}

.privacy-list li:last-child {
  border-bottom: none;
}

.list-bullet {
  color: #25d366;
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.privacy-description {
  color: #555;
  line-height: 1.8;
  font-size: 1.0625rem;
}

.footer-cards {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.footer-notice {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem;
  background: linear-gradient(135deg, #f8fafc, #e8f4f8);
  border-radius: 24px;
  border: 2px solid rgba(31, 79, 128, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.notice-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(31, 79, 128, 0.3);
}

.notice-content h4 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f4f80;
  margin-bottom: 1rem;
}

.notice-content p {
  color: #666;
  line-height: 1.8;
  font-size: 1.0625rem;
}

.footer-card {
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 3rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s ease;
}

.footer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(31, 79, 128, 0.15);
  border-color: rgba(31, 79, 128, 0.2);
}

.footer-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #1f4f80, #2d5f8f);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(31, 79, 128, 0.3);
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
  color: white;
}

.contact-privacy-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  opacity: 0.95;
  margin-bottom: 2rem;
  color: white;
}

.contact-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.detail-item {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.3s ease;
}

.detail-item:hover {
  background: rgba(255, 255, 255, 0.2);
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
  opacity: 1;
  margin: 0;
  line-height: 1.6;
  color: white;
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

  .qrcode-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .qrcode-text {
    text-align: center;
  }

  .qrcode-icon {
    margin-left: auto;
    margin-right: auto;
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

  .qrcode-card {
    padding: 2.5rem;
  }

  .qrcode-title {
    font-size: 2rem;
  }

  .qrcode-description {
    font-size: 1rem;
  }

  .qrcode-img {
    width: 220px;
    height: 220px;
  }

  .privacy-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .conditions-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .condition-card {
    padding: 2rem;
  }

  .condition-header {
    flex-direction: row;
    gap: 1.25rem;
  }

  .condition-icon {
    width: 60px;
    height: 60px;
    font-size: 1.75rem;
  }

  .condition-header h3 {
    font-size: 1.375rem;
  }

  .condition-content {
    font-size: 1rem;
  }

  .highlight-box {
    padding: 1.25rem;
    font-size: 0.9375rem;
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
  .qrcode-section,
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

  .contact-privacy-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }

  .contact-privacy-content h3 {
    font-size: 1.5rem;
  }

  .contact-privacy-content p {
    font-size: 1rem;
  }

  .contact-details {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .detail-item {
    padding: 1.25rem;
  }

  .detail-item strong {
    font-size: 1rem;
  }

  .detail-item p {
    font-size: 0.9375rem;
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

  .qrcode-card {
    padding: 2rem;
  }

  .qrcode-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  .qrcode-title {
    font-size: 1.5rem;
  }

  .qrcode-img {
    width: 200px;
    height: 200px;
  }

  .qrcode-badge {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .privacy-card {
    padding: 2rem;
  }

  .condition-card {
    padding: 1.5rem;
  }

  .condition-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .condition-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    margin: 0 auto;
  }

  .condition-header h3 {
    font-size: 1.25rem;
  }

  .condition-content {
    font-size: 0.9375rem;
  }

  .highlight-box {
    padding: 1rem;
    font-size: 0.875rem;
  }

  .highlight-box strong {
    display: block;
    margin-bottom: 0.5rem;
  }

  .note-text {
    font-size: 0.875rem;
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

  .contact-privacy-card {
    padding: 1.75rem;
  }

  .contact-privacy-content h3 {
    font-size: 1.25rem;
  }

  .contact-privacy-content p {
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  .detail-item {
    padding: 1rem;
  }

  .detail-item strong {
    font-size: 0.9375rem;
  }

  .detail-item p {
    font-size: 0.875rem;
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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
