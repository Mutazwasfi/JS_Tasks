// Prompt the user for inputs
let op = prompt("Enter the operation (+, -, *, /):"); 
let a = Number(prompt("Enter 1st no.")); 
let b = Number(prompt("Enter 2nd no."));
result = 0;

// Perform the requested operation
switch(op) {
    case "+":
      console.log(a+b)
      result = a+b
      break;
    case "-":
        console.log(a-b)
        result = a-b
      break;
    case "*":
        console.log(a*b)
        result = a*b
        break;
    case "/":
        console.log(a/b)
        result = a/b
        break;
    default:
      console.log(invalid);
  }

  // Display the operation and result in the console
  console.log(a+op+b+"="+result);

  // Display the operation and the two numbers on the HTML page
document.write(a+op+b+"="+result);