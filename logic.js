
// This array will hold the options for the game
// Fill in your options below
const options = ['Foot', 'Roach', 'Nuke'];

// This function takes in the userChoice and then prints the results to the console.
function playGame(userChoice) {
    // First remind the user of his/her choice

    console.log('You chose ' + userChoice + '.');

    // Now choose a random number between 0 and 2
    const rand = Math.floor(Math.random() * 3);

    // Then use this random number to give the computer a choice
    const compChoice = options[rand];

    // Now log the computer's choice to the console.
    console.log('The computer chose ' + compChoice + '.');

    // Now determine the winner using if/else statements
    if (compChoice == userChoice) {
        console.log('You tied.');
    } else {
        if (compChoice == 'Foot') {
            if (userChoice == 'Roach') {
                console.log('The Foot beats the Roach. You lose.');
            } else {
                console.log('The Nuke beats the Foot. You win!');
            }
        } else if (compChoice == 'Roach') {
            if (userChoice == 'Foot') {
                console.log('The Foot beats the Roach. You win!');
            } else {
                console.log('The Nuke beats the Foot. You lose.');
            }
        } else if (compChoice == 'Nuke') {
            if (userChoice == 'Foot') {
                console.log('The Nuke beats the Foot. You lose.');
            } else {
                console.log('The Roach beats the Nuke. You win!');
            }
        }
    }
}

























module.exports.playGame = playGame;
module.exports.options = options;
