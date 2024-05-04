function generateFibonacci() {
  var numTerms;

  do {
    numTerms = prompt("Enter the number of terms in the Fibonacci sequence (less than 100):");

    if (numTerms === null) {
      return; 
    }

    numTerms = parseInt(numTerms);

    if (isNaN(numTerms) || numTerms <= 0 || numTerms >= 100) {
      alert("Please enter a valid integer less than 100.");
    }
  } while (isNaN(numTerms) || numTerms <= 0 || numTerms >= 100);

  var fibonacciSequence = [];
  var a = 0, b = 1;
  fibonacciSequence.push(a, b);

  for (var i = 2; i < numTerms; i++) {
    var c = a + b;
    fibonacciSequence.push(c);
    a = b;
    b = c;
  }

  alert("Fibonacci Sequence: " + fibonacciSequence.join(", "));

  
  var playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    generateFibonacci();
  }
}

generateFibonacci(); 