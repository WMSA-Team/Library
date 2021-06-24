'use strict';
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

function getRandomQuotes(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);}
    