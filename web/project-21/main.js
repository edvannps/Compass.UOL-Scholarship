
let checkButton = document.getElementById('check-button');
let ageInput = document.getElementById('age-input');

checkButton.addEventListener('click', function() {
  let age = Number(ageInput.value);
  let message = (age >= 18) ? 'You are an adult' : 'You are a minor';
  alert(message);
  ageInput.value = '';
});