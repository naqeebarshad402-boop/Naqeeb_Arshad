/* ==========================================================================
   NAQEEB ARSHAD — MECHANICAL DESIGN PORTFOLIO
   All content below is sourced directly from the supplied PDF portfolio.
   ========================================================================== */

document.getElementById('year').textContent = new Date().getFullYear();

/* ==========================================================================
   DATA — sourced verbatim from the portfolio PDF
   ========================================================================== */

const SKILLS = [
  'SolidWorks','PTC Creo','AutoCAD','ANSYS Basics','CNC Programming (G/M Code)',
  'Structural Analysis','Fabrication','Prototype Development',
  'Engineering Drawings','Mechanical Assemblies','Project Management'
];

// 05 — Professional SolidWorks projects (Tech Valley, Islamabad)
const PRO_PROJECTS = [
  {
    badge: '01 / SOLIDWORKS',
    title: 'Tank Barrel Cleaner — Assembly Design',
    desc: 'Rotary cleaning of internal tank-barrel surfaces.',
    tags: ['SolidWorks','Assembly Design'],
    context: 'Design Engineer | Tech Valley, Islamabad',
    image: 'assets/projects/tank-barrel-cleaner.jpg',
    purpose: 'Rotary cleaning of internal tank-barrel surfaces.',
    designWork: 'Designed the cylindrical housing, internal drive gear train, and top mounting flange with bolt hole pattern.'
  },
  {
    badge: '02 / SOLIDWORKS',
    title: 'Drone Locking System — Mechanism Design',
    desc: 'Secure a drone payload in position.',
    tags: ['SolidWorks','Mechanism Design'],
    context: 'Design Engineer | Tech Valley, Islamabad',
    image: 'assets/projects/drone-locking-system.jpg',
    purpose: 'Secure a drone payload in position.',
    designWork: 'Designed the locking arms, guide pin, compression spring assembly, and mounting flange.'
  },
  {
    badge: '03 / SOLIDWORKS',
    title: 'Drone Launcher — Multi-Cell Deployment Rack',
    desc: 'Sequential deployment from a modular multi-cell frame.',
    tags: ['SolidWorks','Deployment System'],
    context: 'Design Engineer | Tech Valley, Islamabad',
    image: 'assets/projects/drone-launcher-rack.jpg',
    purpose: 'Sequential deployment from a modular multi-cell frame.',
    designWork: 'Designed the deployment station grid and sliding drive mechanism for sequential drone release.'
  },
  {
    badge: '04 / SOLIDWORKS',
    title: 'Folding Stair & Platform Mechanism — Vehicle-Mounted Assembly',
    desc: 'Vehicle mounted folding access system.',
    tags: ['SolidWorks','Engineering Drawings','BOM'],
    context: 'Design Engineer | Tech Valley, Islamabad',
    image: 'assets/projects/folding-stair-drawing.jpg',
    purpose: 'Vehicle mounted folding access system.',
    designWork: 'Prepared the mechanism, supports, locks, views, BOM, tolerance notes, and fabrication details.'
  },
  {
    badge: '05 / SOLIDWORKS',
    title: 'Mine-Fencing Rig — Truck-Mounted Assembly',
    desc: 'Mechanized fence-laying system replacing manual minefield perimeter marking.',
    tags: ['SolidWorks','Truck-Mounted System'],
    context: 'Design Engineer | Tech Valley, Islamabad',
    image: 'assets/projects/mine-fencing-rig.jpg',
    purpose: 'Mechanized fence-laying system replacing manual minefield perimeter marking.',
    designWork: 'Designed the full truck-mounted assembly integrating storage racks, fence-roll feed reels, and the rear picket driving rail.',
    note: 'Truck-mounted mechanized system for automated perimeter fence installation around army minefields.'
  },
  {
    badge: '06 / SOLIDWORKS',
    title: 'Automatic Hammer & Rail Mechanism — Fence-Post Driver',
    desc: 'Automated picket-driving unit that replaces manual hammering in the field.',
    tags: ['SolidWorks','Vehicle-Mounted','Actuation'],
    context: 'Design Engineer | Tech Valley, Islamabad',
    image: 'assets/projects/hammer-rail-mechanism.jpg',
    purpose: 'Automated picket-driving unit that replaces manual hammering in the field.',
    designWork: 'Designed the hydraulic hammer, guide rail, and actuator-pin linkage that drive fence posts into the ground. The system was designed as a vehicle-mounted mechanical system intended to automate fence-post installation using a hammer mechanism instead of performing the installation manually.',
    note: 'Part of the truck-mounted mechanized system for automated perimeter fence installation around army minefields.'
  }
];

