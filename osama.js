// ===== TRANSLATIONS =====
const translations = {
    ar: {
        'nav-home': 'الرئيسية',
        'nav-about': 'عنّي',
        'nav-skills': 'المهارات',
        'nav-contact': 'تواصل',
        'theme-title': 'تغيير الثيم',
        'hero-greeting': 'مرحباً، أنا <span class="highlight">أسامة محمد عبد العزيز الحاج</span>',
        'hero-subtitle': 'مطور ويب | مصمم جرافيك | مبدع رقمي',
        'hero-bio': 'شغوف بتحويل الأفكار إلى تجارب رقمية مميزة. أؤمن بقوة التصميم وأهمية البرمجة في بناء المستقبل.',
        'hero-btn': 'استعرض مهاراتي',
        'about-title': 'عنّي',
        'about-p1': 'أنا أسامة محمد عبد العزيز الحاج، مطور ويب ومصمم جرافيك بخبرة في إنشاء مواقع وتطبيقات ويب حديثة. أستمتع بتقديم حلول إبداعية تلبي احتياجات العملاء وتتجاوز توقعاتهم.',
        'about-p2': 'أعمل على تطوير مهاراتي باستمرار في مجالات البرمجة والتصميم، وأسعى دائماً لمواكبة أحدث التقنيات في عالم التكنولوجيا.',
        'skills-title': 'مهاراتي',
        'skill-design': 'تصميم جرافيك',
        'skill-db': 'قواعد بيانات',
        'contact-title': 'تواصل معي',
        'contact-location': 'فلسطين / غزة',
        'form-name': 'الاسم',
        'form-email': 'البريد الإلكتروني',
        'form-message': 'رسالتك...',
        'form-submit': 'إرسال',
        'footer': '© 2026 أسامة محمد عبد العزيز الحاج. جميع الحقوق محفوظة.',
        'page-title': 'أسامة محمد عبد العزيز الحاج - الموقع التعريفي',
        'alert-msg': 'شكراً لتواصلك! سأرد عليك في أقرب وقت ممكن.',
    },
    en: {
        'page-title': 'Osama Mohammed Abdelaziz Al-Haj - Portfolio',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'theme-title': 'Toggle Theme',
        'hero-greeting': 'Hello, I\'m <span class="highlight">Osama Mohammed Abdelaziz Al-Haj</span>',
        'hero-subtitle': 'Web Developer | Graphic Designer | Digital Creator',
        'hero-bio': 'Passionate about turning ideas into unique digital experiences. I believe in the power of design and the importance of programming in building the future.',
        'hero-btn': 'View My Skills',
        'about-title': 'About Me',
        'about-p1': 'I\'m Osama Mohammed Abdelaziz Al-Haj, a web developer and graphic designer experienced in building modern websites and web applications. I enjoy delivering creative solutions that meet client needs and exceed expectations.',
        'about-p2': 'I continuously develop my skills in programming and design, always striving to keep up with the latest technologies in the tech world.',
        'skills-title': 'My Skills',
        'skill-design': 'Graphic Design',
        'skill-db': 'Databases',
        'contact-title': 'Contact Me',
        'contact-location': 'Palestine / Gaza',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-message': 'Your message...',
        'form-submit': 'Send',
        'footer': '© 2026 Osama Mohammed Abdelaziz Al-Haj. All rights reserved.',
        'alert-msg': 'Thank you for reaching out! I will get back to you soon.',
    }
};

// ===== LANGUAGE TOGGLE =====
let currentLang = localStorage.getItem('lang') || 'ar';

function toggleLang() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    document.body.classList.add('lang-switching');
    setTimeout(() => {
        applyLanguage();
        document.body.classList.remove('lang-switching');
    }, 300);
}

function applyLanguage() {
    const lang = translations[currentLang];
    const html = document.documentElement;
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    html.setAttribute('data-lang', currentLang);

    document.querySelector('.lang-toggle span').textContent = currentLang === 'ar' ? 'EN' : 'AR';

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang[key]) {
            el.innerHTML = lang[key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (lang[key]) {
            el.setAttribute('placeholder', lang[key]);
        }
    });
}

// Apply saved language on load
if (currentLang === 'en') {
    applyLanguage();
}

// ===== THEME TOGGLE =====
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

// Restore saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}

// ===== MENU =====
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// ===== CONTACT FORM =====
function sendMessage(e) {
    e.preventDefault();
    alert(translations[currentLang]['alert-msg']);
    e.target.reset();
}

// ===== SCROLL REVEAL (BOTH DIRECTIONS) =====
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            entry.target.classList.add('icon-pop');
        } else {
            entry.target.classList.remove('active');
            setTimeout(() => entry.target.classList.remove('icon-pop'), 300);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// ===== ICON WAVE ANIMATION ON SCROLL =====
const iconWrappers = document.querySelectorAll('.skill-card i, .contact-item i, .social-links a');

const iconObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('icon-bounce');
            setTimeout(() => entry.target.classList.remove('icon-bounce'), 600);
        }
    });
}, { threshold: 0.4 });

iconWrappers.forEach(el => iconObserver.observe(el));

// ===== TYPING EFFECT =====
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

let typedDone = false;
const subtitleEl = document.querySelector('.subtitle');

function runTypingEffect() {
    if (typedDone) return;
    const text = translations[currentLang]['hero-subtitle'];
    typedDone = true;
    setTimeout(() => typeWriter(subtitleEl, text, 40), 600);
}

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !typedDone) {
            runTypingEffect();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(document.querySelector('.hero'));

// ===== CURSOR GLOW =====
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    glow.style.opacity = '1';
});

// ===== DYNAMIC NAV BACKGROUND =====
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 15, 15, 0.98)';
        header.style.borderBottomColor = '#333';
    } else {
        header.style.background = 'rgba(15, 15, 15, 0.8)';
        header.style.borderBottomColor = '#222';
    }
});

// ===== SKILL BARS ANIMATION ON SCROLL =====
const progressBars = document.querySelectorAll('.progress');

const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => { bar.style.width = width; }, 200);
            barObserver.unobserve(bar);
        }
    });
}, { threshold: 0.3 });

progressBars.forEach(bar => barObserver.observe(bar));

// ===== PARALLAX PROFILE PIC ON MOUSE MOVE =====
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
    document.querySelector('.hero-image').addEventListener('mousemove', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        profilePic.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    document.querySelector('.hero-image').addEventListener('mouseleave', () => {
        profilePic.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
    });
}
