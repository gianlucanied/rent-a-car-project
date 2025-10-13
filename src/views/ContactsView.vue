<script setup>
import { onMounted, ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const contactMethods = [
  {
    icon: '📞',
    title: 'Telefono',
    value: '+39 070 123 4567',
    description: 'Lun-Sab: 9:00-18:00',
    link: 'tel:+390701234567',
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: '📧',
    title: 'Email',
    value: 'info@rentacar.com',
    description: 'Risposta entro 24h',
    link: 'mailto:info@rentacar.com',
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
  {
    icon: '📍',
    title: 'Sede',
    value: 'Via Roma 123, Cagliari',
    description: 'Sardegna, Italia',
    link: '#map',
    gradient: 'from-purple-500 via-violet-600 to-purple-700',
    iconBg: 'bg-purple-50',
  },
]

const faqItems = [
  {
    question: 'Quali documenti servono per noleggiare?',
    answer:
      "Patente di guida valida, carta d'identità o passaporto e carta di credito intestata al conducente.",
    icon: '📄',
    color: 'blue',
  },
  {
    question: 'Posso modificare o cancellare la prenotazione?',
    answer: 'Sì, puoi modificare o cancellare gratuitamente fino a 24 ore prima del ritiro.',
    icon: '📅',
    color: 'purple',
  },
  {
    question: "È possibile riconsegnare l'auto in un'altra sede?",
    answer: 'Sì, offriamo il servizio one-way con un supplemento che varia in base alla distanza.',
    icon: '🔄',
    color: 'green',
  },
]

const isVisible = ref(false)
const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = () => {
  if (
    !formData.value.name ||
    !formData.value.email ||
    !formData.value.subject ||
    !formData.value.message
  ) {
    alert('Per favore, compila tutti i campi obbligatori.')
    return
  }

  isSubmitting.value = true

  setTimeout(() => {
    isSubmitting.value = false
    showSuccess.value = true

    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    }

    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  }, 1500)
}

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
  <main class="contacts-page bg-gradient-to-br from-slate-50 via-white to-blue-50">
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

    <!-- Form and Map Section -->
    <section class="form-section observe">
      <div class="container">
        <div class="form-map-wrapper">
          <!-- Form Container -->
          <div class="form-container">
            <div class="form-header">
              <div class="header-line"></div>
              <h2 class="form-title">✉️ Inviaci un Messaggio</h2>
              <p class="form-subtitle">Compila il form, ti risponderemo al più presto</p>
            </div>

            <div class="contact-form">
              <div class="form-row">
                <div class="form-field">
                  <label class="form-label">Nome e Cognome *</label>
                  <input
                    type="text"
                    v-model="formData.name"
                    placeholder="Mario Rossi"
                    class="form-input"
                  />
                </div>

                <div class="form-field">
                  <label class="form-label">Email *</label>
                  <input
                    type="email"
                    v-model="formData.email"
                    placeholder="mario@email.com"
                    class="form-input"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label class="form-label">Telefono</label>
                  <input
                    type="tel"
                    v-model="formData.phone"
                    placeholder="+39 333 123 4567"
                    class="form-input"
                  />
                </div>

                <div class="form-field">
                  <label class="form-label">Oggetto *</label>
                  <select v-model="formData.subject" class="form-input">
                    <option value="">Seleziona...</option>
                    <option value="info">Richiesta informazioni</option>
                    <option value="quote">Preventivo personalizzato</option>
                    <option value="booking">Prenotazione</option>
                    <option value="support">Assistenza</option>
                    <option value="other">Altro</option>
                  </select>
                </div>
              </div>

              <div class="form-field">
                <label class="form-label">Messaggio *</label>
                <textarea
                  v-model="formData.message"
                  rows="5"
                  placeholder="Scrivi qui il tuo messaggio..."
                  class="form-input form-textarea"
                ></textarea>
              </div>

              <button @click="handleSubmit" class="submit-btn" :disabled="isSubmitting">
                <span class="btn-bg"></span>
                <span class="btn-content">
                  <span v-if="!isSubmitting">Invia Messaggio</span>
                  <span v-else class="flex items-center gap-2">
                    <span class="spinner"></span>
                    Invio in corso...
                  </span>
                  <span class="btn-icon">✈️</span>
                </span>
              </button>

              <transition name="success-fade">
                <div v-if="showSuccess" class="success-alert">
                  <span class="success-icon">✓</span>
                  <span>Messaggio inviato con successo!</span>
                </div>
              </transition>
            </div>
          </div>

          <!-- Map Container -->
          <div class="map-container" id="map">
            <div class="map-header">
              <div class="header-line"></div>
              <h2 class="map-title">📍 Dove Siamo</h2>
              <p class="map-subtitle">Vieni a trovarci nella nostra sede</p>
            </div>

            <div class="map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d9.108989315318255!3d39.21631997952286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e734157e5c2b85%3A0x5e7b8c4e5c3e5e8e!2sCagliari%2C%20CA%2C%20Italia!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div class="location-cards">
              <div class="info-card">
                <div class="info-icon">📍</div>
                <div>
                  <strong>Indirizzo</strong>
                  <p>Via Roma 123, 09100 Cagliari (CA)</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon">🕒</div>
                <div>
                  <strong>Orari di Apertura</strong>
                  <p>Lun-Sab 9:00-18:00 | Dom: Chiuso</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon">🚗</div>
                <div>
                  <strong>Parcheggio</strong>
                  <p>Disponibile in loco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section observe">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">FAQ</span>
          <h2 class="section-title">Domande Frequenti</h2>
          <p class="section-subtitle">Le risposte alle domande più comuni</p>
        </div>

        <div class="faq-grid">
          <div v-for="(faq, index) in faqItems" :key="index" class="faq-card">
            <div class="faq-icon-box">
              <span class="faq-icon">{{ faq.icon }}</span>
            </div>
            <h3 class="faq-question">{{ faq.question }}</h3>
            <p class="faq-answer">{{ faq.answer }}</p>
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
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
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
  opacity: 0.3;
  animation: float 8s ease-in-out infinite;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  top: -100px;
  right: -100px;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #ef4444, #f59e0b);
  bottom: -100px;
  left: -100px;
  animation-delay: 2s;
}

