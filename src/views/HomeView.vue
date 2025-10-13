<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const services = [
  {
    icon: '🚗',
    title: 'Ampia Selezione',
    description: 'Scegli tra una vasta gamma di veicoli per ogni esigenza',
    color: '#ce4028',
  },
  {
    icon: '💰',
    title: 'Prezzi Competitivi',
    description: 'Tariffe trasparenti e convenienti senza costi nascosti',
    color: '#1f4f80',
  },
  {
    icon: '🔧',
    title: 'Assistenza 24/7',
    description: 'Supporto continuo per qualsiasi necessità durante il noleggio',
    color: '#e6583f',
  },
  {
    icon: '✅',
    title: 'Veicoli Controllati',
    description: 'Tutti i nostri veicoli sono revisionati e assicurati',
    color: '#2d5f8f',
  },
]

const fleet = [
  {
    name: 'Utilitarie',
    description: 'Perfette per la città',
    image: '🚙',
    price: 'da €25/giorno',
    features: ['Economiche', 'Facili da parcheggiare', 'Basso consumo'],
  },
  {
    name: 'Berline',
    description: 'Comfort e spazio',
    image: '🚘',
    price: 'da €35/giorno',
    features: ['Spaziose', 'Confortevoli', 'Eleganti'],
  },
  {
    name: 'SUV',
    description: 'Per ogni avventura',
    image: '🚙',
    price: 'da €50/giorno',
    features: ['Robuste', 'Versatili', '4x4 disponibili'],
  },
]

const stats = [
  { number: '500+', label: 'Clienti Soddisfatti' },
  { number: '50+', label: 'Veicoli Disponibili' },
  { number: '10+', label: 'Anni di Esperienza' },
  { number: '24/7', label: 'Assistenza' },
]

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
        <div class="hero-badge">
          <span class="badge-icon">⭐</span>
          <span>Il #1 per il Noleggio Auto in Sardegna</span>
        </div>

        <h1 class="hero-title">
          <span class="title-line">Il Tuo Autonoleggio</span>
          <span class="title-line gradient-text">di Fiducia</span>
        </h1>

        <p class="hero-description">
          Soluzioni di noleggio flessibili per ogni tua esigenza.<br />
          Prenota oggi e parti domani!
        </p>

        <div class="hero-buttons">
          <RouterLink to="/rates" class="btn-primary">
            <span class="btn-text">Scopri le Tariffe</span>
            <span class="btn-icon">→</span>
          </RouterLink>
          <RouterLink to="/contacts" class="btn-secondary">
            <span class="btn-icon">📞</span>
            <span class="btn-text">Contattaci</span>
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
        <span>Scorri</span>
        <div class="scroll-arrow">↓</div>
      </div>
    </section>

    <!-- Sezione Perché Sceglierci -->
    <section class="why-us observe">
      <div class="container">
        <div class="section-header">
          <span class="section-label">I Nostri Punti di Forza</span>
          <h2>Perché Scegliere Noi</h2>
          <p class="section-subtitle">Qualità, affidabilità e convenienza al tuo servizio</p>
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

    <!-- Sezione Flotta -->
    <section class="fleet observe">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Veicoli Moderni</span>
          <h2>La Nostra Flotta</h2>
          <p class="section-subtitle">
            Scegli il veicolo perfetto per te tra la nostra selezione premium
          </p>
        </div>

        <div class="fleet-grid">
          <div
            v-for="(vehicle, index) in fleet"
            :key="vehicle.name"
            class="fleet-card"
            :style="{ '--delay': index * 0.15 + 's' }"
          >
            <div class="fleet-badge">Popolare</div>
            <div class="vehicle-icon">{{ vehicle.image }}</div>
            <h3>{{ vehicle.name }}</h3>
            <p class="vehicle-description">{{ vehicle.description }}</p>

            <div class="features-list">
              <span v-for="feature in vehicle.features" :key="feature" class="feature-tag">
                {{ feature }}
              </span>
            </div>

            <div class="price-section">
              <p class="price">{{ vehicle.price }}</p>
              <RouterLink to="/rates" class="btn-outline">
                <span>Prenota Ora</span>
                <span class="arrow">→</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione Come Funziona -->
    <section class="how-it-works observe">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Processo Semplice</span>
          <h2>Come Funziona</h2>
          <p class="section-subtitle">Noleggiare un'auto non è mai stato così facile</p>
        </div>

        <div class="steps">
          <div class="step" :style="{ '--delay': '0s' }">
            <div class="step-number">
              <span class="number">1</span>
              <div class="pulse-ring"></div>
            </div>
            <div class="step-content">
              <h3>Scegli il Veicolo</h3>
              <p>Seleziona l'auto più adatta alle tue esigenze dal nostro catalogo</p>
            </div>
            <div class="step-connector"></div>
          </div>

          <div class="step" :style="{ '--delay': '0.2s' }">
            <div class="step-number">
              <span class="number">2</span>
              <div class="pulse-ring"></div>
            </div>
            <div class="step-content">
              <h3>Contattaci</h3>
              <p>Chiamaci o inviaci un messaggio, risponderemo velocemente</p>
            </div>
            <div class="step-connector"></div>
          </div>

          <div class="step" :style="{ '--delay': '0.4s' }">
            <div class="step-number">
              <span class="number">3</span>
              <div class="pulse-ring"></div>
            </div>
            <div class="step-content">
              <h3>Ritira e Parti</h3>
              <p>Vieni a ritirare la tua auto e inizia subito la tua avventura</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione CTA (Call to Action) -->
    <section class="cta observe">
      <div class="cta-background">
        <div class="cta-shape shape-1"></div>
        <div class="cta-shape shape-2"></div>
        <div class="cta-shape shape-3"></div>
      </div>

      <div class="container">
        <div class="cta-content">
          <div class="cta-icon">🎉</div>
          <h2>Pronto a Partire?</h2>
          <p>
            Prenota ora e approfitta delle nostre offerte speciali.<br />Tariffe competitive e
            servizio eccellente ti aspettano!
          </p>

          <RouterLink to="/rates" class="btn-primary-large">
            <span class="btn-glow"></span>
            <span class="btn-content">
              <span>Richiedi Preventivo Gratuito</span>
              <span class="btn-arrow">→</span>
            </span>
          </RouterLink>

          <div class="cta-features">
            <div class="cta-feature">
              <span class="feature-icon">✓</span>
              <span>Nessun costo nascosto</span>
            </div>
            <div class="cta-feature">
              <span class="feature-icon">✓</span>
              <span>Cancellazione gratuita</span>
            </div>
            <div class="cta-feature">
              <span class="feature-icon">✓</span>
              <span>Assistenza 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero Section */
