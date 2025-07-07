---
layout: base.njk
title: Root and Rational Functions, Discontinuities, and Infinity Behavior
category: functions
description: Lecture 6
date: 2025-07-07
---

# lecture 6: Root and Rational Functions — Graphs, Domain and Range, Discontinuities, and Infinity Behavior

## Root Functions

### 1. What Is a Root Function?

A **root function** involves square roots, cube roots, or other fractional exponents:

$$f(x) = \sqrt{x}, \quad f(x) = \sqrt[3]{x}, \quad f(x) = x^{1/n}$$

- Square roots only work on **non-negative inputs**.
- **Odd roots** (like cube roots) work on **all real numbers**.

---

### 2. Domain and Range

| Function         | Domain        | Range         |
|------------------|----------------|----------------|
| $f(x) = \sqrt{x}$        | $[0, \infty)$ | $[0, \infty)$ |
| $f(x) = \sqrt[3]{x}$     | $\mathbb{R}$ | $\mathbb{R}$ |

> **Even** roots need $x \geq 0$, **odd** roots are fine for any $x$.

---

### 3. Graphs of Root Functions

- **Square Root**: starts at (0,0), increases slowly
- **Cube Root**: passes through (0,0), symmetric across origin

> <div style="text-align: center; margin: 20px 0;">
>     <img src="/images/06-sqrt-cbrt.png" alt="Root functions" style="max-width: 80%; height: auto; border: 1px solid gray;">
> </div>

---

## Rational Functions

### 1. What Is a Rational Function?

A **rational function** is a **ratio of two polynomials**:

$$f(x) = \frac{P(x)}{Q(x)}$$

Examples:

- $f(x) = \frac{1}{x}$
- $f(x) = \frac{x^2 - 1}{x - 1}$

---

### 2. Domain and Discontinuity

Rational functions are **undefined** where the **denominator is zero**.

> **Example**:  
> $$f(x) = \frac{1}{x - 2} \quad \Rightarrow \quad \text{Domain: } x \neq 2$$

---

### 3. Types of Discontinuities

#### a) **Removable** (a "hole"):
Happens when a factor cancels from top and bottom.

> $$f(x) = \frac{x^2 - 1}{x - 1} = \frac{(x - 1)(x + 1)}{x - 1} = x + 1 \quad \text{but } x \neq 1$$
> Hole at $x = 1$
> <div style="text-align: center; margin: 20px 0;">
>     <img src="/images/06-removable.png" alt="Rational function" style="max-width: 70%; height: auto; border: 1px solid gray;">
> </div>

#### b) **Essential** (vertical asymptote):
Occurs when the denominator goes to zero and **does not cancel**.

> $$f(x) = \frac{1}{x - 3} \Rightarrow \text{Vertical asymptote at } x = 3$$
> <div style="text-align: center; margin: 20px 0;">
>     <img src="/images/06-vertical-asymptote.png" alt="Rational function" style="max-width: 70%; height: auto; border: 1px solid gray;">
> </div>

---

## Asymptotes and Graph Behavior

### 1. Vertical Asymptotes

- Occur where the denominator = 0 **and does not cancel**.

### 2. Horizontal & Slant Asymptotes

| Degree Comparison (Top vs Bottom) | Asymptotic Behavior               |
|-----------------------------------|-----------------------------------|
| Degree top < bottom               | Horizontal at $y = 0$         |
| Degree top = bottom               | Horizontal at $y = \frac{a_n}{b_n}$ |
| Degree top > bottom               | Slant asymptote (do long division) |

---

### 3. Examples

> **Example 1**:
> Left side: $f(x)=\frac{x^3-2x^2+3x-1}{x-1}$
> **Domain**: $x \neq 1$
> **Vertical asymptote**: $x = 1$
> **Oblique asymptote**: $y = x^2 - x + 2$
> 
> Right side: $f(x)=\frac{x^4-3x^2+2x}{x^2+1}$
> **Domain**: $\mathbb{R}$
> **No vertical asymptotes**
> **Oblique asymptote**: $y = x^2 - 4$
> <div style="text-align: center; margin: 20px 0;">
>     <img src="/images/06-asymptotes.png" alt="Rational function" style="max-width: 80%; height: auto; border: 1px solid gray;">
> </div>
>
> **Example 2**:
> $f(x)=\frac{2x^2+3x-1}{x^2-4}$
> **Domain**: $x \neq \pm 2$
> **Vertical asymptotes**: $x = \pm 2$
> **Horizontal asymptote**: $y = 2$
> <div style="text-align: center; margin: 20px 0;">
>     <img src="/images/06-equal-degrees.png" alt="Rational function" style="max-width: 80%; height: auto; border: 1px solid gray;">
> </div>

---

## Infinity Behavior

### Root Functions

- As $x \to \infty$, root functions grow — but **slowly**.
  - $\sqrt{x} \to \infty$
  - $\sqrt[3]{x} \to \infty$ as $x \to \infty$, $\to -\infty$ as $x \to -\infty$

### Rational Functions

