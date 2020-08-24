const inception = document.querySelector('.movie-inception');
const theButterFlyEffect = document.querySelector('.movie-theButterFlyEffect');
const eternalSunshineOfTheSM = document.querySelector('.movie-eternalSunshineOfTheSM');
const blueVelvet = document.querySelector('.movie-blueVelvet');
const split = document.querySelector('.movie-split');


const plusOneButtonElement = document.querySelector('#Empezar');

function handlePlusOneButton(event) {
  const buttonElement = event.currentTarget;
  buttonElement.classList.toggle('movie--selected');

}



inception.addEventListener('click', handlePlusOneButton);
theButterFlyEffect.addEventListener('click', handlePlusOneButton);
eternalSunshineOfTheSM.addEventListener('click', handlePlusOneButton);
blueVelvet.addEventListener('click', handlePlusOneButton);
split.addEventListener('click', handlePlusOneButton);