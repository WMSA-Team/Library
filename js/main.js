
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




'use strict'


function Books(name,description,pagenumber,rateing,img){
    this.name = name;
    this.description = description;
    this.pagenumber = pagenumber;
    this.rateing = rateing;
    this.img = img;
    this.arr.push(this);
}

 Books.arr =['HYPER SPACE','WHAT IF','DARK MATTER AND THE DINOSTORS','ABRIEF HISTORY OF TIME','THE WRIGHT BROTHERS','MAKING CONTACT',
'THE DEMON-HAUNTED WORLD','IN LINITE POWERS','PHILOSOPHY OF SCIENCE','A SHORT HISTORY','100 THINGS CODING','A CRACK IN CREATION',
'A STROPHYSICS','THE DREAMT LAND','THE MAD SCIENCE BOOK','THE BOOK OF WHY','THE SELFISH GENE','CARL SAGAN COSMOS','DATA SCIENCE',
'ALAB OF ONES OWN','WORLD HISTORY','ANCIENT WORLD','THE BOOK IN BRITAIN','THE SHADOW KING','FALL OF GIANTS','GUNS,GERMS & STEEL','AN ORPHANS WAR','THE AGE AUGUSTUS','HAMILTION','THE FOUNTAINS OF SILENCE','BLOOD SUGAR','ADOLF HITLER','LOST ISLAMIC HISTORY',
'THE POWER OF BABEL','THE TOWER OF BABEL','MOSQUES','HOMAGE TO AL-ANDALUS','ANCIENT EGYPT',
'THE BOOK OF THE PHARAOHS','THE GOLDEN AGE',
 ];

Books.prototype.randomBook = function(){

    for ( let i = 0; i < book.length;i++){

        let random = Math.ceil(getRandombook(this.book,))
    }
}


/*
function changeToVote(){
    
    let es = document.getElementsByClassName("side back")
    for(let i=0;i<es.length;i++){
        let randName = Math.random();
        let id1 = Math.random();
        let id2 = Math.random();
        let id3 = Math.random();
        let id4 = Math.random();
        let id5 = Math.random();
        let rate = `
        <div class="rate">
        <button>aaa</button>

        <input type="radio" id="${id1}" name="${randName}" value="5" />
        <label for="${id1}" title="text">5 stars</label>
        <input type="radio" id="${id2}" name="${randName}" value="4" />
        <label for="${id2}" title="text">4 stars</label>
        <input type="radio" id="${id3}" name="${randName}" value="3" />
        <label for="${id3}" title="text">3 stars</label>
        <input type="radio" id="${id4}" name="${randName}" value="2" />
        <label for="${id4}" title="text">2 stars</label>
        <input type="radio" id="${id5}" name="${randName}" value="1" />
        <label for="${id5}" title="text">1 star</label>
        </div>
        `;
        
        es[i].children[1].innerHTML = rate;
    }
}
changeToVote();
*/
