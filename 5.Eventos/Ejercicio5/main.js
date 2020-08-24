const isra = document.querySelector('.teacher--isra');
const tuerto = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');

const plusOneButtonElement = document.querySelector('#Empezar');

function handlePlusOneButton(event) {
  
  const buttonElement = event.currentTarget;
  buttonElement.classList.toggle('teacher--selected');
  buttonElement.classList.toggle('favorite--selected');
}



isra.addEventListener('click', handlePlusOneButton);
tuerto.addEventListener('click', handlePlusOneButton);
nasi.addEventListener('click', handlePlusOneButton);




const text = document.querySelector('.favorite');




function handlePlusOneB(event) {
  
  const buttonElement = event.currentTarget;
  
  buttonElement.classList.toggle('favorite--selected');
}



text.addEventListener('click', handlePlusOneB);