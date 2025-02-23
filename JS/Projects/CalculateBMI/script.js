const form = document.querySelector('form');
console.dir(form);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const weight = parseInt(form.querySelector('#weight').value);
  console.log(weight);

  const height = parseFloat(form.querySelector('#height').value);
  console.log(height);

  const errorMessage = form.querySelector('#error-message');
  const resultMessage = form.querySelector('#result');

  if (isNaN(weight) || weight <= 0) {
    errorMessage.textContent = 'Please enter a valid weight.';
    resultMessage.textContent = ''; 
  }

  else if (isNaN(height) || height <= 0) {
    errorMessage.textContent = 'Please enter a valid height.';
    resultMessage.textContent = ''; 
  }
  else {

    const result = (weight / (height * height)).toFixed(2);
    errorMessage.textContent = ''; 

    if (result < 18.5) {
      resultMessage.textContent = `Oops ${result}, you are underweight...😑😑`;
    }
    else if (result >= 18.5 && result <= 24.9) {
      resultMessage.textContent = `Great ${result}, you have normal weight!👍👍`;
    }
    else if (result >= 25 && result <= 29.9) {
      resultMessage.textContent = `Oops ${result}, you are overweight.😑😑`;
    }
    else {
      resultMessage.textContent = `Oops ${result}, you are obese.😑😑`;
    }
  }
});
