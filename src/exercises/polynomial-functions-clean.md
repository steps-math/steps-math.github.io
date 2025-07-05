---
layout: base.njk
title: Polynomial Functions Interactive Practice (Clean Markdown)
category: exercises
description: Interactive exercises on polynomial functions using markdown-friendly syntax
---

# Polynomial Functions Interactive Practice

Practice problems for understanding polynomial functions, their graphs, domain, range, and infinity behavior.

## Exercise 1: Classify Polynomials

For each function, determine the **degree**, **leading coefficient**, and whether it has an **absolute maximum or minimum**.

### 1.1 Function Classification

{% answerChecker %}
**Function:** $f(x) = 2x^3 - x^2 + 5$

**Degree:**
{% answerNumeric "degree-1" 3 "Enter degree" %}

**Leading Coefficient:**
{% answerNumeric "leading-coeff-1" 2 "Enter coefficient" %}

**Has absolute maximum or minimum?**
{% multipleChoice "max-min-1" '["No", "Yes"]' "a" %}
{% endanswerChecker %}

### 1.2 Function Classification

{% answerChecker %}
**Function:** $g(x) = -4x^4 + 3x^2 - 7x + 9$

**Degree:**
{% answerNumeric "degree-2" 4 "Enter degree" %}

**Leading Coefficient:**
{% answerNumeric "leading-coeff-2" -4 "Enter coefficient" %}

**Has absolute maximum or minimum?**
{% multipleChoice "max-min-2" '["Yes", "No"]' "a" %}
{% endanswerChecker %}

---

## Exercise 2: End Behavior Analysis

Determine the end behavior of each polynomial function.

### 2.1 End Behavior Multiple Choice

{% answerChecker %}
**Function:** $f(x) = x^2 + 2x - 3$

What happens to $f(x)$ as $x \to \infty$?

{% multipleChoice "end-behavior-1" '["$f(x) \\\\to -\\\\infty$", "$f(x) \\\\to +\\\\infty$", "$f(x) \\\\to 0$", "$f(x) \\\\to 3$"]' "b" %}
{% endanswerChecker %}

### 2.2 End Behavior Analysis

{% answerChecker %}
**Function:** $f(x) = -x^3 + 2x$

What happens to $f(x)$ as $x \to -\infty$?

{% multipleChoice "end-behavior-2" '["$f(x) \\\\to -\\\\infty$", "$f(x) \\\\to +\\\\infty$", "$f(x) \\\\to 0$", "$f(x) \\\\to 2$"]' "b" %}
{% endanswerChecker %}

---

## Exercise 3: Real-World Modeling

A company's profit over time is modeled by:

$$P(t) = -2t^3 + 9t^2 - 11t + 5$$

### 3.1 Polynomial Analysis

{% answerChecker %}
**What is the degree of this polynomial?**
{% answerNumeric "degree-profit" 3 "Enter degree" %}

**What is the leading coefficient?**
{% answerNumeric "leading-coeff-profit" -2 "Enter coefficient" %}

**What does the negative leading coefficient tell you about long-term behavior?**

{% multipleChoice "long-term-behavior" '["Profit increases over time", "Profit decreases over time", "Profit stabilizes over time"]' "b" %}
{% endanswerChecker %}

---

## Exercise 4: Design a Polynomial

Create a polynomial function that meets specific conditions.

### 4.1 Polynomial Design

{% answerChecker %}
Design a polynomial with:
- Degree = 3
- Positive leading coefficient  
- Passes through origin: $f(0) = 0$
- Has a turning point between $x = 1$ and $x = 3$

**Write a possible formula (e.g., x^3 - 2x^2 + x):**
{% answerText "polynomial-formula" "x^3-3x^2+2x" "Enter polynomial formula" "Try a cubic function like $f(x) = x^3 - 3x^2 + 2x$. This has degree 3, positive leading coefficient, passes through (0,0), and has turning points." %}
{% endanswerChecker %}

---

## Exercise 5: Polynomial Through Points

Find a polynomial that passes through given points.

### 5.1 Factored Form

{% answerChecker %}
A cubic polynomial passes through:
- $f(0) = 6$
- $f(1) = 0$
- $f(2) = 0$
- $f(3) = 0$

**Write the factored form (e.g., a(x-1)(x-2)(x-3)):**
{% answerText "factored-form" "6(x-1)(x-2)(x-3)" "Enter factored form" "Since $f(1) = f(2) = f(3) = 0$, the polynomial has roots at $x = 1, 2, 3$. The factored form is $a(x-1)(x-2)(x-3)$. Use $f(0) = 6$ to find $a$." %}
{% endanswerChecker %} 