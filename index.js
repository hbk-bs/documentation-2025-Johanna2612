document.getElementById('scrollBottomBtn').onclick = function() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};