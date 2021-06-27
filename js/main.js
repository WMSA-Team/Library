
'use strict'

// window.addEventListener("DOMContentLoaded", setupForm);

let user;

// function setupForm(){
// 	const form = document.getElementById("login-form");
// 	form.addEventListener("submit", handleSubmit);
// }//setupForm

// function handleSubmit(event){
// 	event.preventDefault();
// 	const {
// 		username,
// 		password,
// 		login_type,
// 		result
// 	} = event.target;
// 	const processUser = login_type.value == "register" ? registerUser : loginUser;
// 	const response    = processUser(username.value, password.value);
// 	result.innerHTML  = response;
// }//handleSubmit

// function registerUser(username, password){
// 	window.localStorage.setItem("username", username);
// 	window.localStorage.setItem("password", password);
// 	return `New user ${username} now registered!`;
// }//registerUser

// function loginUser(username, password){
// 	const registeredUser     = window.localStorage.getItem("username");
// 	const registeredPassword = window.localStorage.getItem("password");
// 	const validUser     = username == registeredUser;
//     user=registeredUser
// 	const validPassword = password == registeredPassword;

// 	if(validUser && validPassword){
//          document.getElementById("login-form").innerHTML='';
//          appendText();

// 	}
//         else if(!validUser)     return `Username ${username} has not been registered. `;
// 	else if(!validPassword) return `Incorrect password for username ${username}`;
// }
// function appendText() {
//     let text = document.createElement('p');
//     const form = document.getElementById("login-form")
//     text.innerText= `welcome ${user} .`;
//     form.appendChild(text);
//   };


function openFormButton(event){
  event.preventDefault();
  document.getElementById('myForm').style.display = 'block';
}
function closeButton(event){
  event.preventDefault();
  document.getElementById('myForm').style.display = 'none';
}

/// mamoun
///this function and event handler to make the content change with each category of the check boxes
let checkboxes = document.querySelectorAll("input[type=checkbox]");
let cardContainer = document.getElementById('cardContainer');
let rating = document.getElementById('rating')
// rating.removeAttribute('id')
// console.log(rating);
function render (ar) {
    cardContainer.innerHTML = ''
    let count = 100000000;
    // for (let i=0; i<ar.length; i++) {
        //this line will check all the book we have checked and render them on the cardContainer section
        // for (let j=0; j<Books.arr.cat.length; j++) {
            //creat card div element
            for (let i = 0; i<ar.length; i++){
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
                // label.innerText = j
                form.appendChild(label);
            }
            star.appendChild(form)
            action.appendChild(star);
            }
        // }
        localStorage.setItem('Book.arr',JSON.stringify(Book.arr));
        localStorage.setItem('userName',JSON.stringify(userName));
    // }
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
    // console.log(bookCat);
    // render (bookCat);
}


//////End of mamoon Code

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



 let bk =['HYPER SPACE','WHAT IF','DARK MATTER AND THE DINOSTORS','ABRIEF HISTORY OF TIME','THE WRIGHT BROTHERS','MAKING CONTACT',
'THE DEMON-HAUNTED WORLD','IN LINITE POWERS','PHILOSOPHY OF SCIENCE','A SHORT HISTORY','100 THINGS CODING','A CRACK IN CREATION',
'A STROPHYSICS','THE DREAMT LAND','THE MAD SCIENCE BOOK','THE BOOK OF WHY','THE SELFISH GENE','CARL SAGAN COSMOS','DATA SCIENCE',
'ALAB OF ONES OWN','WORLD HISTORY','ANCIENT WORLD','THE BOOK IN BRITAIN','THE SHADOW KING','FALL OF GIANTS','GUNS,GERMS & STEEL','AN ORPHANS WAR','THE AGE AUGUSTUS','HAMILTION','THE FOUNTAINS OF SILENCE','BLOOD SUGAR','ADOLF HITLER','LOST ISLAMIC HISTORY',
'THE POWER OF BABEL','THE TOWER OF BABEL','MOSQUES','HOMAGE TO AL-ANDALUS','ANCIENT EGYPT',
'THE BOOK OF THE PHARAOHS','THE GOLDEN AGE',
 ];


//______________________________walaa___________________________________________//


function saveToLocalStorage() {

     JSON.parse(localStorage.setItem(Book.arr));

}
saveToLocalStorage();



function saveUser (){
    JSON.parse(localStorage.setItem(userName))
}
saveUser();


//___________________________________End____________________________________//