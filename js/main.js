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