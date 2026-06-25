(function(){
  if ('serviceWorker' in navigator) {
    // Pivot juin 2026 — disable old SW caching that was serving the previous site.
    navigator.serviceWorker.getRegistrations().then(function(regs){
      regs.forEach(function(r){ r.unregister(); });
    }).catch(function(){});
    if (window.caches && caches.keys) {
      caches.keys().then(function(keys){
        keys.forEach(function(k){ caches.delete(k); });
      }).catch(function(){});
    }
  }
})();
