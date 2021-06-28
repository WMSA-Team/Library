
let container = document.getElementById('container');

function render (ar) {
    container.innerHTML = ''
    for (let i=0; i<ar.length; i++){
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
            p.innerText = `${ar[i].description.slice(0,99)}.........`;
            let sideBack = document.createElement('div')
            sideBack.className = 'side back'
            let action = document.createElement('section')
            action.className = 'action'
            let buy = document.createElement('button')
            buy.innerText = 'More Info'
            let a = document.createElement('a')
            a.href = './book.html'
            a.appendChild(buy)
            buy.setAttribute('id',ar[i].name)
            side.appendChild(imag);
            card.appendChild(side);
            sideBack.appendChild(section1);
            section1.appendChild(h1);
            section1.appendChild(p);
            card.appendChild(sideBack);
            action.appendChild(a);
            sideBack.appendChild(action)
            container.appendChild(card)
            let star = document.createElement('div')
            star.className = 'star'
            let form = document.createElement('form')
            form.action = ''
    }
  }



let bookArray = JSON.parse(localStorage.getItem('pickedCat'))
// console.log(bookArray);
render(bookArray)
let Books = JSON.parse(localStorage.getItem('Book.arr'))
function pickaBooks (ev) {
  // const checkName = (array) => array.name === e.target.id;
  if (ev.target.innerText === 'More Info') {
    let index = Books.map(function(x) {return x.name; }).indexOf(ev.target.id);
    localStorage.setItem('pickedBook', JSON.stringify(Books[index]))

    // window.location.href = '../book.html'

    //window.location.href = '../Library/book.html'

    // console.log(ev.target)
   }
}
// console.log(Book)
container.addEventListener('click',pickaBooks)
let type = document.getElementById('type')
type.innerText = bookArray[0].type;