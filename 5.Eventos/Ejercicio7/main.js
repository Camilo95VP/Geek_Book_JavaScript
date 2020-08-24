const change = document.querySelector('.movies');





function handlePlusOneButton(event) {
  
  const buttonElement = event.delegation;
  buttonElement.classList.toggle('movie--selected');

}

change.addEventListener('click', handlePlusOneButton);

