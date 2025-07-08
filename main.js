if (location.hostname !== 'romgalaxya51.github.io') {
  document.body.innerHTML = '';
  document.body.style.background = '#fff';
  throw new Error('Unauthorized domain');
}

const root = document.getElementById('root');
root.innerHTML = `
  <div id="bg-blur"></div>

  <header>
    <div class="container header-flex">
      <div class="logo-title">
        <img src="assets/logo.webp" alt="Logo Samsung A51" class="logo" loading="eager" />
        <span class="site-title">ROM Galaxy A51</span>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#download">Download</a>
        <a href="#about">About</a>
        <button id="toggle-theme" class="theme-toggle" aria-label="Toggle Theme"></button>
      </nav>
    </div>
  </header>

  <section id="home" class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <h1>Halo, Selamat Datang</h1>
      <p>Situs ini menyediakan ROM Custom untuk Samsung Galaxy A51 4G</p>
    </div>
  </section>

  <section id="features" class="features container">
    <h2>Keunggulan</h2>
    <div class="feature">
      <img src="assets/icon1.jpg" alt="Fitur Ringan" />
      <h3>Peningkatan Versi Android</h3>
    </div>
    <div class="feature">
      <img src="assets/icon2.jpg" alt="Fitur Estetik" />
      <h3>Peningkatan Performa</h3>
    </div>
    <div class="feature">
      <img src="assets/icon3.jpg" alt="Fitur Stabil" />
      <h3>Tampilan Lebih Modern</h3>
    </div>
  </section>

  <section id="download" class="download container">
    <h2>Download ROM</h2>
    <ul>
      <li>
        <div class="rom-info">
          <div><strong>LongUI ROM v5</strong></div>
          <div class="info-download-row">
            <span>One UI 7</span>
            <a href="link" target="_blank" class="download-link coming-soon">Segera Rilis</a>
          </div>
          <div>Android 15</div>
          <hr class="rom-separator" />
          <div class="release-date"></div>
        </div>
      </li>
      <li>
        <div class="rom-info">
          <div><strong>XROM v15</strong></div>
          <div class="info-download-row">
            <span>One UI 7</span>
            <a href="https://www.mediafire.com/file/0rcbrcx2ul1oa94/XROM-S23FE-V15-A51.zip/file" target="_blank" class="download-link">Download</a>
          </div>
          <div>Android 15</div>
          <hr class="rom-separator" />
          <div class="release-date">Juni 16, 2025</div>
        </div>
      </li>
      <li>
        <div class="rom-info">
          <div><strong>AOSP15</strong></div>
          <div class="info-download-row">
            <span>Pixel OS</span>
            <a href="https://www.mediafire.com/file/9tgj0rsqkdh6ogt/PixelOS_a51-15.0-20250222-1803.zip/file" target="_blank" class="download-link">Download</a>
          </div>
          <div>Android 15</div>
          <hr class="rom-separator" />
          <div class="release-date">Maret 16, 2025</div>
        </div>
      </li>
      <li>
        <div class="rom-info">
          <div><strong>XROM Beta 1</strong></div>
          <div class="info-download-row">
            <span>One UI 7</span>
            <a href="https://www.mediafire.com/file/d0jkrg0s0xtfw8z/XROM-S23FE-V0.1-A51.zip/file" target="_blank" class="download-link">Download</a>
          </div>
          <div>Android 15</div>
          <hr class="rom-separator" />
          <div class="release-date">April 22, 2025</div>
        </div>
      </li>
    </ul>
  </section>

  <section id="about" class="about container">
    <div class="rom-info">
      <h2>Informasi</h2>
      <p>
        ROM ini di-porting dari perangkat kelas atas dan perangkat kelas menengah
        yang lebih baru untuk menghadirkan fitur-fitur terbaru pada perangkat
        Samsung Galaxy A51 4G.
      </p>
    </div>
  </section>

  <footer>
    <div class="container">&copy; Copyright 2025</div>
  </footer>
`;

// Dark mode toggle & ScrollReveal
import('https://unpkg.com/scrollreveal').then(() => {
  const toggleBtn = document.getElementById('toggle-theme');
  const blurTarget = document.getElementById('bg-blur');
  const iconMoon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>`;
  const iconSun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79-1.42 1.41 1.79 1.8 1.43-1.42zm10.48 14.32l1.79 1.8 1.42-1.42-1.8-1.79-1.41 1.41zM12 4V1h-1v3h1zm0 19v-3h-1v3h1zm8-10h3v-1h-3v1zm-19 0h3v-1H1v1zm15.24-7.76l1.8-1.79-1.42-1.42-1.79 1.8 1.41 1.41zM4.22 19.78l1.79-1.8-1.42-1.41-1.79 1.79 1.42 1.42zM12 6a6 6 0 100 12 6 6 0 000-12z"/></svg>`;

  function updateIcon(isDark) {
    toggleBtn.innerHTML = isDark ? iconSun : iconMoon;
  }

  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark-mode', isDarkMode);
  updateIcon(isDarkMode);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateIcon(isDark);
  });

  ScrollReveal().reveal('.hero', { delay: 100, distance: '40px', origin: 'bottom', duration: 800, easing: 'ease-in-out' });
  ScrollReveal().reveal('.feature', { interval: 100, distance: '20px', origin: 'bottom', duration: 800, easing: 'ease-in-out', scale: 0.95 });
  ScrollReveal().reveal('.download li', { interval: 100, distance: '20px', origin: 'left', duration: 700 });
  ScrollReveal().reveal('#about', { distance: '40px', origin: 'bottom', duration: 700, delay: 100 });
});
