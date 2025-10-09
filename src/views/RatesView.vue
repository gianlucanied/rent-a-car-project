<script setup>
const pricingPlans = [
  {
    name: 'Economy',
    icon: '🚗',
    price: '25',
    period: 'al giorno',
    features: [
      'Utilitarie compatte',
      'Aria condizionata',
      'Cambio manuale',
      'Assicurazione base',
      '200 km inclusi',
    ],
    popular: false,
    color: '#3a6fa0',
  },
  {
    name: 'Comfort',
    icon: '🚘',
    price: '35',
    period: 'al giorno',
    features: [
      'Berline medie',
      'Clima automatico',
      'Cambio automatico',
      'Assicurazione premium',
      'Km illimitati',
      'GPS incluso',
    ],
    popular: true,
    color: '#ce4028',
  },
  {
    name: 'Premium',
    icon: '🚙',
    price: '50',
    period: 'al giorno',
    features: [
      'SUV e auto di lusso',
      'Full optional',
      'Cambio automatico',
      'Assicurazione kasko',
      'Km illimitati',
      'GPS e seggiolini inclusi',
      'Servizio prioritario',
    ],
    popular: false,
    color: '#1f4f80',
  },
]

const extraServices = [
  { name: 'GPS Navigatore', price: '5', icon: '🗺️' },
  { name: 'Seggiolino bambini', price: '8', icon: '👶' },
  { name: 'Conducente aggiuntivo', price: '10', icon: '👥' },
  { name: 'Catene da neve', price: '15', icon: '❄️' },
]

const longTermRates = [
  { period: '1 Settimana', discount: '10%', badge: 'Risparmia' },
  { period: '2 Settimane', discount: '15%', badge: 'Conveniente' },
  { period: '1 Mese+', discount: '25%', badge: 'Best Deal' },
]
</script>

