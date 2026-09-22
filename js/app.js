const app=document.getElementById('app');
const SITE_ORIGIN='https://ensakh.jlm.ma';
const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const img=(src,alt='')=>`<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`;
const icon=(name='')=>`<span class="icon" aria-hidden="true">${name}</span>`;
const colorClass=c=>['red','green','yellow','blue','purple','dark'].includes(c)?c:'red';
const HOME_GALLERY=[
  ['assets/marquee/jlm-01.webp','Bootcamp JLM'],
  ['assets/marquee/jlm-02.webp','AI Days'],
  ['assets/marquee/jlm-03.webp','Kick-off JLM'],
  ['assets/marquee/jlm-04.webp','Action solidaire'],
  ['assets/marquee/jlm-05.webp','Formation JLM'],
  ['assets/marquee/jlm-06.webp','Competition et innovation'],
  ['assets/marquee/jlm-07.webp','Projets des membres'],
  ['assets/marquee/jlm-08.webp','Vie du club']
];

function setMeta(selector,attribute,value){
  let element=document.head.querySelector(selector);
  if(!element){
    element=document.createElement(attribute==='href'?'link':'meta');
    if(attribute==='href')element.rel='canonical';
    else if(selector.includes('property='))element.setAttribute('property',selector.match(/property="([^"]+)"/)[1]);
    else element.name=selector.match(/name="([^"]+)"/)[1];
    document.head.appendChild(element);
  }
  element.setAttribute(attribute,value);
}
function setDetailMetadata(item,kind){
  if(!item){
    document.title=`${kind==='project'?'Projet':'Action'} introuvable | JLM ENSA Khouribga`;
    setMeta('meta[name="robots"]','content','noindex,follow');
    return;
  }
  const page=kind==='project'?'projet.html':'action.html';
  const title=`${item.title} | JLM ENSA Khouribga`;
  const description=item.short||item.description;
  const url=`${SITE_ORIGIN}/${page}?id=${encodeURIComponent(item.id)}`;
  const image=new URL(item.image,SITE_ORIGIN+'/').href;
  document.title=title;
  setMeta('meta[name="description"]','content',description);
  setMeta('meta[name="robots"]','content','index,follow');
  setMeta('link[rel="canonical"]','href',url);
  setMeta('meta[property="og:title"]','content',title);
  setMeta('meta[property="og:description"]','content',description);
  setMeta('meta[property="og:url"]','content',url);
  setMeta('meta[property="og:image"]','content',image);
}