.jumbotron {
  min-height: 90vh;
  background: linear-gradient(135deg, #1f4f80 0%, #3a6fa0 50%, #2d5f8f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.15;
}

.floating-car {
  position: absolute;
  font-size: 4rem;
  animation: float 6s ease-in-out infinite;
  filter: blur(1px);
}

.car-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.car-2 {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.car-3 {
  bottom: 25%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(5deg);
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
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
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
  font-size: 1.2rem;
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
  margin-bottom: 3rem;
  opacity: 0.95;
  font-weight: 300;
  line-height: 1.8;
  animation: fadeInUp 0.8s ease-out 0.7s both;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out 0.9s both;
}

.btn-primary,
.btn-secondary {
  padding: 1.1rem 2.5rem;
  font-size: 1.05rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
}

.btn-primary {
  background: linear-gradient(135deg, #ce4028 0%, #e6583f 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(206, 64, 40, 0.4);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(206, 64, 40, 0.5);
}

.btn-primary .btn-icon {
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-icon {
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

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.8);
}

.btn-secondary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: white;
  border-radius: 50px;
  transform: scale(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.btn-secondary:hover::before {
  transform: scale(1);
}

.btn-secondary:hover {
  color: #1f4f80;
  border-color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
}

.btn-text,
.btn-icon {
  position: relative;
  z-index: 1;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 0.8s ease-out 1.1s both;
}

.stat-item {
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff, #ffd93d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
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
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

.scroll-indicator span {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-arrow {
  font-size: 1.5rem;
  animation: bounce 1s ease infinite;
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

.section-label::before,
.section-label::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30px;
  height: 2px;
  background: #ce4028;
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
  position: relative;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
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

/* Perché Sceglierci */
.why-us {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.service-card {
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out calc(var(--delay)) both;
}

.card-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 70%
  );
  transform: rotate(45deg);
  transition: all 0.6s;
}

.service-card:hover .card-shine {
  left: 100%;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--card-color);
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.card-corner {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background: var(--card-color);
  opacity: 0.1;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  transition: all 0.4s;
}

.service-card:hover .card-corner {
  width: 80px;
  height: 80px;
  opacity: 0.15;
}

.service-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  border-color: var(--card-color);
}

.service-icon {
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  position: relative;
}

.service-icon span {
  display: inline-block;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));
}

.service-card:hover .service-icon span {
  transform: scale(1.2) rotate(10deg);
  animation: wiggle 0.5s ease;
}

@keyframes wiggle {
  0%,
  100% {
    transform: scale(1.2) rotate(10deg);
  }
  25% {
    transform: scale(1.2) rotate(0deg);
  }
  75% {
    transform: scale(1.2) rotate(20deg);
  }
}

.service-card h3 {
  color: #1f4f80;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
}

.service-card p {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
}

/* Flotta */
.fleet {
  background: white;
  position: relative;
}

.fleet::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  background: linear-gradient(180deg, #f8f9fa 0%, transparent 100%);
  pointer-events: none;
}

.fleet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.fleet-card {
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 24px;
  text-align: center;
  border: 2px solid #e5e7eb;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out calc(var(--delay)) both;
}

.fleet-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(206, 64, 40, 0.3);
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.fleet-card::before {
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

.fleet-card:hover::before {
  opacity: 1;
}

.fleet-card:hover {
  border-color: #ce4028;
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 20px 50px rgba(206, 64, 40, 0.2);
}

.vehicle-icon {
  font-size: 5.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));
}

.fleet-card:hover .vehicle-icon {
  transform: scale(1.2) translateY(-10px) rotate(-5deg);
  filter: drop-shadow(0 15px 25px rgba(206, 64, 40, 0.3));
}

.fleet-card h3 {
  color: #1f4f80;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  font-weight: 700;
}

.vehicle-description {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.features-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin: 1.5rem 0;
}

.feature-tag {
  background: rgba(31, 79, 128, 0.1);
  color: #1f4f80;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.fleet-card:hover .feature-tag {
  background: rgba(206, 64, 40, 0.1);
  color: #ce4028;
  transform: translateY(-2px);
}

.price-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.price {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
}

.btn-outline {
  width: 100%;
  padding: 1rem 2rem;
  background: transparent;
  color: #1f4f80;
  border: 2px solid #1f4f80;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-outline::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: #1f4f80;
  transform: translate(-50%, -50%);
  transition:
    width 0.5s,
    height 0.5s;
  z-index: 0;
}

.btn-outline:hover::before {
  width: 400px;
  height: 400px;
}

.btn-outline:hover {
  color: white;
  border-color: #1f4f80;
  transform: translateY(-2px);
}

.btn-outline span {
  position: relative;
  z-index: 1;
}

.btn-outline .arrow {
  transition: transform 0.3s ease;
}

.btn-outline:hover .arrow {
  transform: translateX(5px);
}

/* Come Funziona */
.how-it-works {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  position: relative;
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
  right: -2rem;
  width: 4rem;
  height: 2px;
  background: linear-gradient(90deg, #ce4028 0%, #e6583f 50%, transparent 100%);
  display: none;
}

@media (min-width: 768px) {
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

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #1f4f80 0%, #2d5f8f 50%, #3a6fa0 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem;
}

.cta-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.cta-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.shape-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  top: -200px;
  right: -200px;
  animation: float 8s ease-in-out infinite;
}

.shape-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #ffd93d, #ce4028);
  bottom: -150px;
  left: -150px;
  animation: float 10s ease-in-out infinite reverse;
}

.shape-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #ffffff, #3a6fa0);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 6s ease-in-out infinite;
}

