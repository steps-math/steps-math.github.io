document.addEventListener('DOMContentLoaded', () => {
    const solutionForm = document.getElementById('solution-form');
    if (!solutionForm) return;

    // --- 1. Pre-fill form from localStorage on page load ---
    const studentNameInput = document.getElementById('student-name');
    const kaustIdInput = document.getElementById('kaust-id');
    const rememberMeCheckbox = document.getElementById('remember-me');

    const savedName = localStorage.getItem('studentName');
    const savedKaustId = localStorage.getItem('kaustId');

    if (savedName && studentNameInput) {
        studentNameInput.value = savedName;
    }
    if (savedKaustId && kaustIdInput) {
        kaustIdInput.value = savedKaustId;
    }
    // If they've saved data before, default the checkbox to be checked
    if (savedName || savedKaustId) {
        rememberMeCheckbox.checked = true;
    }

    // --- 2. Handle form submission --- 
    solutionForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // --- 3. Save or clear data based on checkbox ---
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('studentName', studentNameInput.value);
            localStorage.setItem('kaustId', kaustIdInput.value);
        } else {
            localStorage.removeItem('studentName');
            localStorage.removeItem('kaustId');
        }

        const statusDiv = document.getElementById('form-status');
        statusDiv.className = 'form-status';
        statusDiv.textContent = 'Submitting...';

        // IMPORTANT: Replace this with your actual Google Apps Script URL
        const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbz1me1rK02MEeILEAhrYMpkcoPp189gua8vxx-n5j6lCXQ6q9amS_QAQKwMRpC4bLBTeQ/exec';

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        data.timestamp = new Date().toISOString();
        data.lecture = data.lectureId || document.title;

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
            statusDiv.className = 'form-status success';
            statusDiv.textContent = 'Successfully submitted! Thank you.';
            
            // Clear only the answer fields (textareas) after successful submission
            solutionForm.querySelectorAll('textarea').forEach(textarea => {
                textarea.value = '';
            });
        })
        .catch(error => {
            console.error('Error:', error);
            statusDiv.className = 'form-status error';
            statusDiv.textContent = 'An error occurred. Please try again.';
        });
    });
});