// 06 — SolidWorks component & assembly design work (NUST internship + AFSD FYP)
const SW_PROJECTS = [
  {
    badge: 'SOLIDWORKS COMPONENT DESIGN',
    title: 'Housing Design',
    desc: 'Head housing with motor mount interface, and bolt-hole pattern.',
    tags: ['SolidWorks','Component Design'],
    context: 'NUST College of EME | Internship',
    image: 'assets/projects/housing-design.png',
    purpose: 'Head housing component for a motor-driven assembly.',
    designWork: 'Head housing with motor mount interface, and bolt-hole pattern.'
  },
  {
    badge: 'SOLIDWORKS ASSEMBLY DESIGN',
    title: 'AFSD Machine Frame & Table Assembly Design',
    desc: 'Complete structural frame and worktable with motor mounting, linear guides, and base support.',
    tags: ['SolidWorks','Assembly Design'],
    context: 'HITEC University Taxila | Final Year Project',
    image: 'assets/projects/afsd-frame.png',
    purpose: 'Structural frame and worktable for the AFSD final-year project machine.',
    designWork: 'Complete structural frame and worktable with motor mounting, linear guides, and base support.'
  },
  {
    badge: 'SOLIDWORKS POWER TRANSMISSION',
    title: 'Bearing & Pulley Housing Design',
    desc: 'Bearing and pulley housing assembly sized to standard bearing tolerances.',
    tags: ['SolidWorks','Power Transmission'],
    context: 'NUST College of EME | Internship',
    image: 'assets/projects/bearing-pulley-housing.png',
    purpose: 'Bearing and pulley housing for a power-transmission assembly.',
    designWork: 'Bearing and pulley housing assembly sized to standard bearing tolerances.'
  },
  {
    badge: 'SOLIDWORKS FIXTURE DESIGN',
    title: 'Bolted Clamp Plate Fixture',
    desc: 'Bolted clamp-plate fixture with an adjustable bolt hole pattern for workpiece alignment.',
    tags: ['SolidWorks','Fixture Design'],
    context: 'NUST College of EME | Internship',
    image: 'assets/projects/clamp-plate-fixture.png',
    purpose: 'Workpiece alignment during machining.',
    designWork: 'Bolted clamp-plate fixture with an adjustable bolt hole pattern for workpiece alignment.'
  },
  {
    badge: 'SOLIDWORKS UNIVERSITY PROJECT',
    title: 'Vertical Milling Machine Head',
    desc: 'Vertical milling machine head and related components modelled for FYP understanding.',
    tags: ['SolidWorks','Machine Head'],
    context: 'HITEC University Taxila | Final Year Project',
    image: 'assets/projects/milling-machine-head.png',
    purpose: 'Modelled to build understanding of vertical milling machine architecture for the final year project.',
    designWork: 'Vertical milling machine head and related components modelled for FYP understanding.'
  },
  {
    badge: 'SOLIDWORKS MACHINED COMPONENT',
    title: 'Machined Bracket Component',
    desc: 'Mounting bracket with stepped faces and a central bore, prepared for VMC machining.',
    tags: ['SolidWorks','CNC-Ready'],
    context: 'NUST College of EME | Internship',
    image: 'assets/projects/machined-bracket.png',
    purpose: 'Mounting bracket prepared for machining.',
    designWork: 'Mounting bracket with stepped faces and a central bore, prepared for VMC machining.'
  },
  {
    badge: 'SOLIDWORKS SEMESTER PROJECT',
    title: 'Tail Stock of Lathe Machine',
    desc: 'Manual hand tail stock assembly modelled for lathe machine operations.',
    tags: ['SolidWorks','Assembly Design'],
    context: 'HITEC University Taxila | Semester Project',
    image: 'assets/projects/tailstock-lathe.png',
    purpose: 'Manual hand tail stock assembly for lathe machine operations.',
    designWork: 'Manual hand tail stock assembly modelled for lathe machine operations.'
  }
];

