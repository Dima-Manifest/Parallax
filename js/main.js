//Создаём переменные 
let moon = document.getElementById('moon');
let text = document.getElementById('text');
let train = document.getElementById('train');
let man = document.getElementById('man-out');
let desert_moon = document.getElementById('desert_moon');

window.addEventListener('scroll', () => { 
  let value = window.scrollY;
  moon.style.top = value * 0.9 + 'px';
  text.style.top = 80 + value * -0.13 + '%';
  train.style.left =  value * 1.2 + 'px';
  man.style.left =  value * 0.7 + 'px';
  desert_moon.style.top = value * 0.3 + 'px';
})