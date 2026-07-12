'use strict';

const translations = {
  id: {
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.project': 'Project',
    'nav.design': 'Design',
    'nav.skills': 'Skill',
    'nav.contact': 'Kontak',
    'hero.eyebrow': 'Portfolio',
    'hero.fullName': 'Salsabila Nur Aisyah',
    'hero.tagline': 'Full-stack dev & UI/UX designer.',
    'hero.intro': 'Membangun produk digital yang rapi, fungsional, dan siap pakai.',
    'hero.ctaProject': 'Lihat Project',
    'hero.ctaContact': 'Hubungi',
    'hero.statProjects': 'Projects',
    'hero.statYears': 'Years',
    'hero.statRating': 'Rating',
    'about.eyebrow': 'Tentang',
    'about.nickname': 'SALSA',
    'about.locationLabel': 'Lokasi',
    'about.location': 'Depok',
    'about.educationLabel': 'Pendidikan',
    'about.education': 'Sistem Informasi',
    'about.linkedin': 'LinkedIn',
    'about.github': 'GitHub',
    'about.title': 'Kode & desain, dua sisi mata uang yang sama.',
    'about.bio': 'Full-stack developer & UI/UX designer. Jembatan antara estetika dan performa backend. Dari Figma sampai Laravel.',
    'studio.eyebrow': 'Design Brand',
    'studio.button': 'Follow',
    'projects.eyebrow': 'Project',
    'projects.title': 'Karya terpilih.',
    'projects.btnDemo': 'Demo',
    'projects.btnGithub': 'Repo',
    'design.eyebrow': 'Design',
    'design.title': 'Bersih, terstruktur, siap coding.',
    'design.mobile': 'Flow simpel, komponen konsisten.',
    'design.dashboard': 'Data & analytics yang rapi.',
    'design.system': 'Token, komponen, dokumentasi.',
    'design.calloutTitle': 'Korrastudio.id',
    'design.calloutDesc': 'Portofolio desain di Instagram.',
    'design.calloutBtn': 'Lihat',
    'skills.eyebrow': 'Skill',
    'skills.title': 'Yang aku kuasai.',
    'contact.eyebrow': 'Kontak',
    'contact.title': 'Ayo bikin sesuatu bareng.',
    'contact.desc': 'Freelance, kolaborasi, atau konsultasi.',
    'form.name': 'Nama',
    'form.email': 'Email',
    'form.message': 'Pesan',
    'form.button': 'Kirim',
    'form.success': 'Pesan terkirim.',
    'footer.tagline': 'Kode & desain untuk produk digital.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.project': 'Projects',
    'nav.design': 'Design',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Portfolio',
    'hero.fullName': 'Salsabila Nur Aisyah',
    'hero.tagline': 'Full-stack dev & UI/UX designer.',
    'hero.intro': 'Building clean, functional, ready-to-use digital products.',
    'hero.ctaProject': 'View Projects',
    'hero.ctaContact': 'Contact',
    'hero.statProjects': 'Projects',
    'hero.statYears': 'Years',
    'hero.statRating': 'Rating',
    'about.eyebrow': 'About',
    'about.nickname': 'SALSA',
    'about.locationLabel': 'Location',
    'about.location': 'Depok',
    'about.educationLabel': 'Education',
    'about.education': 'Information Systems',
    'about.linkedin': 'LinkedIn',
    'about.github': 'GitHub',
    'about.title': 'Code & design, two sides of the same coin.',
    'about.bio': 'Full-stack developer & UI/UX designer. Bridging aesthetics and backend performance. From Figma to Laravel.',
    'studio.eyebrow': 'Design Brand',
    'studio.button': 'Follow',
    'projects.eyebrow': 'Projects',
    'projects.title': 'Selected works.',
    'projects.btnDemo': 'Demo',
    'projects.btnGithub': 'Repo',
    'design.eyebrow': 'Design',
    'design.title': 'Clean, structured, ready to code.',
    'design.mobile': 'Simple flows, consistent components.',
    'design.dashboard': 'Clean data & analytics.',
    'design.system': 'Tokens, components, documentation.',
    'design.calloutTitle': 'Korrastudio.id',
    'design.calloutDesc': 'Design portfolio on Instagram.',
    'design.calloutBtn': 'View',
    'skills.eyebrow': 'Skills',
    'skills.title': 'What I master.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let\'s build something together.',
    'contact.desc': 'Freelance, collaboration, or consulting.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.button': 'Send',
    'form.success': 'Message sent.',
    'footer.tagline': 'Code & design for digital products.'
  }
};

const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');
const langButtons = document.querySelectorAll('[data-lang]');
const translatableEls = document.querySelectorAll('[data-i18n]');
const sections = document.querySelectorAll('main section[id]');
const sectionLinks = document.querySelectorAll('.nav-links a');
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const skillsGrid = document.getElementById('skillsGrid');

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

langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  document.body.classList.toggle('nav-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? 'x' : '=';
});

sectionLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '=';
  });
});

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

setLanguage(localStorage.getItem('salsa-language') || 'id');