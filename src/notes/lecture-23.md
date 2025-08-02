---
layout: base.njk
title: Implicit Differentiation
date: 2025-08-02
category: differentiation
description: Lecture 23
---

# Lecture 23: Implicit Differentiation

## Motivation: Why Implicit Differentiation?

So far, you've learned to differentiate functions written **explicitly** — where one variable is expressed directly in terms of the other (e.g. $y = f(x)$).

But what if the equation **doesn't** solve nicely for $y$?  
What if you're faced with a relation like:

$$
x^2 + y^2 = 25
$$

This is the equation of a circle — and notice, **$y$ is not isolated**!  
In many real-world and geometric problems (like circles, ellipses, or strange curves), variables are **intertwined** in equations.

**Implicit differentiation** is the tool that lets us find slopes, tangents, and derivatives **even when $y$ is not solved in terms of $x$.**

---

## The Idea Behind Implicit Differentiation

Suppose you have an equation involving both $x$ and $y$, and **$y$ is a function of $x$** (even if not written explicitly).

To differentiate implicitly:
1. Differentiate **both sides** of the equation **with respect to $x$**.
2. When you differentiate a term involving $y$, use the **chain rule**:
   $$
   \frac{d}{dx}[y] = \frac{dy}{dx}
   \quad\text{and}\quad
   \frac{d}{dx}[y^2] = 2y \cdot \frac{dy}{dx}
   $$
3. Solve for $\frac{dy}{dx}$ after taking derivatives.

---

## Examples

### Example 1: A Circle
$$
x^2 + y^2 = 25
$$

Differentiate both sides:
$$
\frac{d}{dx}[x^2] + \frac{d}{dx}[y^2] = \frac{d}{dx}[25]
\Rightarrow 2x + 2y \cdot \frac{dy}{dx} = 0
$$

Solve for $\frac{dy}{dx}$:
$$
\frac{dy}{dx} = -\frac{x}{y}
$$

> This gives the slope of the tangent to the circle at any point $(x, y)$.

---

### Example 2: Exponential Function

Find $\frac{dy}{dx}$ if $x = e^y + y$

**Solution:**

Differentiate both sides:

$$
\frac{d}{dx}[x] = \frac{d}{dx}[e^y + y]
$$

$$
1 = e^y \cdot \frac{dy}{dx} + \frac{dy}{dx}
$$

Factor:

$$
1 = \left(e^y + 1\right) \cdot \frac{dy}{dx}
\quad \Rightarrow \quad
\frac{dy}{dx} = \frac{1}{e^y + 1}
$$

---

### Example 3: Logarithmic Function

Find $\frac{dy}{dx}$ if $\ln(xy) = y + x$

**Solution:**

Use the product rule inside the log:
$$
\ln(xy) = \ln(x) + \ln(y)
$$

Differentiate both sides:

$$
\frac{d}{dx}[\ln(x) + \ln(y)] = \frac{d}{dx}[y + x]
$$

$$
\frac{1}{x} + \frac{1}{y} \cdot \frac{dy}{dx} = \frac{dy}{dx} + 1
$$

Move all terms to one side:

$$
\frac{1}{x} - 1 = \frac{dy}{dx} - \frac{1}{y} \cdot \frac{dy}{dx}
$$

Factor $\frac{dy}{dx}$:

$$
\frac{1}{x} - 1 = \frac{dy}{dx} \left(1 - \frac{1}{y}\right)
\quad \Rightarrow \quad
\frac{dy}{dx} = \frac{\frac{1}{x} - 1}{1 - \frac{1}{y}}
$$

---

---

## Summary of the Rules

**Implicit Differentiation Procedure:**
1. Differentiate both sides **with respect to $x$**.
2. Apply chain rule: whenever you differentiate $y$, multiply by $\frac{dy}{dx}$.
3. Rearrange and solve for $\frac{dy}{dx}$.

---

# Exercises: Implicit Differentiation

### 1. Basics

Find $\frac{dy}{dx}$ for each of the following equations:

1. $x^2 + y^2 = 16$
2. $x^2 - y^2 = 9$
3. $xy = 1$
4. $x^3 + y^3 = 6xy$
5. $e^y + x^2 = y$

<details>
<summary>Answer Key</summary>

1. $\frac{dy}{dx} = -\frac{x}{y}$

2. $\frac{dy}{dx} = \frac{x}{y}$

3. $\frac{dy}{dx} = -\frac{y}{x}$

4. $\frac{dy}{dx} = \frac{3x^2 - 6y}{3y^2 - 6x}$

5. $\frac{dy}{dx} = \frac{-2x}{e^y - 1}$

</details>

### 2. Medium
1. $x^x=y$
2. $\ln(xy) = x + y$
3. $x = y^y$
4. $\sqrt{x} + \sqrt{y} = 1$

<details>
<summary>Answer Key</summary>

1. $\frac{dy}{dx} = x^x\left(\ln(x) + 1\right)$

2. $\frac{dy}{dx} = \frac{1 - \frac{1}{x}}{\frac{1}{y} - 1}$

3. $\frac{dy}{dx} = \frac{1}{y^y\left(\ln(y) + 1\right)}$

4. $\frac{dy}{dx} = -\frac{\sqrt{y}}{\sqrt{x}}$

</details>

### 3. Hard

1. $x^2 y + y^2 = e^y$
2. $e^{x^2}y = x^2 y$
3. $\ln(x^2 + y^2) = 0$
4. $x^2 + y^2 + \ln(xy) = 0$
5. $y = x^{y}$

<details>
<summary>Answer Key</summary>

1. $\frac{dy}{dx} = \frac{-2xy}{x^2 + 2y - e^y}$

2. $\frac{dy}{dx} = \frac{2xy(e^{x^2} - 1)}{e^{x^2} - 1}$

3. $\frac{dy}{dx} = -\frac{x}{y}$

4. $\frac{dy}{dx} = \frac{-2x - \frac{y}{x}}{2y + \frac{x}{y}}$

5. $\frac{dy}{dx} = \frac{y^2 \ln(x) + xy}{x(x \ln(x) - y)}$

</details>