- As $x \to \pm \infty$, rational functions **approach asymptotes** (if they exist).
  - e.g., $f(x) = \frac{3x^2}{x^2 + 1} \to 3$

---

# Regular Exercises

## 1. Graph Analysis

Study the graph below and answer the questions about this rational function:

<div style="text-align: center; margin: 20px 0;">
    <img src="/images/06-rational-asymptote.png" alt="Rational function graph for analysis" style="max-width: 80%; height: auto; border: 1px solid gray;">
</div>

{% answerChecker %}
**a)** What is the domain of this function?

{% multipleChoice "domain-analysis" '["All real numbers", "All real numbers except x = 0", "All real numbers except x = 1", "All real numbers except x = 2"]' "b" %}

**b)** What type of discontinuity occurs at x = 0?

{% multipleChoice "discontinuity-type" '["Removable discontinuity (hole)", "Essential discontinuity (vertical asymptote)", "No discontinuity", "Jump discontinuity"]' "b" %}

**c)** What is the horizontal asymptote of this function?

{% answerText "horizontal-asymptote" "y=0" "Enter the equation of the horizontal asymptote" "write your answer in the form y=... with no spaces" %}

**d)** What is the range of this function?

{% multipleChoice "range-analysis" '["All real numbers", "All real numbers except y = 0", "All positive real numbers", "All negative real numbers"]' "c" %}

**e)** As x approaches 0 from the right, what happens to f(x)?

{% multipleChoice "right-limit" '["f(x) approaches 0", "f(x) approaches infinity", "f(x) approaches negative infinity", "f(x) approaches 1"]' "b" %}

**f)** As x approaches 0 from the left, what happens to f(x)?

{% multipleChoice "left-limit" '["f(x) approaches 0", "f(x) approaches infinity", "f(x) approaches negative infinity", "f(x) approaches 1"]' "b" %}
{% endanswerChecker %}

## 2. Types of Discontinuity

Determine whether the discontinuity is **removable** or **essential**:

{% answerChecker %}
- **a)** $f(x) = \frac{x^2 - 9}{x - 3}$
  {% multipleChoice "a-discontinuity" '["removable", "essential"]' "a" %}
- **b)** $f(x) = \frac{1}{x + 5}$
  {% multipleChoice "b-discontinuity" '["removable", "essential"]' "b" %}
- **c)** $f(x) = \frac{(x - 2)^2}{x - 2}$
  {% multipleChoice "c-discontinuity" '["removable", "essential"]' "a" %}
{% endanswerChecker %}

## 3. Domain and Discontinuity

Find the **domain** of each function and describe any **discontinuities**:

- **a)** $f(x) = \sqrt{x - 3}$  
- **b)** $f(x) = \frac{2x + 3}{x^2 - 4}$  
- **c)** $f(x) = \frac{x^2 - 4}{x - 2}$


## 4. Root Domain Puzzle
For each function, find the domain, but without graphing. Justify your reasoning algebraically:

- **a)** $f(x) = \sqrt{4 - x^2}$
- **b)** $g(x) = \sqrt{x^2 - 4}$
- **c)** $h(x) = \sqrt{(x - 1)(x + 2)}$

## 5. Impossible Graph?

Here is a graph sketch:

- It has a hole at $x = 2$
- It has a vertical asymptote at $x = -1$
- It has a horizontal asymptote at $y = 3$

  - **a)** Can you write a rational function that fits this behavior?
  - **c)** What happens if you remove the factor that causes the hole?


## 6. Graph from Clues
Build a rational function that:

- Has a vertical asymptote at $x = 2$
- Has a hole at $x = -1$
- Has a horizontal asymptote at $y = 1$
- Crosses the x-axis at $x = 3$

  - **a)** Write a possible expression.
  - **b)** Label all key features on a sketch.
  - **c)** Change your function so that the horizontal asymptote is now $y = 5$. What did you change?
 
# Extra Advanced Exercises:

## 1. Asymptotic Limit Puzzle

Let

$$
f(x) = \frac{\sqrt{x^2 + 5} - x}{x}
$$

- **a)** Find the limit as \( x \to \infty \) using rationalization
- **b)** Does this function have a **horizontal asymptote**?
- **c)** Analyze symmetry and behavior as \( x \to -\infty \)

## 2. Rational Function with Parameters

Let

$$
f(x) = \frac{x^2 + ax + b}{x^2 - 4}
$$

- **a)** Find conditions on \( a \) and \( b \) such that:
  - The function has **no x-intercepts**
  - A **vertical asymptote** at \( x = 2 \)
  - A **horizontal asymptote** at \( y = 1 \)
- **b)** Based on those conditions, determine the **range** of \( f(x) \)

## 3. Domain and Discontinuity of a Root-Rational Combo

Let

$$
f(x) = \frac{\sqrt{x^2 - 9}}{x^2 - 16}
$$

- **a)** Determine the **domain** algebraically
- **b)** Identify and classify all **discontinuities**
- **c)** Analyze **end behavior** as \( x \to \pm\infty \)
