/**
 * Solution Form Generator for STEPs Math Course
 * Automatically generates forms from simple markdown syntax
 */

class SolutionFormGenerator {
    constructor() {
        this.formId = 'solution-form';
        this.lectureId = '';
        this.questions = [];
        this.studentInfoContainer = null;
    }

    /**
     * Initialize the solution form from markdown data
     */
    init(lectureId, questions = []) {
        this.lectureId = lectureId;
        this.questions = questions;
        this.generateStudentInfo();
        this.setupFormHandling();
    }

    /**
     * Generate student information section at the beginning
     */
    generateStudentInfo() {
        this.studentInfoContainer = document.getElementById('student-info-container');
        if (!this.studentInfoContainer) return;

        const studentInfoHTML = `
            <div class="student-info-section">
                <h3>Student Information</h3>
                <div class="form-group">
                    <label for="student-name">Full Name *</label>
                    <input type="text" id="student-name" name="studentName" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="kaust-id">KAUST ID *</label>
                    <input type="text" id="kaust-id" name="kaustId" class="form-control" required>
                </div>

                <div class="form-group-checkbox">
                    <input type="checkbox" id="remember-me">
                    <label for="remember-me">Remember my name and ID on this device</label>
                </div>
            </div>
        `;

        this.studentInfoContainer.innerHTML = studentInfoHTML;
    }

    /**
     * Generate a question with submit button
     */
    generateQuestion(questionData, questionIndex) {
        const questionId = `q${questionIndex}`;
        const rows = questionData.rows || 5;
        const placeholder = questionData.placeholder || '';
        
        return `
            <div class="question-section">
                <label for="${questionId}">
                    <strong>Question ${questionIndex}:</strong> ${questionData.text}
                </label>
                <textarea 
                    id="${questionId}" 
                    name="${questionData.name || `Question ${questionIndex} Answer`}" 
                    class="form-control" 
                    rows="${rows}"
                    placeholder="${placeholder}"></textarea>
                
                <button type="button" class="submit-question-button" onclick="solutionFormGenerator.submitQuestion(${questionIndex})">
                    Submit Question ${questionIndex}
                </button>
                <div id="status-${questionId}" class="question-status"></div>
            </div>
        `;
    }

    /**
     * Generate question input fields
     */
    generateQuestionFields() {
        return this.questions.map((question, index) => {
            return this.generateQuestion(question, index + 1);
        }).join('');
    }

    /**
     * Set up form handling and localStorage functionality
     */
    setupFormHandling() {
        // Pre-fill form from localStorage
        this.loadSavedData();
    }

    /**
     * Load saved data from localStorage
     */
    loadSavedData() {
        const studentNameInput = document.getElementById('student-name');
        const kaustIdInput = document.getElementById('kaust-id');
        const rememberMeCheckbox = document.getElementById('remember-me');

        if (!studentNameInput || !kaustIdInput || !rememberMeCheckbox) return;

        const savedName = localStorage.getItem('studentName');
        const savedKaustId = localStorage.getItem('kaustId');

        if (savedName) {
            studentNameInput.value = savedName;
        }
        if (savedKaustId) {
            kaustIdInput.value = savedKaustId;
        }
        if (savedName || savedKaustId) {
            rememberMeCheckbox.checked = true;
        }

        // Set up remember me functionality
        rememberMeCheckbox.addEventListener('change', () => {
            if (rememberMeCheckbox.checked) {
                localStorage.setItem('studentName', studentNameInput.value);
                localStorage.setItem('kaustId', kaustIdInput.value);
            } else {
                localStorage.removeItem('studentName');
                localStorage.removeItem('kaustId');
            }
        });

        // Auto-save when inputs change
        studentNameInput.addEventListener('input', () => {
            if (rememberMeCheckbox.checked) {
                localStorage.setItem('studentName', studentNameInput.value);
            }
        });

        kaustIdInput.addEventListener('input', () => {
            if (rememberMeCheckbox.checked) {
                localStorage.setItem('kaustId', kaustIdInput.value);
            }
        });
    }