<template>
  <main class="rates-page">
    <!-- Hero Section -->
    <section class="rates-hero">
      <div class="hero-content">
        <h1>Le Nostre Tariffe</h1>
        <p>Prezzi trasparenti e competitivi per ogni esigenza</p>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="pricing-section">
      <div class="container">
        <div class="pricing-grid">
          <div
            v-for="plan in pricingPlans"
            :key="plan.name"
            class="pricing-card"
            :class="{ popular: plan.popular }"
          >
            <div v-if="plan.popular" class="popular-badge">PIÙ SCELTO</div>

            <div class="card-header" :style="{ borderColor: plan.color }">
              <div class="plan-icon">{{ plan.icon }}</div>
              <h3>{{ plan.name }}</h3>
            </div>

            <div class="card-price">
              <span class="currency">€</span>
              <span class="amount">{{ plan.price }}</span>
              <span class="period">{{ plan.period }}</span>
            </div>

            <ul class="features-list">
              <li v-for="feature in plan.features" :key="feature">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {{ feature }}
              </li>
            </ul>

            <button
              class="select-button"
              :style="{ background: `linear-gradient(135deg, ${plan.color}, ${plan.color}dd)` }"
            >
              Prenota Ora
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Extra Services -->
    <section class="extras-section">
      <div class="container">
        <h2>Servizi Extra</h2>
        <p class="section-subtitle">Personalizza la tua esperienza di noleggio</p>

        <div class="extras-grid">
          <div v-for="extra in extraServices" :key="extra.name" class="extra-card">
            <div class="extra-icon">{{ extra.icon }}</div>
            <h4>{{ extra.name }}</h4>
            <div class="extra-price">
              <span class="price-amount">€{{ extra.price }}</span>
              <span class="price-period">/giorno</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Long Term Rates -->
    <section class="long-term-section">
      <div class="container">
        <h2>Noleggi a Lungo Termine</h2>
        <p class="section-subtitle">Risparmia di più con noleggi prolungati</p>

        <div class="long-term-grid">
          <div v-for="rate in longTermRates" :key="rate.period" class="term-card">
            <span class="term-badge">{{ rate.badge }}</span>
            <h3>{{ rate.period }}</h3>
            <div class="discount-badge">
              <span class="discount-value">{{ rate.discount }}</span>
              <span class="discount-label">di sconto</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="rates-cta">
      <div class="container">
        <h2>Hai bisogno di un preventivo personalizzato?</h2>
        <p>Contattaci per offerte su misura e soluzioni aziendali</p>
        <div class="cta-buttons">
          <RouterLink to="/contacts" class="cta-primary"> Richiedi Preventivo </RouterLink>
          <a href="tel:+390701234567" class="cta-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            Chiamaci Ora
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero Section */
.rates-hero {
  background: linear-gradient(135deg, #1f4f80 0%, #3a6fa0 50%, #2d5f8f 100%);
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.rates-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(206, 64, 40, 0.2) 0%, transparent 50%);
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.rates-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.rates-hero p {
  font-size: 1.3rem;
  opacity: 0.95;
  font-weight: 300;
}

/* Pricing Section */
.pricing-section {
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.pricing-card {
  background: white;
  border-radius: 24px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 2px solid transparent;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.pricing-card.popular {
  border-color: #ce4028;
  transform: scale(1.05);
}

.pricing-card.popular:hover {
  transform: scale(1.05) translateY(-10px);
}

.popular-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #ce4028, #e6583f);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(206, 64, 40, 0.4);
}

.card-header {
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 3px solid;
  margin-bottom: 2rem;
}

.plan-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.card-header h3 {
  font-size: 1.8rem;
  color: #1f4f80;
  font-weight: 700;
}

.card-price {
  text-align: center;
  margin-bottom: 2rem;
}

.currency {
  font-size: 1.5rem;
  color: #ce4028;
  font-weight: 700;
  vertical-align: super;
}

.amount {
  font-size: 3.5rem;
  color: #1f4f80;
  font-weight: 700;
  line-height: 1;
}

.period {
  display: block;
  color: #666;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
  color: #333;
  font-size: 0.95rem;
}

.features-list svg {
  color: #ce4028;
  flex-shrink: 0;
}

.select-button {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
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
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Extras Section */
.extras-section {
  padding: 5rem 2rem;
  background: white;
}

h2 {
  text-align: center;
  font-size: 2.8rem;
  color: #1f4f80;
  margin-bottom: 0.5rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 1rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ce4028, #e6583f);
  border-radius: 2px;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  font-weight: 300;
}

.extras-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.extra-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 2rem 1.5rem;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #e5e7eb;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.extra-card:hover {
  border-color: #ce4028;
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(206, 64, 40, 0.1);
}

.extra-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.extra-card h4 {
  color: #1f4f80;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.extra-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.3rem;
}

.price-amount {
  font-size: 1.8rem;
  color: #ce4028;
  font-weight: 700;
}

.price-period {
  color: #666;
  font-size: 0.9rem;
}

/* Long Term Section */
.long-term-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1f4f80 0%, #2d5f8f 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.long-term-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(206, 64, 40, 0.2) 0%, transparent 70%);
}

.long-term-section .container {
  position: relative;
  z-index: 1;
}

.long-term-section h2 {
  color: white;
}

.long-term-section h2::after {
  background: white;
}

.long-term-section .section-subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.long-term-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.term-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.term-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
  border-color: #ce4028;
}

.term-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ce4028;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.term-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.discount-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.discount-value {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ce4028;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.discount-label {
  font-size: 1rem;
  opacity: 0.9;
}

/* CTA Section */
.rates-cta {
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  text-align: center;
}

.rates-cta h2 {
  margin-bottom: 1rem;
}

.rates-cta p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary,
.cta-secondary {
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.cta-primary {
  background: linear-gradient(135deg, #ce4028, #e6583f);
  color: white;
  box-shadow: 0 4px 15px rgba(206, 64, 40, 0.3);
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(206, 64, 40, 0.4);
}

.cta-secondary {
  background: white;
  color: #1f4f80;
  border: 2px solid #1f4f80;
}

.cta-secondary:hover {
  background: #1f4f80;
  color: white;
  transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 768px) {
  .rates-hero h1 {
    font-size: 2.5rem;
  }

  .rates-hero p {
    font-size: 1.1rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  .pricing-grid,
  .extras-grid,
  .long-term-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .pricing-card.popular {
    transform: scale(1);
  }

  .pricing-card.popular:hover {
    transform: translateY(-10px);
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
