'use strict';
// Wrap every letter in a span
// let randomQuote = document.getElementById('randomquotes');
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

var speedForward = 90, //Typing Speed
    speedWait = 5000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 100; //Backspace Speed

//Run the loop


function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("p"); //Subheader element
  
  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {
    
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      
    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {
      
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      
    }
    
  // If backspacing is enabled
  } else {
    
    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      
      // If paragraph still has text, continue erasing, otherwise switch to the header.
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
    // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else { 
      
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      
    }
  }
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

  typeWriter("output", quotes);

  let cardContainer = document.getElementById('fourBooks')

  // let cardContainer = document.getElementById('cardContainer');
  function render (ar) {
    cardContainer.innerHTML = ''
    for (let i=0; i<4; i++){
      let card = document.createElement('div');
            card.className = 'card'
            // create side div element
            let side = document.createElement('div');
            side.className = 'side'
            // create img element
            let imag = document.createElement('img');
            imag.src = ar[i].imag;
            let section1 = document.createElement('section');
            let h1 = document.createElement('h1')
            h1.innerText = ar[i].name;
            let p = document.createElement('p')
            p.innerText = ar[i].description;
            let sideBack = document.createElement('div')
            sideBack.className = 'side back'
            let action = document.createElement('section')
            action.className = 'action'
            let buy = document.createElement('button')
            buy.innerText = 'Buy'
            // rating.setAttribute('id', 'mamoon')
            side.appendChild(imag);
            card.appendChild(side);
            sideBack.appendChild(section1);
            section1.appendChild(h1);
            section1.appendChild(p);
            card.appendChild(sideBack);
            action.appendChild(buy);
            // action.appendChild(rating);
            sideBack.appendChild(action)
            cardContainer.appendChild(card)
            let star = document.createElement('div')
            star.className = 'star'
            let form = document.createElement('form')
            form.action = ''
    }
  }

  function Book (name,description,imag) {
    this.name = name;
    this.description = description;
    this.rating = 0;
    this.imag = imag;
    Book.arr.push(this);
}
Book.arr = []
let Hyper = new Book('HYPER SPACE','aaaaa','https://www.adobe.com/express/discover/ideas/media_1e0050318770e4a770caf5515f8120a3ea48c7c07.png?width=2000&format=webply&optimize=medium')
let WHAT = new Book ('WHAT IF', 'any', 'https://dboyle93.files.wordpress.com/2014/05/the-road-cover-basic4.png')
let DARK = new Book ('DARK MATTER','walaa','../img/SCIENCEIMG/DARK MATTER AND THE DINOSTORS.jpg');
let ABRIEF = new Book ('ABRIEF HISTORY OF TIME', 'shahed', '../img/SCIENCEIMG/ABRIEF HISTORY OF TIME.jpg')
render(Book.arr);







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