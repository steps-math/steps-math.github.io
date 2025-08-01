// src/js/answer-checker-init.js

document.addEventListener('DOMContentLoaded', function() {
    setupMultipleChoice();
    setupHints();
});

let lastAnswers = {};
let feedbackTimeouts = {};

function checkAnswer(inputId, correctAnswer, answerType, options = {}) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById('feedback-' + inputId);

    if (!input || !feedback) return;

    const userAnswer = input.value.trim();
    if (!userAnswer) {
        showFeedback(feedback, 'Please enter an answer', 'error', inputId, userAnswer);
        return;
    }

    const result = window.answerChecker.check(userAnswer, correctAnswer, answerType, options);
    showFeedback(feedback, result.message, result.correct ? 'correct' : 'incorrect', inputId, userAnswer);
}

function checkMultipleChoice(questionName, correctAnswer) {
    const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
    const feedback = document.getElementById('feedback-' + questionName);

    if (!selectedOption) {
        showFeedback(feedback, 'Please select an answer', 'error', questionName, '');
        return;
    }

    const result = window.answerChecker.checkMultipleChoice(selectedOption.value, correctAnswer);
    showFeedback(feedback, result.message, result.correct ? 'correct' : 'incorrect', questionName, selectedOption.value);
}

function showFeedback(element, message, type, id = null, answer = null) {
    element.textContent = message;
    element.className = `answer-feedback ${type} show`;

    // Only set up timeout functionality if id is provided
    if (id) {
        // Clear any existing timeout
        if (feedbackTimeouts[id]) {
            clearTimeout(feedbackTimeouts[id]);
        }
        
        // Set a new timeout to hide the feedback after 4 seconds
        feedbackTimeouts[id] = setTimeout(() => {
            element.classList.remove('show');
        }, 4000);
        
        // Update the last answer
        if (answer !== null) {
            lastAnswers[id] = answer;
        }
    } else {
        // Fallback timeout for 3-parameter calls
        setTimeout(() => {
            element.classList.remove('show');
        }, 5000);
    }
}

function setupMultipleChoice() {
    const options = document.querySelectorAll('.multiple-choice-option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            const siblings = this.parentNode.querySelectorAll('.multiple-choice-option');
            siblings.forEach(sib => sib.classList.remove('selected'));
            this.classList.add('selected');

            const radio = this.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });
}

function setupHints() {
    // Hint functionality is handled by toggleHint function
}

function toggleHint(hintId) {
    const hint = document.getElementById(hintId);
    if (hint) {
        hint.classList.toggle('show');
    }
} 