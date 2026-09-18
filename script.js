const PROJECTS={
afsd:{title:"Friction-Based Metal Printing Machine (AFSD)",image:"assets/projects/afsd-fyp-machine-green.jpg",purpose:"Manual desktop Additive Friction Stir Deposition machine for AA6061 aluminium, completed at HITEC University Taxila.",design:"The complete mechanical design was developed in SolidWorks. Primary load-bearing components were checked through static structural and vibration analysis before fabrication.",details:"Complete SolidWorks assembly; static structural analysis; vibration and frequency analysis; successful AFSD deposition in Pakistan. Reported results: +4% hardness, +46.2% compression-strength improvement, first natural frequency 24.84 Hz.",context:"HITEC University Taxila | Final Year Project",gallery:["assets/projects/base-plate-stress.jpg","assets/projects/base-plate-fos.jpg","assets/projects/base-plate-modal.jpg","assets/projects/table-plate-stress.jpg","assets/projects/support-column-stress.jpg"]},
rotary:{title:"Rotary Cylindrical Cleaner — Assembly Design",image:"assets/projects/rotary-cylindrical-cleaner.jpg",purpose:"Rotary cleaning of internal cylindrical bore surfaces.",design:"Designed the cylindrical housing, internal drive gear train, and top mounting flange with bolt hole pattern.",details:"SolidWorks assembly design.",context:"Design Engineer | Tech Valley, Islamabad"},
"drone-lock":{title:"Drone Locking System — Mechanism Design",image:"assets/projects/drone-locking-system.jpg",purpose:"Secure a drone payload in position.",design:"Designed the locking arms, guide pin, compression spring assembly, and mounting flange.",details:"SolidWorks mechanism design.",context:"Design Engineer | Tech Valley, Islamabad"},
"drone-rack":{title:"Drone Deployment Rack — Multi-Cell System",image:"assets/projects/drone-deployment-rack.jpg",purpose:"Sequential deployment from a modular multi-cell frame.",design:"Designed the deployment station grid and sliding drive mechanism for sequential drone release.",details:"SolidWorks multi-cell system.",context:"Design Engineer | Tech Valley, Islamabad"},
stair:{title:"Folding Stair & Platform Mechanism — Vehicle-Mounted Assembly",image:"assets/projects/folding-stair-platform.jpg",purpose:"Vehicle mounted folding access system.",design:"Prepared the mechanism, supports, locks, views, BOM, tolerance notes, and fabrication details.",details:"SolidWorks vehicle-mounted assembly.",context:"Design Engineer | Tech Valley, Islamabad"},
fence:{title:"Vehicle-Mounted Automated Fence Installation System",image:"assets/projects/vehicle-fence-installation-system.jpg",purpose:"Vehicle-mounted mechanized system for automated perimeter fence installation. The picket-driving unit replaces manual hammering in the field.",design:"The portfolio describes a full vehicle-mounted assembly integrating storage racks, fence-roll feed reels, and the rear picket driving rail. It also describes an automatic hammer and rail mechanism comprising a hydraulic hammer, guide rail, and actuator-pin linkage that drive fence posts into the ground.",details:"Perimeter Fencing Rig — Vehicle-Mounted Assembly; Automatic Hammer & Rail Mechanism — Fence-Post Driver.",context:"Design Engineer | Tech Valley, Islamabad"},
radar:{title:"Radar Locking Mechanism",image:"assets/projects/radar-locking-mechanism.jpg",purpose:"Securely hold and position a drone payload using a mechanically actuated locking arrangement.",design:"Developed the locking mechanism assembly with locking arms, guide elements, spring-loaded components, and a mounting interface for reliable engagement and release.",details:"SolidWorks mechanism development.",context:"Design Engineer | Tech Valley, Islamabad"},
housing:{title:"Housing Design",image:"assets/projects/solidworks-housing.jpg",purpose:"SolidWorks component design.",design:"Head housing with motor mount interface, and bolt-hole pattern.",details:"Component design.",context:"NUST College of EME | Internship"},
"afsd-frame":{title:"AFSD Machine Frame & Table Assembly Design",image:"assets/projects/afsd-frame-table-assembly.jpg",purpose:"SolidWorks assembly design.",design:"Complete structural frame and worktable with motor mounting, linear guides, and base support.",details:"AFSD structural assembly.",context:"HITEC University Taxila | Final Year Project"},
bearing:{title:"Bearing & Pulley Housing Design",image:"assets/projects/bearing-pulley-housing.jpg",purpose:"SolidWorks power transmission design.",design:"Bearing and pulley housing assembly sized to standard bearing tolerances.",details:"Power transmission component.",context:"NUST College of EME | Internship"},
clamp:{title:"Bolted Clamp Plate Fixture",image:"assets/projects/bolted-clamp-fixture.jpg",purpose:"SolidWorks fixture design.",design:"Bolted clamp-plate fixture with an adjustable bolt hole pattern for workpiece alignment.",details:"Fixture design.",context:"NUST College of EME | Internship"},
milling:{title:"Vertical Milling Machine Head",image:"assets/projects/vertical-milling-machine-head.jpg",purpose:"SolidWorks university project.",design:"Vertical milling machine head and related components modelled for FYP understanding.",details:"Component modelling.",context:"HITEC University Taxila | Final Year Project"},
bracket:{title:"Machined Bracket Component",image:"assets/projects/machined-bracket.jpg",purpose:"SolidWorks machined component.",design:"Mounting bracket with stepped faces and a central bore, prepared for VMC machining.",details:"VMC machining preparation.",context:"NUST College of EME | Internship"},
tailstock:{title:"Tail Stock of Lathe Machine",image:"assets/projects/tail-stock-lathe.jpg",purpose:"SolidWorks semester project.",design:"Manual hand tail stock assembly modelled for lathe machine operations.",details:"Assembly modelling.",context:"HITEC University Taxila | Semester Project"},
flange:{title:"Flange Coupling Assembly Design with Fastener Pattern",image:"assets/projects/creo-flange-coupling.jpg",purpose:"PTC Creo assembly design.",design:"Bolt-hole fastener pattern and shaft interface modelled in PTC Creo.",details:"Model.",context:"NUST College of EME | Robot Maker Lab Internship"},
"profile-milled":{title:"Profile-Milled Component Part Design",image:"assets/projects/creo-profile-milled-part.jpg",purpose:"PTC Creo part design.",design:"Stepped bores and a chamfered profile prepared for CNC machining.",details:"Part design.",context:"NUST College of EME | Robot Maker Lab Internship"},
"cnc-setup":{title:"CNC Manufacturing Setup Volume Milling Operation",image:"assets/projects/creo-manufacturing-setup.jpg",purpose:"PTC Creo Manufacturing.",design:"Volume-milling setup and toolpath generation in PTC Creo Manufacturing.",details:"Toolpath generation.",context:"NUST College of EME | Robot Maker Lab Internship"},
gcode:{title:"Generated NC Code (G-code / M-code)",image:"assets/projects/cnc-gm-code.jpg",purpose:"CNC programming.",design:"NC program generated from the PTC Creo manufacturing operation.",details:"G-code / M-code.",context:"NUST College of EME | Robot Maker Lab Internship"}
};