// 07 — PTC Creo & CNC (NUST internship)
const CREO_PROJECTS = [
  {
    badge: '01 / NUST INTERNSHIP',
    title: 'Flange Coupling Assembly Design with Fastener Pattern',
    desc: 'Bolt-hole fastener pattern and shaft interface modelled in PTC Creo.',
    tags: ['PTC Creo','Assembly Design'],
    context: 'NUST College of EME | Internship',
    image: 'assets/projects/flange-coupling.png',
    purpose: 'Flange coupling for shaft-to-shaft power transmission.',
    designWork: 'Bolt-hole fastener pattern and shaft interface modelled in PTC Creo.'
  },
  {
    badge: '02 / NUST INTERNSHIP',
    title: 'Profile-Milled Component Part Design',
    desc: 'Stepped bores and a chamfered profile prepared for CNC machining.',
    tags: ['PTC Creo','Part Design'],
    context: 'NUST College of EME | Internship',
    image: 'assets/projects/profile-milled-part.png',
    purpose: 'Component geometry prepared for CNC machining.',
    designWork: 'Stepped bores and a chamfered profile prepared for CNC machining.'
  },
  {
    badge: '03 / NUST INTERNSHIP',
    title: 'CNC Manufacturing Setup — Volume Milling Operation',
    desc: 'Volume-milling setup and toolpath generation in PTC Creo Manufacturing.',
    tags: ['PTC Creo Manufacturing','Toolpath'],
    context: 'NUST College of EME | Internship',
    image: 'assets/projects/cnc-manufacturing-setup.png',
    purpose: 'Manufacturing setup for volume milling of a component.',
    designWork: 'Volume-milling setup and toolpath generation in PTC Creo Manufacturing.'
  },
  {
    badge: '04 / NUST INTERNSHIP',
    title: 'Generated NC Code (G-code / M-code)',
    desc: 'NC program generated from the PTC Creo manufacturing operation.',
    tags: ['CNC Programming','G/M Code'],
    context: 'NUST College of EME | Internship',
    image: 'assets/projects/cnc-gcode-screenshot.jpg',
    code: `%
(DATE:09/04/25 TIME:12:15:46)
G98G80G90G49G17
( / MFG0001)
T1M6
S200M3
G0X50.Y0.
G43Z5.H1
G81X50.Y0.Z-18.906R1.F100.
G80
G0Z5.
M5
T30M6
M30
%`,
    purpose: 'Machine-ready NC program derived from the manufacturing setup.',
    designWork: 'NC program generated from the PTC Creo manufacturing operation.'
  }
];

const ACADEMIC_PROJECTS = [
  {
    num: '01', tag: 'HEAT TRANSFER',
    title: 'Fins Design Verification under Forced Convection',
    desc: 'Verified circular and rectangular fin designs by comparing actual lengths with optimized theoretical lengths for maximum heat-transfer performance.',
    context: 'HITEC University Taxila'
  },
  {
    num: '02', tag: 'RENEWABLE ENERGY SYSTEM',
    title: 'Wind-Driven Water Pump',
    desc: 'Designed a wind-driven mechanical system for water pumping in agricultural areas using renewable energy instead of conventional power.',
    context: 'HITEC University Taxila'
  },
  {
    num: '03', tag: 'VIBRATION ANALYSIS',
    title: 'Power Transmission Mechanism for Vibration Analysis',
    desc: 'Designed and developed a mechanical power-transmission mechanism for demonstration in vibration-analysis experiments.',
    context: 'HITEC University Taxila'
  }
];

const EXPERIENCE = [
  {
    date: 'CURRENT', role: 'Design Engineer', org: 'Tech Valley, Islamabad',
    desc: 'SolidWorks design of drone-handling, rotary-cleaning, and vehicle-mounted systems.'
  },
  {
    date: 'JUL–SEP 2025', role: 'Intern', org: 'NUST College of EME (Robot Maker Lab)',
    desc: 'Eight-week internship in design, manufacturing, CNC cutting, and fabrication.'
  },
  {
    date: 'APR–JUN 2022', role: 'Assistant Engineer', org: 'Electrosolz, Islamabad',
    desc: 'Product design and manufacturing work involving 3D printers.'
  },
  {
    date: 'INDEPENDENT', role: 'Freelance CAD Designer', org: 'Remote',
    desc: 'AutoCAD house plans and SolidWorks mechanical components for client requirements.'
  }
];

const EDUCATION = [
  { date:'2022–2026', title:'BS Mechanical Engineering', org:'HITEC University Taxila | CGPA 3.18 / 4.00' },
  { date:'2019–2021', title:'DAE Mechanical', org:'KRL Institute of Technology Kahuta | 93%' }
];

const CERTIFICATIONS = [
  'NINVAST — 2nd International Additive Manufacturing and Vacuum Technology Conference',
  'NAVTTC — Six-month AutoCAD Diploma (2022)',
  'Technical Head — Robo Fiesta 8.0 | Two-time HI-Robo Tec paper-plane winner',
  'Letter of Appreciation — 11th Open House 2025, HITEC University Taxila'
];

/* ==========================================================================
   RENDERERS
   ========================================================================== */

function renderSkills(){
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map((s,i) => `
    <div class="skill-cell">
      <span class="skill-index">${String(i+1).padStart(2,'0')}</span>
      <span class="skill-name">${s}</span>
    </div>`).join('');
}

