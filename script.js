document.getElementById('spin').addEventListener('click', function() {
    var input = document.getElementById('input').value;
    var display = document.getElementById('display');
  
    if (input === '') {
      display.textContent = 'Please enter a number.';
      return;
    }
  
    var maxNumber = parseInt(input);
    var speed = 50; // Adjust initial speed
    var acceleration = 30; // Adjust acceleration
    var startTime = Date.now();
    
    function randomize() {
      var randomNum = Math.floor(Math.random() * (maxNumber + 1));
      display.textContent = randomNum;
      speed += acceleration;
      if (Date.now() - startTime < 5000) { // Stop after approximately 5 seconds
        setTimeout(randomize, speed);
      } else {
        display.classList.add('blinking');
      }
    }
    
    randomize();
  });
  