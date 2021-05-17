// Connects button 'verify' to the function 'verifyAge'
document.getElementById('enter').addEventListener('click', enterAge)

// Creates a variable named "age" and sets it to 0.
let age = 0

function enterAge () {
  // Gets the age that the user inputs and stores it in the variable 'age'. Sets it to an integer
  age = document.getElementById('age').value
  age = parseInt(age)

  // Decides if the user is old enough to watch a certain movie and places them in an age category to tell them what type of movie they can watch alone.
  if (age >= 14) {
    document.getElementById('text').innerHTML = 'Looks like youre old enough to play this game! Click on the picture to get to the website!'
 }  else if (age >= 0) {
    document.getElementById('text').innerHTML = 'Looks like youre not old enough to play this game yet, please look for a different game!'
  }
}
