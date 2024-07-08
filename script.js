function startQuiz() {
    document.getElementById('quiz-question').innerText = 'What year was Subway Surfers released?';
    const answerButton = document.createElement('button');
    answerButton.innerText = 'Answer';
    answerButton.onclick = showAnswer;
    document.getElementById('interactive').appendChild(answerButton);
}

function showAnswer() {
    alert('Subway Surfers was released in 2012!');
}