    /**
     * Submit a single question
     */
    submitQuestion(questionIndex) {
        console.log(`Submitting question ${questionIndex}...`);
        
        const studentNameInput = document.getElementById('student-name');
        const kaustIdInput = document.getElementById('kaust-id');
        const questionTextarea = document.getElementById(`q${questionIndex}`);
        const statusDiv = document.getElementById(`status-q${questionIndex}`);

        console.log('Found elements:', {
            studentNameInput: !!studentNameInput,
            kaustIdInput: !!kaustIdInput,
            questionTextarea: !!questionTextarea,
            statusDiv: !!statusDiv
        });

        // Validate student information
        if (!studentNameInput.value.trim()) {
            alert('Please enter your full name first.');
            studentNameInput.focus();
            return;
        }

        if (!kaustIdInput.value.trim()) {
            alert('Please enter your KAUST ID first.');
            kaustIdInput.focus();
            return;
        }

        // Validate question answer
        if (!questionTextarea.value.trim()) {
            alert('Please enter an answer before submitting.');
            questionTextarea.focus();
            return;
        }

        // Update localStorage if remember me is checked
        const rememberMeCheckbox = document.getElementById('remember-me');
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('studentName', studentNameInput.value);
            localStorage.setItem('kaustId', kaustIdInput.value);
        }

        statusDiv.className = 'question-status';
        statusDiv.textContent = 'Submitting...';

        // Google Apps Script URL
        const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbz1me1rK02MEeILEAhrYMpkcoPp189gua8vxx-n5j6lCXQ6q9amS_QAQKwMRpC4bLBTeQ/exec';

        // Get question text from either the data or the label
        let questionText = '';
        if (this.questions && this.questions[questionIndex - 1]) {
            questionText = this.questions[questionIndex - 1].text;
        } else {
            // Fallback: get question text from the label
            const questionLabel = document.querySelector(`label[for="q${questionIndex}"]`);
            if (questionLabel) {
                questionText = questionLabel.textContent.replace(/^Question \d+:\s*/, '');
            }
        }

        const data = {
            lectureId: this.lectureId || document.title,
            studentName: studentNameInput.value,
            kaustId: kaustIdInput.value,
            questionNumber: questionIndex,
            questionText: questionText,
            answer: questionTextarea.value,
            timestamp: new Date().toISOString(),
            lecture: this.lectureId || document.title
        };

        fetch(googleAppScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            redirect: 'follow',
        })
        .then(() => {
            console.log('Submission successful, updating status...');
            statusDiv.className = 'question-status success';
            statusDiv.textContent = 'Successfully submitted!';
            statusDiv.style.opacity = '1';
            
            // Keep the answer in the textarea (don't clear it)
            // questionTextarea.value = ''; // Removed this line
            
            // Hide success message after 8 seconds (longer duration)
            setTimeout(() => {
                statusDiv.className = 'question-status';
                statusDiv.textContent = '';
                statusDiv.style.opacity = '0';
            }, 8000);
        })
        .catch(error => {
            console.error('Error:', error);
            statusDiv.className = 'question-status error';
            statusDiv.textContent = 'An error occurred. Please try again.';
            statusDiv.style.opacity = '1';
            
            // Hide error message after 8 seconds (longer duration)
            setTimeout(() => {
                statusDiv.className = 'question-status';
                statusDiv.textContent = '';
                statusDiv.style.opacity = '0';
            }, 8000);
        });
    }
}

// Global instance
window.solutionFormGenerator = new SolutionFormGenerator();

// Helper function to generate a single question in markdown
function generateQuestionMarkdown(questionData, questionIndex) {
    const questionId = `q${questionIndex}`;
    const rows = questionData.rows || 5;
    const placeholder = questionData.placeholder || '';
    
    return `
<div class="question-section">
    <label for="${questionId}">
        <strong>Question ${questionIndex}:</strong> ${questionData.text}
    </label>
    <textarea 
        id="${questionId}" 
        name="${questionData.name || `Question ${questionIndex} Answer`}" 
        class="form-control" 
        rows="${rows}"
        placeholder="${placeholder}"></textarea>
    
    <button type="button" class="submit-question-button" onclick="solutionFormGenerator.submitQuestion(${questionIndex})">
        Submit Question ${questionIndex}
    </button>
    <div id="status-${questionId}" class="question-status"></div>
</div>
    `;
}

// Auto-initialize if data is present
document.addEventListener('DOMContentLoaded', function() {
    // Check if solution form data is present in the page
    const formData = window.solutionFormData;
    if (formData) {
        window.solutionFormGenerator.init(
            formData.lectureId, 
            formData.questions
        );
    }
    
    // Also initialize if student info container exists (for embedded questions)
    const studentInfoContainer = document.getElementById('student-info-container');
    if (studentInfoContainer && !window.solutionFormData) {
        // Initialize just the student info and form handling for embedded questions
        window.solutionFormGenerator.generateStudentInfo();
        window.solutionFormGenerator.setupFormHandling();
    }
}); 