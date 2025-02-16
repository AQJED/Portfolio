/* script.js */
(() => {
  'use strict';

  // Translation Data for English and Arabic
  const translations = {
    en: {
      nav: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        courses: "Training & Courses",
        github: "GitHub Projects",
        experience: "Experience",
        contact: "Contact"
      },
      header: {
        title: "ADEEB ALQAHTANI",
        contact: "📍 Riyadh | 📧 Adeeb.alqahtani@gmail.com | 📞 966583161518"
      },
      hero: {
        cta: "Discover More",
        downloadCV: "Download CV"
      },
      about: {
        title: "About Me",
        summaryTitle: "Summary",
        summary:
          "Over a decade of experience in software integration, system architecture, and lifecycle management. Skilled in integrating hardware, software, and network components for military and defense systems. Expertise in troubleshooting, optimizing performance, and ensuring regulatory compliance. Passionate about leveraging technology for national projects.",
        educationTitle: "Education & Academic Achievements",
        educationText: "<strong>Degrees:</strong>",
        educationList: [
          "B.S. in Computer Engineering – California State University, San Bernardino (2015 – 2018). Focused on high-performance and embedded systems.",
          "Deep Learning (AI) Nanodegree – MISK (2019 – 2020). Hands-on experience in 6 artificial intelligence projects.",
          "Associate Degree in Electrical & Electronics – Yanbu Industrial College (2004 – 2008). Specialized in instrumentation and control systems."
        ],
        skillsTitle: "Skills",
        skillsText:
          "<strong>Leadership & Management:</strong> Strategic Thinking, Team Leadership, Problem-Solving, Time Management<br /><strong>Hardware & Embedded Systems:</strong> Circuit Design, Microcontrollers, FPGA Programming, Robotics, Instrumentation & Control Systems<br /><strong>Software & Programming:</strong> C/C++, Python, Matlab, Verilog",
        interestsTitle: "Key Achievements & Awards",
        interestsText:
          "<strong>Key Achievements:</strong><ul><li>Cost Savings of $95K – Designed software modifications for a 6-DOF motion system, reducing downtime and enhancing readiness.</li><li>Middleware Solutions – Developed real-time, multithreaded C++ middleware for CIGI protocol conversion, enabling seamless integration of distributed systems.</li></ul><strong>Work Awards:</strong><ul><li>Employee of the Month – Recognized multiple times for performance and dedication.</li><li>Appreciation Letters: Handling a 6-DOF electrical motion system failure (2022), Software modification for 6-DOF motion system (2022), Teaching Basic Electronics Course (2021), Teaching Basic C++ Programming Course (2019)</li></ul>"
      },
      projects: {
        title: "Projects",
        filters: {
          all: "All",
          personal: "Personal Projects",
          university: "Academic Projects",
          military: "Professional Projects"
        },
        showMore: "Show More",
        showLess: "Show Less",
        projectCards: [
          {
            title: "CIGI to CIGI Middleware for Cougar Helicopter Visual IG",
            subtitle: "Professional Project",
            description: "Developed a multithreaded C++ middleware for real-time CIGI-to-CIGI protocol conversion, enabling efficient data transmission between host computers and image generators.",
            technologies: "C++, Multithreading, CIGI Protocol",
            category: "military"
          },
          {
            title: "DIS-CIGI Middleware for Cougar Helicopter CGF",
            subtitle: "Professional Project",
            description: "Built a multithreaded C++ middleware for real-time DIS-to-CIGI conversion, integrating Computer Generated Forces (CGF) with the Image Generator (IG).",
            technologies: "C++, Multithreading, DIS, CIGI",
            category: "military"
          },
          {
            title: "Servo Drive Firmware Restoration for 6-DOF Motion System",
            subtitle: "Professional Project",
            description: "Developed a firmware update station to erase and reinstall firmware for a 6-DOF motion system, avoiding costly hardware replacement and saving $95,000.",
            technologies: "C++, Firmware, Embedded Systems",
            category: "military"
          },
          {
            title: "Flight Controls Microcontroller Integration",
            subtitle: "Professional Project",
            description: "Integrated a microcontroller to drive simulator flight controls, ensuring responsiveness and regulatory compliance while authoring a comprehensive design and performance assessment report.",
            technologies: "Microcontrollers, Embedded Systems, C/C++",
            category: "military"
          },
          {
            title: "5 DOF Robotic Arm Object Detection",
            subtitle: "Personal Project",
            description: "A system to detect the position of an object and how it is oriented through geometry equations to drive a 5 DOF robotic arm. With only laser beams and photo resistors, the system is able to analyze the 2D shadow created by the object that falls in the detection zone of the laser beams, then detect where the object is located and how it is tilted. The system then computes the necessary rotation angles for the joints and the gripper, making it a highly efficient system.",
            technologies: "C++, Object-Oriented Programming (OOP), Electronics, Circuit design, Geometry, Linear Algebra",
            category: "personal"
          }
          
        ]
      },
      github: {
        title: "GitHub Projects",
        description: "Explore my work on GitHub:",
        linkText: "Visit my GitHub Profile"
      },
      experience: {
        title: "Experience",
        details: `<div class="experience-item">
  <h3>Software Integration Engineer</h3>
  <p><strong>Rheinmetall Arabia For Simulation and Training</strong> | Nov 2024 – Present | Riyadh</p>
  <ul>
    <li>Developed middleware solutions for real-time data integration between host systems and external modules.</li>
    <li>Led the full SDLC for simulation and training systems, including design, integration, and deployment.</li>
    <li>Conducted root cause analysis and troubleshooting for system reliability.</li>
    <li>Designed system architectures for simulator upgrades.</li>
    <li>Performed site surveys and recommended enhancements for simulator performance.</li>
  </ul>
</div>
<hr/>
<div class="experience-item">
  <h3>Flight Simulator Engineer</h3>
  <p><strong>PSAA Engineering Department</strong> | Jan 2019 – Oct 2024 | Jeddah</p>
  <ul>
    <li>Led qualification, testing, commissioning, and certification of Full Flight Simulators.</li>
    <li>Ensured compliance with FAA, EASA & GACA aviation standards.</li>
    <li>Troubleshot complex technical issues, minimizing downtime.</li>
    <li>Optimized system integration and performance for improved reliability.</li>
  </ul>
</div>
<hr/>
<div class="experience-item">
  <h3>Flight Simulator Maintenance Supervisor (D)</h3>
  <p><strong>PSAA Technical Services Department</strong> | Jan 2024 – June 2024 | Jeddah</p>
  <ul>
    <li>Managed a team of technicians, optimizing scheduling and training readiness.</li>
    <li>Ensured compliance with regulatory and safety standards.</li>
    <li>Delivered strategic reports and operational analyses.</li>
  </ul>
</div>
<hr/>
<div class="experience-item">
  <h3>Full Flight Simulator Technician</h3>
  <p><strong>PSAA Technical Services Department</strong> | Apr 2010 – Dec 2013 | Jeddah</p>
  <ul>
    <li>Maintained and optimized flight simulators for realistic pilot training.</li>
    <li>Configured single-board computers and upgraded I/O units.</li>
    <li>Installed, calibrated, and aligned instrument panels, visual systems, and motion platforms.</li>
    <li>Improved uptime and customized systems for specific training needs.</li>
  </ul>
</div>`,
        period: "",
        description: ""
      },
      courses: {
        title: "Training & Courses",
        events: [
          "1000+ hours of technical training from Canadian Aviation Electronics, L3Harris, and Collins Aerospace.",
          "PMP Course",
          "Advanced Electronics",
          "Interface Systems",
          "Electromechanical Motion & Controls",
          "Computer Networks",
          "Python for Data Science & AI"
        ]
      },
      footer: {
        text: "&copy; 2025 Adeeb Alqahtani. All rights reserved.",
        linkedin: "LinkedIn",
        github: "GitHub"
      }
    },
    ar: {
      nav: {
        home: "الرئيسية",
        about: "من أنا",
        projects: "المشاريع",
        courses: "الدورات والتدريبات",
        github: "مشاريع GitHub",
        experience: "الخبرات",
        contact: "تواصل"
      },
      header: {
        title: "أديب القحطاني",
        contact: "📍 الرياض | 📧 Adeeb.alqahtani@gmail.com | 📞 966583161518"
      },
      hero: {
        cta: "استكشف المزيد",
        downloadCV: "تحميل السيرة الذاتية"
      },
      about: {
        title: "من أنا",
        summaryTitle: "الملخص",
        summary:
          "أكثر من عقد من الخبرة في تكامل البرمجيات، وهندسة الأنظمة، وإدارة دورة الحياة. ماهر في تكامل المكونات المادية والبرمجية وشبكات الاتصال للأنظمة العسكرية والدفاعية. يمتلك خبرة في تحليل المشكلات وتحسين الأداء وضمان الامتثال للمعايير التنظيمية. شغوف باستخدام التكنولوجيا في المشاريع الوطنية.",
        educationTitle: "التعليم والإنجازات الأكاديمية",
        educationText: "<strong>الشهادات:</strong>",
        educationList: [
          "بكالوريوس في هندسة الحاسوب – جامعة ولاية كاليفورنيا، سان برناردينو (2015 – 2018). مع التركيز على الأنظمة عالية الأداء والمضمنة.",
          "شهادة نانوية في التعلم العميق (الذكاء الاصطناعي) – MISK (2019 – 2020). خبرة عملية في 6 مشاريع ذكاء اصطناعي.",
          "دبلوم في الإلكترونيات والكهرباء – كلية الصناعات في ينبع (2004 – 2008). متخصص في نظم التحكم والأجهزة."
        ],
        skillsTitle: "المهارات",
        skillsText:
          "<strong>الإدارة والقيادة:</strong> التفكير الاستراتيجي، قيادة الفريق، حل المشكلات، إدارة الوقت<br /><strong>المهارات المادية والأنظمة المضمنة:</strong> تصميم الدوائر، المتحكمات الدقيقة، برمجة FPGA، الروبوتات، نظم التحكم والأجهزة<br /><strong>البرمجيات والبرمجة:</strong> C/C++, Python, Matlab, Verilog",
        interestsTitle: "الإنجازات والجوائز",
        interestsText:
          "<strong>الإنجازات الرئيسية:</strong><ul><li>توفير تكلفة بقيمة 95 ألف دولار – تصميم تعديلات برمجية لنظام حركة 6-DOF، مما قلل من وقت التوقف وحسن الجاهزية.</li><li>حلول الوسيط – تطوير وسائط برمجية متعددة الخيوط بلغة C++ لتحويل بروتوكول CIGI في الوقت الفعلي، مما مكّن من نقل البيانات بكفاءة.</li></ul><strong>جوائز العمل:</strong><ul><li>موظف الشهر – تكريم متكرر للأداء والالتزام.</li><li>خطابات تقدير: التعامل مع عطل نظام الحركة الكهربائية 6-DOF (2022)، تعديل برمجي لنظام الحركة 6-DOF (2022)، تدريس دورة الإلكترونيات الأساسية (2021)، تدريس دورة برمجة C++ الأساسية (2019)</li></ul>"
      },
      projects: {
        title: "المشاريع",
        filters: {
          all: "الكل",
          personal: "مشاريع شخصية",
          university: "مشاريع أكاديمية",
          military: "مشاريع احترافية"
        },
        showMore: "عرض المزيد",
        showLess: "عرض أقل",
        projectCards: [
          {
            title: "وسيط تحويل CIGI إلى CIGI لهليكوبتر كوجر للنظام البصري",
            subtitle: "مشروع احترافي",
            description: "تطوير وسائط برمجية متعددة الخيوط بلغة C++ لتحويل بروتوكول CIGI في الوقت الفعلي، مما مكّن من نقل البيانات بكفاءة بين الحواسيب والمولدات البصرية.",
            technologies: "C++، تعدد الخيوط، بروتوكول CIGI",
            category: "military"
          },
          {
            title: "وسيط DIS-CIGI لهليكوبتر كوجر لنظام CGF",
            subtitle: "مشروع احترافي",
            description: "بناء وسائط برمجية متعددة الخيوط بلغة C++ لتحويل بروتوكول DIS إلى CIGI في الوقت الفعلي، مع تكامل القوى المولدة حاسوبياً مع المولد البصري.",
            technologies: "C++، تعدد الخيوط، DIS، CIGI",
            category: "military"
          },
          {
            title: "استعادة البرنامج الثابت لمحرك السيرفو لنظام الحركة 6-DOF",
            subtitle: "مشروع احترافي",
            description: "تطوير محطة تحديث للبرنامج الثابت لمسح وإعادة تثبيت البرنامج لنظام الحركة 6-DOF، مما حال دون استبدال الأجهزة المكلفة ووفر 95,000 دولار.",
            technologies: "C++، البرنامج الثابت، الأنظمة المضمنة",
            category: "military"
          },
          {
            title: "تكامل المتحكم الدقيق لنظام التحكم في الطيران",
            subtitle: "مشروع احترافي",
            description: "دمج متحكم دقيق لتشغيل نظم التحكم في محاكيات الطيران، مع ضمان الاستجابة والامتثال للمعايير التنظيمية، بالإضافة إلى إعداد تقرير شامل للتصميم والأداء.",
            technologies: "المتحكمات الدقيقة، الأنظمة المضمنة، C/C++",
            category: "military"
          }
        ]
      },
      github: {
        title: "مشاريع GitHub",
        description: "استعرض أعمالي على GitHub:",
        linkText: "زيارة ملفي على GitHub"
      },
      experience: {
        title: "الخبرات",
        details: `<div class="experience-item">
  <h3>مهندس تكامل برمجيات</h3>
  <p><strong>Rheinmetall Arabia For Simulation and Training</strong> | نوفمبر 2024 – الحاضر | الرياض</p>
  <ul>
    <li>تطوير حلول وسيط للبيانات في الوقت الفعلي بين الأنظمة المضيفة والوحدات الخارجية.</li>
    <li>قيادة دورة حياة تطوير الأنظمة لمحاكيات التدريب، بما في ذلك التصميم والتكامل والنشر.</li>
    <li>إجراء تحليل جذور المشكلات وحلها لضمان موثوقية النظام.</li>
    <li>تصميم هياكل الأنظمة لترقيات المحاكيات.</li>
    <li>تنفيذ مسوحات ميدانية وتقديم توصيات لتحسين أداء المحاكيات.</li>
  </ul>
</div>
<hr/>
<div class="experience-item">
  <h3>مهندس محاكيات الطيران</h3>
  <p><strong>قسم الهندسة في PSAA</strong> | يناير 2019 – أكتوبر 2024 | جدة</p>
  <ul>
    <li>قيادة عمليات التأهيل والاختبار والتشغيل والشهادة لمحاكيات الطيران الكاملة.</li>
    <li>ضمان الامتثال لمعايير FAA وEASA وGACA.</li>
    <li>حل المشكلات التقنية المعقدة لتقليل وقت التوقف عن العمل.</li>
    <li>تحسين تكامل الأنظمة وأداءها لتحقيق موثوقية أعلى.</li>
  </ul>
</div>
<hr/>
<div class="experience-item">
  <h3>مشرف صيانة محاكيات الطيران (د)</h3>
  <p><strong>قسم الخدمات الفنية في PSAA</strong> | يناير 2024 – يونيو 2024 | جدة</p>
  <ul>
    <li>إدارة فريق من الفنيين وتحسين جداول العمل واستعداد التدريب.</li>
    <li>ضمان الامتثال للمعايير التنظيمية ومعايير السلامة.</li>
    <li>تقديم تقارير استراتيجية وتحليلات تشغيلية.</li>
  </ul>
</div>
<hr/>
<div class="experience-item">
  <h3>فني محاكيات الطيران</h3>
  <p><strong>قسم الخدمات الفنية في PSAA</strong> | أبريل 2010 – ديسمبر 2013 | جدة</p>
  <ul>
    <li>صيانة وتحسين محاكيات الطيران لتوفير تدريب واقعي للطيارين.</li>
    <li>تهيئة الحواسيب المدمجة وترقية وحدات الإدخال/الإخراج.</li>
    <li>تركيب، معايرة وتعديل لوحات العدادات، الأنظمة البصرية ومنصات الحركة.</li>
    <li>تحسين وقت التشغيل وتخصيص الأنظمة لتلبية احتياجات التدريب الخاصة.</li>
  </ul>
</div>`,
        period: "",
        description: ""
      },
      courses: {
        title: "الدورات والتدريبات",
        events: [
          "أكثر من 1000 ساعة تدريب فني من Canadian Aviation Electronics, L3Harris, وCollins Aerospace.",
          "دورة PMP",
          "الإلكترونيات المتقدمة",
          "أنظمة الواجهات",
          "الحركة الكهروميكانيكية والتحكم",
          "شبكات الحاسوب",
          "بايثون لعلوم البيانات والذكاء الاصطناعي"
        ]
      },
      footer: {
        text: "&copy; 2025 أديب القحطاني. جميع الحقوق محفوظة.",
        linkedin: "LinkedIn",
        github: "GitHub"
      }
    }
  };

  let currentLang = localStorage.getItem("language") || "en";
  const initialVisibleCount = 6;
  let projectsExpanded = false;

  // Helper: Retrieve nested translation by key
  const getNestedTranslation = (obj, key) =>
    key.split('.').reduce((o, i) => (o ? o[i] : null), obj);

  // Update page translations and document language/direction
  const translatePage = lang => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = getNestedTranslation(translations[lang], key);
      if (translation) el.innerHTML = translation;
    });
    document.documentElement.lang = lang;
    document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };

  // Render Education List
  const renderEducationList = lang => {
    const ul = document.getElementById('education-list');
    ul.innerHTML = "";
    translations[lang].about.educationList.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      ul.appendChild(li);
    });
  };

  // Render Projects Grid
  const renderProjects = lang => {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = "";
    const projects = translations[lang].projects.projectCards;
    projects.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-category', project.category);
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p><em>${project.subtitle}</em></p>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies}</p>
      `;
      if (!projectsExpanded && index >= initialVisibleCount) {
        card.classList.add("hidden");
      }
      grid.appendChild(card);
    });
    const toggleBtn = document.getElementById('toggle-projects');
    if (projects.length <= initialVisibleCount) {
      toggleBtn.style.display = 'none';
    } else {
      toggleBtn.style.display = 'block';
      toggleBtn.innerHTML = projectsExpanded 
        ? getNestedTranslation(translations[currentLang], 'projects.showLess')
        : getNestedTranslation(translations[currentLang], 'projects.showMore');
    }
  };

  // Render Courses List
  const renderCourses = lang => {
    const ul = document.getElementById('courses-list');
    ul.innerHTML = "";
    translations[lang].courses.events.forEach(course => {
      const li = document.createElement('li');
      li.innerHTML = course;
      ul.appendChild(li);
    });
  };

  // Initialize Scroll Reveal via Intersection Observer
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });
    revealElements.forEach(el => observer.observe(el));
  };

  // Theme Toggle Function – switches between light and dark themes
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  };

  // Initialize Particle Animation for the hero section
  const initParticles = () => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const numberOfParticles = 150;
    const heroSection = document.getElementById('hero');

    const resizeCanvas = () => {
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    };

    resizeCanvas();
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 200);
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
      }
      draw() {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const alpha = 0.4 + Math.random() * 0.2;
        ctx.fillStyle = isDark
          ? `rgba(100,100,100,${alpha})`
          : `rgba(3,218,198,${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.vx = -this.vx;
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.vy = -this.vy;
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
      }
    }

    const initParticlesArray = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => particle.update());
      requestAnimationFrame(animateParticles);
    };

    initParticlesArray();
    animateParticles();
  };

  // Initialize Language & Render Content
  const initLanguage = () => {
    translatePage(currentLang);
    renderEducationList(currentLang);
    renderProjects(currentLang);
    renderCourses(currentLang);
    document.getElementById("toggle-lang").innerHTML = currentLang === 'en' ? "العربية" : "English";
  };

  // DOMContentLoaded – Initialize everything
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLanguage();
    initParticles();
    initScrollReveal();

    // Theme Toggle Button Event Listener
    document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);

    // Language Toggle Button
    document.getElementById("toggle-lang").addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      localStorage.setItem("language", currentLang);
      translatePage(currentLang);
      renderEducationList(currentLang);
      renderProjects(currentLang);
      renderCourses(currentLang);
      document.getElementById("toggle-lang").innerHTML = currentLang === 'en' ? "العربية" : "English";
    });

    // Project Filtering
    document.querySelectorAll('.filter-btn').forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.project-card').forEach(card => {
          card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? "block" : "none";
        });
      });
    });

    // Toggle Projects Expansion/Collapse
    document.getElementById('toggle-projects').addEventListener('click', () => {
      projectsExpanded = !projectsExpanded;
      renderProjects(currentLang);
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
})();
