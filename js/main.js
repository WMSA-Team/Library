
'use strict'

let user;

function openFormButton(event){
  event.preventDefault();
  document.getElementById('myForm').style.display = 'block';
}
function closeButton(event){
  event.preventDefault();
  document.getElementById('myForm').style.display = 'none';
}

let checkboxes = document.querySelectorAll("input[type=checkbox]");
let cardContainer = document.getElementById('cardContainer');
let rating = document.getElementById('rating')
function render (ar) {
    cardContainer.innerHTML = ''
    let count = 100000000;
            for (let i = 0; i<ar.length; i++){
            let card = document.createElement('div');
            card.className = 'card'
            let side = document.createElement('div');
            side.className = 'side'
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
            side.appendChild(imag);
            card.appendChild(side);
            sideBack.appendChild(section1);
            section1.appendChild(h1);
            section1.appendChild(p);
            card.appendChild(sideBack);
            action.appendChild(buy);
            sideBack.appendChild(action)
            cardContainer.appendChild(card)
            let star = document.createElement('div')
            star.className = 'star'
            let form = document.createElement('form')
            form.action = ''
            for (let j=5; j> 0; j--) {
                count--;
                console.log(j,count);
                let label = document.createElement('label');
                let input = document.createElement('input');
                input.type = 'radio'
                input.id = `star${j+count}`
                input.value = j+count
                input.name = "rate"
                input.className = `star star-${j}`
                label.className = `star star-${j}`
                form.appendChild(input)
                label.setAttribute('for',`star${j+count}`) ;
                form.appendChild(label);
                if (ar[i].rating === j) {
                    input.checked = true;
                }
            }
            star.appendChild(form)
            action.appendChild(star);
            }
 }

checkboxes.forEach(checkbox => checkbox.addEventListener('change',change))
 let bookCat = []
function change (e) {
    // console.log(e.currentTarget.checked)
    // console.log(e.currentTarget.id)
    if (e.currentTarget.id === 'poem' || e.currentTarget.id === 'novels' || e.currentTarget.id === 'scientific' ||e.currentTarget.id === 'historical'){
        if (e.currentTarget.checked) {
            bookCat.push(e.currentTarget.id)
        }
        else {
            let index = bookCat.indexOf(e.currentTarget.id);
                bookCat.splice(index,1);
        }
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
DARK.rating = 3;
Hyper.rating = 5;
render(Book.arr);