function projectCardHTML(p, idx){
  const mediaHTML = p.image
    ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
    : `<div class="modal-code" style="margin:20px;height:calc(100% - 40px);overflow:auto;">${p.code}</div>`;
  return `
    <article class="project-card reveal" data-idx="${idx}" tabindex="0" role="button" aria-label="View details: ${p.title}">
      <div class="project-card-media">
        <span class="project-card-badge">${p.badge}</span>
        ${mediaHTML}
        <span class="viewport-marks"><span class="vm-tl"></span><span class="vm-tr"></span><span class="vm-bl"></span><span class="vm-br"></span></span>
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-desc">${p.desc}</p>
        <div class="project-card-meta">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="project-card-footer">
          <span class="project-card-context">${p.context}</span>
          <span class="view-link">View Project</span>
        </div>
      </div>
    </article>`;
}

function renderProjectGrid(containerId, list, dataset){
  const grid = document.getElementById(containerId);
  grid.innerHTML = list.map((p,i) => projectCardHTML(p,i)).join('');
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(dataset[card.dataset.idx]));
    card.addEventListener('keypress', (e) => { if(e.key === 'Enter') openModal(dataset[card.dataset.idx]); });
  });
}

function renderAcademic(){
  const grid = document.getElementById('academicGrid');
  grid.innerHTML = ACADEMIC_PROJECTS.map(a => `
    <div class="academic-card">
      <span class="academic-num">${a.num}</span>
      <p class="academic-tag">${a.tag}</p>
      <h4>${a.title}</h4>
      <p>${a.desc}</p>
      <span class="spec-value">${a.context}</span>
    </div>`).join('');
}

function renderExperience(){
  const container = document.getElementById('experienceTimeline');
  const items = EXPERIENCE.map(e => `
    <div class="timeline-item">
      <span class="timeline-date">${e.date}</span>
      <div>
        <div class="timeline-role">${e.role}</div>
        <div class="timeline-org">${e.org}</div>
        <p class="timeline-desc">${e.desc}</p>
      </div>
    </div>`).join('');
  container.insertAdjacentHTML('beforeend', items);
}

function renderEducation(){
  const container = document.getElementById('educationList');
  container.innerHTML = EDUCATION.map(e => `
    <div class="edu-item">
      <span class="edu-date">${e.date}</span>
      <div class="edu-title">${e.title}</div>
      <div class="edu-org">${e.org}</div>
    </div>`).join('');
}

function renderCertifications(){
  const container = document.getElementById('certList');
  container.innerHTML = CERTIFICATIONS.map(c => `<li>${c}</li>`).join('');
}

/* ==========================================================================
   MODAL
   ========================================================================== */

const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(p){
  const mediaHTML = p.image
    ? `<div class="modal-media"><img src="${p.image}" alt="${p.title}"></div>`
    : '';
  const codeHTML = p.code ? `<div class="modal-field" style="grid-column:1/-1;"><span class="spec-label">Generated NC Code</span><div class="modal-code">${p.code}</div></div>` : '';
  const noteHTML = p.note ? `<div class="modal-field" style="grid-column:1/-1;"><span class="spec-label">Project Context Note</span><p>${p.note}</p></div>` : '';

  modalBody.innerHTML = `
    ${mediaHTML}
    <div class="modal-content">
      <span class="modal-badge">${p.badge}</span>
      <h3 class="modal-title">${p.title}</h3>
      <div class="modal-grid">
        <div class="modal-field">
          <span class="spec-label">Purpose</span>
          <p>${p.purpose}</p>
        </div>
        <div class="modal-field">
          <span class="spec-label">Design Work</span>
          <p>${p.designWork}</p>
        </div>
        <div class="modal-field">
          <span class="spec-label">Software / Technology</span>
          <p>${p.tags.join(', ')}</p>
        </div>
        <div class="modal-field">
          <span class="spec-label">Project Context</span>
          <p>${p.context}</p>
        </div>
        ${codeHTML}
        ${noteHTML}
      </div>
    </div>`;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

/* ==========================================================================
   NAVIGATION — scroll state, active link, mobile menu
   ========================================================================== */

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive:true });

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('mobile-open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

document.querySelectorAll('[data-nav]').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    hamburger.classList.remove('open');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link[data-nav]');

function updateActiveNav(){
  let current = '';
  const scrollPos = window.scrollY + 140;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop) current = sec.id;
  });
  navItems.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', updateActiveNav, { passive:true });

/* ==========================================================================
   BACK TO TOP
   ========================================================================== */

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 700);
}, { passive:true });
backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* ==========================================================================
   SCROLL REVEAL
   ========================================================================== */

function initReveal(){
  const targets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
  targets.forEach(t => observer.observe(t));
}

/* ==========================================================================
   INIT
   ========================================================================== */

renderSkills();
renderProjectGrid('proProjectsGrid', PRO_PROJECTS, PRO_PROJECTS);
renderProjectGrid('swProjectsGrid', SW_PROJECTS, SW_PROJECTS);
renderProjectGrid('creoGrid', CREO_PROJECTS, CREO_PROJECTS);
renderAcademic();
renderExperience();
renderEducation();
renderCertifications();
initReveal();
updateActiveNav();
