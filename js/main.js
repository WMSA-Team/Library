
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
'THE BOOK OF THE PHARAOHS','THE GOLDEN AGE','THE BOOK TITLE','NO PLACE LIKE HERE',
'THE LORD OF THE RINGS','HARRY POTTER','WORLD WHISPERER','DANIELLE STEEL','MEMORY',
'MOON DANCE','THE PAST IS RISING','IT','THE YEAR OF THE WITCHING','WATER & FLAME',
'THE SUMMER HOPE','WHITBY ROCK','THE ROAD','AMARA THE BRAVE','THE SWALLOWS','A DARKNESS OF DRAGONS',
'THE BEASTS HEART','TWILIGHT',''
 ];

Books.prototype.randomBook = function(){

    for ( let i = 0; i < book.length;i++){

        let random = Math.ceil(getRandombook(this.book,))
    }
}


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
