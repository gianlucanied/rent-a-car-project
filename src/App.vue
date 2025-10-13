<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Link social media reali - sostituisci con i tuoi link
const socialLinks = {
  facebook: 'https://www.facebook.com/tuapagina',
  instagram: 'https://www.instagram.com/tuoaccount',
  whatsapp: 'https://wa.me/390701234567', // formato: https://wa.me/numerotelefono
}
</script>

<template>
  <header class="app-header">
    <div class="header-top">
      <div class="header-top-content">
        <div class="contact-info">
          <a href="tel:+390701234567" class="info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            +39 070 123 4567
          </a>
          <span class="info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Lun-Sab: 9:00-18:00
          </span>
        </div>
        <div class="header-lang">
          <button class="lang-btn-small active">IT</button>
          <button class="lang-btn-small">EN</button>
          <button class="lang-btn-small">ES</button>
        </div>
      </div>
    </div>

    <div class="header-main">
      <div class="header-content">
        <div class="logo-container">
          <RouterLink to="/" @click="closeMobileMenu">
            <img src="/src/assets/logo.jpg" alt="Rent a Car Express" />
          </RouterLink>
        </div>

        <nav class="nav-desktop">
          <RouterLink to="/" class="nav-item">
            <span class="nav-icon">🏠</span>
            Home
          </RouterLink>
          <RouterLink to="/rates" class="nav-item">
            <span class="nav-icon">💰</span>
            Tariffe
          </RouterLink>
          <RouterLink to="/contacts" class="nav-item">
            <span class="nav-icon">📞</span>
            Contatti
          </RouterLink>
        </nav>

        <div class="header-actions">
          <RouterLink to="/rates" class="cta-button">
            <span class="cta-text">Prenota Ora</span>
            <span class="cta-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </RouterLink>
        </div>

        <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Menu">
          <span :class="{ open: mobileMenuOpen }"></span>
          <span :class="{ open: mobileMenuOpen }"></span>
          <span :class="{ open: mobileMenuOpen }"></span>
        </button>
      </div>
    </div>

    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <nav class="mobile-nav">
        <RouterLink to="/" class="mobile-nav-item" @click="closeMobileMenu">
          <span class="mobile-icon">🏠</span>
          Home
        </RouterLink>
        <RouterLink to="/rates" class="mobile-nav-item" @click="closeMobileMenu">
          <span class="mobile-icon">💰</span>
          Tariffe
        </RouterLink>
        <RouterLink to="/contacts" class="mobile-nav-item" @click="closeMobileMenu">
          <span class="mobile-icon">📞</span>
          Contatti
        </RouterLink>
      </nav>
      <div class="mobile-cta">
        <RouterLink to="/rates" class="mobile-cta-button" @click="closeMobileMenu">
          Prenota Ora →
        </RouterLink>
      </div>
    </div>
  </header>

  <RouterView />

  <footer class="app-footer">
    <div class="footer-wave">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>

    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <img
            src="/src/assets/logo-removebg-preview.png"
            alt="Rent a Car Express"
            class="footer-logo"
          />
          <p class="footer-tagline">Il tuo partner di fiducia per il noleggio auto in Sardegna</p>
          <div class="footer-social">
            <a
              :href="socialLinks.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              :href="socialLinks.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a
              :href="socialLinks.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="WhatsApp"
            >
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
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>Navigazione</h4>
            <ul>
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/rates">Tariffe</RouterLink></li>
              <li><RouterLink to="/contacts">Contatti</RouterLink></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Contatti</h4>
            <ul class="contact-list">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
                <a href="tel:+390701234567">+39 070 123 4567</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@rentacar.com">info@rentacar.com</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Cagliari, Sardegna
              </li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Orari di Apertura</h4>
            <ul class="hours-list">
              <li>
                <span>Lun - Ven</span>
                <span class="time">9:00 - 18:00</span>
              </li>
              <li>
                <span>Sabato</span>
                <span class="time">9:00 - 13:00</span>
              </li>
              <li>
                <span>Domenica</span>
                <span class="time closed">Chiuso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 Rent a Car Express - Tutti i diritti riservati</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Cookie Policy</a>
          <span>•</span>
          <a href="#">Termini e Condizioni</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Header Top Bar */
.header-top {
  background: linear-gradient(135deg, #1f4f80 0%, #2d5f8f 100%);
  color: white;
  font-size: 0.85rem;
  padding: 0.6rem 0;
  position: relative;
  overflow: hidden;
}

.header-top::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.header-top-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  display: flex;
  gap: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.95;
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
}

.info-item:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.info-item svg {
  opacity: 0.8;
  transition: transform 0.3s ease;
}

