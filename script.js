(function(){
  function makeBubbles(containerId, count){
    var c = document.getElementById(containerId);
    if(!c) return;
    for(var i=0;i<count;i++){
      var b = document.createElement('span');
      b.className = 'bubble';
      var size = 6 + Math.random()*14;
      b.style.width = size+'px';
      b.style.height = size+'px';
      b.style.left = (Math.random()*94)+'%';
      b.style.animationDuration = (5 + Math.random()*6)+'s';
      b.style.animationDelay = (Math.random()*8)+'s';
      c.appendChild(b);
    }
  }
  makeBubbles('bubbles-cover', 10);
  makeBubbles('bubbles-info', 8);

  var card = document.getElementById('info-card');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          card.classList.add('reveal');
          io.disconnect();
        }
      });
    }, { threshold: .25 });
    io.observe(card);
  } else {
    card.classList.add('reveal');
  }
})();
