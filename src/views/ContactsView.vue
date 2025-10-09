<script setup>
import { ref } from 'vue'

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
  },
  {
    icon: '📧',
    title: 'Email',
    value: 'info@rentacar.com',
    description: 'Risposta entro 24h',
    link: 'mailto:info@rentacar.com',
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    value: '+39 333 123 4567',
    description: 'Assistenza rapida',
    link: 'https://wa.me/393331234567',
  },
  {
    icon: '📍',
    title: 'Sede',
    value: 'Via Roma 123, Cagliari',
    description: 'Sardegna, Italia',
    link: '#map',
  },
]

const faqItems = [
  {
    question: 'Quali documenti servono per noleggiare?',
    answer:
      "Patente di guida valida, carta d'identità o passaporto e carta di credito intestata al conducente.",
  },
  {
    question: 'Posso modificare o cancellare la prenotazione?',
    answer: 'Sì, puoi modificare o cancellare gratuitamente fino a 24 ore prima del ritiro.',
  },
  {
    question: "È possibile riconsegnare l'auto in un'altra sede?",
    answer: 'Sì, offriamo il servizio one-way con un supplemento che varia in base alla distanza.',
  },
]

const handleSubmit = () => {
  alert('Grazie per averci contattato! Ti risponderemo al più presto.')
  formData.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  }
}
</script>

<template>
  <main class="contacts-page">
    <!-- Hero Section -->
    <section class="contacts-hero">
      <div class="hero-content">
        <h1>Contattaci</h1>
        <p>Siamo qui per aiutarti. Scegli il modo che preferisci per raggiungerci</p>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="contact-methods-section">
      <div class="container">
        <div class="methods-grid">
          <a
            v-for="method in contactMethods"
            :key="method.title"
            :href="method.link"
            class="method-card"
          >
            <div class="method-icon">{{ method.icon }}</div>
            <h3>{{ method.title }}</h3>
            <p class="method-value">{{ method.value }}</p>
            <p class="method-description">{{ method.description }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Form & Map -->
    <section class="form-map-section">
      <div class="container">
        <div class="form-map-grid">
          <!-- Contact Form -->
          <div class="form-container">
            <h2>Inviaci un Messaggio</h2>
            <p class="form-subtitle">Compila il form e ti risponderemo al più presto</p>

            <div class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label>Nome e Cognome *</label>
                  <input type="text" v-model="formData.name" placeholder="Mario Rossi" />
                </div>

                <div class="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    v-model="formData.email"
                    placeholder="mario.rossi@email.com"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Telefono</label>
                  <input type="tel" v-model="formData.phone" placeholder="+39 333 123 4567" />
                </div>

                <div class="form-group">
                  <label>Oggetto *</label>
                  <select v-model="formData.subject">
                    <option value="">Seleziona...</option>
                    <option value="info">Richiesta informazioni</option>
                    <option value="quote">Preventivo personalizzato</option>
                    <option value="booking">Prenotazione</option>
                    <option value="support">Assistenza</option>
                    <option value="other">Altro</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label>Messaggio *</label>
                <textarea
                  v-model="formData.message"
                  rows="5"
                  placeholder="Scrivi qui il tuo messaggio..."
                ></textarea>
              </div>

              <button @click="handleSubmit" class="submit-button">
                Invia Messaggio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>

          <!-- Map -->
          <div class="map-container" id="map">
            <h2>Dove Siamo</h2>
            <div class="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d9.108989315318255!3d39.21631997952286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e734157e5c2b85%3A0x5e7b8c4e5c3e5e8e!2sCagliari%2C%20CA%2C%20Italia!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style="border: 0; border-radius: 16px"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div class="location-info">
              <h3>📍 La Nostra Sede</h3>
              <p><strong>Indirizzo:</strong> Via Roma 123, 09100 Cagliari (CA)</p>
              <p><strong>Orari:</strong> Lun-Sab 9:00-18:00 | Dom: Chiuso</p>
              <p><strong>Parcheggio:</strong> Disponibile in loco</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2>Domande Frequenti</h2>
        <p class="section-subtitle">Le risposte alle domande più comuni</p>

        <div class="faq-grid">
          <div v-for="(faq, index) in faqItems" :key="index" class="faq-card">
            <div class="faq-icon">❓</div>
            <h3>{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick CTA -->
    <section class="quick-cta">
      <div class="container">
        <div class="cta-content">
          <div class="cta-text">
            <h2>Preferisci parlare direttamente con noi?</h2>
            <p>Il nostro team è pronto ad assisterti</p>
          </div>
          <div class="cta-actions">
            <a href="tel:+390701234567" class="cta-button phone">
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
              Chiama Ora
            </a>
            <a href="https://wa.me/393331234567" class="cta-button whatsapp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contacts-hero {
  background: linear-gradient(135deg, #1f4f80 0%, #3a6fa0 50%, #2d5f8f 100%);
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.contacts-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 50%, rgba(206, 64, 40, 0.2) 0%, transparent 50%);
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

.contacts-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.contacts-hero p {
  font-size: 1.3rem;
  opacity: 0.95;
  font-weight: 300;
}

.contact-methods-section {
  padding: 5rem 2rem 3rem;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.method-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: inherit;
}

.method-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(31, 79, 128, 0.15);
  border-color: #ce4028;
}

.method-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.method-card h3 {
  color: #1f4f80;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.method-value {
  color: #ce4028;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.method-description {
  color: #666;
  font-size: 0.9rem;
}

.form-map-section {
  padding: 3rem 2rem 5rem;
  background: white;
}

.form-map-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;
}

.form-container h2,
.map-container h2 {
  color: #1f4f80;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.form-subtitle {
  color: #666;
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #1f4f80;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.9rem 1.2rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ce4028;
  box-shadow: 0 0 0 4px rgba(206, 64, 40, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  box-shadow: 0 4px 15px rgba(206, 64, 40, 0.3);
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(206, 64, 40, 0.4);
}

.submit-button svg {
  transition: transform 0.3s ease;
}

.submit-button:hover svg {
  transform: translateX(3px);
}

.map-placeholder {
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.location-info {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid #e5e7eb;
}

.location-info h3 {
  color: #1f4f80;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.location-info p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 0.5rem;
}

.location-info strong {
  color: #1f4f80;
}

.faq-section {
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
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

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.faq-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(206, 64, 40, 0.1);
  border-color: #ce4028;
}

.faq-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.faq-card h3 {
  color: #1f4f80;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.faq-card p {
  color: #666;
  line-height: 1.7;
}

.quick-cta {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1f4f80 0%, #2d5f8f 100%);
  color: white;
}

.cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.cta-text h2 {
  color: white;
  text-align: left;
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.cta-text h2::after {
  display: none;
}

.cta-text p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1.2rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button.phone {
  background: white;
  color: #1f4f80;
}

.cta-button.phone:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}

.cta-button.whatsapp {
  background: #25d366;
  color: white;
}

.cta-button.whatsapp:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
}

@media (max-width: 992px) {
  .form-map-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contacts-hero h1 {
    font-size: 2.5rem;
  }

  .contacts-hero p {
    font-size: 1.1rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .methods-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .cta-content {
    flex-direction: column;
    text-align: center;
  }

  .cta-text h2 {
    text-align: center;
  }

  .cta-actions {
    width: 100%;
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }

  .map-placeholder {
    height: 300px;
  }
}
</style>