.blob-3 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #10b981, #06b6d4);
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
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
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ef4444 100%);
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
  opacity: 0.9;
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
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8px 0;
}

.scroll-wheel {
  width: 4px;
  height: 12px;
  background: rgba(255, 255, 255, 0.6);
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
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
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
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
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
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: #e2e8f0;
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
  color: #0f172a;
  margin-bottom: 0.75rem;
}

.method-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.method-desc {
  font-size: 0.9375rem;
  color: #64748b;
}

.card-arrow {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
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

/* Form Section */
.form-section {
  padding: 7rem 0;
  background: white;
}

.form-map-wrapper {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 4rem;
  align-items: start;
}

.form-header,
.map-header {
  margin-bottom: 2.5rem;
}

.header-line {
  width: 70px;
  height: 6px;
  background: linear-gradient(90deg, #ef4444, #f59e0b);
  border-radius: 10px;
  margin-bottom: 1.5rem;
}

.form-title,
.map-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.75rem;
}

.form-subtitle,
.map-subtitle {
  font-size: 1.0625rem;
  color: #64748b;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.75rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.form-label {
  font-weight: 700;
  font-size: 0.9375rem;
  color: #0f172a;
}

.form-input {
  padding: 1.125rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  font-size: 1rem;
  font-family: inherit;
  background: white;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.form-input:focus {
  outline: none;
  border-color: #ef4444;
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
  transform: translateY(-2px);
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  position: relative;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #ef4444, #f59e0b);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 800;
  font-size: 1.125rem;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 50px rgba(239, 68, 68, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.submit-btn:hover .btn-bg {
  transform: translateX(100%);
}

.btn-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.btn-icon {
  font-size: 1.25rem;
  transition: transform 0.3s;
}

.submit-btn:hover .btn-icon {
  transform: translateX(5px) rotate(15deg);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.success-alert {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border-radius: 20px;
  font-weight: 700;
  font-size: 1.0625rem;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
}

.success-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.success-fade-enter-active {
  animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.success-fade-leave-active {
  animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) reverse;
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

/* Map Container */
.map-container {
  position: sticky;
  top: 2rem;
}

.map-frame {
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
}

.map-frame:hover {
  transform: scale(1.02);
}

.location-cards {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8fafc, #ffffff);
  border-radius: 18px;
  border: 2px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.info-card:hover {
  transform: translateX(8px);
  border-color: #ef4444;
  box-shadow: 0 8px 30px rgba(239, 68, 68, 0.1);
}

.info-icon {
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2);
}

.info-card strong {
  display: block;
  color: #0f172a;
  font-weight: 700;
  font-size: 1.0625rem;
  margin-bottom: 0.375rem;
}

.info-card p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  font-size: 0.9375rem;
}

/* FAQ Section */
.faq-section {
  padding: 7rem 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
}

.faq-card {
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.faq-card:hover {
  transform: translateY(-12px);
  border-color: #e2e8f0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.faq-icon-box {
  margin-bottom: 1.75rem;
}

.faq-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  font-size: 2.5rem;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.faq-card:hover .faq-icon {
  transform: scale(1.15) rotate(-8deg);
}

.faq-question {
  font-size: 1.375rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1.125rem;
  line-height: 1.4;
}

.faq-answer {
  font-size: 1.0625rem;
  color: #64748b;
  line-height: 1.75;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .form-map-wrapper {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .map-container {
    position: relative;
    top: 0;
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

  .form-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .faq-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-section {
    min-height: 70vh;
  }

  .methods-section,
  .form-section,
  .faq-section {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1.5rem;
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

  .form-title,
  .map-title {
    font-size: 2rem;
  }

  .submit-btn {
    padding: 1.25rem 2rem;
    font-size: 1rem;
  }

  .method-card,
  .faq-card {
    padding: 2rem 1.5rem;
  }
}
</style>