.info-item:hover svg {
  transform: scale(1.1) rotate(5deg);
}

.header-lang {
  display: flex;
  gap: 0.4rem;
}

.lang-btn-small {
  padding: 0.3rem 0.7rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.lang-btn-small::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.4s,
    height 0.4s;
}

.lang-btn-small:hover::before {
  width: 100px;
  height: 100px;
}

.lang-btn-small:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.lang-btn-small.active {
  background: #ce4028;
  border-color: #ce4028;
  box-shadow: 0 2px 8px rgba(206, 64, 40, 0.4);
}

/* Header Main */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.header-main {
  background: white;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}

.logo-container {
  flex-shrink: 0;
  z-index: 1001;
}

.logo-container img {
  height: 55px;
  width: auto;
  display: block;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-container img:hover {
  transform: scale(1.08) rotate(-2deg);
}

/* Desktop Navigation */
.nav-desktop {
  display: flex;
  gap: 3rem;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.nav-item {
  position: relative;
  color: #1f4f80;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-icon {
  font-size: 1.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
}

.nav-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ce4028, #e6583f);
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(206, 64, 40, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.4s,
    height 0.4s;
  z-index: -1;
}

.nav-item:hover::after {
  width: 120px;
  height: 120px;
}

.nav-item:hover {
  color: #ce4028;
}

.nav-item:hover .nav-icon {
  transform: translateY(-4px) scale(1.1);
  animation: bounce 0.6s ease;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-4px) scale(1.1);
  }
  50% {
    transform: translateY(-8px) scale(1.15);
  }
}

.nav-item:hover::before {
  transform: translateX(-50%) scaleX(1);
}

.nav-item.router-link-active {
  color: #ce4028;
}

.nav-item.router-link-active::before {
  transform: translateX(-50%) scaleX(1);
}

