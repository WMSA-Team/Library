'use strict'




/// mamoun 
///this function and event handler to make the content change with each category of the check boxes
let checkboxes = document.querySelectorAll("input[type=checkbox]");
let cardContainer = document.getElementById('cardContainer');
console.log(cardContainer);
console.log(cardContainer);

function render (ar) {
    cardContainer.innerHTML = ''
    for (let i=0; i<ar.length; i++) {
        //this line will check all the book we have checked and render them on the cardContainer section
        for (let j=0; j<Books.arr.cat.length; j++) {
            //creat card div element
            let card = document.createElement('div').className('card');
            // create side div element
            let side = document.createElement('div').className('sid');
            // create img element
            let imag = document.createElement('img');
            imag.src = Books.arr.cat[j].src;
            let section1 = document.createElement('section');
            let h1 = document.createElement('h1')
            h1.innerText = Books.arr.cat[j].title;
            let p = document.createElement('p')
            p.innerText = Books.arr.cat[j].desc;
            let section2 = document.createElement('section')

            let buy = document.createElement('button')
            buy.innerText = 'Buy'
            let rate = document.createElement('button')
            rate.innerText = 'Rate'
            // appending the img to the side
            side.appendChild(imag);
            card.appendChild(side);
            section1.appendChild(h1)
            section1.appendChild(p)
            card.appendChild(section1)
            section2.appendChild(buy)
            section2.appendChild(rate)
            card.appendChild(section2)
            cardContainer.appendChild(card)



            
        }
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
    console.log(bookCat);
    // render (bookCat);
}


//////End of mamoon Code


