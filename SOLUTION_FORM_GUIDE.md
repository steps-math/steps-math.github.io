# Solution Form Guide

This guide explains how to create solution forms using the new structure where student information is collected at the beginning and individual questions have their own submit buttons.

## New Structure

The new solution form structure has:
1. **Student Information Section** at the beginning of exercises (required)
2. **Individual Question Sections** with their own submit buttons
3. **Individual submission** for each question

## Basic Usage

### 1. Add Student Information Container

At the beginning of your exercises section:

```markdown
# Regular Exercises

<div id="student-info-container"></div>

### 1. Your First Exercise
```

### 2. Add Individual Questions

After each question you want students to submit:

```markdown
<div class="question-section">
    <label for="q1">
        <strong>Question 1:</strong> Your question text here
    </label>
    <textarea 
        id="q1" 
        name="Question Answer Name" 
        class="form-control" 
        rows="5"></textarea>
    
    <button type="button" class="submit-question-button" onclick="solutionFormGenerator.submitQuestion(1)">
        Submit Question 1
    </button>
    <div id="status-q1" class="question-status"></div>
</div>
```

### 3. Add the JavaScript Configuration

At the end of your markdown file:

```markdown
<script>
window.solutionFormData = {
    lectureId: "Your Lecture Title",
    questions: [
        {
            text: "Your question text here",
            name: "Question Answer Name",
            rows: 5
        }
    ]
};
</script>

<script src="/js/solution-form-init.js"></script>
```

## Question Object Properties

Each question in the `questions` array can have the following properties:

### Required Properties
- `text`: The question text that will appear as the label
- `name`: The name attribute for the form field (used in Google Sheets)

### Optional Properties
- `rows`: Number of rows for the textarea (default: 5)
- `placeholder`: Placeholder text for the textarea (default: empty)

## Important Notes

- **Student Information is Required**: Students must enter their name and KAUST ID before submitting any questions
- **Individual Submission**: Each question has its own submit button and status message
- **Validation**: The system validates that student information is provided before allowing submission
- **Auto-save**: Student information is automatically saved if "Remember me" is checked

## Examples

### Simple Question
```javascript
{
    text: "What is the derivative of x²?",
    name: "Derivative Answer",
    rows: 3
}
```

### Question with Placeholder
```javascript
{
    text: "Explain your reasoning for the above answer.",
    name: "Reasoning",
    rows: 8,
    placeholder: "Enter your detailed explanation here..."
}
```

### Multiple Questions
```javascript
window.solutionFormData = {
    lectureId: "Lecture 5: Derivatives",
    questions: [
        {
            text: "Find the derivative of f(x) = x³ + 2x² - 5x + 1",
            name: "Derivative Calculation",
            rows: 4
        },
        {
            text: "What is the slope of the tangent line at x = 2?",
            name: "Slope Calculation", 
            rows: 3
        },
        {
            text: "Explain why the derivative represents the rate of change.",
            name: "Conceptual Explanation",
            rows: 6,
            placeholder: "Provide a clear explanation..."
        }
    ]
};
```

### Complete Example with Questions

```markdown
# Regular Exercises

<div id="student-info-container"></div>

### 1. Derivative Practice

Find the derivative of $f(x) = x^3 + 2x^2 - 5x + 1$.

<div class="question-section">
    <label for="q1">
        <strong>Question 1:</strong> Find the derivative of f(x) = x³ + 2x² - 5x + 1
    </label>
    <textarea 
        id="q1" 
        name="Derivative Calculation" 
        class="form-control" 
        rows="4"></textarea>
    
    <button type="button" class="submit-question-button" onclick="solutionFormGenerator.submitQuestion(1)">
        Submit Question 1
    </button>
    <div id="status-q1" class="question-status"></div>
</div>

### 2. Conceptual Understanding

<div class="question-section">
    <label for="q2">
        <strong>Question 2:</strong> Explain why the derivative represents the rate of change.
    </label>
    <textarea 
        id="q2" 
        name="Conceptual Explanation" 
        class="form-control" 
        rows="6"
        placeholder="Provide a clear explanation..."></textarea>
    
    <button type="button" class="submit-question-button" onclick="solutionFormGenerator.submitQuestion(2)">
        Submit Question 2
    </button>
    <div id="status-q2" class="question-status"></div>
</div>

<script>
window.solutionFormData = {
    lectureId: "Lecture 5: Derivatives",
    questions: [
        {
            text: "Find the derivative of f(x) = x³ + 2x² - 5x + 1",
            name: "Derivative Calculation",
            rows: 4
        },
        {
            text: "Explain why the derivative represents the rate of change.",
            name: "Conceptual Explanation",
            rows: 6,
            placeholder: "Provide a clear explanation..."
        }
    ]
};
</script>

<script src="/js/solution-form-init.js"></script>
```

## Features

The solution form generator automatically provides:

1. **Student Information Section**: Name and KAUST ID inputs (required at the beginning)
2. **Remember Me**: Checkbox to save student info in localStorage
3. **Individual Question Submission**: Each question has its own submit button
4. **Validation**: Ensures student information is provided before allowing submission
5. **Auto-submission**: Sends data to Google Apps Script
6. **Success/Error Handling**: Individual status messages for each question
7. **Field Clearing**: Clears individual textareas after successful submission
8. **Auto-save**: Automatically saves student information as they type (if remember me is checked)

## File Structure

- `src/js/solution-form-init.js`: The form generator JavaScript
- `src/js/form-handler.js`: Original form handler (can be removed after migration)
- Your markdown files: Use the new simplified syntax

## Notes

- The form container must have the ID `solution-form-container`
- The script automatically initializes when `window.solutionFormData` is present
- All existing functionality (localStorage, Google Apps Script submission) is preserved
- The form styling remains the same as the original forms 