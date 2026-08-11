const cityIdeas = {
  varna: ['Sea Garden Walk-and-talk','Strand und erster Badeeindruck','Kathedrale und Architektur-Details','Hafen bei Sonnenuntergang','Markthalle: lokale Snacks testen','Street-Walk durch die Innenstadt','Römische Bäder als Kultur-Highlight','Gutes Beach-Food bewusst genießen','Optionaler Abstecher nach Golden Sands','Flughafen-zu-Strand-Auftaktvideo'],
  constanta: ['Piața Ovidiu und Altstadt','Casino am Meer: Geschichte und Bilder','Promenade bei Sonnenuntergang','Strand-Check: Stadtstrand vs. ruhiger Spot','Hafen und Fischerboote','Märchenhafte Moschee von außen','Lokales Seafood testen','Aqua Magic als optionaler Erlebnis-Stopp','Street-Walk mit „Was kostet ein Abend?“','Nacht-zu-Morgen-Transit-Folge'],
  tulcea: ['Hafen und Donauufer','Sonnenuntergang an der Donau','Delta-Museum besuchen','Vogel- und Naturbeobachtung','Lokales Fischgericht probieren','Promenade als ruhiger Vlog-Teil','Kleine Bootsfahrt als bezahltes Upgrade','Markt und regionale Produkte','Früher Morgen am Wasser','„Lohnt sich das Delta?“-Mini-Doku'],
  galati: ['Donaupromenade','Faleza und Sonnenuntergang','Altstadt- und Architektur-Walk','Parks und Skulpturen entdecken','Lokales Café testen','Street-Food oder Restaurantvergleich','Hafenstimmung und Schiffe','Science-Museum als Indoor-Option','Reise-Recap der rumänischen Etappen','Grenzübertritt nach Moldova dokumentieren'],
  chisinau: ['Zentrum und Boulevard','Kathedrale und Park','Zentralmarkt: Snacks und Eindrücke','Nationalmuseum oder Kunstmuseum','Lokale Weinbar besuchen','Gutes moldauisches Abendessen','Orheiul Vechi als großer Ausflug','Cricova oder Mileștii Mici als Wein-Erlebnis','Tagestrip nach Transnistrien prüfen','Finale: 10 Tage Reise-Recap'],
};

function addVideoIdeas(){
  const key = location.pathname.split('/').pop().replace('.html','');
  const ideas = cityIdeas[key];
  const target = document.querySelector('.next-prev');
  if (!ideas || !target) return;
  const section = document.createElement('section');
  section.className = 'section ideas';
  section.innerHTML = '<div class="section-kicker">10 IDEEN · ERLEBNIS & VIDEO</div><h2>Was wir hier unternehmen und drehen können</h2><div class="tips">' + ideas.map((idea, i) => `<div><b>${String(i + 1).padStart(2, '0')} · CONTENT</b>${idea}</div>`).join('') + '</div>';
  target.before(section);
}

function addHomeVideoPlan(){
  if (location.pathname.endsWith('.html') && !location.pathname.endsWith('index.html')) return;
  const target = document.querySelector('.privacy-note');
  if (!target) return;
  const section = document.createElement('section');
  section.className = 'section callout';
  section.innerHTML = '<div class="lang-de"><div class="section-kicker">YOUTUBE-PLAN</div><h2>Aus der Reise wird eine Serie</h2><p>Wir bleiben preisbewusst, gönnen uns aber gezielt Erlebnisse, gutes Essen und Ausflüge, die sich auch im Video lohnen. Jede Stadt bekommt eine eigene Folge mit Ankunft, zehn Ideen und einem ehrlichen Fazit.</p><div class="hero-meta"><span>🎥 Ankunfts-Vlog</span><span>🍽️ Food & lokale Spots</span><span>🗺️ Ausflüge</span><span>🎬 Tagesfazit</span></div></div></section>';
  target.before(section);
}

document.querySelectorAll('.privacy-note').forEach(el => el.remove());

function setLanguage(lang){
  document.documentElement.lang = lang === 'uk' ? 'uk' : 'de';
  document.querySelectorAll('.lang-de').forEach(el => el.hidden = lang !== 'de');
  document.querySelectorAll('.lang-uk').forEach(el => el.hidden = lang !== 'uk');
  document.querySelectorAll('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('trip-lang', lang);
}

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem('trip-lang') || 'de');
addVideoIdeas();
addHomeVideoPlan();
