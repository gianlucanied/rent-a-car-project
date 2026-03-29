<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from './composables/useI18n'

const { locale, setLocale, t } = useI18n()

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
const changeLanguage = (lang) => {
  setLocale(lang)
}

const socialLinks = {
  facebook: 'https://www.facebook.com/RentaCarExpressAlghero',
  instagram: 'https://www.instagram.com/rent_a_car_express',
}
</script>

<template>
  <header class="app-header">
    <div class="header-top">
      <div class="top-inner">
        <div class="top-contacts">
          <a href="tel:+39079985937" class="top-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            +39 079985937
          </a>
          <span class="top-sep" aria-hidden="true">·</span>
          <span class="top-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {{ t('header.schedule') }}
          </span>
          <span class="top-sep" aria-hidden="true">·</span>
          <a href="mailto:info@rentacarexpress.it" class="top-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
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
            info@rentacarexpress.it
          </a>
        </div>
        <div class="top-lang">
          <button
            v-for="lang in ['it', 'en', 'es']"
            :key="lang"
            @click="changeLanguage(lang)"
            class="lang-btn"
            :class="{ active: locale === lang }"
          >
            {{ lang.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>

    <div class="header-main">
      <div class="header-inner">
        <RouterLink to="/" class="logo-link" @click="closeMobileMenu">
          <img src="/src/assets/logo.jpg" alt="Rent a Car Express" class="logo-img" />
        </RouterLink>
        <nav class="nav-desktop" aria-label="Navigazione principale">
          <RouterLink to="/" class="nav-item">{{ t('nav.home') }}</RouterLink>
          <RouterLink to="/rates" class="nav-item">{{ t('nav.rates') }}</RouterLink>
          <RouterLink to="/contacts" class="nav-item">{{ t('nav.contacts') }}</RouterLink>
          <RouterLink to="/conditions" class="nav-item">{{ t('nav.conditions') }}</RouterLink>
        </nav>
        <button
          class="burger"
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-label="Menu"
        >
          <span :class="{ open: mobileMenuOpen }"></span>
          <span :class="{ open: mobileMenuOpen }"></span>
          <span :class="{ open: mobileMenuOpen }"></span>
        </button>
      </div>
    </div>

    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <nav class="mobile-nav">
        <RouterLink to="/" class="mob-item" @click="closeMobileMenu">
          {{ t('nav.home') }}</RouterLink
        >
        <RouterLink to="/rates" class="mob-item" @click="closeMobileMenu">
          {{ t('nav.rates') }}</RouterLink
        >
        <RouterLink to="/contacts" class="mob-item" @click="closeMobileMenu">
          {{ t('nav.contacts') }}</RouterLink
        >
        <RouterLink to="/conditions" class="mob-item" @click="closeMobileMenu">
          {{ t('nav.conditions') }}</RouterLink
        >
      </nav>
      <div class="mob-lang">
        <button
          v-for="lang in ['it', 'en', 'es']"
          :key="lang"
          @click="changeLanguage(lang)"
          class="mob-lang-btn"
          :class="{ active: locale === lang }"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>
    </div>
  </header>

  <RouterView />

  <footer class="app-footer">
    <div class="footer-lines" aria-hidden="true">
      <span v-for="n in 6" :key="n" class="f-line" :style="{ '--i': n }"></span>
    </div>
    <div class="f-blob f-blob-1" aria-hidden="true"></div>
    <div class="f-blob f-blob-2" aria-hidden="true"></div>

    <div class="footer-inner">
      <div class="footer-body">
        <div class="footer-brand">
          <img
            src="/src/assets/logo-removebg-preview.png"
            alt="Rent a Car Express"
            class="footer-logo"
          />
          <p class="footer-tagline">{{ t('footer.tagline') }}</p>
          <div class="footer-social">
            <a
              :href="socialLinks.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="soc-link"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              class="soc-link"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">{{ t('footer.navigation') }}</h4>
          <ul class="footer-list">
            <li>
              <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/rates">{{ t('nav.rates') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/contacts">{{ t('nav.contacts') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/conditions">{{ t('nav.conditions') }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">{{ t('footer.contactsTitle') }}</h4>
          <ul class="footer-contact-list">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
              <a href="tel:+39079985937">+39 079 985937</a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
              <a href="mailto:info@rentacarexpress.it">info@rentacarexpress.it</a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{{ t('footer.address') }}</span>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">{{ t('footer.openingHours') }}</h4>
          <ul class="footer-hours">
            <li>
              <span class="hours-day">{{ t('footer.mondayToSaturday') }}</span>
              <span class="hours-time">08:30 – 13:00 · 16:00 – 19:00</span>
            </li>
            <li>
              <span class="hours-day">{{ t('footer.sunday') }}</span>
              <span class="hours-time closed">08:30 – 12:30</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="footer-copy">{{ t('footer.copyright') }}</p>
          <a
            href="https://www.instagram.com/gianlucanied"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-credits"
          >
            Design by <span>@gianlucanied</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ── HEADER TOP ── */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.header-top {
  background: #0e2d4e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.top-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
}
.top-contacts {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.top-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.25s ease;
}
.top-item:hover {
  color: rgba(255, 255, 255, 0.9);
}
.top-item svg {
  opacity: 0.5;
  flex-shrink: 0;
}
.top-sep {
  color: rgba(255, 255, 255, 0.18);
  font-size: 0.7rem;
}
.top-lang {
  display: flex;
  gap: 0.3rem;
  align-items: center;
}
.lang-btn {
  padding: 0.28rem 0.65rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.45);
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  transition: all 0.25s ease;
}
.lang-btn:hover {
  border-color: rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.85);
}
.lang-btn.active {
  background: #ce4028;
  border-color: #ce4028;
  color: #fff;
  box-shadow: 0 2px 8px rgba(206, 64, 40, 0.35);
}

/* ── HEADER MAIN ── */
.header-main {
  background: #fff;
  border-bottom: 1px solid rgba(31, 79, 128, 0.08);
  box-shadow: 0 2px 20px rgba(14, 45, 78, 0.07);
}
.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.85rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
.logo-link {
  flex-shrink: 0;
  display: block;
}
.logo-img {
  height: 52px;
  width: auto;
  display: block;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.logo-img:hover {
  transform: scale(1.05);
}
.nav-desktop {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
}
.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.65rem 1rem;
  color: #3a5068;
  font-size: 0.93rem;
  text-decoration: none;
  border-radius: 8px;
  transition:
    color 0.25s ease,
    background 0.25s ease;
}
.nav-item::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background: linear-gradient(90deg, #ce4028, #e6583f);
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.nav-item:hover {
  color: #0e2d4e;
  background: rgba(31, 79, 128, 0.05);
}
.nav-item:hover::after {
  transform: scaleX(1);
}
.nav-item.router-link-active {
  color: #ce4028;
  background: rgba(206, 64, 40, 0.05);
}
.nav-item.router-link-active::after {
  transform: scaleX(1);
}

/* ── BURGER ── */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 5px;
  z-index: 1001;
}
.burger span {
  display: block;
  width: 24px;
  height: 2.5px;
  background: #1f4f80;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.burger span.open {
  background: #ce4028;
}
.burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger span.open:nth-child(2) {
  opacity: 0;
  transform: translateX(-12px);
}
.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ── MOBILE MENU ── */
.mobile-menu {
  display: none;
  background: #fff;
  border-top: 1px solid rgba(31, 79, 128, 0.08);
  box-shadow: 0 8px 30px rgba(14, 45, 78, 0.1);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu.open {
  max-height: 500px;
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem 0.5rem;
}
.mob-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem 0.75rem;
  color: #1f4f80;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 8px;
  border-bottom: 1px solid rgba(31, 79, 128, 0.07);
  transition: all 0.25s ease;
}
.mob-item:hover {
  background: rgba(31, 79, 128, 0.04);
  color: #ce4028;
  padding-left: 1.25rem;
}
.mob-item.router-link-active {
  color: #ce4028;
  border-left: 3px solid #ce4028;
  padding-left: 1rem;
  background: rgba(206, 64, 40, 0.04);
}
.mob-lang {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem 1.25rem;
  border-top: 1px solid rgba(31, 79, 128, 0.08);
  margin-top: 0.5rem;
}
.mob-lang-btn {
  padding: 0.4rem 1rem;
  background: #fff;
  border: 1.5px solid rgba(31, 79, 128, 0.2);
  color: #1f4f80;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  transition: all 0.25s ease;
}
.mob-lang-btn:hover {
  border-color: #ce4028;
  color: #ce4028;
}
.mob-lang-btn.active {
  background: #ce4028;
  border-color: #ce4028;
  color: #fff;
}

/* ── FOOTER ── */
.app-footer {
  position: relative;
  background: #0e2d4e;
  overflow: hidden;
  padding-top: 5rem;
}
.footer-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.f-line {
  position: absolute;
  left: calc(var(--i) * 17% - 5%);
  top: -10%;
  width: 1px;
  height: 130%;
  background: rgba(255, 255, 255, 0.025);
  transform: rotate(15deg);
  transform-origin: top center;
}
.f-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}
.f-blob-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(31, 79, 128, 0.55) 0%, transparent 70%);
  top: -100px;
  left: -80px;
  animation: blobDrift 25s ease-in-out infinite alternate;
}
.f-blob-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(206, 64, 40, 0.4) 0%, transparent 70%);
  bottom: 0;
  right: 5%;
  animation: blobDrift 30s ease-in-out infinite alternate-reverse;
}
@keyframes blobDrift {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(35px, 25px) scale(1.07);
  }
}
.footer-inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}
.footer-body {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1.4fr 1.2fr;
  gap: 3.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.footer-logo {
  height: 54px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}
.footer-logo:hover {
  transform: scale(1.04);
  filter: brightness(0) invert(1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
}
.footer-tagline {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.7;
  max-width: 280px;
}
.footer-social {
  display: flex;
  gap: 0.6rem;
}
.soc-link {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}
.soc-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ce4028;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.soc-link:hover::before {
  opacity: 1;
}
.soc-link:hover {
  color: #fff;
  border-color: #ce4028;
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(206, 64, 40, 0.3);
}
.soc-link svg {
  position: relative;
  z-index: 1;
}

.footer-col-title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  position: relative;
}
.footer-col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: linear-gradient(90deg, #ce4028, #e6583f);
  border-radius: 1px;
  transition: width 0.3s ease;
}
.footer-col:hover .footer-col-title::after {
  width: 40px;
}

.footer-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.footer-list li a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}
.footer-list li a::before {
  content: '—';
  font-size: 0.7rem;
  color: #ce4028;
  opacity: 0;
  transform: translateX(-6px);
  transition: all 0.25s ease;
}
.footer-list li a:hover {
  color: rgba(255, 255, 255, 0.9);
  transform: translateX(4px);
}
.footer-list li a:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.footer-contact-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.footer-contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.25s ease;
}
.footer-contact-list li:hover {
  color: rgba(255, 255, 255, 0.85);
}
.footer-contact-list svg {
  color: #ce4028;
  flex-shrink: 0;
  margin-top: 2px;
}
.footer-contact-list a {
  color: inherit;
  text-decoration: none;
  transition: color 0.25s ease;
}
.footer-contact-list a:hover {
  color: #fff;
}