// Show all projects continuously; no numbered pagination.
document.querySelectorAll(".project-card").forEach(card => card.hidden = false);
document.querySelectorAll(".pager").forEach(pager => pager.remove());

const modal=document.getElementById("projectModal"), modalContent=document.getElementById("modalContent");
document.querySelectorAll(".project-open").forEach(btn=>btn.addEventListener("click",()=>{
  const p=PROJECTS[btn.dataset.project]; if(!p)return;
  const gallery=(p.gallery||[]).map(src=>`<img src="${src}" alt="${p.title} additional project image" loading="lazy">`).join("");
  modalContent.innerHTML=`<div class="modal-body"><img src="${p.image}" alt="${p.title}"><p class="eyebrow">PROJECT DETAIL</p><h2>${p.title}</h2><div class="modal-meta"><b>Purpose</b><span>${p.purpose}</span><b>Design Work</b><span>${p.design}</span><b>Key Technical Details</b><span>${p.details}</span><b>Project Context</b><span>${p.context}</span></div>${gallery?`<div class="gallery">${gallery}</div>`:""}</div>`;
  modal.showModal();
}));
document.querySelector(".modal-close").addEventListener("click",()=>modal.close());
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});

const menu=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");}));

const sections=[...document.querySelectorAll("main section[id]")], navLinks=[...nav.querySelectorAll("a")];
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));}
}),{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>sectionObserver.observe(s));

const revealEls=[...document.querySelectorAll(".reveal")];
if("IntersectionObserver" in window){
  revealEls.forEach(el=>el.classList.add("pre-reveal"));
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("is-visible");entry.target.classList.remove("pre-reveal");revealObserver.unobserve(entry.target);}
  }),{threshold:.08});
  revealEls.forEach(el=>revealObserver.observe(el));
}else{revealEls.forEach(el=>el.classList.add("is-visible"));}

const topBtn=document.getElementById("backToTop");
window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>600),{passive:true});
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
