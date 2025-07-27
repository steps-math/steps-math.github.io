---
layout: base.njk
title: Formal Definition of Derivatives, Derivatives as limits.
category: differentiation
description: Lecture 19
date: 2025-07-27
---

# Lecture: Derivatives as Limits — The Algebraic Definition

## Objective
To introduce the **formal definition of the derivative** using limits, and apply it to compute derivatives of well-known functions. This builds on the intuition of average and instantaneous rate of change.

---

## Motivation Review: From Average to Instantaneous

Recall from our last lecture:

- The **average rate of change** between two points on a function:

  $$
  \text{Average Rate} = \frac{f(x+h) - f(x)}{h}
  $$

- As $h \to 0$, we approach the **instantaneous rate of change**, or the **derivative**:

  $$
  f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
  $$

This is called the **difference quotient**. It's the heart of differential calculus.

---

## Algebraic Definition of the Derivative

> Let $f(x)$ be a function. The **derivative** of $f$ at a point $x$ is:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

If this limit exists, $f$ is said to be **differentiable** at $x$.

This limit represents the **slope of the tangent line** to the graph of $f$ at $x$.

---

## Step-by-Step Example: $f(x) = x^2$

Let us compute $f'(x)$ using the limit definition:

$$
f'(x) = \lim_{h \to 0} \frac{(x + h)^2 - x^2}{h}
$$

Expand:

$$
= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} = \lim_{h \to 0} \frac{2xh + h^2}{h}
$$

$$
= \lim_{h \to 0} (2x + h) = 2x
$$

So, $f'(x) = 2x$. 

---

## Another Example: $f(x) = \frac{1}{x}$

$$
f'(x) = \lim_{h \to 0} \frac{\frac{1}{x + h} - \frac{1}{x}}{h}
$$

Use common denominator:

$$
= \lim_{h \to 0} \frac{\frac{x - (x + h)}{x(x + h)}}{h} = \lim_{h \to 0} \frac{-h}{hx(x + h)}
$$

Cancel $h$:

$$
= \lim_{h \to 0} \frac{-1}{x(x + h)} = -\frac{1}{x^2}
$$

So, $f'(x) = -\frac{1}{x^2}$ 

---

## Additional Examples

 1. $f(x) = \sqrt{x}$

$$
f'(x) = \lim_{h \to 0} \frac{\sqrt{x + h} - \sqrt{x}}{h}
$$

Multiply by the conjugate:

$$
= \lim_{h \to 0} \frac{x + h - x}{h(\sqrt{x + h} + \sqrt{x})} = \lim_{h \to 0} \frac{1}{\sqrt{x + h} + \sqrt{x}} = \frac{1}{2\sqrt{x}}
$$

 2. $f(x) = |x|$

$$
f'(x) = \lim_{h \to 0} \frac{|x + h| - |x|}{h}
$$

This limit does **not exist** at $x = 0$. So $f(x) = |x|$ is **not differentiable** at $x = 0$.

---

## Famous Derivatives

| Function              | Derivative                  |
|-----------------------|-----------------------------|
| $f(x) = x^n$      | $f'(x) = nx^{n-1}$       |
| $f(x) = \sin(x)$  | $f'(x) = \cos(x)$        |
| $f(x) = \cos(x)$  | $f'(x) = -\sin(x)$       |
| $f(x) = e^x$      | $f'(x) = e^x$            |
| $f(x) = \ln(x)$   | $f'(x) = \frac{1}{x}$     |

---

## Exercises

### Exercises

1. Use the limit definition to find the derivative of:
   - (a) $f(x) = x^3$
   - (b) $f(x) = \sqrt{x}$
   - (c) $f(x) = 2x + 5$

---

2. Use derivative rules to evaluate:
   - (a) $\frac{d}{dx}(3x^4)$
   - (b) $\frac{d}{dx}(x^{-2})$
   - (c) $\frac{d}{dx}(5)$

---

3. Prove from the limit definition:
   - (a) $f(x) = \frac{1}{x} \Rightarrow f'(x) = -\frac{1}{x^2}$
   - (b) $f(x) = x^2 + 3x \Rightarrow f'(x) = 2x + 3$

---

4. Let $f(x) = \frac{1}{x^2 + 1}$. Find $f'(x)$ using the limit definition.

---

5. Use the definition to find the derivative of $f(x) = \frac{1}{\sqrt{x}}$.

---

6. Derive the formula for $f(x) = \ln(x)$ from the limit definition:
$$
f'(x) = \lim_{h \to 0} \frac{\ln(x + h) - \ln(x)}{h}
$$

> Use the identity: $\ln(x + h) - \ln(x) = \ln\left(1 + \frac{h}{x}\right)$

---

7. Let $f(x) = |x - 1|$. Determine where $f$ is not differentiable and explain why using the limit definition.

### Extra Advanced Exercises:

### 1. **Piecewise Function Differentiability**

Let:

$$
f(x) = \begin{cases}
x^2 + 2x, & x < 1 \\
ax + b, & x \geq 1
\end{cases}
$$

Find values of $a$ and $b$ such that:

- (a) $f$ is continuous at $x = 1$  
- (b) $f$ is differentiable at $x = 1$

### 2. **Challenge with Radical and Rational Function**

Use the limit definition to find $f'(x)$ for:

$$
f(x) = \frac{x}{\sqrt{x + 1}}
$$

### 3. **Limit Form Involving Trigonometry**

Use the identity:

$$
\lim_{h \to 0} \frac{\sin(h)}{h} = 1
$$

to derive:

$$
\frac{d}{dx}(\sin(x)) = \cos(x)
$$

### 4. **Absolute and Rational Hybrid**

Let:

$$
f(x) = \frac{|x|}{x}
$$

- (a) Use the limit definition to determine where $f(x)$ is differentiable.  
- (b) Graph it and explain why the derivative does or does not exist at certain points.

### 5. **Pointwise Derivative of a Nowhere-Differentiable Function**

Read about the **Weierstrass function**:
$$
f(x) = \sum_{n=0}^{\infty} a^n \cos(b^n \pi x)
\quad \text{with } 0 < a < 1, \ b \text{ odd, } ab > 1 + \frac{3\pi}{2}
$$

- (a) Explain why this function is continuous everywhere  
- (b) Investigate why it is not differentiable anywhere  
- (c) Attempt a limit-based justification (conceptual only)

## Wrap-Up

- Derivatives measure **instantaneous change**, defined using limits  
- The limit definition is foundational, even if we later use rules to shortcut the process  
- Not all functions are differentiable everywhere (e.g., piecewise, absolute value, radicals at zero)

---

