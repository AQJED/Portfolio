(function ($) {
    "use strict";

    // Global variable to hold the Typed instance
    var typed;

    // Loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Initiate WOW.js
    new WOW().init();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

    // Smooth scrolling on navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Function to initialize or reinitialize the Typed instance
    function initTyped() {
        if (typed) {
            typed.destroy();
        }
        if ($('.hero .hero-text h2').length === 1) {
            var heroSubtitleText = $('#hero_subtitle').text();
            var newStrings;
            if (currentLang === 'ar') {
                newStrings = heroSubtitleText.split('، ');
            } else {
                newStrings = heroSubtitleText.split(', ');
            }
            typed = new Typed('.hero .hero-text h2', {
                strings: newStrings,
                typeSpeed: 100,
                backSpeed: 20,
                smartBackspace: false,
                loop: true
            });
        }
    }

    // Skills waypoint
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 }
        }
    });

    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    // --- Language Toggle Code ---
    var currentLang = 'en';
    var translations = {
        "en": {
            "nav_home": "Home",
            "nav_about": "About",
            "nav_experience": "Experience",
            "nav_portfolio": "Portfolio",
            "nav_skills": "Skills",
            "nav_endorsements": "Endorsements",
            "hero_prefix": "I'm",
            "hero_title": "Adeeb Alqahtani",
            "hero_subtitle": "Software Integration Engineer, Embedded Systems Developer, Data Scientist",
            "btn_hire": "Hire Me",
            "btn_resume": "My Resume",

            "about_title": "About Me",
            "about_subtitle": "10+ Years Experience",
            "about_text": "I'm a Software Integration Engineer specializing in software development, embedded systems, and AI, with a B.S. in Computer Engineering and a Deep Learning Nanodegree from MISK Foundation.\nWith over a decade of experience, I’ve worked across roles from simulator technician to engineer and supervisor, gaining expertise in middleware development, real-time data integration, and system optimization. \nMy expertise includes microcontroller programming, circuit design, and hardware-software integration.",
            "exp_header": "My Resume",
            "exp_subheader": "Professional & Academic Career",
            "exp_item1_title": "Software Integration Engineer",
            "exp_item1_company": "Rheinmetall Arabia, Riyadh, Saudi Arabia",
            "exp_item1_desc": "Software Integration Engineer | Skills: Middleware Development · Real-Time Data Processing · System Integration · CIGI Protocol · DIS Protocol · Embedded Systems · Software Optimization",
            "exp_item2_title": "Flight Simulator Maintenance Supervisor(D)",
            "exp_item2_company": "Saudia Academy, Jeddah, Saudi Arabia",
            "exp_item2_desc": "I worked as a Maintenance Supervisor - Technical Service Department. | Skills: Team Leadership · Operations Management · Scheduling & Training Readiness · System Performance Optimization · Regulatory Compliance",
            "exp_item3_title": "Flight Simulator Engineer",
            "exp_item3_company": "Saudia Academy, Jeddah, Saudi Arabia",
            "exp_item3_desc": "I worked as a Flight Simulator Engineer. | Skills: System Integration · Real-Time Data Processing · Hardware & Software Upgrades · Simulator Certification · FAA/EASA/GACA Compliance",
            "exp_item4_title": "Deep Learning (AI) Nanodegree",
            "exp_item4_company": "MISK Foundation",
            "exp_item4_desc": "Intensive bootcamp with hands-on experience in 6 artificial intelligence projects. | Skills: Neural Networks · Deep Learning · Computer Vision · Natural Language Processing · Model Training & Optimization",
            "exp_item5_title": "B.S. in Computer Engineering",
            "exp_item5_company": "California State University, San Bernardino",
            "exp_item5_desc": "Focused in high performance and embedded systems. | Skills: Embedded Systems · Microcontrollers · Digital Circuit Design · FPGA Programming · Software Development · C/C++ · Verilog",
            "exp_item6_title": "Full Flight Simulator Technician",
            "exp_item6_company": "Saudia Academy, Jeddah, Saudi Arabia",
            "exp_item6_desc": "I worked as maintenance technician. | Skills: Flight Simulator Maintenance · Hardware Troubleshooting · System Calibration · Avionics Systems · Instrumentation & Control · Motion & Visual Systems",
            "exp_item7_title": "Simulator Maintenance & English Program",
            "exp_item7_company": "CAE, Montreal, Canada",
            "exp_item7_desc": "One Year Intensive Program. | Skills: Flight Simulator Maintenance · Hardware Troubleshooting · System Calibration · Flight Simulator Systems",
            "exp_item8_title": "Associate Degree in Electrical and Electronics",
            "exp_item8_company": "Yanbu Industrial College",
            "exp_item8_desc": "Majored in instrumentation and control system. | Skills: Instrumentation & Control · Circuit Design · Electrical Troubleshooting · PLC Programming · Industrial Automation",
            "portfolio_header": "My Portfolio",
            "portfolio_subheader": "Projects",
            "portfolio_item1": "CGF to IG Middleware",
            "portfolio_item2": "5 DOF Robotic Arm Object Detection (Embedded System)",
            "portfolio_item3": "Facial Recognition App",
            "portfolio_item4": "Host to IG Middleware",
            "portfolio_item5": "Parking Occupancy(FPGA)",
            "portfolio_item6": "Light Control and Path Prediction (Embedded System)",
            "skills_header": "Skills",
            "skills_subheader": "Technical Proficiencies",
            "testimonial1_text": "Adeeb is a brilliant innovator and a driven engineer. His dedication and technical skills make him an invaluable asset to any team.",
            "testimonial1_name": "Ali Yamani",
            "testimonial1_title": "Exhibits Maintenance Manager | Riyadh",
            "testimonial2_text": "Adeeb’s expertise extends beyond technical proficiency; he possesses strong communication skills and a collaborative mindset. He has consistently demonstrated his ability to work effectively with cross-functional teams, ensuring seamless coordination and successful project outcomes. His proactive attitude and willingness to share knowledge have contributed significantly to the professional growth of those around him.",
            "testimonial2_name": "Khalid Alotaibi",
            "testimonial2_title": "Flight Simulator Engineering Manager | Jeddah",
            "testimonial3_text": "Review3...",
            "testimonial3_name": "Soon",
            "testimonial3_title": "Software Engineer | Riyadh",
            "footer_name": "Adeeb Alqahtani",
            "footer_location": "Riyadh, Saudi Arabia"
        },
        "ar": {
            "nav_home": "الرئيسية",
            "nav_about": "من أنا",
            "nav_experience": "السيرة الذاتية",
            "nav_portfolio": "المشاريع",
            "nav_skills": "المهارات",
            "nav_endorsements": "التوصيات",
            "hero_prefix": "أنا",
            "hero_title": "أديب القحطاني",
			"hero_subtitle": "مهندس تكامل برمجيات، مطور أنظمة مضمنة، عالم بيانات",
            "btn_hire": "وظّفني",
            "btn_resume": "السيرة الذاتية",
            "about_title": "من أنا",
            "about_subtitle": "أكثر من 10 سنوات خبرة",
            "about_text": "مهندس تكامل برمجيات شغوف بتطوير البرمجيات، الأنظمة المدمجة، والذكاء الاصطناعي. أحمل بكالوريوس في هندسة الحاسب مع تخصص في الأنظمة عالية الأداء والمضمنة، وشهادة نانو في التعلم العميق من مؤسسة مسك. \nلدي أكثر من 10 سنوات من الخبرة، بدءًا من فني محاكاة إلى مهندس ومشرف، حيث طورت مهارات في تطوير البرمجيات الوسيطة، تكامل البيانات، وتحسين أداء الأنظمة. أركز على ربط الحواسيب المضيفة بمولدات الصور في محاكيات الطيران، إلى جانب برمجة المتحكمات الدقيقة وتطوير البرامج. \nأتقن عدة لغات برمجة للعمل في الأنظمة المدمجة، المحاكاة، والذكاء الاصطناعي، وأسعى دائمًا لتقديم حلول تقنية متطورة تعزز الكفاءة والموثوقية.\n",
            "exp_header": "السيرة الذاتية",
            "exp_subheader": "المسيرة المهنية والأكاديمية",
            "exp_item1_title": "مهندس تكامل برمجي",
            "exp_item1_company": "رينمتال العربية، الرياض، المملكة العربية السعودية",
            "exp_item1_desc": "مهندس تكامل برمجي  | المهارات:  تطوير البرمجيات الوسيطة · معالجة بيانات المحاكيات · تكامل الأنظمة  ·الأنظمة المضمنة · تحسين البرمجيات",
            "exp_item2_title": "مشرف صيانة محاكيات الطيران (م)",
            "exp_item2_company": "أكاديمية السعودية، جدة، المملكة العربية السعودية",
            "exp_item2_desc": "عملت كمشرف صيانة - قسم الخدمة الفنية | المهارات :  قيادة الفريق · إدارة العمليات · تحسين أداء الأنظمة ",
            "exp_item3_title": "مهندس محاكيات الطيران",
            "exp_item3_company": "أكاديمية السعودية، جدة، المملكة العربية السعودية",
            "exp_item3_desc": "عملت كمهندس محاكيات الطيران. | المهارات: تكامل الأنظمة · ترقية الأجهزة والبرمجيات · الامتثال لمعايير الهيئة العامة للطيران المدني, وكالة سلامة الطيران الأوروبية و إدارة الطيران الفيدرالية الامريكية",
            "exp_item4_title": "شهادة نانو في التعلم العميق (الذكاء الاصطناعي)",
            "exp_item4_company": "مؤسسة مسك",
            "exp_item4_desc": "معسكر تدريبي مكثف مع خبرة عملية في 6 مشاريع ذكاء اصطناعي. | المهارات: الشبكات العصبية · التعلم العميق · رؤية الحاسوب · معالجة اللغة الطبيعية · تدريب النماذج وتحسينها",
            "exp_item5_title": "بكالوريوس في هندسة الحاسب الالي",
            "exp_item5_company": "جامعة ولاية كاليفورنيا، سان برناردينو",
            "exp_item5_desc": "تخصصت في الأنظمة عالية الأداء والأنظمة المضمنة. | المهارات: الأنظمة المضمنة · المتحكمات الدقيقة · تصميم الدوائر الرقمية · برمجة  · تطوير البرمجيات · ",
            "exp_item6_title": "فني محاكيات الطيران ",
            "exp_item6_company": "أكاديمية السعودية، جدة، المملكة العربية السعودية",
            "exp_item6_desc": "عملت كفني صيانة. | المهارات: صيانة محاكيات الطيران · استكشاف أخطاء الأجهزة وإصلاحها · معايرة الأنظمة · أنظمة الطيران · القياس والتحكم · الأنظمة الحركية والبصرية",
            "exp_item7_title": "برنامج صيانة المحاكيات واللغة الإنجليزية",
            "exp_item7_company": "CAE، مونتريال، كندا",
            "exp_item7_desc": "برنامج مكثف لمدة عام. | المهارات: صيانة محاكيات الطيران · استكشاف أخطاء الأجهزة وإصلاحها · معايرة الأنظمة · أنظمة الطيران · القياس والتحكم · الأنظمة الحركية والبصرية",
            "exp_item8_title": "شهادة جامعية متوسطة في الكهرباء والإلكترونيات",
            "exp_item8_company": "كلية ينبع الصناعية",
            "exp_item8_desc": "تخصصت في الالات الدقيقة و التحكم. | المهارات: القياس والتحكم · تصميم الدوائر الكهربائية وإصلاحها · الأتمتة الصناعية بي ال سي",
            "portfolio_header": "مشاريعي",
            "portfolio_subheader": "المشاريع",
            "portfolio_item1": "(CGF to IG) مشروع برمجيات وسيطة",
            "portfolio_item2":  "ذراع  آلي (نظام مضمن)",
            "portfolio_item3": "تطبيق التعرف على الوجوه",
            "portfolio_item4": "(Host to IG) مشروع برمجيات وسيطة",
            "portfolio_item5": "مواقف السيارات (نظام مضمن)",
            "portfolio_item6": "التحكم في الإضاءة وتوقع المسار (نظام مضمن)",
            "skills_header": "المهارات",
            "skills_subheader": "المهارات التقنية",
            "testimonial1_text": "Adeeb is a brilliant innovator and a driven engineer. His dedication and technical skills make him an invaluable asset to any team.",
            "testimonial1_name": "Ali Yamani",
            "testimonial1_title": "Exhibits Maintenance Manager | Riyadh",
            "testimonial2_text": "Adeeb’s expertise extends beyond technical proficiency; he possesses strong communication skills and a collaborative mindset. He has consistently demonstrated his ability to work effectively with cross-functional teams, ensuring seamless coordination and successful project outcomes. His proactive attitude and willingness to share knowledge have contributed significantly to the professional growth of those around him.",
            "testimonial2_name": "Khalid Alotaibi",
            "testimonial2_title": "Flight Simulator Engineering Manager | Jeddah",
            "testimonial3_text": "Review3...",
            "testimonial3_name": "Soon",
            "testimonial3_title": "مهندس برمجيات | الرياض",
            "footer_name": "أديب القحطاني",
            "footer_location": "الرياض، المملكة العربية السعودية"
        }
    };

    function updateLanguage() {
        // Navigation text update
        $('#nav_home').text(translations[currentLang].nav_home);
        $('#nav_about').text(translations[currentLang].nav_about);
        $('#nav_experience').text(translations[currentLang].nav_experience);
        $('#nav_portfolio').text(translations[currentLang].nav_portfolio);
        $('#nav_skills').text(translations[currentLang].nav_skills);
        $('#nav_endorsements').text(translations[currentLang].nav_endorsements);
        $('#btn_hire').text(translations[currentLang].btn_hire);
        $('#btn_resume').text(translations[currentLang].btn_resume);

        // Adjust navbar container alignment (keep nav items on the right for Arabic)
        if (currentLang === 'ar') {
            $('.navbar-nav').removeClass('ml-auto').addClass('mr-auto');
        } else {
            $('.navbar-nav').removeClass('mr-auto').addClass('ml-auto');
        }

        // Apply inline CSS for top navigation and hero sections
        if (currentLang === 'ar') {
            $('.navbar, .navbar-nav, .navbar-brand').css({
                'text-align': 'right',
                'direction': 'rtl'
            });
            $('.hero, .hero-text').css({
                'text-align': 'right',
                'direction': 'rtl'
            });
        } else {
            $('.navbar, .navbar-nav, .navbar-brand').css({
                'text-align': 'left',
                'direction': 'ltr'
            });
            $('.hero, .hero-text').css({
                'text-align': 'left',
                'direction': 'ltr'
            });
        }

        // Hero section text update
        $('#hero_prefix').text(translations[currentLang].hero_prefix);
        $('#hero_title').text(translations[currentLang].hero_title);
        $('#hero_subtitle').text(translations[currentLang].hero_subtitle);
        initTyped();

        // About section text update
        $('#about_title').text(translations[currentLang].about_title);
        $('#about_subtitle').text(translations[currentLang].about_subtitle);
        $('#about_text').html(translations[currentLang].about_text.replace(/\n/g, '<br><br>'));

        // Adjust About section header class to override HTML layout
        if (currentLang === 'ar') {
            $('.section-header').removeClass('text-left').addClass('text-right');
        } else {
            $('.section-header').removeClass('text-right').addClass('text-left');
        }

        // Experience section text update
        $('#exp_header').text(translations[currentLang].exp_header);
        $('#exp_subheader').text(translations[currentLang].exp_subheader);
        $('#exp_item1_title').text(translations[currentLang].exp_item1_title);
        $('#exp_item1_company').text(translations[currentLang].exp_item1_company);
        $('#exp_item1_desc').text(translations[currentLang].exp_item1_desc);
        $('#exp_item2_title').text(translations[currentLang].exp_item2_title);
        $('#exp_item2_company').text(translations[currentLang].exp_item2_company);
        $('#exp_item2_desc').text(translations[currentLang].exp_item2_desc);
        $('#exp_item3_title').text(translations[currentLang].exp_item3_title);
        $('#exp_item3_company').text(translations[currentLang].exp_item3_company);
        $('#exp_item3_desc').text(translations[currentLang].exp_item3_desc);
        $('#exp_item4_title').text(translations[currentLang].exp_item4_title);
        $('#exp_item4_company').text(translations[currentLang].exp_item4_company);
        $('#exp_item4_desc').text(translations[currentLang].exp_item4_desc);
        $('#exp_item5_title').text(translations[currentLang].exp_item5_title);
        $('#exp_item5_company').text(translations[currentLang].exp_item5_company);
        $('#exp_item5_desc').text(translations[currentLang].exp_item5_desc);
        $('#exp_item6_title').text(translations[currentLang].exp_item6_title);
        $('#exp_item6_company').text(translations[currentLang].exp_item6_company);
        $('#exp_item6_desc').text(translations[currentLang].exp_item6_desc);
        $('#exp_item7_title').text(translations[currentLang].exp_item7_title);
        $('#exp_item7_company').text(translations[currentLang].exp_item7_company);
        $('#exp_item7_desc').text(translations[currentLang].exp_item7_desc);
        $('#exp_item8_title').text(translations[currentLang].exp_item8_title);
        $('#exp_item8_company').text(translations[currentLang].exp_item8_company);
        $('#exp_item8_desc').text(translations[currentLang].exp_item8_desc);

        // Portfolio section text update
        $('#portfolio_header').text(translations[currentLang].portfolio_header);
        $('#portfolio_subheader').text(translations[currentLang].portfolio_subheader);
        $('#portfolio_item1 a').text(translations[currentLang].portfolio_item1);
        $('#portfolio_item2 a').text(translations[currentLang].portfolio_item2);
        $('#portfolio_item3 a').text(translations[currentLang].portfolio_item3);
        $('#portfolio_item4 a').text(translations[currentLang].portfolio_item4);
        $('#portfolio_item5 a').text(translations[currentLang].portfolio_item5);
        $('#portfolio_item6 a').text(translations[currentLang].portfolio_item6);

        // Skills section text update
        $('#skills_header').text(translations[currentLang].skills_header);
        $('#skills_subheader').text(translations[currentLang].skills_subheader);

        // Testimonials text update
        $('#testimonial1_text').text(translations[currentLang].testimonial1_text);
        $('#testimonial1_name').text(translations[currentLang].testimonial1_name);
        $('#testimonial1_title').text(translations[currentLang].testimonial1_title);
        $('#testimonial2_text').text(translations[currentLang].testimonial2_text);
        $('#testimonial2_name').text(translations[currentLang].testimonial2_name);
        $('#testimonial2_title').text(translations[currentLang].testimonial2_title);
        $('#testimonial3_text').text(translations[currentLang].testimonial3_text);
        $('#testimonial3_name').text(translations[currentLang].testimonial3_name);
        $('#testimonial3_title').text(translations[currentLang].testimonial3_title);

        // Footer text update
        $('#footer_name').text(translations[currentLang].footer_name);
        $('#footer_location').text(translations[currentLang].footer_location);

        // Apply inline CSS for About and Experience text fields (as before)
        if (currentLang === 'ar') {
            $('#about_title, #about_subtitle, #about_text, ' +
                '#exp_item1_title, #exp_item1_company, #exp_item1_desc, ' +
                '#exp_item2_title, #exp_item2_company, #exp_item2_desc, ' +
                '#exp_item3_title, #exp_item3_company, #exp_item3_desc, ' +
                '#exp_item4_title, #exp_item4_company, #exp_item4_desc, ' +
                '#exp_item5_title, #exp_item5_company, #exp_item5_desc, ' +
                '#exp_item6_title, #exp_item6_company, #exp_item6_desc, ' +
                '#exp_item7_title, #exp_item7_company, #exp_item7_desc, ' +
                '#exp_item8_title, #exp_item8_company, #exp_item8_desc'
            ).css({
                'text-align': 'right',
                'direction': 'rtl'
            });
        } else {
            $('#about_title, #about_subtitle, #about_text, ' +
                '#exp_item1_title, #exp_item1_company, #exp_item1_desc, ' +
                '#exp_item2_title, #exp_item2_company, #exp_item2_desc, ' +
                '#exp_item3_title, #exp_item3_company, #exp_item3_desc, ' +
                '#exp_item4_title, #exp_item4_company, #exp_item4_desc, ' +
                '#exp_item5_title, #exp_item5_company, #exp_item5_desc, ' +
                '#exp_item6_title, #exp_item6_company, #exp_item6_desc, ' +
                '#exp_item7_title, #exp_item7_company, #exp_item7_desc, ' +
                '#exp_item8_title, #exp_item8_company, #exp_item8_desc'
            ).css({
                'text-align': 'left',
                'direction': 'ltr'
            });
        }
    }

    // Language toggle event
    $('#lang-toggle').click(function () {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        updateLanguage();
        $('#lang-toggle').text(currentLang === 'ar' ? 'English' : 'عربي');
    });

    // Initial language setup
    updateLanguage();

})(jQuery);
