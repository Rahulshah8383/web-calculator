let input = document.getElementById('inputBox'); // Get the input element
let buttons = document.querySelectorAll('button'); // Get all the buttons

let string = ""; // Initialize a string to store the input
let arr = Array.from(buttons); // Convert the buttons NodeList into an array

arr.forEach(button => {
    button.addEventListener('click', (e) =>{ // Add a click event listener to each button
        if(e.target.innerHTML == '='){ // If the button is the equals sign
            string = eval(string); // Evaluate the input string
            input.value = string; // Display the result in the input field
        }

        else if(e.target.innerHTML == 'AC'){ // If the button is the clear button
            string = ""; // Clear the input string
            input.value = string; // Clear the input field
        }
        else if(e.target.innerHTML == 'DEL'){ // If the button is the delete button
            string = string.substring(0, string.length-1); // Remove the last character from the input string
            input.value = string; // Update the input field
        }
        else{
            string += e.target.innerHTML; // Append the button's text to the input string
            input.value = string; // Update the input field
        }
        
    })
})
