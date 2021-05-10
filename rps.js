function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(rpsRandom());
    var result = decideWinner(humanChoice,botChoice);
    var message = getMessage(result);
    rpsFrontend(humanChoice, botChoice, message);
}

function rpsRandom() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['rock','paper','scissor'][number];
}

function decideWinner(humanChoice,botChoice) {
    var rpsDatabase = {
        'rock' : {'rock': 0.5, 'paper': 0, 'scissor': 1},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor' : {'rock': 0, 'paper': 1, 'scissor': 0.5}
    };
    var yourScore = rpsDatabase[humanChoice][botChoice];
    var botScore = rpsDatabase[botChoice][humanChoice];
    return [yourScore, botScore];
}

function getMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return {'message' : 'You lost!', 'color' : 'red'};
    }
    else if (yourScore === 0.5) {
        return {'message' : 'Game tied!', 'color' : 'yellow'};
    }
    else {
        return {'message' : 'You won!', 'color' : 'green'};
    }
}

function rpsFrontend(humanChoice, botChoice, message) {
    var imgDatabase = {
    'rock' : document.getElementById('rock').src,
    'paper' : document.getElementById('paper').src,
    'scissor' : document.getElementById('scissor').src
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src ='" + imgDatabase[humanChoice] + "'>";
    document.getElementById('flex-div').appendChild(humanDiv);

    messageDiv.innerHTML = "<h1 style='color :" + message['color'] + "; font-size : 60px;'>" + message['message'] + "</h1>";
    document.getElementById('flex-div').appendChild(messageDiv);

    botDiv.innerHTML = "<img src ='" + imgDatabase[botChoice] + "'>";
    document.getElementById('flex-div').appendChild(botDiv);
}