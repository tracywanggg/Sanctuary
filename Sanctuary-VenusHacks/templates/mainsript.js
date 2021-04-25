function userInput () {
    var input = document.getElementById('input').value;
    var result = document.getElementById('result');
  
         result.textContent = input;

  }
  
  submitButton.addEventListener('click', userInput, false);
  