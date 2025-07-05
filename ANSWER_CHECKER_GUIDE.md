# Answer Checker System Guide

This guide explains how to add interactive answer checking to your exercises in the STEPs Math Course website using clean, markdown-friendly syntax.

## Overview

The answer checker system provides:
- **Client-side validation** - Works entirely in the browser
- **Multiple answer types** - Numeric, algebraic, multiple choice, text
- **Immediate feedback** - Students get instant results
- **Hints system** - Optional hints for struggling students
- **Mobile responsive** - Works on all devices
- **GitHub Pages compatible** - No server required
- **Markdown-friendly** - Clean syntax using Eleventy shortcodes
- **Centralized JavaScript** - No need to repeat script blocks

## How It Works

The system consists of:
1. **JavaScript Library** (`/js/answer-checker.js`) - Core checking logic
2. **JavaScript Initialization** (`/js/answer-checker-init.js`) - Global helper functions
3. **CSS Styles** - Built into the main stylesheet
4. **Eleventy Shortcodes** - Markdown-friendly syntax for exercises
5. **Base Layout** - Automatically includes all necessary scripts

## Answer Types Supported

### 1. Numeric Answers
```markdown
{% answerChecker %}
What is 2 + 3?

{% answerNumeric "basic-math" 5 "Enter your answer" %}
{% endanswerChecker %}
```

### 2. Text Answers
```markdown
{% answerChecker %}
What is the chemical symbol for gold?

{% answerText "gold-symbol" "Au" "Enter chemical symbol" "Think of the periodic table!" %}
{% endanswerChecker %}
```

### 3. Multiple Choice
```markdown
{% answerChecker %}
What is the capital of France?

{% multipleChoice "capital" '["London", "Paris", "Berlin", "Madrid"]' "b" %}
{% endanswerChecker %}
```

### 4. Multiple Choice with LaTeX Math
```markdown
{% answerChecker %}
What happens to $f(x)$ as $x \to \infty$?

{% multipleChoice "end-behavior" '["$f(x) \\\\to -\\\\infty$", "$f(x) \\\\to +\\\\infty$", "$f(x) \\\\to 0$"]' "b" %}
{% endanswerChecker %}
```

**Note:** For LaTeX in multiple choice options, use quadruple backslashes (`\\\\`) for each `\\` in your markdown.

## Adding Hints

Hints are automatically included when you provide a hint parameter to the shortcode:

```markdown
{% answerNumeric "solve-x" 2 "Enter value of x" "Subtract 3 from both sides, then divide by 2" %}
```

## Complete Exercise Example

```markdown
{% answerChecker %}
**Question:** What is the degree of the polynomial $f(x) = 2x^3 - x^2 + 5$?

**Degree:**
{% answerNumeric "degree" 3 "Enter degree" %}

**Leading Coefficient:**
{% answerNumeric "leading-coeff" 2 "Enter coefficient" %}

**Has absolute maximum or minimum?**
{% multipleChoice "max-min" '["No", "Yes"]' "a" %}
{% endanswerChecker %}
```

## Available Shortcodes

### `{% answerChecker %}...{% endanswerChecker %}`
Wraps content in an answer checker container with styling.

### `{% answerNumeric id correctAnswer placeholder hint %}`
Creates a numeric input field.
- `id`: Unique identifier for the input
- `correctAnswer`: The correct numeric answer
- `placeholder`: Text shown in the input field (optional)
- `hint`: Helpful hint for students (optional)

### `{% answerText id correctAnswer placeholder hint %}`
Creates a text input field.
- `id`: Unique identifier for the input
- `correctAnswer`: The correct text answer
- `placeholder`: Text shown in the input field (optional)
- `hint`: Helpful hint for students (optional)

### `{% multipleChoice questionName options correctAnswer %}`
Creates multiple choice options.
- `questionName`: Unique name for the question group
- `options`: JSON string array of options (use single quotes around the array)
- `correctAnswer`: Letter of correct answer (a, b, c, d, etc.)

## Advanced Features

### Multiple Correct Answers
The system automatically supports multiple correct answers for numeric inputs:

```markdown
{% answerNumeric "roots" [1, -1] "Enter a root" %}
```

### Custom Tolerance for Numeric Answers
Built into the system - numeric answers are compared with a default tolerance of 0.001.

### Case-Insensitive Text
Text answers are automatically case-insensitive by default.

## Mathematical Expression Support

The system can evaluate mathematical expressions including:
- Basic arithmetic: `2+3*4`
- Exponents: `x^2`, `2^3`
- Functions: `sqrt(16)`, `sin(pi/2)`
- Constants: `pi`, `e`
- Fractions: `1/2`, `3/4`
- LaTeX in multiple choice: `$f(x) \\\\to \\\\infty$`

## Best Practices

1. **Use descriptive IDs** - Make input IDs meaningful (e.g., `vertex-x`, `degree-poly`)
2. **Provide clear placeholders** - Help students understand what to enter
3. **Include hints** - Add hints for challenging problems using the hint parameter
4. **Test thoroughly** - Verify all answer variations work
5. **Use appropriate shortcodes** - `answerNumeric` for numbers, `answerText` for expressions
6. **Provide examples** - Use placeholders to show expected format
7. **Escape LaTeX properly** - Use `\\\\` for `\\` in multiple choice JSON strings

## Creating New Exercises

1. **Create a new `.md` file** in `src/exercises/`
2. **Add frontmatter** with layout and metadata
3. **Use shortcodes** for interactive elements
4. **No script blocks needed** - everything is included automatically

Example new exercise:
```markdown
---
layout: base.njk
title: My New Exercise
category: exercises
description: Description of the exercise
---

# My New Exercise

{% answerChecker %}
What is the derivative of $x^2$?

{% answerText "derivative" "2x" "Enter the derivative" "Use the power rule!" %}
{% endanswerChecker %}
```

## Troubleshooting

### Common Issues:
1. **Build errors with LaTeX** - Ensure you use `\\\\` for `\\` in multiple choice JSON
2. **Shortcodes not working** - Check that your `.eleventy.js` has the shortcode definitions
3. **Scripts not loading** - Verify `answer-checker-init.js` is included in your base layout
4. **Math not rendering** - Ensure KaTeX is properly configured

### Debug Mode:
Open browser console and check for any JavaScript errors. The system logs helpful information when things go wrong.

## Integration with GitHub Pages

The answer checker works perfectly with GitHub Pages because:
- All processing happens in the browser
- No server-side code required
- Static files are served efficiently
- Works offline once loaded
- Eleventy builds everything to static HTML

## File Structure

```
src/
├── js/
│   ├── answer-checker.js          # Core checking logic
│   └── answer-checker-init.js     # Global helper functions
├── _layouts/
│   └── base.njk                   # Includes scripts automatically
├── exercises/
│   └── your-exercise.md           # Use shortcodes here
└── .eleventy.js                   # Shortcode definitions
```

## Future Enhancements

Potential improvements:
- **Step-by-step solutions** - Show solution process
- **Progress tracking** - Save student progress locally
- **Randomized problems** - Generate different numbers each time
- **Advanced math parsing** - Better LaTeX support
- **Audio feedback** - Sound effects for correct/incorrect answers
- **More shortcodes** - Additional question types and formats 