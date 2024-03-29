'use strict';

var tl = gsap.timeline();
tl.fromTo('.js-main-title', {
  x: '-50%'
}, {
  x: 0,
  duration: 2.2,
  ease: 'elastic.out(1,0.3)'
}).fromTo('.js-movie', {
  y: '50%',
  opacity: 0
}, {
  y: 0,
  duration: 0.8,
  opacity: 1,
  delay: 2.0
});

// 一文字ずつspanで囲む方法 生のJavaScript
var textWrap = document.querySelectorAll('.js-span');
textWrap.forEach(function (t) {
  return t.innerHTML = t.textContent.replace(/\S/g, '<span>$&</span>');
});
gsap.fromTo('.js-span span', {
  opacity: 0,
  x: '-10px',
  scale: 10
}, {
  x: 0,
  scale: 1,
  opacity: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.js-about',
    start: 'top 80%',
    markers: true
  }
});