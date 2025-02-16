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
        ]
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
      }
    },
    ar: {
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
            title: "اكتشاف الأشياء لذراع روبوتية بخمس درجات حرية",
            subtitle: "مشروع شخصي",
            description: "نظام لاكتشاف موقع الجسم واتجاهه باستخدام معادلات هندسية لتوجيه ذراع روبوتية بخمس درجات حرية. باستخدام أشعة الليزر والمقاومات الضوئية فقط، يتم تحليل الظل ثنائي الأبعاد الناتج عن الجسم في منطقة الكشف عن أشعة الليزر، ثم تحديد موقع الجسم وزاوية ميلانه. بعد تحليل البيانات، يقوم النظام بحساب زوايا الدوران اللازمة للمفاصل والمقبض، مما يجعله نظامًا فعالًا للغاية.",
            technologies: "C++, البرمجة الكائنية، الإلكترونيات، تصميم الدوائر، الهندسة، الجبر الخطي",
            category: "personal"
          }
        ]
      }
    }
  };

  // Function to render projects
  const renderProjects = lang => {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = "";
    const projects = translations[lang].projects.projectCards;
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-category', project.category);
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p><em>${project.subtitle}</em></p>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies}</p>
      `;
      grid.appendChild(card);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderProjects(localStorage.getItem("language") || "en");
  });
})();
