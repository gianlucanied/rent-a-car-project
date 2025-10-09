<script setup>
const services = [
  {
    icon: '🚗',
    title: 'Ampia Selezione',
    description: 'Scegli tra una vasta gamma di veicoli per ogni esigenza',
  },
  {
    icon: '💰',
    title: 'Prezzi Competitivi',
    description: 'Tariffe trasparenti e convenienti senza costi nascosti',
  },
  {
    icon: '🔧',
    title: 'Assistenza 24/7',
    description: 'Supporto continuo per qualsiasi necessità durante il noleggio',
  },
  {
    icon: '✅',
    title: 'Veicoli Controllati',
    description: 'Tutti i nostri veicoli sono revisionati e assicurati',
  },
]

const fleet = [
  {
    name: 'Utilitarie',
    description: 'Perfette per la città',
    image: '🚙',
    price: 'da €25/giorno',
  },
  {
    name: 'Berline',
    description: 'Comfort e spazio',
    image: '🚘',
    price: 'da €35/giorno',
  },
  {
    name: 'SUV',
    description: 'Per ogni avventura',
    image: '🚙',
    price: 'da €50/giorno',
  },
]
</script>

<template>
  <main>
    <!-- Hero Section / Jumbotron -->
    <section class="jumbotron">
      <div class="hero-content">
        <h1>Il Tuo Autonoleggio di Fiducia</h1>
        <p>Soluzioni di noleggio flessibili per ogni tua esigenza</p>
        <div class="hero-buttons">
          <button class="btn-primary"><RouterLink to="/rates">Tariffe</RouterLink></button>
          <button class="btn-secondary"><RouterLink to="/contacts">Contattaci</RouterLink></button>
        </div>
      </div>
    </section>

    <!-- Sezione Perché Sceglierci -->
    <section class="why-us">
      <div class="container">
        <h2>Perché Scegliere Noi</h2>
        <div class="services-grid">
          <div v-for="service in services" :key="service.title" class="service-card">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione Flotta -->
    <section class="fleet">
      <div class="container">
        <h2>La Nostra Flotta</h2>
        <p class="section-subtitle">Veicoli moderni e sempre aggiornati</p>
        <div class="fleet-grid">
          <div v-for="vehicle in fleet" :key="vehicle.name" class="fleet-card">
            <div class="vehicle-icon">{{ vehicle.image }}</div>
            <h3>{{ vehicle.name }}</h3>
            <p>{{ vehicle.description }}</p>
            <p class="price">{{ vehicle.price }}</p>
            <button class="btn-outline"><span>Scopri di più</span></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione CTA (Call to Action) -->
    <section class="cta">
      <div class="container">
        <h2>Pronto a Partire?</h2>
        <p>Prenota ora e approfitta delle nostre offerte speciali</p>
        <button class="btn-primary-large">
          <span><RouterLink to="/rates">Richiedi preventivo</RouterLink></span>
        </button>
      </div>
    </section>

    <!-- Sezione Come Funziona -->
    <section class="how-it-works">
      <div class="container">
        <h2>Come Funziona</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Scegli il Veicolo</h3>
            <p>Seleziona l'auto più adatta alle tue esigenze</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Contattaci</h3>
            <p>Risponderemo il prima possibile</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Ritira e Parti</h3>
            <p>Vieni a ritirare la tua auto e inizia il viaggio</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero Section */
.jumbotron {
  height: 85vh;
  background: linear-gradient(135deg, #1f4f80 0%, #3a6fa0 50%, #2d5f8f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.jumbotron::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>')
    no-repeat bottom;
  background-size: cover;
  opacity: 0.3;
  animation: wave 8s ease-in-out infinite;
}

@keyframes wave {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-20px);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 2rem;
  animation: fadeInUp 1s ease-out;
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

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.hero-content p {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 1rem 2.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.btn-primary a,
.btn-secondary a {
  color: inherit;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, #ce4028 0%, #e6583f 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(206, 64, 40, 0.3);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(206, 64, 40, 0.4);
}

.btn-secondary {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.8);
}

.btn-secondary:hover {
  background-color: white;
  color: #1f4f80;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}

/* Sezioni Comuni */
section {
  padding: 5rem 2rem;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  font-size: 2.8rem;
  color: #1f4f80;
  margin-bottom: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
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
  margin-bottom: 4rem;
  margin-top: 2rem;
  font-weight: 300;
}

/* Perché Sceglierci */
.why-us {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.service-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(31, 79, 128, 0.05);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ce4028, #e6583f);
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 15px 40px rgba(31, 79, 128, 0.15);
  border-color: rgba(206, 64, 40, 0.2);
}

.service-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-card h3 {
  color: #1f4f80;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.service-card p {
  color: #666;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Flotta */
.fleet {
  background: white;
}

.fleet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.fleet-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #e5e7eb;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.fleet-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(206, 64, 40, 0.03) 0%, rgba(31, 79, 128, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.4s;
}

.fleet-card:hover::before {
  opacity: 1;
}

.fleet-card:hover {
  border-color: #ce4028;
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(206, 64, 40, 0.15);
}

.vehicle-icon {
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.fleet-card:hover .vehicle-icon {
  transform: scale(1.15) translateY(-5px);
}

.fleet-card h3 {
  color: #1f4f80;
  margin-bottom: 0.8rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.fleet-card p {
  color: #666;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.price {
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 1.5rem 0 !important;
}

.btn-outline {
  padding: 0.8rem 2rem;
  background: transparent;
  color: #1f4f80;
  border: 2px solid #1f4f80;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
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
    width 0.4s,
    height 0.4s;
  z-index: 0;
}

.btn-outline:hover::before {
  width: 300px;
  height: 300px;
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

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #ce4028 0%, #e6583f 50%, #d85438 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: moveBackground 20s linear infinite;
}

@keyframes moveBackground {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

.cta .container {
  position: relative;
  z-index: 1;
}

.cta h2 {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
}

.cta h2::after {
  background: white;
}

.cta p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  font-weight: 300;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.btn-primary-large {
  padding: 1.3rem 3.5rem;
  font-size: 1.1rem;
  background-color: white;
  color: #ce4028;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.btn-primary-large a {
  color: inherit;
  text-decoration: none;
}

.btn-primary-large::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, #1f4f80, #3a6fa0);
  transform: translate(-50%, -50%);
  transition:
    width 0.5s,
    height 0.5s;
  z-index: 0;
}

.btn-primary-large:hover::before {
  width: 400px;
  height: 400px;
}

.btn-primary-large:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  color: white;
}

.btn-primary-large span {
  position: relative;
  z-index: 1;
}

/* Come Funziona */
.how-it-works {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.step {
  text-align: center;
  position: relative;
  padding: 2rem 1.5rem;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.step:hover {
  transform: translateY(-10px);
}

.step-number {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #1f4f80, #3a6fa0);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 auto 1.8rem;
  box-shadow: 0 8px 25px rgba(31, 79, 128, 0.25);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.step-number::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 2px solid #ce4028;
  opacity: 0;
  transition: opacity 0.4s;
}

.step:hover .step-number {
  transform: scale(1.1) rotate(360deg);
  box-shadow: 0 12px 35px rgba(31, 79, 128, 0.35);
}

.step:hover .step-number::before {
  opacity: 1;
}

.step h3 {
  color: #1f4f80;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
}

.step p {
  color: #666;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  section {
    padding: 3rem 1.5rem;
  }

  .services-grid,
  .fleet-grid {
    gap: 2rem;
  }
}
</style>
