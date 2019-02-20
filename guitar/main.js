function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-string="${e.keyCode}"]`);
    const string = document.querySelector(`div[data-string="${e.keyCode}"]`);
    if (!audio) return;

    string.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const strings = Array.from(document.querySelectorAll('.string'));
  strings.forEach(string => string.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);