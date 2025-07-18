---
layout: base.njk
title: Algebraic manipulation of limits and asymptotes
category: limits
description: Lecture 15
date: 2025-07-20
---

# Algebraic manipulation of limits and asymptotes

## Some Algebraic Rules

1. $\frac{a+b}{c} = \frac{a}{c} + \frac{b}{c}$
2. $a^2 - b^2 = (a+b)(a-b)$
3. $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$
4. $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$
5. $a^4 - b^4 = (a+b)(a-b)(a^2 + b^2)$
6. $ax^2 + bx + c = a(x-r_1)(x-r_2)$ where $r_1$ and $r_2$ are the roots of the quadratic equation $ax^2 + bx + c = 0$

### Reminder of Log rules

1. $\log_b(xy) = \log_b(x) + \log_b(y)$
2. $\log_b(\frac{x}{y}) = \log_b(x) - \log_b(y)$
3. $\log_b(x^k) = k \log_b(x)$
4. $\log_{b^k}(x) = \frac{1}{k} \log_b(x)$
5. $\log_b(b^x) = x$
6. $\log_b(1) = 0$
7. $\log_b(b) = 1$
8. $\log_b(x) = \frac{\log_c(x)}{\log_c(b)}$

---

## Asymptotes



---
# Exercises

## 1. Limit calculations

{% answerChecker %}

**a)** What is $\lim_{x \to 2} \frac{x^3 - 8}{x^2 - 4}$?
{% answerNumeric "complex1" 3 "Enter your answer" %}

**b)** What is $\lim_{x \to 1} \frac{x^4 - 1}{x^2 - 1}$?
{% answerNumeric "complex2" 2 "Enter your answer" %}

**c)** What is $\lim_{x \to 0} \frac{\sqrt{1 + x} - 1}{x}$?
{% answerNumeric "complex3" 0.5 "Enter your answer" %}

**d)** What is $\lim_{x \to 0} \frac{\sqrt{4 + x} - 2}{x}$?
{% answerNumeric "complex4" 0.25 "Enter your answer" %}

**e)** What is $\lim_{x \to 3} \frac{x^2 - 9}{\sqrt{x} - \sqrt{3}}$?
{% answerNumeric "complex5" 6 "Enter your answer" %}

**f)** What is $\lim_{x \to 0} \frac{x^2 + 2x}{x^2 + x}$?
{% answerNumeric "complex6" 2 "Enter your answer" %}

{% endanswerChecker %}

## 2. Limits with infinity

{% answerChecker %}
Write **98765** if the limit is $\infty$ and **-98765** if the limit is $-\infty$.

**a)** What is $\lim_{x \to \infty} \frac{x^3 + 2x^2 + 1}{x^2 + 3}$?
{% answerNumeric "inf1" 98765 "Enter your answer" %}

**b)** What is $\lim_{x \to -\infty} \frac{x^3 + 2x^2 + 1}{x^2 + 3}$?
{% answerNumeric "inf2" -98765 "Enter your answer" %}

**c)** What is $\lim_{x \to \infty} \frac{2x^2 + 3x + 1}{3x^2 + 2x + 5}$?
{% answerNumeric "inf3" 0.67 "Enter your answer" %}

**d)** What is $\lim_{x \to \infty} \frac{x^2 + 1}{x^3 + 2x}$?
{% answerNumeric "inf4" 0 "Enter your answer" %}

**e)** What is $\lim_{x \to \infty} \frac{\sqrt{x^2 + 1}}{x + 1}$?
{% answerNumeric "inf5" 1 "Enter your answer" %}

**f)** What is $\lim_{x \to -\infty} \frac{\sqrt{x^2 + 1}}{x + 1}$?
{% answerNumeric "inf6" -1 "Enter your answer" %}

{% endanswerChecker %}