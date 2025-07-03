---
layout: base.njk
title: Root and Rational Functions, Discontinuities, and Infinity Behavior
category: functions
description: Lecture 6
date: 2025-07-08
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

### 3. Example

Let:

$$f(x) = \frac{1}{x^2}$$

- **Domain**: $x \neq 0$
- **Vertical asymptote**: $x = 0$
- **Horizontal asymptote**: $y = 0$
- **Range**: $(0, \infty)$

> <div style="text-align: center; margin: 20px 0;">
>     <img src="/images/06-rational-asymptote.png" alt="Rational function" style="max-width: 80%; height: auto; border: 1px solid gray;">
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

## 1. Domain and Discontinuity

Find the **domain** of each function and describe any **discontinuities**:

- **a)** $f(x) = \sqrt{x - 3}$  
- **b)** $f(x) = \frac{2x + 3}{x^2 - 4}$  
- **c)** $f(x) = \frac{x^2 - 4}{x - 2}$

## 2. Types of Discontinuity

Determine whether the discontinuity is **removable** or **essential**:

- **a)** $f(x) = \frac{x^2 - 9}{x - 3}$
- **b)** $f(x) = \frac{1}{x + 5}$
- **c)** $f(x) = \frac{(x - 2)^2}{x - 2}$


## 3. Root Domain Puzzle
For each function, find the domain, but without graphing. Justify your reasoning algebraically:

- **a)** $f(x) = \sqrt{4 - x^2}$
- **b)** $g(x) = \sqrt{x^2 - 4}$
- **c)** $h(x) = \sqrt{(x - 1)(x + 2)}$

## 4. Impossible Graph?

Here is a graph sketch:

- It has a hole at $x = 2$
- It has a vertical asymptote at $x = -1$
- It has a horizontal asymptote at $y = 3$

  - **a)** Can you write a rational function that fits this behavior?
  - **b)** Justify how each part of your expression creates the desired graph features.
  - **c)** What happens if you remove the factor that causes the hole?


## 5. Graph from Clues
Build a rational function that:

- Has a vertical asymptote at $x = 2$
- Has a hole at $x = -1$
- Has a horizontal asymptote at $y = 0$
- Crosses the x-axis at $x = 3$

  - **a)** Write a possible expression.
  - **b)** Label all key features on a sketch.
  - **c)** Change your function so that the horizontal asymptote is now $y = 5$. What did you change?


