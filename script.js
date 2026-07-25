document.querySelectorAll('.card').forEach(function(card){
  card.addEventListener('mousemove', function(e){
    var r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});
