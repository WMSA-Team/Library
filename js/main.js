'use strict';
function openFormButton(event){
  event.preventDefault();
  document.getElementById('myForm').style.display = 'block';

}
function closeButton(event){
  event.preventDefault();
  document.getElementById('myForm').style.display = 'none';
}
