let mainIMG = document.getElementById('mainIMG')
let mainName = document.getElementById('mainName');
let mainYear = document.getElementById('mainYear');
let mainType = document.getElementById('mainType');
let mainDesc = document.getElementById('mainDesc');

let thisBook = JSON.parse(localStorage.getItem('pickedBook'));
console.log(thisBook);

mainIMG.src = thisBook.imag;
mainName.innerText = thisBook.name;
mainYear.innerText = thisBook.year;
mainType.innerText = thisBook.type;
mainDesc.innerText = thisBook.description;