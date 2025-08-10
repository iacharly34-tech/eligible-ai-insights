(function(){
  const preloaded = new Set();
  const supportsPrefetch = () => {
    const link = document.createElement('link');
    return !!(link.relList && link.relList.supports && link.relList.supports('prefetch'));
  };
  if (!supportsPrefetch()) return;

  function prefetch(url){
    if (preloaded.has(url)) return;
    preloaded.add(url);
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = 'document';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }

  function onHover(e){
    const el = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!el) return;
    try {
      const u = new URL(el.href, location.href);
      if (u.origin !== location.origin) return;
      if (el.hasAttribute('data-no-prefetch')) return;
      prefetch(u.href);
    } catch(_){}
  }

  document.addEventListener('mouseover', onHover, { passive: true });
})();