function applyTheme(){if(localStorage.getItem('jlm-theme')==='dark')document.documentElement.classList.add('dark')}
function toggleTheme(){document.documentElement.classList.toggle('dark');localStorage.setItem('jlm-theme',document.documentElement.classList.contains('dark')?'dark':'light');updateThemeButton()}
function updateThemeButton(){document.querySelectorAll('.theme-toggle').forEach(b=>{const dark=document.documentElement.classList.contains('dark');b.innerHTML=dark?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.2A8.7 8.7 0 0 1 10.8 3.4 8.7 8.7 0 1 0 20.6 13.2Z"/><path d="M17.5 3v4M15.5 5h4"/></svg>';b.title=dark?'Passer en mode clair':'Passer en mode sombre';b.setAttribute('aria-label',b.title);b.setAttribute('aria-pressed',String(dark))})}
function toggleMenu(){document.getElementById('mainNav')?.classList.toggle('open')}
applyTheme();

function header(){return `<header class="site-header"><div class="container header-inner"><a class="brand" href="/"><img src="assets/icon-pack-archive/ensa/jlm_logo.jpeg" alt="JLM ENSA Khouribga"><span><b>JLM ENSA Khouribga</b></span></a><nav id="mainNav" class="main-nav"><a href="/">Accueil</a><a href="a-propos.html">À propos</a><a href="projets.html">Projets</a><a href="actions.html">Actions</a><a href="formations.html">Formations</a><a href="bureau.html">Bureau</a><a href="galerie.html">Galerie</a><a href="trophees.html">Trophées</a><a href="contact.html">Contact</a></nav><div class="header-actions"><button class="icon-btn theme-toggle" onclick="toggleTheme()"></button><button class="icon-btn menu-toggle" onclick="toggleMenu()" aria-label="Menu">☰</button></div></div></header>`}
function footer(){return `<footer class="site-footer reveal"><div class="footer-aurora" aria-hidden="true"></div><div class="container footer-content"><div class="footer-grid"><div class="footer-intro"><div class="footer-brand"><img src="assets/icon-pack-archive/ensa/jlm_logo.jpeg" alt="Logo JLM ENSA Khouribga"><div><b>${esc(CLUB.name)}</b><small>${esc(CLUB.slogan)}</small></div></div><p>Des étudiants qui transforment les idées en projets utiles, solidaires et durables.</p>${socialLinks()}</div><nav class="footer-links" aria-label="Découvrir"><h2>Découvrir</h2><a href="a-propos.html">À propos</a><a href="projets.html">Nos projets</a><a href="actions.html">Nos actions</a><a href="formations.html">Formations</a></nav><nav class="footer-links" aria-label="Communauté"><h2>Communauté</h2><a href="bureau.html">Le bureau</a><a href="galerie.html">Galerie</a><a href="trophees.html">Trophées</a><a href="qr.html">QR du club</a></nav><div class="footer-contact"><h2>Nous retrouver</h2><a href="mailto:${esc(CLUB.email)}">${esc(CLUB.email)}</a><p>École Nationale des Sciences Appliquées<br>Boulevard Béni Amir, BP 77<br>Khouribga 25000, Maroc</p><a class="footer-contact-link" href="contact.html">Nous contacter <span aria-hidden="true">→</span></a></div></div><div class="footer-wordmark" aria-hidden="true"><svg viewBox="0 0 900 220" role="presentation"><defs><radialGradient id="footerGlow" cx="50%" cy="50%" r="32%"><stop offset="0" stop-color="#ffc400"/><stop offset=".42" stop-color="#19bd70"/><stop offset=".76" stop-color="#ff1744"/><stop offset="1" stop-color="#ff1744" stop-opacity="0"/></radialGradient></defs><text class="footer-wordmark-base" x="450" y="172" text-anchor="middle">JLM</text><text class="footer-wordmark-trace" x="450" y="172" text-anchor="middle">JLM</text><text class="footer-wordmark-glow" x="450" y="172" text-anchor="middle">JLM</text></svg></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(CLUB.name)}</span><span>Étudiants · Innovation · Impact</span></div></div></footer>`}
function contactIcon(file){return `assets/icon-pack-archive/page_contact/ChatGPT Image 18 sept. 2026, ${file}.png`}
function socialLinks(){return `<div class="socials">${[['instagram','Instagram','03_20_40 (4)'],['github','GitHub','03_20_41 (6)'],['linkedin','LinkedIn','03_20_39 (2)']].map(([key,label,file])=>CLUB.social[key]?`<a href="${esc(CLUB.social[key])}" target="_blank" rel="noopener noreferrer" aria-label="${label}">${img(contactIcon(file),'')}</a>`:`<span class="social-pending" role="img" aria-label="${label} — lien à venir" title="${label} — lien à venir">${img(contactIcon(file),'')}</span>`).join('')}</div>`}
function layout(content){app.innerHTML=header()+`<main>${content}</main>`+footer();updateThemeButton();requestAnimationFrame(()=>{initRevealMotion();initFooterEffect()})}

function contact(){
  const maps='https://www.google.com/maps/search/?api=1&query=32.8971757%2C-6.9137639';
  layout(`${hero('Contact','','Une idée ? Une question ? Notre équipe est à votre écoute !',[],'assets/icon-pack-archive/ensa/ensa.jpeg',true)}
  <section class="container contact-panel contact-coordinates"><div><h2>Nos coordonnées</h2><div class="contact-coordinate">${img(contactIcon('03_20_42 (7)'), '')}<div><h3>Email</h3><a href="mailto:${CLUB.email}">${CLUB.email}</a></div></div><div class="contact-coordinate">${img(contactIcon('03_20_43 (9)'), '')}<div><h3>ENSA Khouribga</h3><address>École Nationale des Sciences Appliquées<br>Boulevard Béni Amir, BP 77<br>Khouribga 25000, Maroc</address></div></div><div class="contact-follow"><h3>Suivez-nous</h3>${socialLinks()}</div></div>
  <div class="contact-map"><iframe title="Localisation de l’ENSA Khouribga" src="https://maps.google.com/maps?q=32.8971757,-6.9137639&z=17&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a class="map-link" href="${maps}" target="_blank" rel="noopener noreferrer">${img(contactIcon('03_20_43 (9)'), '')}Voir sur Google Maps <span aria-hidden="true">↗</span></a></div></section>
  <section class="container contact-cta"><div><h2>Ensemble, faisons la différence !</h2><p>Des idées aujourd’hui pour un Maroc meilleur demain.</p></div><a class="btn" href="mailto:${CLUB.email}">Contactez-nous <span aria-hidden="true">→</span></a></section>`);

}
document.addEventListener('click',e=>{if(e.target.closest('.main-nav a'))document.getElementById('mainNav')?.classList.remove('open')});

function heading(title,accent=''){return `<div class="section-heading"><div><span class="kicker">JLM ENSA KHOURIBGA</span><h2>${esc(title)} ${accent?`<em>${esc(accent)}</em>`:''}</h2></div><i></i></div>`}
function hero(title,accent,text,buttons=[],image='assets/hero-campus.svg',compact=false){return `<section class="hero ${compact?'compact':''}" ><img class="hero-photo" src="${esc(image)}" alt="" fetchpriority="high"><div class="hero-shade"></div><div class="container hero-content"><span class="eyebrow">JLM ENSA KHOURIBGA <b></b></span><h1>${esc(title)} <strong>${esc(accent)}</strong></h1><p>${esc(text)}</p>${buttons.length?`<div class="hero-actions">${buttons.map((b,i)=>`<a class="btn ${i?'ghost':''}" href="${esc(b.href)}">${esc(b.label)} <span>→</span></a>`).join('')}</div>`:''}</div></section>`}
function cta(label,href){return `<section class="container cta"><div><span>JLM ENSA KHOURIBGA</span><h2>${esc(label)}</h2><p>Des idées d’aujourd’hui pour un Maroc meilleur demain.</p></div><a class="btn" href="${href}">Découvrir <span>→</span></a></section>`}
function card(item,kind){if(kind==='project')return projectCard(item);return `<a class="card" href="${kind==='project'?'projet':'action'}.html?id=${encodeURIComponent(item.id)}"><div class="card-media">${img(item.image,item.title)}<span class="pill ${colorClass(item.color)}">${esc(item.category)}</span></div><div class="card-body"><small>${esc(item.year||'JLM')}</small><h3>${esc(item.title)}</h3><p>${esc(item.short)}</p><b>Découvrir <span>→</span></b></div></a>`}
function projectBadges(item){return `<div class="project-badges">${item.criteria.map(id=>{const c=PROJECT_CRITERIA.find(c=>c.id===id);return `<span class="project-badge ${c.color}">${img(c.icon,'')}${esc(c.title)}</span>`}).join('')}</div>`}
function projectCard(item){return `<a class="project-card" href="projet.html?id=${encodeURIComponent(item.id)}" aria-label="Voir la fiche complète : ${esc(item.title)}"><div class="project-cover ${item.illustration?'illustrated':''}">${img(item.image,item.illustration?`Illustration — ${item.title}`:item.title)}${item.id==='ofok-tech'?'<span class="project-planned">À venir · 2026–2027</span>':''}</div><div class="project-card-body">${projectBadges(item)}<div class="project-card-heading"><div><h3>${esc(item.title)}</h3><p class="project-short">${esc(item.short)}</p></div><span class="project-arrow" aria-hidden="true">→</span></div></div></a>`}
function projectMatches(item,criterion){return criterion==='all'||item.criteria.includes(criterion)}
function projectListing(){
  layout(`${hero('Nos','projets','Des idées concrètes pour un Maroc meilleur demain.',[],'assets/image_header/image projet.jpeg',true)}<section class="container section projects-section" id="liste"><div class="filters project-filters" id="projectFilters" role="group" aria-label="Filtrer les projets par critère"><button class="active" data-filter="all" aria-pressed="true">Tous</button>${PROJECT_CRITERIA.map(c=>`<button data-filter="${c.id}" aria-pressed="false">${img(c.icon,'')}${esc(c.title)}</button>`).join('')}</div><p class="project-count" id="projectCount" role="status">${PROJECTS.length} projets</p><div class="grid two project-grid">${PROJECTS.map(x=>`<div class="project-filter-item" data-project-id="${x.id}">${projectCard(x)}</div>`).join('')}</div></section>`);
  document.getElementById('projectFilters').addEventListener('click',e=>{
    const button=e.target.closest('button[data-filter]');if(!button)return;
    const criterion=button.dataset.filter;
    document.querySelectorAll('#projectFilters button').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
    document.querySelectorAll('.project-filter-item').forEach(el=>{el.hidden=!projectMatches(getProject(el.dataset.projectId),criterion)});
    const count=PROJECTS.filter(item=>projectMatches(item,criterion)).length;
    document.getElementById('projectCount').textContent=`${count} projet${count>1?'s':''}`;
  });
}
function projectDetail(item){layout(`<section class="container section project-detail"><a class="back" href="projets.html">← Tous les projets</a><div class="detail-head"><div class="project-cover ${item.illustration?'illustrated':''}">${img(item.image,item.title)}</div><article>${projectBadges(item)}<small>${esc(item.year)} · ${esc(item.status)}</small><h1>${esc(item.title)}</h1><p>${esc(item.short)}</p></article></div><div class="project-description"><section class="description-panel project-overview"><h2><span class="description-icon" aria-hidden="true">${img('assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_08.png','')}</span>Le projet en bref</h2><p>${esc(item.description)}</p></section><section class="description-panel project-impact"><h2><span class="description-icon" aria-hidden="true">${img('assets/icon-pack-archive/page_a_propos/ChatGPT Image 18 sept. 2026, 02_11_53 (1).png','')}</span>Impact recherché</h2><p>${esc(item.impact)}</p></section>${item.technologies.length?`<section class="description-panel project-technologies"><h2><span class="description-icon" aria-hidden="true">${img('assets/icon-pack-archive/page_formations/ChatGPT Image 18 sept. 2026, 02_51_49 (4).png','')}</span>Technologies utilisées</h2><ul class="technology-list">${item.technologies.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></section>`:''}</div></section>`)}
function filters(id){return `<div class="filters" id="${id}"><button class="active" data-filter="all">Tous</button>${THEMES.map(t=>`<button data-filter="${t.id}">${esc(t.title)}</button>`).join('')}</div>`}
function bindFilters(id){const box=document.getElementById(id);if(!box)return;box.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;box.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;document.querySelectorAll('.filter-item').forEach(x=>x.hidden=f!=='all'&&x.dataset.category!==f)})}

function homePhotoCard(photo,index){return `<figure class="jlm-photo-card" style="--tilt:${index%2?2.2:-2.2}deg"><img src="${esc(photo[0])}" alt="${esc(photo[1])}" loading="lazy" width="640" height="480"><figcaption>${esc(photo[1])}</figcaption></figure>`}
function pillarGroup(hidden=false){return `<div class="pillar-marquee-group" ${hidden?'aria-hidden="true"':''}>${CLUB.pillars.map((x,index)=>`<article class="pillar-chip pillar-${index+1}"><div class="round">${img(x.icon,x.title)}</div><div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div></article>`).join('')}</div>`}
function home(){const gallery=HOME_GALLERY.map(homePhotoCard).join('');layout(`<section class="hero home video-hero home-video-hero" id="homeHero"><video class="hero-video" autoplay loop muted playsinline preload="auto" poster="assets/video/hero-jlm-poster.webp" aria-label="Un membre du JLM entre à l'ENSA Khouribga"><source src="assets/video_header/Man_walking_towards_campus_building_20260922183336.mp4" type="video/mp4"></video><div class="hero-video-fallback" aria-hidden="true"></div><div class="hero-shade"></div><div class="container hero-content"><span class="eyebrow hero-intro">JLM ENSA KHOURIBGA <b></b></span><h1 class="home-headline" lang="en"><span class="headline-line"><span class="hero-word" style="--word-index:0">Our</span> <span class="hero-word" style="--word-index:1">innovation</span></span><span class="headline-line"><span class="hero-word club-gold" style="--word-index:2">builds</span> <span class="hero-word club-green" style="--word-index:3">the</span> <span class="hero-word club-red" style="--word-index:4">nation</span></span></h1><p class="home-hero-copy">Des étudiants engagés, des idées utiles et un impact qui commence ici.</p><div class="hero-actions home-hero-actions"><a class="btn" href="a-propos.html">Découvrir le club <span>→</span></a><a class="btn ghost" href="projets.html">Voir les projets <span>→</span></a></div></div><div class="hero-scroll-cue" aria-hidden="true"><span></span>Découvrir</div></section>
<section class="jlm-gallery-section reveal" aria-labelledby="jlmGalleryTitle"><div class="container jlm-gallery-heading"><div><span class="kicker">NOTRE COMMUNAUTÉ</span><h2 id="jlmGalleryTitle">Le JLM <em>en mouvement</em></h2></div><p>Projets, rencontres, formations et moments partagés.</p></div><div class="jlm-photo-marquee" tabindex="0" aria-label="Photos des activités du JLM"><div class="jlm-photo-track"><div class="jlm-photo-group">${gallery}</div><div class="jlm-photo-group" aria-hidden="true">${gallery}</div></div></div></section>
<section class="section pillar-section reveal"><div class="container">${heading('Nos','piliers')}</div><div class="pillar-marquee" tabindex="0" aria-label="Les piliers du club"><div class="pillar-marquee-track">${pillarGroup()}${pillarGroup(true)}</div></div></section>
<section class="section alt reveal"><div class="container">${heading('Nos','thématiques')}<p class="intro">Six domaines principaux. Les bootcamps, workshops, challenges et événements sont des formats d’activités.</p><div class="grid three home-expand">${THEMES.map(t=>`<article class="theme" tabindex="0"><div class="theme-icon">${img(t.icon,t.title)}</div><div><h3>${esc(t.title)}</h3><p>${esc(t.description)}</p></div></article>`).join('')}</div></div></section>
<section class="container section reveal" id="formats">${heading('Formats','d’activités')}<div class="grid four home-expand">${ACTIVITY_FORMATS.map(x=>`<article class="format" tabindex="0"><div>${img(x.image,x.title)}</div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('')}</div></section>
<section class="container section reveal">${heading('Projets','à la une')}<div class="grid three home-expand">${['ecowatt','aquaflow','hrayfia'].map(id=>getProject(id)).map(x=>card(x,'project')).join('')}</div><div class="section-link"><a href="projets.html">Voir tous les projets →</a></div></section>
<section class="container section reveal">${heading('Actions et','formations')}<div class="grid two action-shortcuts home-expand"><a class="info" href="formations.html"><img src="assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_28.png" alt=""><div><h3>Formations &amp; Ateliers</h3><p>Développer des compétences pour agir demain</p></div><span aria-hidden="true">→</span></a><a class="info" href="actions.html"><img src="assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_46_57.png" alt=""><div><h3>Actions communautaires</h3><p>Des initiatives concrètes au service de la société</p></div><span aria-hidden="true">→</span></a></div></section>
${cta('Découvrir tous les projets','projets.html')}`);initVideoHero('homeHero')}
function initVideoHero(id){
  const hero=document.getElementById(id);if(!hero)return;
  const video=hero.querySelector('.hero-video');if(!video)return;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){video.pause();video.removeAttribute('autoplay')}else video.play().catch(()=>hero.classList.add('video-paused'));
  video.querySelector('source')?.addEventListener('error',()=>hero.classList.add('video-unavailable'));
  video.addEventListener('error',()=>hero.classList.add('video-unavailable'));
}
function initRevealMotion(){
  const items=[...document.querySelectorAll('.reveal,.section-heading,.cta')];
  if(!items.length)return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){items.forEach(item=>item.classList.add('is-visible'));return}
  items.forEach(item=>item.classList.add('reveal-ready'));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -7%'});
  items.forEach(item=>observer.observe(item));
}
function initFooterEffect(){
  const footer=document.querySelector('.site-footer');
  const gradient=footer?.querySelector('#footerGlow');
  const wordmark=footer?.querySelector('.footer-wordmark');
  if(!footer||!gradient||!wordmark||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  wordmark.addEventListener('pointermove',event=>{const rect=wordmark.getBoundingClientRect();gradient.setAttribute('cx',`${((event.clientX-rect.left)/rect.width)*100}%`);gradient.setAttribute('cy',`${((event.clientY-rect.top)/rect.height)*100}%`);wordmark.classList.add('is-hovered')});
  wordmark.addEventListener('pointerleave',()=>{gradient.setAttribute('cx','50%');gradient.setAttribute('cy','50%');wordmark.classList.remove('is-hovered')});
}

function about(){
const aboutIcon=file=>`assets/icon-pack-archive/page_a_propos/ChatGPT Image 18 sept. 2026, ${file}.png`;
const valueIcons=['02_11_54 (3)','02_11_55 (4)','02_11_56 (5)','02_11_56 (6)'];
layout(`<section class="hero about-hero video-hero about-video-hero" id="aboutHero"><video class="hero-video" autoplay loop muted playsinline preload="auto" poster="assets/video/hero-jlm-poster.webp" aria-label="Vue du campus de l’ENSA Khouribga avec le logo JLM"><source src="assets/video_header/Creating_campus_video_with_logo_20260922192028.mp4" type="video/mp4"></video><div class="hero-video-fallback" aria-hidden="true"></div><div class="hero-shade"></div><div class="container hero-content"><span class="eyebrow hero-intro">JLM ENSA KHOURIBGA <b></b></span><h1 class="about-headline"><span class="headline-line"><span class="hero-word" style="--word-index:0">À</span> <span class="hero-word" style="--word-index:1">propos</span></span><strong class="headline-line"><span class="hero-word" style="--word-index:2">du</span> <span class="hero-word club-green" style="--word-index:3">club</span></strong></h1><p class="video-hero-copy">Des étudiants engagés<br>pour un Maroc meilleur<br>demain.</p><div class="hero-actions video-hero-actions"><a class="btn" href="bureau.html">Découvrir notre communauté <span aria-hidden="true">→</span></a></div></div><blockquote class="about-quote">« Des idées d’aujourd’hui<br>pour un Maroc<br>meilleur demain. »</blockquote></section>
<section class="container section about-purpose"><div class="grid two"><article class="about-purpose-card"><h2>Notre mission</h2><div>${img(aboutIcon('02_11_53 (1)'), '')}<p>${esc(CLUB.mission)}</p></div></article><article class="about-purpose-card"><h2>Notre vision</h2><div>${img(aboutIcon('02_11_53 (2)'), '')}<p>${esc(CLUB.vision)}</p></div></article></div></section>
<section class="container section">${heading('Notre','histoire')}<article class="prose"><p>${esc(CLUB.history)}</p><p>Cette plateforme rassemble les projets, actions, thématiques et moments forts du club afin de présenter son activité de manière claire et accessible.</p></article></section>
<section class="container section about-values">${heading('Nos','valeurs')}<div class="grid four">${CLUB.values.map((v,i)=>`<article class="mini-card"><div class="round">${img(aboutIcon(valueIcons[i]),'')}</div><h3>${esc(v.title)}</h3><p>${esc(v.text)}</p></article>`).join('')}</div></section>
<section class="container section about-pillars">${heading('Nos','piliers')}<div class="grid four">${CLUB.pillars.map(v=>`<article class="mini-card"><div class="round">${img(v.icon,v.title)}</div><h3>${esc(v.title)}</h3><p>${esc(v.text)}</p></article>`).join('')}</div></section>
<section class="container about-cta"><div><h2>Rejoignez l’aventure !</h2><p>Étudiants · Innovation · Impact · Maroc de demain</p></div><a class="btn" href="projets.html">Explorer nos projets <span aria-hidden="true">→</span></a></section>`);initVideoHero('aboutHero')}
function listing(kind){if(kind==='action')return actionListing();if(kind==='project')return projectListing();const isP=kind==='project',items=isP?PROJECTS:ACTIONS;layout(`${hero(isP?'Nos':'Nos',isP?'projets':'actions',isP?'Des idées concrètes pour un Maroc meilleur demain.':'Des initiatives concrètes sur le terrain.',[{label:isP?'Explorer les projets':'Explorer les actions',href:'#liste'}],'assets/icon-pack-archive/ensa/ensa.jpeg',true)}<section class="container section" id="liste">${filters(isP?'projectFilters':'actionFilters')}<div class="grid two cards-grid">${items.map(x=>`<div class="filter-item" data-category="${x.categoryKey}">${card(x,isP?'project':'action')}</div>`).join('')}</div></section>${cta(isP?'Découvrir les actions':'Découvrir les projets',isP?'actions.html':'projets.html')}`);bindFilters(isP?'projectFilters':'actionFilters')}
function actionCard(item){return `<a class="action-card" href="action.html?id=${encodeURIComponent(item.id)}"><div class="action-art">${img(item.image,`Illustration — ${item.title}`)}<span class="action-season">${esc(item.year)}</span></div><div class="action-card-content"><span class="action-badge">${img(item.icon,'')}</span><div><h3>${esc(item.title)}</h3><p>${esc(item.short)}</p>${item.residents?`<span class="action-residents">${item.residents} résidents · première édition</span>`:''}</div><span class="project-arrow" aria-hidden="true">→</span></div></a>`}
function actionListing(){layout(`${hero('Nos','actions','Des initiatives concrètes sur le terrain pour une société plus juste et plus inclusive.',[{label:'Découvrir nos actions',href:'#nos-actions'}],'assets/image_header/image action.jpg',true)}<section class="container section actions-section" id="nos-actions">${heading('Nos','actions solidaires')}<p class="intro">Des rencontres et des moments de partage au cœur de notre engagement.</p><div class="grid two actions-grid">${ACTIONS.map(actionCard).join('')}</div></section><section class="container contact-cta"><div><h2>Agir aujourd’hui pour demain</h2><p>Envie de participer à nos actions ? Échangeons ensemble.</p></div><a class="btn" href="contact.html">Nous contacter <span aria-hidden="true">→</span></a></section>`)}
function actionDetail(item){layout(`<section class="container section project-detail action-detail"><a class="back" href="actions.html">← Toutes les actions</a><div class="detail-head"><div class="action-art">${img(item.image,`Illustration — ${item.title}`)}</div><article><span class="action-category">${img(item.icon,'')}${esc(item.category)}</span><small>${esc(item.year)}</small><h1>${esc(item.title)}</h1><p>${esc(item.short)}</p></article></div><div class="project-description"><section class="description-panel"><h2><span class="description-icon">${img(item.icon,'')}</span>L’action en bref</h2><p>${esc(item.description)}</p></section><section class="description-panel project-impact"><h2>Au cœur de l’action</h2><p>${esc(item.focus)}</p><ul class="technology-list action-highlights">${item.highlights.map(h=>`<li>${esc(h)}</li>`).join('')}</ul></section>${item.residents?`<section class="action-edition"><strong>${item.residents}</strong><div><h2>Résidents</h2><p>Une première édition documentée auprès de ${item.residents} personnes âgées.</p></div></section>`:''}</div></section><section class="container contact-cta"><div><h2>Chaque rencontre compte</h2><p>Une idée ou une envie de contribuer ? Notre équipe est à votre écoute.</p></div><a class="btn" href="contact.html">Nous contacter <span aria-hidden="true">→</span></a></section>`)}
function memberPortrait(member){return `<div class="member-portrait">${img(member.image,member.name ? `Portrait de ${member.name}` : `Portrait à venir — ${member.role}`)}<span class="member-role-icon">${img(member.icon,'')}</span></div>`}
function team(){
  const leader=TEAM[0];
  layout(`${hero('Membres du','bureau','Une équipe étudiante engagée pour transformer les idées en actions.',[{label:'Découvrir l’équipe',href:'#equipe'}],'assets/icon-pack-archive/ensa/ensa.jpeg')}
  <section class="container section team-lead-section" id="equipe">
    <article class="leader team-leader">
      ${memberPortrait(leader)}
      <div class="member-copy"><span class="member-label">${esc(leader.role)}</span><h2>${esc(leader.name || leader.role)}</h2>${leader.name?`<p class="member-role">${esc(leader.role)}</p>`:''}${leader.field?`<p class="member-field">${esc(leader.field)}</p>`:''}</div>
    </article>
  </section>
  <section class="container section team-members">${heading('Les membres du','bureau')}<div class="grid three team-grid">${TEAM.slice(1).map(m=>`<article class="person team-person">${memberPortrait(m)}<div class="member-copy"><h3>${esc(m.name || m.role)}</h3>${m.name?`<p class="member-role">${esc(m.role)}</p>`:''}${m.field?`<small>${esc(m.field)}</small>`:''}</div></article>`).join('')}</div></section>
  ${cta('Découvrir la vie du club','galerie.html')}`)
}

function detail(item,kind){setDetailMetadata(item,kind);if(kind==='action'&&item)return actionDetail(item);if(kind==='project'&&item)return projectDetail(item);const isP=kind==='project',back=isP?'projets.html':'actions.html';if(!item){layout(`<section class="container section empty"><h1>${isP?'Projet':'Action'} introuvable</h1><p>L’identifiant demandé ne correspond à aucun contenu.</p><a class="btn" href="${back}">Retour</a></section>`);return}layout(`<section class="container section"><a class="back" href="${back}">← Retour</a><div class="detail-head"><div>${img(item.image,item.title)}</div><article><span class="pill ${colorClass(item.color)}">${esc(item.category)}</span><small>${esc(item.year||'')}</small><h1>${esc(item.title)}</h1><p>${esc(item.short)}</p></article></div><div class="detail-body"><article>${heading('À','propos')}<p>${esc(item.description)}</p>${heading('Objectifs','')}<ul>${item.objectives.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>${heading('Résultats','')}<div class="result-grid">${item.results.map((x,i)=>`<div><b>0${i+1}</b><span>${esc(x)}</span></div>`).join('')}</div>${heading('Équipe','')}<p>${esc(item.team||'Équipe du JLM ENSA Khouribga')}</p></article><aside><span>JLM ENSA KHOURIBGA</span><h3>${isP?'Projet':'Action'}</h3><p>${esc(item.status||'')}</p><a class="btn ghost darkbtn" href="${back}">Retour</a></aside></div></section>${cta('Découvrir la galerie','galerie.html')}`)}
function qr(){layout(`<section class="container section qr"><div>${heading('QR code','du club')}<h1>Scannez pour découvrir le JLM</h1><p>Le QR code pointe automatiquement vers la page d’accueil publiée.</p><code id="qrUrl"></code><button class="btn" onclick="window.print()">Imprimer</button></div><div id="qrcode" class="qrbox">Chargement…</div></section>`);const u=new URL('index.html',location.href);document.getElementById('qrUrl').textContent=u.href;const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';s.onload=()=>{const b=document.getElementById('qrcode');b.innerHTML='';new QRCode(b,{text:u.href,width:260,height:260,colorDark:'#081722',colorLight:'#fff',correctLevel:QRCode.CorrectLevel.H})};document.body.appendChild(s)}

const p=document.body.dataset.page;if(p==='home')home();if(p==='about')about();if(p==='projects')listing('project');if(p==='actions')listing('action');if(p==='team')team();if(p==='gallery')gallery();if(p==='project-detail')detail(getProject(new URLSearchParams(location.search).get('id')),'project');if(p==='action-detail')detail(getAction(new URLSearchParams(location.search).get('id')),'action');if(p==='qr')qr();

function trophies(){layout(`${hero('Trophées &','distinctions','Des réussites qui reflètent l’engagement de notre communauté.',[{label:'Notre club en action',href:'actions.html'}],'assets/image_header/image tophie.jpg',true)}<section class="container section trophies-section">${heading('Nos','distinctions')}<p class="intro">L’engagement, l’innovation et l’environnement au cœur de nos réussites.</p><div class="trophies-grid">${TROPHIES.map(t=>`<article class="trophy-card trophy-${t.color}"><div class="trophy-photo">${t.photo?img(t.photo,t.title):`<div class="trophy-photo-placeholder"><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><rect x="7" y="12" width="50" height="40" rx="7" stroke="currentColor" stroke-width="2"/><circle cx="23" cy="25" r="5" stroke="currentColor" stroke-width="2"/><path d="m9 46 14-13 10 9 9-16 14 20" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg><span>Photo à venir</span><small>${esc(t.category)}</small></div>`}<span class="trophy-ribbon">${esc(t.badge)}</span></div><div class="trophy-copy"><div class="trophy-meta">${img(t.icon,'')}<span>${esc(t.category)}</span>${t.year?`<span class="trophy-year">${esc(t.year)}</span>`:''}</div><h3>${esc(t.title)}</h3></div></article>`).join('')}</div></section>${competitionPlayer()}<section class="container contact-cta"><div><h2>Une communauté qui agit !</h2><p>Étudiants · Innovation · Impact · Maroc de demain</p></div><a class="btn" href="contact.html">Nous contacter <span aria-hidden="true">→</span></a></section>`);initCompetitionPlayer()}
if(p==='contact')contact();
if(p==='trophies')trophies();
function competitionPlayer(){return `<section class="container section competition-section">${heading('Nos moments de','compétition')}<div class="competition-player" role="region" aria-label="Photos et vidéos de compétition"><div id="competitionStage" class="competition-stage"></div><div class="competition-controls"><button type="button" id="competitionPrev" aria-label="Média précédent">←</button><button type="button" id="competitionPause" aria-label="Mettre le diaporama en pause">Pause</button><span id="competitionCount"></span><button type="button" id="competitionNext" aria-label="Média suivant">→</button></div><p id="competitionStatus" class="sr-only" role="status"></p></div></section>`}
function initCompetitionPlayer(mediaList=COMPETITION_MEDIA,label='Compétition JLM'){
  const stage=document.getElementById('competitionStage');if(!stage||!mediaList.length)return;
  let index=0,timer=null,paused=false,generation=0;
  const pauseButton=document.getElementById('competitionPause');
  const schedule=()=>{clearTimeout(timer);if(!paused)timer=setTimeout(()=>show(index+1),3000)};
  const show=n=>{
    clearTimeout(timer);const previous=stage.querySelector('video');if(previous)previous.pause();
    index=(n+mediaList.length)%mediaList.length;const token=++generation,media=mediaList[index];
    document.getElementById('competitionCount').textContent=`${index+1} / ${mediaList.length}`;
    const element=document.createElement(media.type==='video'?'video':'img');
    element.className='competition-media';
    element.onerror=()=>{if(token!==generation)return;document.getElementById('competitionStatus').textContent='Ce média ne peut pas être lu.';schedule()};
    if(media.type==='video'){
      element.muted=true;element.defaultMuted=true;element.volume=0;element.playsInline=true;element.controls=false;element.preload='auto';element.disablePictureInPicture=true;
      element.setAttribute('muted','');element.setAttribute('playsinline','');element.setAttribute('disableRemotePlayback','');
      element.addEventListener('volumechange',()=>{if(!element.muted)element.muted=true;if(element.volume!==0)element.volume=0});
      element.onended=()=>{if(token===generation&&!paused)show(index+1)};
      element.oncanplay=()=>{if(token===generation&&!paused)element.play().catch(()=>{paused=true;pauseButton.textContent='Lire';pauseButton.setAttribute('aria-label','Reprendre le diaporama')})};
    }else{element.alt=`${label} — photo ${index+1}`;element.onload=()=>{if(token===generation)schedule()}}
    stage.replaceChildren(element);element.src=media.src;
  };
  document.getElementById('competitionPrev').onclick=()=>show(index-1);
  document.getElementById('competitionNext').onclick=()=>show(index+1);
  pauseButton.onclick=()=>{paused=!paused;pauseButton.textContent=paused?'Lire':'Pause';pauseButton.setAttribute('aria-label',paused?'Reprendre le diaporama':'Mettre le diaporama en pause');const video=stage.querySelector('video');clearTimeout(timer);if(video){if(paused)video.pause();else if(video.ended)show(index+1);else video.play().catch(()=>{})}else if(!paused)schedule()};
  show(0);
  return ()=>{paused=true;generation++;clearTimeout(timer);const video=stage.querySelector('video');if(video){video.pause();video.removeAttribute('src');video.load()}stage.replaceChildren()};
}
function albumCover(album){return (ALBUM_MEDIA[album.id]||[]).find(m=>m.type==='image')?.src||''}
function albumMediaCount(album){const media=ALBUM_MEDIA[album.id]||[];if(!media.length)return 'Album à compléter';const photos=media.filter(m=>m.type==='image').length,videos=media.length-photos;return [photos?`${photos} photo${photos>1?'s':''}`:'',videos?`${videos} vidéo${videos>1?'s':''}`:''].filter(Boolean).join(' · ')}
function albumIcon(album){return album.iconPath||`assets/icon-pack-archive/page_album/ChatGPT Image 18 sept. 2026, ${album.icon}.png`}
function gallery(){
  layout(`${hero('Album','photos','Revivez nos moments forts à travers les projets, actions, formations et événements.',[{label:'Nos moments',href:'#albums'}],'assets/icon-pack-archive/ensa/ensa.jpeg',true)}<section class="container section albums-section" id="albums">${heading('Nos albums','photos')}<div class="album-grid">${PHOTO_ALBUMS.map(a=>`<button class="album-card" type="button" data-album="${a.id}" aria-haspopup="dialog"><div class="album-cover">${albumCover(a)?img(albumCover(a),a.title):`<div class="album-placeholder">${img(albumIcon(a),'')}<span>Photos à venir</span></div>`}</div><div class="album-copy"><span class="album-badge">${img(albumIcon(a),'')}</span><h3>${esc(a.title)}</h3><p>${albumMediaCount(a)}</p><span class="album-arrow" aria-hidden="true">→</span></div></button>`).join('')}</div></section><section class="container contact-cta"><div><h2>Rejoignez une communauté qui agit !</h2><p>Étudiants · Innovation · Impact</p></div><a class="btn" href="contact.html">Nous contacter <span aria-hidden="true">→</span></a></section><dialog class="album-dialog" id="albumDialog" aria-labelledby="albumTitle"><button class="training-close" type="button" aria-label="Fermer">×</button><h2 id="albumTitle"></h2><div id="albumPhotos"></div></dialog>`);
  const dialog=document.getElementById('albumDialog');
  let disposePlayer=null;
  document.querySelectorAll('[data-album]').forEach(b=>b.addEventListener('click',()=>{
    if(disposePlayer)disposePlayer();
    const album=PHOTO_ALBUMS.find(a=>a.id===b.dataset.album),media=ALBUM_MEDIA[album.id]||[];
    document.getElementById('albumTitle').textContent=album.title;
    document.getElementById('albumPhotos').innerHTML=media.length?`<div class="competition-player"><div id="competitionStage" class="competition-stage"></div><div class="competition-controls"><button type="button" id="competitionPrev" aria-label="Média précédent">←</button><button type="button" id="competitionPause" aria-label="Mettre le diaporama en pause">Pause</button><span id="competitionCount"></span><button type="button" id="competitionNext" aria-label="Média suivant">→</button></div><p id="competitionStatus" class="sr-only" role="status"></p></div>`:'<p class="album-empty">Les photos de cet album seront ajoutées prochainement.</p>';
    dialog.showModal();
    disposePlayer=media.length?initCompetitionPlayer(media,album.title):null;
  }));
  dialog.addEventListener('close',()=>{if(disposePlayer)disposePlayer();disposePlayer=null});
  dialog.querySelector('.training-close').addEventListener('click',()=>dialog.close());
}
function trainingIcon(topic){return `assets/icon-pack-archive/page_formations/ChatGPT Image 18 sept. 2026, ${topic.icon}.png`}
function training(){
  layout(`${hero('Formations','','Développer aujourd’hui les compétences de demain.',[{label:'Découvrir nos formations',href:'#thematiques'}],'assets/image_header/formation image.jpeg',true)}<section class="container section training-section" id="thematiques">${heading('Nos','thématiques')}<div class="training-grid">${TRAINING_TOPICS.map(t=>{const tag=t.href?'a':'button';return `<${tag} class="training-card training-${t.color}" ${t.href?`href="${t.href}"`:`type="button" data-topic="${t.id}" aria-haspopup="dialog"`}><div class="training-art" aria-hidden="true">${img(trainingIcon(t),'')}<span>${esc(t.title)}</span></div><div class="training-card-content"><span class="training-badge">${img(trainingIcon(t),'')}</span><div><h3>${esc(t.title)}</h3><p>${esc(t.short)}</p></div><span class="training-arrow" aria-hidden="true">→</span></div></${tag}>`}).join('')}</div></section><dialog id="trainingDialog" class="training-dialog" aria-labelledby="trainingDialogTitle"><button type="button" class="training-close" aria-label="Fermer">×</button><img id="trainingDialogIcon" alt=""><h2 id="trainingDialogTitle"></h2><p id="trainingDialogDescription"></p></dialog>`);
  const dialog=document.getElementById('trainingDialog');
  document.querySelectorAll('[data-topic]').forEach(button=>button.addEventListener('click',()=>{
    const topic=TRAINING_TOPICS.find(t=>t.id===button.dataset.topic);
    document.getElementById('trainingDialogTitle').textContent=topic.title;
    document.getElementById('trainingDialogDescription').textContent=topic.description;
    document.getElementById('trainingDialogIcon').src=trainingIcon(topic);
    dialog.showModal();
  }));
  dialog.querySelector('.training-close').addEventListener('click',()=>dialog.close());
}
if(p==='training')training();
