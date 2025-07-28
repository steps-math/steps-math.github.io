---
layout: base.njk
title: Rules of Derivatives 1 - Power, Exponential, Log, Addition and Subtraction Rules. 
category: differentiation
description: Lecture 20
date: 2025-07-28
---

# Lecture: Fundamental Derivative Rules — Power, Exponential, Logarithmic, Sum & Difference

## Objective

To learn and apply key **rules of differentiation** that allow us to compute derivatives quickly and reliably without using the limit definition every time.

---

## Review: Why Rules?

In the last lecture, we used the **limit definition** to compute the derivative of functions like:

- $f(x) = x^2 \Rightarrow f'(x) = 2x$
- $f(x) = \frac{1}{x} \Rightarrow f'(x) = -\frac{1}{x^2}$

These calculations can be tedious. Fortunately, mathematics gives us **general rules** that apply to broad classes of functions — making computation efficient and systematic.

---

## The Power Rule

If $f(x) = x^n$, then:

$$
f'(x) = nx^{n - 1}, \quad \text{for any real number } n
$$

**Examples**:

- $f(x) = x^3 \Rightarrow f'(x) = 3x^2$
- $f(x) = x^{-2} \Rightarrow f'(x) = -2x^{-3}$
- $f(x) = \sqrt{x} = x^{1/2} \Rightarrow f'(x) = \frac{1}{2}x^{-1/2}$

---


## Exponential Functions: $e^x$

The natural exponential function has a beautiful property:

$$
\frac{d}{dx}(e^x) = e^x
$$

---

## Natural Logarithm: $\ln(x)$

For $x > 0$:

$$
\frac{d}{dx}(\ln x) = \frac{1}{x}
$$

> This was proven in the last lecture using the limit definition.

---

## Sum and Difference Rule

If $f(x) = g(x) + h(x)$, then:

$$
f'(x) = g'(x) + h'(x)
$$

If $f(x) = g(x) - h(x)$, then:

$$
f'(x) = g'(x) - h'(x)
$$

**Example**:

$$
f(x) = x^3 + 5x^2 - 7x + 9 \Rightarrow f'(x) = 3x^2 + 10x - 7
$$

---

## Constant Multiple Rule

If $f(x) = c \cdot g(x)$, then:

$$
f'(x) = c \cdot g'(x)
$$

**Example**:

$$
f(x) = 5x^3 \Rightarrow f'(x) = 5 \cdot 3x^2 = 15x^2
$$

---


## Summary Table of Rules

| Function            | Derivative                |
|---------------------|---------------------------|
| $x^n$           | $nx^{n - 1}$           |
| $e^x$           | $e^x$                  |
| $\ln x$         | $\frac{1}{x}$          |
| $c \cdot f(x)$  | $c \cdot f'(x)$        |
| $f(x) \pm g(x)$ | $f'(x) \pm g'(x)$      |

---

## Practice Exercises

### 1. Apply Power Rule

Differentiate:

- (a) $f(x) = x^5$
- (b) $f(x) = x^{-3}$
- (c) $f(x) = \sqrt[3]{x}$
- (d) $f(x) = \frac{1}{x^4}$

### 2. Sum/Difference and Constant Multiples

Differentiate:

- (a) $f(x) = 3x^4 + 5x^2 - 7$
- (b) $f(x) = x^3 - \frac{1}{x} + 4$
- (c) $f(x) = 2\sqrt{x} + 5x^{1/3}$

### 3. Exponential and Logarithmic Derivatives

Simplify the expression using log identities before differentiating:

- (a) $f(x) = 5e^x$
- (b) $f(x) = \ln(x^3)$
- (c) $f(x) = \ln\left(\frac{x^2}{\sqrt{x}}\right)$
- (d) $f(x) = \ln(e^{x^3})$

### 4. Mix It Up

Differentiate:

- (a) $f(x) = e^x + x^2 - \frac{1}{x}$
- (b) $f(x) = x^3 + \ln x$

### 5. Rewriting Functions to Apply Rules

Differentiate the following functions by **rewriting them** into a form where the power rule or other known rules can be applied.

- (a) $f(x) = \frac{\sqrt[4]{x^3}}{x^2}$
- (b) $f(x) = \frac{5}{x^{1/3}} + 3\sqrt{x} - \frac{1}{x^2}$
- (c) $f(x) = \frac{x^2 + \sqrt{x}}{x^{1/2}}$
- (d) $f(x) = \frac{1}{\sqrt[3]{x^2}} + \frac{2}{x^{1/5}}$


---

## Extra Advanced Problems

### 1. Function with Parameters (for analysis)

Let:

$$
f(x) = ax^n + b\ln(x) + ce^x
$$

- (a) Compute $f'(x)$ in terms of $a, b, c, n$
- (b) For what values of $a, b, c$ is $f'(x) = 0$ at $x = 1$?
- (c) Analyze whether $f(x)$ can have a local minimum at $x = 1$


### 2. Piecewise Polynomial Analysis

Let  
$$
f(x) = 
\begin{cases}
x^3 + 2x^2 - x + 1 & \text{if } x < 1 \\
4x^2 - 3x + 2 & \text{if } x \geq 1
\end{cases}
$$

**Tasks:**
- (a) Is $f(x)$ continuous at $x = 1$?  
- (b) Is $f(x)$ differentiable at $x = 1$?  

> Use left-hand and right-hand derivatives.

###  3. Log-Exponential Combination

Let  
$$
f(x) = \ln x + 5e^x - 3x^3 + 2x
$$

**Tasks:**
- (a) Find $f'(x)$  
- (b) Find all $x > 0$ such that $f'(x) = 0$  
> Use algebra to simplify, and solve graphically or numerically if needed.

### 4. Prove the Power Rule

Use the limit definition to prove the power rule for:

$f(x) = x^n$, where $n \in \mathbb{N}$

### 5. Cost-Analysis Word Problem

A company’s total cost to produce $x$ units is modeled by:  
$$
C(x) = 10x^3 - 15x^2 + 500x + 1000
$$

**Tasks:**
- (a) Find the marginal cost function $C'(x)$  
- (b) Compute $C'(10)$. Interpret the result.  
- (c) For which $x$ is the marginal cost minimized?


### 6. Population Dynamics

The population of bacteria over time $t$ (in hours) is:  
$$
P(t) = -100e^t + 50t + 18000
$$

**Tasks:**
- (a) Find $P'(t)$  
- (b) Find when the population stops increasing
- (c) Find when the population seizes to exist

### 7. Logarithmic Inverse

- (a) Show that $f(x) = \ln(x)$ is the inverse of $g(x) = e^x$, and that:

$$
\frac{d}{dx} \ln(x) = \frac{1}{e^{\ln(x)}} = \frac{1}{x}
$$

---

## Wrap-Up

You now know the **core rules** of differentiation:

- Power Rule
- Logarithmic Rule
- Exponential Rule
- Sum, Difference, and Constant Multiple Rules

These rules are the foundation of **fast differentiation** and will prepare you for the next tools: **product**, **quotient**, and **chain rules**.

---