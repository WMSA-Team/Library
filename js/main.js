
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


function openFormButton(event) {
    event.preventDefault();
    document.getElementById('myForm').style.display = 'block';
}
function closeButton(event) {
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
function render(ar) {
    cardContainer.innerHTML = ''
    let count = 100000000;
    // for (let i=0; i<ar.length; i++) {
    //this line will check all the book we have checked and render them on the cardContainer section
    // for (let j=0; j<Books.arr.cat.length; j++) {
    //creat card div element
    for (let i = 0; i < ar.length; i++) {
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
        for (let j = 5; j > 0; j--) {
            count--;
            console.log(j, count);
            let label = document.createElement('label');
            let input = document.createElement('input');
            input.type = 'radio'
            input.id = `star${j + count}`
            input.value = j + count
            input.name = "rate"
            input.className = `star star-${j}`
            label.className = `star star-${j}`
            form.appendChild(input)
            label.setAttribute('for', `star${j + count}`);
            // label.innerText = j
            form.appendChild(label);
        }
        star.appendChild(form)
        action.appendChild(star);
    }
    // }
    // }
}

checkboxes.forEach(checkbox => checkbox.addEventListener('change', change))
let bookCat = []
function change(e) {
    // console.log(e.currentTarget.checked)
    // console.log(e.currentTarget.id)
    if (e.currentTarget.id === 'poem' || e.currentTarget.id === 'novels' || e.currentTarget.id === 'scientific' || e.currentTarget.id === 'historical') {
        if (e.currentTarget.checked) {
            bookCat.push(e.currentTarget.id)
        }
        else {
            let index = bookCat.indexOf(e.currentTarget.id);
            bookCat.splice(index, 1);
        }
    }
    // console.log(bookCat);
    // render (bookCat);
}


//////End of mamoon Code

function Book(name, description, imag, type) {
    this.name = name;
    this.description = description;
    this.rating = 0;
    this.imag = imag;
    this.type = type;
    Book.arr.push(this);
}
Book.arr = []
let Hyper = new Book('HYPER SPACE', 'aaaaa', '../img/SCIENCEIMG/HYPER SPACE.jpg');
let WHAT = new Book('WHAT IF', 'any', '../img/SCIENCEIMG/WHAT IF.jpg');
let DARK = new Book('DARK MATTER', 'walaa', '../img/SCIENCEIMG/DARK MATTER AND THE DINOSAURS.jpg');
let ABRIEF = new Book('ABRIEF HISTORY OF TIME', 'shahed', '../img/SCIENCEIMG/ABRIEF HISTORY OF TIME.jpg');
let BROTHERS = new Book('THE WRIGHT BROTHERS', 'aaaaaaa', '../img/SCIENCEIMG/THE WRIGHT BROTHERS.jpg');
let MAKING = new Book('MAKING CONTACT', 'aaaaaa', '../img/SCIENCEIMG/MAKING CONTACT');
let THE = new Book('THE DEMON-HAUNTED WORLD', 'aaaaaa', '../img/SCIENCEIMG/THE DEMON-HAUNTED WORLD.jpg');
let IN = new Book('IN LINITE POWERS', 'aaaaaa', '../img/SCIENCEIMG/IN LINITE POWERS.jpg');
let PHILOSOPHY = new Book('PHILOSOPHY OF SCIENCE', 'aaaaaa', '../img/SCIENCEIMG/PHILOSOPHY OF SCIENCE.jpg')
let SHORT = new Book('A SHORT HISTORY', 'aaaaaa', '../img/SCIENCEIMG/A SHORT HISTORY.jpg');
let THINGS = new Book('100 THINGS CODING', 'aaaaaa', '../img/SCIENCEIMG/100 THINGS CODING.jpg');
let CRACK = new Book('A CRACK IN CREATION', 'aaaaaa', '../img/SCIENCEIMG/A CRACK IN CREATION.jpg');
let ALAB = new Book('ALAB OF ONES OWN', 'aaaaaa', '../img/SCIENCEIMG/ALAB OF ONES OWN.jpg');
let STROPHYSICS = new Book('A STROPHYSICS', 'aaaaaa', '../img/SCIENCEIMG/A STROPHYSICS.jpg');
let DREAMT = new Book('THE DREAMT LAND', 'aaaaaa', '../img/SCIENCEIMG/THE DREAMT LAND.jpg');
let SCIENCE = new Book('THE MAD SCIENCE BOOK', 'aaaaaa', '../img/SCIENCEIMG/THE MAD SCIENCE BOOK.jpg');
let WHY = new Book('THE BOOK OF WHY', 'aaaaaa', '../img/SCIENCEIMG/THE BOOK OF WHY.jpg');
let GENE = new Book('THE SELFISH GENE', 'aaaaaa', '../img/SCIENCEIMG/THE SELFISH GENE.jpg');
let DATA = new Book('DATA SCIENCE', 'aaaaaa', '../img/SCIENCEIMG/DATA SCIENCE.jpg');
let WORLD = new Book('WORLD HISTORY', 'aaaaaa', '../img/HISTORYIMG/WORLD HISTORY.jpg');
let ANCIENT = new Book('ANCIENT WORLD', 'aaaaaa', '../img/HISTORYIMG/ANCIENT WORLD.jpg');
let BRITAIN = new Book('THE BOOK IN BRITAIN', 'aaaaaa', '../img/HISTORYIMG/THE BOOK IN BRITAIN.jpg');
let KING = new Book('THE SHADOW KING', 'aaaaaa', '../img/HISTORYIMG/THE SHADOW KING.jpg');
let GIANTS = new Book('FALL OF GIANTS', 'aaaaaa', '../img/HISTORYIMG/FALL OF GIANTS.jpg');
let GUNES = new Book('GUNES GERMS AND STEEL', 'aaaaaa', '../img/HISTORYIMG/GUNES GERMS AND STEEL.jpg');
let ORPHANS = new Book('AN ORPHANS WAR', 'aaaaaa', '../img/HISTORYIMG/AN ORPHANS WAR.jpg');
let AUGUSTUS = new Book('THE AGE AUGUSTUS', 'aaaaaa', '../img/HISTORYIMG/THE AGE AUGUSTUS.jpg');
let HAMILTION = new Book('HAMILTION', 'aaaaaa', '../img/HISTORYIMG/HAMILTION.jpg');
let FOUNTAINS = new Book('THE FOUNTAINS OF SILENCE', 'aaaaaa', '../img/HISTORYIMG/THE FOUNTAINS OF SILENCE.jpg');
let BLOOD = new Book('BLOOD SUGAR', 'aaaaaa', '../img/HISTORYIMG/BLOOD SUGAR.jpg');
let ADOLF = new Book('ADOLF HITLER', 'aaaaaa', '../img/HISTORYIMG/ADOLF HITLER.jpg');
let ISLAMIC = new Book('LOST ISLAMIC HISTORY', 'aaaaaa', '../img/HISTORYIMG/LOST ISLAMIC HISTORY.jpg');
let BABEL = new Book('THE POWER OF BABEL', 'aaaaaa', '../img/HISTORYIMG/THE POWER OF BABEL.jpg');
let TOWER = new Book('THE TOWER OF BABEL', 'aaaaaa', '../img/HISTORYIMG/THE TOWER OF BABEL.jpg');
let MOSQUES = new Book('MOSQUES', 'aaaaaa', '../img/HISTORYIMG/MOSQUES.jpg');
let HOMAGE = new Book('HOMAGE TO AL-ANDALUS', 'aaaaaa', '../img/HISTORYIMG/HOMAGE TO AL-ANDALUS.jpg');
let ANCIENT = new Book('ANCIENT EGYPT', 'aaaaaa', '../img/HISTORYIMG/ANCIENT EGYPT.jpg');
let PHARAOHS = new Book('THE BOOK OF THE PHARAOHS', 'aaaaaa', '../img/HISTORYIMG/THE BOOK OF THE PHARAOHS.jpg');
let GOLDEN = new Book('THE GOLDEN AGE', 'aaaaaa', '../img/HISTORYIMG/THE GOLDEN AGE.jpg');
let TITLE = new Book('THE BOOK TITLE', 'aaaaaa', '../img/NOVELSIMG/THE BOOK TITLE.jpg');
let HERE = new Book('NO PLACE LIKE HERE', 'aaaaaa', '../img/NOVELSIMG/NO PLACE LIKE HERE.jpg');
let RINGS = new Book('THE LORD OF THE RINGS', 'aaaaaa', '../img/NOVELSIMG/THE LORD OF THE RINGS.jpg');
let HARRY = new Book('HARRY POTTER', 'aaaaaa', '../img/NOVELSIMG/HARRY POTTER.jpg');
let WHISPERER = new Book('WORLD WHISPERER', 'aaaaaa', '../img/NOVELSIMG/WORLD WHISPERER.jpg');
let DANIELLE = new Book('DANIELLE STEEL', 'aaaaaa', '../img/NOVELSIMG/DANIELLE STEEL.jpg');
let MEMORY = new Book('MEMORY', 'aaaaaa', '../img/NOVELSIMG/MEMORY.jpg');
let MOON = new Book('MEMORY', 'aaaaaa', '../img/NOVELSIMG/MOON DANCE.jpg');
let RISING = new Book('THE PAST IS RISING', 'aaaaaa', '../img/NOVELSIMG/THE PAST IS RISING.jpg');
let IT = new Book('IT', 'aaaaaa', '../img/NOVELSIMG/IT.jpg');
let WITCHING = new Book('THE YEAR OF THE WITCHING', 'aaaaaa', '../img/NOVELSIMG/THE YEAR OF THE WITCHING.jpg');
let WATER = new Book('WATER & FLAME', 'aaaaaa', '../img/NOVELSIMG/WATER & FLAME.jpg');
let HOPE = new Book('THE SUMMER HOPE', 'aaaaaa', '../img/NOVELSIMG/THE SUMMER HOPE.jpg');
let WHITBY = new Book('WHITBY ROCK', 'aaaaaa', '../img/NOVELSIMG/WHITBY ROCK.jpg');
let ROAD = new Book('THE ROAD', 'aaaaaa', '../img/NOVELSIMG/THE ROAD.jpg');
let BRAVE = new Book('AMARA THE BRAVE', 'aaaaaa', '../img/NOVELSIMG/AMARA THE BRAVE.jpg');
let SWALLOWS = new Book('THE SWALLOWS', 'aaaaaa', '../img/NOVELSIMG/THE SWALLOWS.jpg');
let DRAGONS = new Book('A DARKNESS OF DRAGONS', 'aaaaaa', '../img/NOVELSIMG/A DARKNESS OF DRAGONS.jpg');
let HEART = new Book('THE BEASTS HEART', 'aaaaaa', '../img/NOVELSIMG/THE BEASTS HEART.jpg');
let TWI = new Book('TWILIGHT', 'aaaaaa', '../img/NOVELSIMG/TWILIGHT.jpg');
let SHAKESPEARS = new Book('SHAKESPEARS SONNETS', 'aaaaaa', '../img/POEMSIMG/SHAKESPEARS SONNETS.jpg');
let ARABIC = new Book('ARABIC POEMS', 'aaaaaa', '../img/POEMSIMG/ARABIC POEMS.jpg');
let ARAB = new Book('ARAB WOMEN', 'aaaaaa', '../img/POEMSIMG/ARAB WOMEN.jpg');
let NABATI = new Book('THE NABATI POETRY', 'aaaaaa', '../img/POEMSIMG/THE NABATI POETRY.jpg');
let PROSE = new Book('THE ARABIC PROSE POEM', 'aaaaaa', '../img/POEMSIMG/THE ARABIC PROSE POEM.jpg');
let SELECTED = new Book('SELECTED POEMS', 'aaaaaa', '../img/POEMSIMG/SELECTED POEMS.jpg');
let ANDALUSIA = new Book('POEMS OF ARAB ANDALUSIA', 'aaaaaa', '../img/POEMSIMG/POEMS OF ARAB ANDALUSIA.jpg');
let ALILB = new Book('AL-ILBIRI', 'aaaaaa', '../img/POEMSIMG/AL-ILBIRI.jpg');
let MYSTICAL = new Book('MYSTICAL POEMS', 'aaaaaa', '../img/POEMSIMG/MYSTICAL POEMS.jpg');
let PROPHET = new Book('THE PROPHET', 'aaaaaa', '../img/POEMSIMG/THE PROPHET.jpg');
let ENTERIN = new Book('ON ENTERING THE SEA', 'aaaaaa', '../img/POEMSIMG/ON ENTERING THE SEA.jpg');
let LIFE = new Book('WOMEN IN MY POETRY & MY LIFE', 'aaaaaa', '../img/POEMSIMG/WOMEN IN MY POETRY & MY LIFE.jpg');
let LOVE = new Book('ARABIAN LOVE POEM', 'aaaaaa', '../img/POEMSIMG/ARABIAN LOVE POEM.jpg');
let MUALLAQAT = new Book('THE MUALLAQAT', 'aaaaaa', '../img/POEMSIMG/THE MUALLAQAT.jpg');
let ANTHOLOGY = new Book('ANTHOLOGY OF CLASSICAL ARABIC POETRY', 'aaaaaa', '../img/POEMSIMG/ANTHOLOGY OF CLASSICAL ARABIC POETRY.jpg');
let MAJNUN = new Book('MAJNUN LEYLA', 'aaaaaa', '../img/POEMSIMG/MAJNUN LEYLA.jpg');
let MILK = new Book('MILK & HONEY', 'aaaaaa', '../img/POEMSIMG/MILK & HONEY.jpg');
let HAIKU = new Book('HAIKU POEMS', 'aaaaaa', '../img/POEMSIMG/HAIKU POEMS.jpg');















render(Book.arr);



let bk = ['HYPER SPACE', 'WHAT IF', 'DARK MATTER AND THE DINOSTORS', 'ABRIEF HISTORY OF TIME', 'THE WRIGHT BROTHERS', 'MAKING CONTACT',
    'THE DEMON-HAUNTED WORLD', 'IN LINITE POWERS', 'PHILOSOPHY OF SCIENCE', 'A SHORT HISTORY', '100 THINGS CODING', 'A CRACK IN CREATION',
    'A STROPHYSICS', 'THE DREAMT LAND', 'THE MAD SCIENCE BOOK', 'THE BOOK OF WHY', 'THE SELFISH GENE', 'CARL SAGAN COSMOS', 'DATA SCIENCE',
    'ALAB OF ONES OWN', 'WORLD HISTORY', 'ANCIENT WORLD', 'THE BOOK IN BRITAIN', 'THE SHADOW KING',
    'FALL OF GIANTS', 'GUNES GERMS AND STEEL', 'AN ORPHANS WAR', 'THE AGE AUGUSTUS', 'HAMILTION',
    'THE FOUNTAINS OF SILENCE',
    'BLOOD SUGAR', 'ADOLF HITLER', 'LOST ISLAMIC HISTORY',
    'THE POWER OF BABEL', 'THE TOWER OF BABEL', 'MOSQUES', 'HOMAGE TO AL-ANDALUS', 'ANCIENT EGYPT',
    'THE BOOK OF THE PHARAOHS', 'THE GOLDEN AGE', 'THE BOOK TITLE', 'NO PLACE LIKE HERE',
    'THE LORD OF THE RINGS', 'HARRY POTTER', 'WORLD WHISPERER', 'DANIELLE STEEL', 'MEMORY',
    'MOON DANCE', 'THE PAST IS RISING', 'IT', 'THE YEAR OF THE WITCHING', 'WATER & FLAME',
    'THE SUMMER HOPE', 'WHITBY ROCK', 'THE ROAD', 'AMARA THE BRAVE', 'THE SWALLOWS', 'A DARKNESS OF DRAGONS',
    'THE BEASTS HEART', 'TWILIGHT', 'PILLOW THOUGHTS', 'SHAKESPEARS SONNETS', 'ARABIC POEMS', 'ARAB WOMEN', 'THE NABATI POETRY',
    'THE ARABIC PROSE POEM', 'SELECTED POEMS', 'POEMS OF ARAB ANDALUSIA', 'AL-ILBIRI', 'MYSTICAL POEMS', 'THE PROPHET', 'MODERN ARABIC POETRY',
    'ON ENTERING THE SEA', 'WOMEN IN MY POETRY & MY LIFE', 'ARABIAN LOVE POEM', 'THE MUALLAQAT', 'ANTHOLOGY OF CLASSICAL ARABIC POETRY',
    'MAJNUN LEYLA', 'MILK & HONEY', 'HAIKU POEMS'
];
