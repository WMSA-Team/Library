
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 800,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    // opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

'use strict';
const quotes = ['So many books, so little time.'
,'There is no friend as loyal as a book.'
,'There is no friend as loyal as a book.'
,'A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.'
,'Only the very weak-minded refuse to be influenced by literature and poetry.'
,'a mind needs books as a sword needs a whetstone, if it is to keep its edge.'
,'a book which people praise and dont read.'
,'Sleep is good, he said, and books are better.'
,'Many people, myself among them, feel better at the mere sight of a book.'
,'The library is inhabited by spirits that come out of the pages at night.'
,'If you don’t like to read, you haven’t found the right book.'
,'When I have a little money, I buy books; and if I have any left, I buy food and clothes.'
,'That’s the thing about books. They let you travel without moving your feet.'
,'A book is a version of the world. If you do not like it, ignore it; or offer your own version in return.'];

function getRandomQuotes(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);}
    