/* ── ORARI: layout verticale, una voce per turno ── */
.footer-hours {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.footer-hours li {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.footer-hours li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.hours-day {
  font-size: 0.73rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
}
.hours-time {
  font-size: 0.9rem;
  font-weight: 700;
  color: #e6583f;
}
.hours-time.closed {
  color: #e6583f;
  font-weight: 700;
}

.footer-bottom {
  padding: 1.5rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.footer-copy {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.28);
}

.footer-credits {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.2);
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.03em;
}

.footer-credits span {
  font-weight: 600;
  transition: color 0.3s ease;
}

.footer-credits:hover {
  color: rgba(255, 255, 255, 0.6);
  transform: translateY(-1px);
}

.footer-credits:hover span {
  color: #ce4028; /* Colore rosso coordinato col tuo brand */
}

/* Responsive adjustment */
@media (min-width: 600px) {
  .footer-bottom-content {
    flex-direction: row;
    justify-content: space-between;
  }
}
.footer-copy {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.28);
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .footer-body {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}
@media (max-width: 860px) {
  .header-top {
    display: none;
  }
  .nav-desktop {
    display: none;
  }
  .burger,
  .mobile-menu {
    display: flex;
  }
  .mobile-menu {
    display: block;
  }
}
@media (max-width: 600px) {
  .header-inner {
    padding: 0.7rem 1.25rem;
  }
  .logo-img {
    height: 44px;
  }
  .footer-body {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-inner {
    padding: 0 1.25rem;
  }
  .top-inner {
    padding: 0 1.25rem;
  }
  .top-contacts {
    display: none;
  }
}
</style>

<style>
/* Numeri decorativi nascosti globalmente */
.hero-deco-num,
.card-num,
.feat-num,
.faq-num {
  display: none;
}
</style>
