---
layout: base.njk
title: Derivatives rules 2 - multiplication and division rules
date: 2025-07-30
category: differentiation
description: Lecture 21
---

# Lecture 21: Multiplication and Division Rules

## Constant Multiple Rule

If $f(x)$ is a differentiable function and $c$ is a constant, then:

$$
\frac{d}{dx}[c \cdot f(x)] = c \cdot \frac{d}{dx}[f(x)]
$$

> **Example:**
>
> $\frac{d}{dx}[7x^2] = 7 \cdot \frac{d}{dx}[x^2] = 7 \cdot 2x = 14x$

This rule lets us **factor out constants** when taking derivatives.

---

## Multiplication Rule (Product Rule)

If $f(x)$ and $g(x)$ are both differentiable, then:

$$
\frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)
$$

> “First times derivative of second, plus second times derivative of first.”

> **Example 1:**
>
> $f(x) = x^2$, $g(x) = x+1$  
> Then:
>
> $$
\frac{d}{dx}[(x^2)(x+1)] = 2x(x+1) + x^2(1) = 2x^2 + 2x + x^2 = 3x^2 + 2x
$$

> **Example 2:**
>
> $\frac{d}{dx}[(x^2+1)(x^3-2x)]$  
> Apply the product rule:
> - First: $f(x) = x^2+1$, so $f'(x) = 2x$
> - Second: $g(x) = x^3 - 2x$, so $g'(x) = 3x^2 - 2$
>
> So:
> $$\frac{d}{dx}[(x^2+1)(x^3-2x)] = 2x(x^3 - 2x) + (x^2+1)(3x^2 - 2) = 2x^4 - 4x^2 + 3x^2 - 2 = $$
> $$= 2x^4 - x^2 - 2$$

---

## Division Rule (Quotient Rule)

If $f(x)$ and $g(x)$ are differentiable, and $g(x) \ne 0$, then:

$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2}
$$

> “Low d-high minus high d-low over square of what’s below.”

> **Example 1:**
>
> $\frac{d}{dx}\left[\frac{x^2}{x+1}\right]$  
> Let $f(x) = x^2$, $g(x) = x+1$
>
> Then:
> $$
\frac{2x(x+1) - x^2(1)}{(x+1)^2} = \frac{2x(x+1) - x^2}{(x+1)^2}
$$

> **Example 2:**
>
> $\frac{d}{dx} \left[\frac{1}{x^2}\right]$  
> Use quotient rule:
>
> $$\frac{0\cdot x^2 - 1\cdot 2x}{x^4} = \frac{-2x}{x^4} = -\frac{2}{x^3}$$
> which will be the same answer if you just apply the power rule to $x^{-2}$:
> $$\frac{d}{dx}[x^{-2}] = -2x^{-2 - 1} = -2x^{-3} = -\frac{2}{x^3}$$

With this rule, we can differentiate any rational function. For example,
$$
\frac{d}{dx}\left[\frac{x^2 + 1}{x^2 - 1}\right] = \frac{(2x)(x^2 - 1) - (x^2 + 1)(2x)}{(x^2 - 1)^2} = \frac{2x^3 - 2x - 2x^3 - 2x}{(x^2 - 1)^2} = \frac{-4x}{(x^2 - 1)^2}
$$

---

# Exercises

### 1. Constant multiple rule
Differentiate the following using constant multiple rule:
   - **a)** $\frac{d}{dx}[5x^3]$
   - **b)** $\frac{d}{dx}[-7\sqrt{x}]$
   - **c)** $\frac{d}{dx}[3e^x]$

### 2. Product rule
Differentiate the following using the product rule:
   - **a)** $\frac{d}{dx}[x \cdot \ln(x)]$
   - **b)** $\frac{d}{dx}[e^x \cdot x^2]$
   - **c)** $\frac{d}{dx}[(x^2 + 4x)(x^3 - 1)]$

### 3. Quotient rule
Differentiate the following using the quotient rule:
   - **a)** $\frac{d}{dx}\left[\frac{1}{x}\right]$
   - **b)** $\frac{d}{dx}\left[\frac{x^2 + 1}{x}\right]$
   - **c)** $\frac{d}{dx}\left[\frac{\ln(x)}{x^2}\right]$

### 4. Additional Practice
Differentiate:
   - **a)** $\frac{d}{dx}[x^2 \cdot \ln(3x)]$
   - **b)** $\frac{d}{dx}\left[\frac{x^3 + 2x}{x^2 + 1}\right]$
   - **c)** $\frac{d}{dx}\left[\frac{e^x}{x^3 + 2}\right]$
   - **d)** $\frac{d}{dx}[(2x^2 + 3)(x^3 - 5x)]$
   - **e)** $\frac{d}{dx}\left[\frac{x^2(x-1)}{x+2}\right]$  
     Hint: Expand numerator before applying quotient rule if easier.

### 5. Evaluate
Let $f(x) = \frac{g(x)}{h(x)}$. Suppose $g(2) = 5$, $g'(2) = 3$, $h(2) = 1$, and $h'(2) = -4$.  
   - **a)** Find $f'(2)$.


