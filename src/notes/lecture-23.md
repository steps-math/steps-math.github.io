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


## Summary of the Rules

**Implicit Differentiation Procedure:**
1. Differentiate both sides **with respect to $x$**.
2. Apply chain rule: whenever you differentiate $y$, multiply by $\frac{dy}{dx}$.
3. Rearrange and solve for $\frac{dy}{dx}$.

---

# Exercises: Implicit Differentiation

### Section 1: Problems without Natural Log or Exponential

Find $\frac{dy}{dx}$ for the following equations:

1. $x^2 + y^2 = 16$  
2. $x^2 - y^2 = 9$  
3. $xy = 1$  
4. $x^3 + y^3 = 6xy$  
5. $\sqrt{x} + \sqrt{y} = 1$  
6. $\ln(x^2 + y^2) = 0$ 

<details>
<summary>Answer Key</summary>

1. $\displaystyle \frac{dy}{dx} = -\frac{x}{y}$

2. $\displaystyle \frac{dy}{dx} = \frac{x}{y}$

3. $\displaystyle \frac{dy}{dx} = -\frac{y}{x}$

4. $\displaystyle \frac{dy}{dx} = \frac{6y - 3x^2}{3y^2 - 6x}$

5. $\displaystyle \frac{dy}{dx} = -\frac{\sqrt{y}}{\sqrt{x}}$

6. $\displaystyle \frac{dy}{dx} = -\frac{x}{y}$

</details>

### Section 2: Problems Involving Exponentials

Find $\frac{dy}{dx}$ for the following equations:

1. $e^y + x^2 = y$  
2. $x^x = y$  
3. $x = y^y$  
4. $e^{x^2y}  = x^2 y$  
5. $y = x^y$

<details>
<summary>Answer Key</summary>

1. $\displaystyle \frac{dy}{dx} = \frac{-2x}{e^y - 1}$

2. $\displaystyle \frac{dy}{dx} = x^x \left(\ln x + 1\right)$

3. $\displaystyle \frac{dy}{dx} = \frac{1}{y^y \left(\ln y + 1\right)}$

4. $\displaystyle \frac{dy}{dx} = \frac{2y-2x^2y^2}{yx^3-x}$  

5. $\displaystyle \frac{dy}{dx} = \frac{y^2}{x \left(1- y\ln x\right)}$

</details>

### Section 3: Problems Involving Natural Logarithms

Find $\frac{dy}{dx}$ for the following equations:

1. $\ln(xy) = x + y$  
2. $x^2 + y^2 + \ln(xy) = 0$  
3. $\ln(x) + \ln(y) = 1$  
4. $\ln(x^2 y) = y$  
5. $\ln(x + y) = xy$  
6. $\ln(xy) + x = y$


<details>
<summary>Answer Key</summary>

1. $\displaystyle \frac{dy}{dx} = \frac{1 - \frac{1}{x}}{\frac{1}{y} - 1}$

2. $\displaystyle \frac{dy}{dx} = \frac{-2x - \frac{y}{x}}{2y + \frac{x}{y}}$

3. $\displaystyle \frac{dy}{dx} = -\frac{y}{x}$

4. $\displaystyle \frac{dy}{dx} = \frac{\frac{2}{x} + \frac{1}{y} \frac{dy}{dx}}{\frac{dy}{dx}} = \frac{2/x}{1 - \frac{1}{y}}$ (Simplify accordingly)

5. $\displaystyle \frac{dy}{dx} = \frac{\frac{1}{x + y} (1 + \frac{dy}{dx}) - y}{x}$ (Implicitly solve for $\frac{dy}{dx}$)

6. $\displaystyle \frac{dy}{dx} = \frac{\frac{1}{x} + 1}{\frac{1}{y} - 1}$

</details>

### Extra Advanced Problems

Find $\frac{dy}{dx}$ for the following equations:

1. $x^{y} + y^{x} = xy$  

2. $\ln\big(x^2 + y^2\big) = xy + e^{xy}$  

3. $e^{xy} + \ln(y) = x^2 y^3$  

4. $x^{x^y} = y^{y^x}$  

5. $\ln(y) = \frac{x + y}{x - y}$  

6. $e^{x + y} = x^2 - y^2 + \ln(xy)$  

