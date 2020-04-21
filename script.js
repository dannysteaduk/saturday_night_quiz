function getRandom() {
    return questionsAndAnswers[Math.floor(questionsAndAnswers.length * Math.random())];
};

for (i=1; i<=20; i++) {
    
    // get random object and assign it
    getRandom();
    let random = getRandom();

    // questions list
    let questionsList = document.querySelector('#questions-list');

    // box
    let box = document.createElement('div');
    questionsList.appendChild(box);
    box.classList.add('box');

    // counter
    let counter = document.createElement('h4');
    counter.textContent = 'Question ' + i;
    box.appendChild(counter);

    // question
    let question = document.createElement('h2');
    question.textContent = random.question;
    box.appendChild(question);

    // placeholder
    let placeholder = document.createElement('h4');
    placeholder.textContent = 'Show Answer +';
    box.appendChild(placeholder);

    // answer
    let answer = document.createElement('h4');
    answer.textContent = random.answer;
    box.appendChild(answer);
    answer.classList.add('hide', 'answer');
    
    // show answer
    placeholder.onclick = function() {
        answer.classList.remove('hide');
        placeholder.classList.add('hide')
    };
};

function startQuiz() {

    // get questions list
    questionsList = document.querySelector('#questions-list');

    // hide intro
    intro.classList.add('hide');

    // show questions
    questionsList.classList.remove('hide');

    // show back button
    back.classList.add('show');

};