.cta .container {
  position: relative;
  z-index: 1;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  animation: bounce 2s ease-in-out infinite;
}

.cta h2 {
  color: white;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
}

.cta p {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.95;
  font-weight: 300;
  line-height: 1.8;
}

.btn-primary-large {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3.5rem;
  font-size: 1.2rem;
  background: white;
  color: #1f4f80;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 800;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  margin-bottom: 3rem;
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

.btn-primary-large:hover .btn-glow {
  opacity: 1;
}

.btn-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 0 0.5rem;
  border-radius: 50px;
  height: 100%;
}

.btn-primary-large:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

.btn-arrow {
  transition: transform 0.3s ease;
  font-size: 1.5rem;
}

.btn-primary-large:hover .btn-arrow {
  transform: translateX(8px);
  animation: bounceRight 0.6s ease infinite;
}

.cta-features {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.95;
}

.feature-icon {
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Responsive */
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

  .cta h2 {
    font-size: 2.8rem;
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

  .hero-description {
    font-size: 1.1rem;
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

  .cta h2 {
    font-size: 2.2rem;
  }

  section {
    padding: 4rem 1.5rem;
  }

  .cta {
    padding: 5rem 1.5rem;
  }

  .services-grid,
  .fleet-grid,
  .steps {
    gap: 2rem;
  }

  .hero-stats {
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .cta-features {
    gap: 1.5rem;
  }

  .scroll-indicator {
    display: none;
  }

  .floating-car {
    font-size: 3rem;
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
    font-size: 0.8rem;
    padding: 0.5rem 1.2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .cta h2 {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .service-icon {
    font-size: 3.5rem;
  }

  .vehicle-icon {
    font-size: 4.5rem;
  }

  .btn-primary-large {
    padding: 1.2rem 2rem;
    font-size: 1rem;
    width: 100%;
  }

  .cta-icon {
    font-size: 3rem;
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
  .btn-outline,
  .btn-primary-large,
  .scroll-indicator {
    display: none;
  }
}
</style>
