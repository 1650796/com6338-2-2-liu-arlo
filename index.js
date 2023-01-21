// Your code here
function greet() {
    let name = prompt("What is your name?");
    if (name != null) {
        alert ("Hello, " + name);
    }
    
    let userAge = prompt("How old are you?");
    console.log(parseInt(userAge));

    let answer = confirm("Has your birthday passed this year? \nOK for 'yes', Cancel for 'no'.");
    if (answer == true) {
        alert ("You were born in " + (new Date().getFullYear() - userAge))
    } else {
        alert ("You were born in " + (new Date().getFullYear() - userAge - 1))
    }
}

