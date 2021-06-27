'use strict';
// Wrap every letter in a span
let randomQuote = document.getElementById('randomquotes');


function h1Animation () {
  let textWrapper = document.querySelector('.ml6 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, '<span class=\'letter\'>$&</span>');
  anime.timeline({loop: false})
    .add({
      targets: '.ml6 .letter',
      translateY: ['1.1em', 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    }).add({
      targets: '.ml6',
      // opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000
    });
}

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


function randomQuotes () {
  let random = getRandomQuotes(1,quotes.length-1);
  randomQuote.innerHTML = quotes[random];
}

function getRandomQuotes(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);}


  function randomQ () {
randomQuotes();
h1Animation();
  }

  // mohammad code
  let events = document.getElementById('events')

  function eventHandler(e) {
    if(e.target.id === 'first' || e.target.id === 'sec'|| e.target.id === 'third'){
      if (e.target.id === 'first') {
        
        let heading = document.getElementById('aj')
        heading.innerText= `1980 LTUC Founded.`;
        let text = document.getElementById('pra')
        text.innerText= `Luminus Technical University College (LTUC) was established in 1980 under the name of Al Quds College and is part of Luminus Education Group.
         LTUC aims to offer unique programs based on identified market needs and employment requirements.`;
        let img = document.getElementById('img')
        img.src= `./img/aaaa.png`;
      }
  
      else if (e.target.id === 'sec') {
        
        let heading1 = document.getElementById('aj')
        heading1.innerText= `23/May/2021 Start of The couress  .`;
        let text1 = document.getElementById('pra')
        text1.innerText= `welcome sdasdasdsadasdadadaeqweqw mohammadsowardfk .`;
        let img1 = document.getElementById('img')
        img1.src= `./img/bg.jpeg`;
       }
  
       else if (e.target.id === 'third'){
        
        let heading2 = document.getElementById('aj')
        heading2.innerText= `27/June/2021 Created This Wire-Frame .`;
        let text2 = document.getElementById('pra')
        text2.innerText= `welcome sdasdasdsadasdadadaeqweqw ahmaadddddddddddddd .`;
        let img2 = document.getElementById('img')
        img2.src= `./img/book.png`;
       }

      }};

    events.addEventListener('click', eventHandler);