/**
 * Answer Checker for STEPs Math Course
 * Supports multiple answer types: numeric, algebraic expressions, multiple choice, and text
 */

class AnswerChecker {
    constructor() {
        this.tolerance = 0.001; // Default tolerance for numeric comparisons
    }

    /**
     * Check if two numbers are approximately equal within tolerance
     */
    approximatelyEqual(a, b, tolerance = this.tolerance) {
        return Math.abs(a - b) < tolerance;
    }

    /**
     * Parse and evaluate a mathematical expression safely
     */
    evaluateExpression(expression) {
        try {
            // Remove any LaTeX formatting and common math symbols
            let cleanExpr = expression
                .replace(/\\frac{([^}]*)}{([^}]*)}/g, '($1)/($2)') // Convert \frac{a}{b} to (a)/(b)
                .replace(/\\sqrt{([^}]*)}/g, 'Math.sqrt($1)') // Convert \sqrt{a} to Math.sqrt(a)
                .replace(/\\left\(/g, '(') // Remove \left(
                .replace(/\\right\)/g, ')') // Remove \right)
                .replace(/\\cdot/g, '*') // Convert \cdot to *
                .replace(/\\times/g, '*') // Convert \times to *
                .replace(/\\div/g, '/') // Convert \div to /
                .replace(/\\pi/g, 'Math.PI') // Convert \pi to Math.PI
                .replace(/\\e/g, 'Math.E') // Convert \e to Math.E
                .replace(/\\ln/g, 'Math.log') // Convert \ln to Math.log
                .replace(/\\log/g, 'Math.log10') // Convert \log to Math.log10
                .replace(/\\sin/g, 'Math.sin') // Convert \sin to Math.sin
                .replace(/\\cos/g, 'Math.cos') // Convert \cos to Math.cos
                .replace(/\\tan/g, 'Math.tan') // Convert \tan to Math.tan
                .replace(/\^/g, '**') // Convert ^ to ** for exponentiation
                .replace(/\s+/g, ''); // Remove whitespace

            // Use Function constructor for safe evaluation
            return new Function('return ' + cleanExpr)();
        } catch (error) {
            console.error('Error evaluating expression:', error);
            return null;
        }
    }

    /**
     * Check numeric answers (exact or approximate)
     */
    checkNumeric(userAnswer, correctAnswer, options = {}) {
        const tolerance = options.tolerance || this.tolerance;
        const allowMultiple = options.allowMultiple || false;

        // Parse user answer
        let userValue;
        if (typeof userAnswer === 'string') {
            userValue = this.evaluateExpression(userAnswer);
        } else {
            userValue = userAnswer;
        }

        if (userValue === null) {
            return { correct: false, message: 'Invalid expression format' };
        }

        // Handle multiple correct answers
        if (Array.isArray(correctAnswer)) {
            if (!allowMultiple) {
                return { correct: false, message: 'Multiple answers not allowed' };
            }
            
            for (let answer of correctAnswer) {
                if (this.approximatelyEqual(userValue, answer, tolerance)) {
                    return { correct: true, message: 'Correct!' };
                }
            }
            return { correct: false, message: 'Incorrect answer' };
        }

        // Single correct answer
        const isCorrect = this.approximatelyEqual(userValue, correctAnswer, tolerance);
        return {
            correct: isCorrect,
            message: isCorrect ? 'Correct!' : 'Incorrect answer'
        };
    }

    /**
     * Check algebraic expressions (simplified comparison)
     */
    checkAlgebraic(userAnswer, correctAnswer, options = {}) {
        // For now, we'll do a simple string comparison after normalization
        // In a more advanced version, you could use a computer algebra system
        
        const normalize = (expr) => {
            return expr
                .toLowerCase()
                .replace(/\s+/g, '')
                .replace(/\+/g, '+')
                .replace(/-/g, '-')
                .replace(/\*/g, '*')
                .replace(/\//g, '/');
        };

        const userNormalized = normalize(userAnswer);
        const correctNormalized = normalize(correctAnswer);

        const isCorrect = userNormalized === correctNormalized;
        return {
            correct: isCorrect,
            message: isCorrect ? 'Correct!' : 'Incorrect answer'
        };
    }

    /**
     * Check multiple choice answers
     */
    checkMultipleChoice(userAnswer, correctAnswer) {
        const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
        return {
            correct: isCorrect,
            message: isCorrect ? 'Correct!' : 'Incorrect answer'
        };
    }

    /**
     * Check text answers (case-insensitive)
     */
    checkText(userAnswer, correctAnswer, options = {}) {
        const caseSensitive = options.caseSensitive || false;
        const allowPartial = options.allowPartial || false;

        let user = userAnswer.trim();
        let correct = correctAnswer.trim();

        if (!caseSensitive) {
            user = user.toLowerCase();
            correct = correct.toLowerCase();
        }

        if (allowPartial) {
            const isCorrect = user.includes(correct) || correct.includes(user);
            return {
                correct: isCorrect,
                message: isCorrect ? 'Correct!' : 'Incorrect answer'
            };
        }

        const isCorrect = user === correct;
        return {
            correct: isCorrect,
            message: isCorrect ? 'Correct!' : 'Incorrect answer'
        };
    }

    /**
     * Main check function that determines answer type and calls appropriate method
     */
    check(userAnswer, correctAnswer, answerType = 'auto', options = {}) {
        if (answerType === 'auto') {
            // Auto-detect answer type
            if (typeof correctAnswer === 'number' || !isNaN(correctAnswer)) {
                answerType = 'numeric';
            } else if (Array.isArray(correctAnswer)) {
                answerType = 'numeric';
            } else if (typeof correctAnswer === 'string') {
                if (correctAnswer.match(/^[a-d]$/i)) {
                    answerType = 'multiple-choice';
                } else if (correctAnswer.includes('=') || correctAnswer.includes('+') || correctAnswer.includes('-')) {
                    answerType = 'algebraic';
                } else {
                    answerType = 'text';
                }
            }
        }

        switch (answerType) {
            case 'numeric':
                return this.checkNumeric(userAnswer, correctAnswer, options);
            case 'algebraic':
                return this.checkAlgebraic(userAnswer, correctAnswer, options);
            case 'multiple-choice':
                return this.checkMultipleChoice(userAnswer, correctAnswer);
            case 'text':
                return this.checkText(userAnswer, correctAnswer, options);
            default:
                return { correct: false, message: 'Unknown answer type' };
        }
    }
}

// Create a global instance
window.answerChecker = new AnswerChecker(); 