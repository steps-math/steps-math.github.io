---
layout: base.njk
title: Exponential and Logarithmic Functions
category: functions
description: Lecture 7
date: 2025-07-08
---

# lecture 7: Exponential and Logarithmic Functions — Graphs, Domain and Range, Discontinuities, and Infinity Behavior


## Exponential Functions

### 1. What Is an Exponential Function?

An **exponential function** has the form:

$$f(x) = a^x$$

Where:
- $a > 0$ and $a \neq 1$
- $x$ is any real number

> Example: $f(x) = 2^x$, $f(x) = 10^x$, $f(x) = e^x$

---

### 2. Real-World Examples

- **Bacteria growth**: population doubles every hour
- **Finance**: compound interest over time
- **Physics**: radioactive decay

> These all grow (or decay) **exponentially** — very fast!

---

### 3. Graph and Behavior

| Function | Graph Shape | Domain | Range | Discontinuities |
|---------|-------------|--------|-------|-----------------|
| $f(x) = a^x$ (for $a > 1$) | Grows rapidly | $\mathbb{R}$ | $(0, \infty)$ | None |
| $f(x) = a^x$ (for $0 < a < 1$) | Decreases rapidly | $\mathbb{R}$ | $(0, \infty)$ | None |

> Horizontal asymptote at $y = 0$

> Graph of $2^x$ and $0.4^x$
> <div style="text-align: center; margin: 20px 0;">
>    <img src="/images/07-exponential-plot.png" alt="Graph of exponential function" style="max-width: 70%; height: auto; border: 1px solid gray;">
> </div>

---

## Logarithmic Functions

### 1. What Is a Logarithm?

A **logarithm** is the inverse of an exponential function.

$$
\log_b(x) = y \iff b^y = x
$$

- $b > 0$, $b \neq 1$
- Most common: $\log_{10}(x)$, $\log_{2}(x)$, and $\ln(x)$ (natural log, base $e$)

---

### 2. Graph and Behavior

| Function | Graph Shape | Domain | Range | Discontinuities |
|----------|-------------|--------|-------|-----------------|
| $f(x) = \log_b(x) \text{ for } b > 1$ | Increases slowly | $(0, \infty)$ | $\mathbb{R}$ | Vertical asymptote at $x = 0$ |
| $f(x) = \log_b(x) \text{ for } 0 < b < 1$ | Decreases slowly | $(0, \infty)$ | $\mathbb{R}$ | Vertical asymptote at $x = 0$ |


> **No output for $x \leq 0$**

> Graph of $\log_2(x)$ and $\log_{0.4}(x)$
> <div style="text-align: center; margin: 20px 0;">
>    <img src="/images/07-log-plot.png" alt="Graph of logarithmic function" style="max-width: 70%; height: auto; border: 1px solid gray;">
> </div>

---

## Domain and Range Summary

| Function | Domain | Range |
|----------|--------|-------|
| $f(x) = a^x$ | $\mathbb{R}$ | $(0, \infty)$ |
| $f(x) = \log_b(x)$ | $(0, \infty)$ | $\mathbb{R}$ |

---

## Infinity Behavior

### Exponential Growth

- If $a > 1$:  
  $f(x) = a^x \to \infty$ as $x \to \infty$,  
  $f(x) \to 0$ as $x \to -\infty$

### Exponential Decay

- If $0 < a < 1$:  
  $f(x) \to 0$ as $x \to \infty$,  
  $f(x) \to \infty$ as $x \to -\infty$

### Logarithmic Behavior

$f(x) = \log_b(x)$  
- If $b > 1$:
  $f(x) \to \infty$ as $x \to \infty$  
  $f(x) \to -\infty$ as $x \to 0^+$


- If $0 < b < 1$: 
  $f(x) \to -\infty$ as $x \to \infty$
  $f(x) \to \infty$ as $x \to 0^+$  

---

## Discontinuities and Asymptotes

### 1. Exponential Functions

- **No discontinuities**
- **Horizontal asymptote**: $y = 0$
- Smooth and continuous everywhere

### 2. Logarithmic Functions

- **Essential discontinuity** (vertical asymptote) at $x = 0$
- **Not defined** for $x \leq 0$
- No removable discontinuities

---

## Logarithmic Properties

All rules and properties are valid for any base $b > 0$ and $b \neq 1$, and can be proven using the definition of logarithms ($b^y = x \iff \log_b(x) = y$).

- $\log_b(1) = 0$
- $\log_b(b) = 1$
- $\log_b(b^x) = x$
- $b^{\log_b(x)} = x$

Rules of logarithms:

- $\log_b(xy) = \log_b(x) + \log_b(y)$
- $\log_b(x/y) = \log_b(x) - \log_b(y)$
- $\log_b(x^k) = k \log_b(x)$

Change of base formula:

- $\log_b(x) = \frac{\log_k(x)}{\log_k(b)}$

---

# Regular Exercises

## 1. Calculate the following

{% answerChecker %}


**a)** What is $\log_2(8)$?
{% answerNumeric "log1" 3 "Enter your answer" "Think: 2 raised to what power equals 8?" %}

**b)** What is $\log_3\left(\frac{1}{9}\right)$?
{% answerNumeric "log2" -2 "Enter your answer" "Think: 3 raised to what power equals 1/9?" %}

**c)** What is $2^{\log_2(5)}$?
{% answerNumeric "inverse" 5 "Enter your answer" "This is testing the inverse relationship between exponentials and logarithms" %}

**d)** What is $4^{\log_2(3)}$?
{% answerNumeric "log3" 9 "Enter your answer" "Think: 2 raised to what power equals 3?" %}

{% endanswerChecker %}


## 2. Domain and Range Practice

Determine the domain and range of each:

- **a)** $f(x) = 3^{x^2-4}$
- **b)** $f(x) = \log_{10}(x^2 - 1)$
- **c)** $f(x) = \log_{10}(2 - x)$

## 3. Prove Logarithmic Properties

Use the definition $\log_b(x) = y \iff b^y = x$ to prove the following properties:

- **a)** $\log_b(xy) = \log_b(x) + \log_b(y)$
- **b)** $\log_b(x/y) = \log_b(x) - \log_b(y)$
- **c)** $\log_b(x^k) = k \log_b(x)$

## 4. Bacteria Growth

A scientist is growing a bacteria culture in a lab. At the start, there are 100 bacteria. The population doubles every 3 hours.

Questions:

- **a)** Write an exponential function $P(t)$ that models the population after $t$ hours.

- **b)** How many bacteria will there be after 12 hours?

- **c)** After how many hours will the population reach at least 6,400 bacteria?

## 5. Solve the exponential equation

Solve for $x$:

$$5^{2x} - 5^{x+1} + 6 = 0$$

## 6. Solve the logarithmic equation

Solve for $x$:

$$4 \log_3(x^2) - \log_3(x) = 2$$