'use strict';

const translations = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.project': 'Project',
    'nav.design': 'Design',
    'nav.skills': 'Skill',
    'nav.contact': 'Kontak',
    
    // Hero
    'hero.eyebrow': 'Portfolio',
    'hero.fullName': 'Salsabila Nur Aisyah',
    'hero.tagline': 'Web Developer',
    'hero.intro': 'Membangun aplikasi web yang rapi dan fungsional dengan Laravel, Tailwind CSS, dan MySQL. Senang mempelajari hal baru, disiplin, dan teliti hingga ke detail terkecil.',
    'hero.ctaProject': 'Lihat Project',
    'hero.ctaContact': 'Hubungi Saya',
    'hero.statProjects': 'Project',
    'hero.statExperience': 'Pengalaman',
    'hero.statCertification': 'Sertifikasi',
    
    // About
    'about.eyebrow': 'Tentang',
    'about.locationLabel': 'Lokasi',
    'about.location': 'Depok',
    'about.educationLabel': 'Pendidikan',
    'about.education': 'Sistem Informasi',
    'about.linkedin': 'LinkedIn',
    'about.github': 'GitHub',
    'about.title': 'Dari baris kode menjadi produk yang bermanfaat.',
    'about.bio': 'Berlatar belakang Sistem Informasi, saya fokus pada pengembangan web. Saya menikmati proses mengubah ide menjadi aplikasi yang nyaman digunakan, mulai dari merancang tampilan hingga mengelola database.',
    
    // Studio
    'studio.eyebrow': 'Design Brand',
    'studio.button': 'Follow',
    
    // Projects
    'projects.eyebrow': 'Project',
    'projects.title': 'Beberapa karya pilihan.',
    'projects.btnDemo': 'Demo',
    'projects.btnRepo': 'Repo',
    
    // Skills
    'skills.eyebrow': 'Skill',
    'skills.title': 'Keahlian & perangkat andalan.',
    
    // Contact
    'contact.eyebrow': 'Kontak',
    'contact.title': 'Mari wujudkan ide Anda bersama.',
    'contact.desc': 'Terbuka untuk proyek freelance, kolaborasi, maupun konsultasi. Jangan ragu untuk menyapa!',
    'contact.ctaEmail': 'Kirim Email',
    'form.email': 'Email',
    'form.message': 'Pesan',
    'form.button': 'Kirim Pesan',
    'form.success': 'Terima kasih! Pesan Anda sudah terkirim.',
    
    // Footer
    'footer.tagline': 'Merangkai kode dan desain menjadi produk digital.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.project': 'Projects',
    'nav.design': 'Design',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.eyebrow': 'Portfolio',
    'hero.fullName': 'Salsabila Nur Aisyah',
    'hero.tagline': 'Web Developer',
    'hero.intro': 'Building clean, functional web applications with Laravel, Tailwind CSS, and MySQL. Eager to learn, disciplined, and attentive to the smallest details.',
    'hero.ctaProject': 'View Projects',
    'hero.ctaContact': 'Get in Touch',
    'hero.statProjects': 'Projects',
    'hero.statExperience': 'Experience',
    'hero.statCertification': 'Certification',
    
    // About
    'about.eyebrow': 'About',
    'about.locationLabel': 'Location',
    'about.location': 'Depok',
    'about.educationLabel': 'Education',
    'about.education': 'Information Systems',
    'about.linkedin': 'LinkedIn',
    'about.github': 'GitHub',
    'about.title': 'From lines of code to meaningful products.',
    'about.bio': 'With a background in Information Systems, I focus on web development. I enjoy turning ideas into applications that feel easy to use, from designing the interface to managing the database.',
    
    // Studio
    'studio.eyebrow': 'Design Brand',
    'studio.button': 'Follow',
    
    // Projects
    'projects.eyebrow': 'Projects',
    'projects.title': 'A few selected works.',
    'projects.btnDemo': 'Demo',
    'projects.btnRepo': 'Repo',
    
    // Skills
    'skills.eyebrow': 'Skills',
    'skills.title': 'Skills & go-to tools.',
    
    // Contact
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let\'s bring your ideas to life.',
    'contact.desc': 'Open to freelance projects, collaborations, and consultations. Feel free to say hello!',
    'contact.ctaEmail': 'Send Email',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.button': 'Send Message',
    'form.success': 'Thank you! Your message has been sent.',
    
    // Footer
    'footer.tagline': 'Crafting code and design into digital products.'
  }
};

// DOM Elements
const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');
const langButtons = document.querySelectorAll('[data-lang]');
const translatableEls = document.querySelectorAll('[data-i18n]');
const sections = document.querySelectorAll('main section[id]');
const sectionLinks = document.querySelectorAll('.nav-links a');
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const skillsGrid = document.getElementById('skillsGrid');

// Language Functions
function setLanguage(lang) {
  const dictionary = translations[lang] || translations.id;

  translatableEls.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  document.documentElement.lang = lang;
  localStorage.setItem('salsa-language', lang);
}

// Event Listeners for Language
langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

// Mobile Menu
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  document.body.classList.toggle('nav-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

// Close menu when clicking a link
sectionLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// Active Navigation
function updateActiveNav() {
  let activeId = 'beranda';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 130) {
      activeId = section.id;
    }
  });

  sectionLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Reveal Animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.16,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Skills Animation
if (skillsGrid) {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillsGrid.classList.add('skills-visible');
        skillObserver.unobserve(skillsGrid);
      }
    });
  }, { threshold: 0.3 });

  skillObserver.observe(skillsGrid);
}

// Contact Form
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    formMessage.classList.add('show');
    form.reset();

    window.setTimeout(() => {
      formMessage.classList.remove('show');
    }, 4000);
  });
}

/* ===== Lightbox / Zoom Preview ===== */
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const zoomableThumbs = document.querySelectorAll('.project-thumb.zoomable');

function openLightbox(imgEl, caption) {
  lightboxImage.src = imgEl.src;
  lightboxImage.alt = imgEl.alt || caption || '';
  lightboxCaption.textContent = caption || '';
  lightbox.classList.add('open');
  document.body.classList.add('nav-open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.classList.remove('nav-open');
  lightboxImage.src = '';
}

zoomableThumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    const img = thumb.querySelector('img');
    if (img) {
      openLightbox(img, thumb.dataset.caption);
    }
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

/* ===== Project Slider (geser kanan-kiri) ===== */
const projectSlider = document.getElementById('projectSlider');
const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');

if (projectSlider && sliderPrev && sliderNext) {
  const GAP = 16;

  const slideStep = () => {
    const card = projectSlider.querySelector('article');
    return card ? card.offsetWidth + GAP : projectSlider.clientWidth;
  };

  const updateSliderButtons = () => {
    const maxScroll = projectSlider.scrollWidth - projectSlider.clientWidth;
    sliderPrev.disabled = projectSlider.scrollLeft <= 4;
    sliderNext.disabled = projectSlider.scrollLeft >= maxScroll - 4;
  };

  sliderPrev.addEventListener('click', () => projectSlider.scrollBy({ left: -slideStep(), behavior: 'smooth' }));
  sliderNext.addEventListener('click', () => projectSlider.scrollBy({ left: slideStep(), behavior: 'smooth' }));
  projectSlider.addEventListener('scroll', updateSliderButtons, { passive: true });
  window.addEventListener('resize', updateSliderButtons);
  updateSliderButtons();
}

// Set initial language
setLanguage(localStorage.getItem('salsa-language') || 'id');

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerHeight = document.querySelector('.site-header').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});