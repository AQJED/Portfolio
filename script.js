/* style.css */

/* Reset & Global Styles */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  background: var(--bg-color);
  color: var(--text-color);
  transition: background 0.3s, color 0.3s;
}

/* CSS Variables for Bright (Light) Theme */
:root {
  --bg-color: #f7f7f7;
  --text-color: #222;
  --primary-color: #03dac6;
  --secondary-color: #cf6679;
  --card-bg: rgba(255, 255, 255, 0.85);
  --nav-bg: rgba(3,218,198,0.3);
  --cta-text: #222;
  --hero-bg: url('microcontroller.jpg') no-repeat center center;
  --animation-duration: 1s;
  --animation-ease: ease-out;
  --glass-blur: 10px;
}

/* Dark Theme Overrides */
[data-theme="dark"] {
  --bg-color: #121212;
  --text-color: #e0e0e0;
  --card-bg: rgba(30, 30, 30, 0.9);
  --nav-bg: rgba(31, 31, 31, 0.9);
  --cta-text: #fff;
  --hero-bg: linear-gradient(45deg, #181818, #282828);
}

/* Focus Styles */
a:focus,
button:focus {
  outline: 3px solid var(--primary-color);
  outline-offset: 2px;
}

/* Glassmorphism Utility Class */
.glass {
  background: var(--card-bg);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px 0;
}

/* Bubbles for About Me & Achievements */
.bubble {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  margin-bottom: 20px;
}

.edu-bubble {
  background: var(--card-bg);
  padding: 15px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  margin-bottom: 15px;
}

.achievements-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.achievement-bubble {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  flex: 1;
  min-width: 300px;
  margin-bottom: 20px;
}

/* HERO SECTION */
#hero {
  position: relative;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--hero-bg);
  background-size: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  z-index: 1;
}

[data-theme="dark"] .hero-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px;
}

/* Hero text styles */
[data-theme="light"] .hero-content h1 {
  font-size: 4rem;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
  margin-bottom: 10px;
}

[data-theme="dark"] .hero-content h1 {
  font-size: 4rem;
  color: #e0e0e0;
  margin-bottom: 10px;
}

/* Hero Subtitle */
.hero-subtitle {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 10px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
}

[data-theme="light"] .hero-content p {
  font-size: 1.5rem;
  color: #f0f0f0;
  margin-bottom: 30px;
}

[data-theme="dark"] .hero-content p {
  font-size: 1.5rem;
  color: #ccc;
  margin-bottom: 30px;
}

.hero-buttons a {
  display: inline-block;
  padding: 14px 24px;
  border-radius: 8px;
  text-decoration: none;
  margin: 0 10px;
  background: var(--primary-color);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.hero-buttons a:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

/* Particle Canvas (behind hero content) */
#particle-canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: transparent;
}

/* Navigation */
#navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--nav-bg);
  padding: 10px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

#navbar ul li a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 600;
  transition: color 0.3s;
}

#navbar ul li a:hover {
  color: var(--primary-color);
}

.toggle-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

#theme-toggle-btn {
  width: 40px;
  height: 20px;
  background: var(--secondary-color);
  border: none;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
}

#theme-toggle-btn::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background: var(--bg-color);
  border-radius: 50%;
  top: 1px;
  left: 1px;
  transition: transform 0.3s;
}

[data-theme="dark"] #theme-toggle-btn {
  background: var(--primary-color);
}

[data-theme="dark"] #theme-toggle-btn::after {
  transform: translateX(20px);
}

#toggle-lang {
  padding: 12px 16px;
  background: var(--primary-color);
  color: var(--cta-text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

#toggle-lang:hover {
  background: var(--secondary-color);
}

/* Main Content */
main {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Section Styles */
section {
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s, transform 0.6s;
}

section.in-view {
  opacity: 1;
  transform: translateY(0);
}

.section-inner {
  padding: 40px 30px;
  border-radius: 16px;
}

/* About & Other Sections */
.about-content {
  display: grid;
  gap: 30px;
}

.about-section h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.about-section p,
#education-list {
  font-size: 1rem;
  line-height: 1.5;
}

/* Projects Section */
.project-filters {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.filter-btn {
  padding: 12px 16px;
  border: none;
  background: var(--primary-color);
  color: #000;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  font-size: 1.2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInSlide var(--animation-duration) ease-out forwards;
  animation-delay: 0.3s;
}

.filter-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

/* Projects Grid */
.projects-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.project-card {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transition: transform 0.3s, opacity 0.3s;
}

.project-card.hidden {
  display: none;
}

.project-card:hover {
  transform: translateY(-5px);
}

.toggle-projects-btn {
  display: block;
  margin: 30px auto 0;
  padding: 12px 20px;
  background: var(--primary-color);
  color: var(--cta-text);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
}

.toggle-projects-btn:hover {
  background: var(--secondary-color);
  transform: scale(1.05);
}

/* Separator before Tech Stack */
.tech-stack-separator {
  border: none;
  border-top: 1px solid var(--primary-color);
  margin: 10px 0;
}

/* Courses Section */
#courses-list {
  list-style: disc;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 1rem;
}

/* Solid (dark) bullets for Training & Courses */
#courses-list li::marker {
  color: #000;
}

/* Experience Section Styles */
.experience-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.experience-item {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
}

.experience-header h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.experience-duration {
  font-size: 0.9rem;
  color: var(--text-color);
}

.experience-meta {
  font-size: 0.9rem;
  color: var(--text-color);
  margin-bottom: 10px;
}

.experience-meta span {
  margin-right: 10px;
}

.experience-details {
  list-style: disc;
  margin-left: 20px;
  font-size: 1rem;
  line-height: 1.5;
}

/* Footer */
footer {
  text-align: center;
  padding: 20px;
  background: var(--nav-bg);
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: 60px;
}

.footer-links a {
  margin: 0 15px;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 600;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--secondary-color);
}

/* Keyframe Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Responsive Styles */
@media (max-width: 768px) {
  #navbar {
    flex-direction: column;
  }
  #toggle-lang {
    margin-top: 10px;
  }
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .hero-content p {
    font-size: 1.2rem;
  }
  .achievements-container {
    flex-direction: column;
  }
}

/* Animate hero content elements on load */
.hero-content h1,
.hero-content p,
.hero-buttons a {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInSlide var(--animation-duration) ease-out forwards;
}

.hero-content h1 {
  animation-delay: 0.5s;
}

.hero-content p {
  animation-delay: 0.7s;
}

.hero-buttons a {
  animation-delay: 0.9s;
}

@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Increase font sizes for Arabic (RTL) texts for better readability */
body[dir="rtl"] {
  font-size: 1.1rem;
}

body[dir="rtl"] .hero-content h1 {
  font-size: 4.5rem;
}

body[dir="rtl"] .hero-content p {
  font-size: 1.7rem;
}

body[dir="rtl"] h2 {
  font-size: 2.5rem;
}

body[dir="rtl"] h3 {
  font-size: 2rem;
}

body[dir="rtl"] p,
body[dir="rtl"] li,
body[dir="rtl"] a {
  font-size: 1.2rem;
}
