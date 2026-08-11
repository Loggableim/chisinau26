function setLanguage(lang){
  document.documentElement.lang = lang === 'uk' ? 'uk' : 'de';
  document.querySelectorAll('.lang-de').forEach(el => el.hidden = lang !== 'de');
  document.querySelectorAll('.lang-uk').forEach(el => el.hidden = lang !== 'uk');
  document.querySelectorAll('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('trip-lang', lang);
}

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem('trip-lang') || 'de');