.nav-item.router-link-active .nav-icon {
  animation: pulse 2s infinite;
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

/* Header CTA Button */
.header-actions {
  display: flex;
  align-items: center;
}

.cta-button {
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #ce4028 0%, #e6583f 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 4px 15px rgba(206, 64, 40, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50px;
  padding: 2px;
  background: linear-gradient(135deg, #ff6b6b, #ffd93d);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s;
}

.cta-button:hover::after {
  opacity: 1;
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 30px rgba(206, 64, 40, 0.5);
}

.cta-text {
  position: relative;
  z-index: 1;
}

.cta-icon {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.cta-button:hover .cta-icon {
  transform: translateX(5px);
  animation: arrowBounce 0.8s ease infinite;
}

@keyframes arrowBounce {
  0%,
  100% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(10px);
  }
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.mobile-menu-btn span {
  width: 100%;
  height: 3px;
  background-color: #1f4f80;
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.mobile-menu-btn:hover span {
  background-color: #ce4028;
}

.mobile-menu-btn span.open:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
  background-color: #ce4028;
}

.mobile-menu-btn span.open:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.mobile-menu-btn span.open:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
  background-color: #ce4028;
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  background: white;
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s ease;
  box-shadow: none;
}

.mobile-menu.open {
  max-height: 500px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
}

.mobile-nav-item {
  color: #1f4f80;
  text-decoration: none;
  padding: 1.2rem 1rem;
  font-weight: 600;
  font-size: 1.1rem;
  border-bottom: 1px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.mobile-nav-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, rgba(206, 64, 40, 0.1), transparent);
  transition: width 0.3s ease;
}

.mobile-nav-item:hover::before {
  width: 100%;
}

.mobile-icon {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.mobile-nav-item:hover {
  background-color: rgba(206, 64, 40, 0.05);
  color: #ce4028;
  padding-left: 1.5rem;
}

.mobile-nav-item:hover .mobile-icon {
  transform: scale(1.2) rotate(10deg);
}

.mobile-nav-item.router-link-active {
  background: linear-gradient(90deg, rgba(206, 64, 40, 0.15) 0%, transparent 100%);
  color: #ce4028;
  border-left: 4px solid #ce4028;
}

.mobile-cta {
  padding: 1.5rem 2rem;
  border-top: 1px solid #e5e7eb;
}

.mobile-cta-button {
  display: block;
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #ce4028, #e6583f);
  color: white;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.mobile-cta-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
}

.mobile-cta-button:active::before {
  width: 300px;
  height: 300px;
}

.mobile-cta-button:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(206, 64, 40, 0.4);
}

/* Footer Styles */
.app-footer {
  background: linear-gradient(180deg, #1f4f80 0%, #2d5f8f 100%);
  color: white;
  margin-top: auto;
  position: relative;
}

.footer-wave {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 80px;
  overflow: hidden;
  color: white;
}

.footer-wave svg {
  width: 100%;
  height: 100%;
  display: block;
  transform-origin: center;
}

@keyframes wave {
  0%,
  100% {
    transform: translateX(0) scaleY(1);
  }
  50% {
    transform: translateX(-25px) scaleY(0.95);
  }
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 2rem 2rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: fadeInLeft 0.6s ease-out;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.footer-logo {
  height: 60px;
  width: fit-content;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.05);
  filter: brightness(0) invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 320px;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: #ce4028;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.4s,
    height 0.4s;
  z-index: 0;
}

.social-link:hover::before {
  width: 100%;
  height: 100%;
}

.social-link:hover {
  transform: translateY(-8px) scale(1.1);
  border-color: #ce4028;
  box-shadow: 0 8px 20px rgba(206, 64, 40, 0.4);
}

.social-link:nth-child(1):hover {
  animation: wiggle 0.5s ease;
}

.social-link:nth-child(2):hover {
  animation: rotate360 0.6s ease;
}

.social-link:nth-child(3):hover {
  animation: heartbeat 0.6s ease;
}

@keyframes wiggle {
  0%,
  100% {
    transform: translateY(-8px) rotate(0deg) scale(1.1);
  }
  25% {
    transform: translateY(-8px) rotate(-10deg) scale(1.1);
  }
  75% {
    transform: translateY(-8px) rotate(10deg) scale(1.1);
  }
}

@keyframes rotate360 {
  from {
    transform: translateY(-8px) rotate(0deg) scale(1.1);
  }
  to {
    transform: translateY(-8px) rotate(360deg) scale(1.1);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: translateY(-8px) scale(1.1);
  }
  25% {
    transform: translateY(-8px) scale(1.2);
  }
  50% {
    transform: translateY(-8px) scale(1.1);
  }
  75% {
    transform: translateY(-8px) scale(1.15);
  }
}

.social-link svg {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.social-link:hover svg {
  transform: scale(1.1);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  animation: fadeInRight 0.6s ease-out;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.footer-column h4 {
  font-size: 1.15rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 0.8rem;
  letter-spacing: 0.5px;
}

.footer-column h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #ce4028, #e6583f);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.footer-column:hover h4::after {
  width: 60px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.footer-column ul li a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
}

.footer-column ul li a::before {
  content: '→';
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.footer-column ul li a:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.footer-column ul li a:hover {
  color: white;
  transform: translateX(5px);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.contact-list li:hover {
  transform: translateX(5px);
  color: white;
}

.contact-list li a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-list li a:hover {
  color: #ce4028;
  text-decoration: underline;
}

.contact-list svg {
  color: #ce4028;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-list li:hover svg {
  transform: scale(1.2) rotate(10deg);
}

.hours-list li {
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  padding: 0.6rem 0;
  transition: all 0.3s ease;
}

.hours-list li:hover {
  padding-left: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.time {
  font-weight: 700;
  color: #ce4028;
  text-shadow: 0 0 10px rgba(206, 64, 40, 0.3);
}

.time.closed {
  color: rgba(255, 255, 255, 0.5);
  text-shadow: none;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  animation: fadeIn 0.8s ease-out 0.3s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  position: relative;
}

.footer-bottom-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #ce4028;
  transition: width 0.3s ease;
}

.footer-bottom-links a:hover::after {
  width: 100%;
}

.footer-bottom-links a:hover {
  color: #ce4028;
}

.footer-bottom-links span {
  color: rgba(255, 255, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .nav-desktop {
    gap: 2rem;
  }
}

@media (max-width: 992px) {
  .header-top {
    display: none;
  }

  .nav-desktop,
  .header-actions {
    display: none;
  }

  .mobile-menu-btn,
  .mobile-menu {
    display: flex;
  }

  .mobile-menu {
    top: 82px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .header-content {
    padding: 1rem 1.5rem;
  }

  .logo-container img {
    height: 45px;
  }

  .footer-container {
    padding: 4rem 1.5rem 1.5rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-column {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-column:last-child {
    border-bottom: none;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-bottom-links {
    justify-content: center;
  }

  .mobile-menu {
    top: 72px;
  }

  .footer-wave {
    height: 50px;
  }
}

@media (max-width: 480px) {
  .logo-container img {
    height: 38px;
  }

  .contact-info {
    flex-direction: column;
    gap: 0.5rem;
  }

  .social-link {
    width: 42px;
    height: 42px;
  }

  .footer-social {
    gap: 0.8rem;
  }

  .footer-tagline {
    font-size: 0.9rem;
  }
}
</style>
