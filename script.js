'use strict';
const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const closeModelButton = document.querySelector('.close');
const bodyButtons = document.querySelectorAll('.model-button');
// ===========< GENARIC FUNCTION >============
function hiddenTheModel() {
  overlay.classList.add('hidden');
  model.classList.add('hidden');
}
function showTheModel() {
  overlay.classList.remove('hidden');
  model.classList.remove('hidden');
}
// ========< SHOW THE MODEL >===========
bodyButtons.forEach(button => {
  button.addEventListener('click', showTheModel);
});
// ========< HIDE THE MODEL >===========
closeModelButton.addEventListener('click', hiddenTheModel);
overlay.addEventListener('click', hiddenTheModel);
//===< HIDE THE MODEL BY SCAPE KEY >===
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    hiddenTheModel();
  }
});
