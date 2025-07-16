---
layout: base.njk
title: Existence of limits, one sided limits, and infinity limits.
category: limits
description: Lecture 13
date: 2025-07-17
---

# Existence of limits, one sided limits, and infinity limits.

## One sided limits

When $x$ approaches a point $a$ from **one side** only:

- **Left-sided limit**: $\lim_{x \to a^-} f(x) = L$
  - means $x$ approaches $a$ with $x < a, f(x) \to L$
- **Right-sided limit**: $\lim_{x \to a^+} f(x) = L$
  - means $x$ approaches $a$ with $x > a, f(x) \to L$

> Examples:
> $$\lim_{x \to 2^-} x^2 = 4$$
> $$\lim_{x \to 2^+} x^2 = 4$$
>
> $$\lim_{x \to 0^+} \frac{1}{x} = \infty$$
> $$\lim_{x \to 0^-} \frac{1}{x} = -\infty$$
>
> $$\lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = 1$$
> $$\lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = -1$$

---
## Existence of limits

A limit exists **if and only if** the left-sided limit and the right-sided limit are equal.

$$\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L$$

### Types of non-existence

- **Jump discontinuity**: $\lim_{x \to a^-} f(x) \neq \lim_{x \to a^+} f(x)$.
- **Infinite discontinuity**: $\lim_{x \to a^+} f(x) = \infty$ and $\lim_{x \to a^-} f(x) = -\infty$ for example.

> Examples:
>
> $$\lim_{x \to 0} \frac{|x|}{x} \text{ does not exist because } \lim_{x \to 0^+} \frac{|x|}{x} = 1 \neq \lim_{x \to 0^-} \frac{|x|}{x} = -1$$
>
> $$\lim_{x \to 0} \frac{1}{x} \text{ does not exist because } \lim_{x \to 0^+} \frac{1}{x} = \infty \neq \lim_{x \to 0^-} \frac{1}{x} = -\infty$$

### Example

$$f(x) = \begin{cases}
x^2 + 1 & \text{if } x \leq 0 \\
x + 1 & \text{if } x > 0
\end{cases}$$

$$\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} (x^2 + 1) = 1$$
$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (x + 1) = 1$$

$$\lim_{x \to 0} f(x) = 1$$
---

## Infinity limits

### Vertical Asymptotes

If $f(x)$ grows without bound as $x$ approaches $a$, we write

$$\lim_{x \to a} f(x) = \infty$$

or
$$\lim_{x \to a} f(x) = -\infty$$

This signals a vertical asymptote at $x = a$.

> Example:
>
> $$h(x) = \frac{1}{(x-3)^2}$$
> As $x \to 3$, denominator $\to 0$, numerator positive $\to$
>
> $$\lim_{x \to 3} h(x) = \infty$$

### One-sided blow-up

$$p(x) = \frac{1}{x-1}$$

One‐sided blow‐up:

$$\lim_{x \to 1^-} p(x) = -\infty$$

$$\lim_{x \to 1^+} p(x) = \infty$$

### Horizontal Asymptotes

Describing **end‐behavior**:

$$\lim_{x \to \infty} f(x) = L$$

$$\lim_{x \to \infty} f(x) = L \implies y = L \text{ is a horizontal asymptote on the right}$$

Similarly for $\lim_{x \to -\infty} f(x) = L$.

> Examples:
>
> $$\lim_{x \to \infty} \frac{2x^2 + 3}{5x^2 - 1} = \frac{2}{5}$$
> $$\lim_{x \to -\infty} \frac{2x^2 + 3}{5x^2 - 1} = \frac{2}{5}$$

> Example 2:
>
> $$\lim_{x \to \infty} 2^{-x} = 0$$

> Example 3:
>
> $$\lim_{x \to -\infty} 2^{-x} = \infty$$


# Exercises

## 0. Feedback

Please fill this feedback form on week 3: [Feedback form](https://docs.google.com/forms/d/e/1FAIpQLScB9ZNAuVp_nWDj_Cd89-SNMz6yHb4FxL6rtgjd_eRf6Rinwg/viewform?usp=dialog)

## 1. Check your understanding

{% answerChecker %}
Write **98765** if the limit is $\infty$ and **-98765** if the limit is $-\infty$.

**a)** What is $\lim_{x \to 3^+} (2x + 7)$?
{% answerNumeric "lim1" 13 "Enter your answer" %}

**b)** What is $\lim_{x \to 3^-} (2x + 7)$?
{% answerNumeric "lim2" 13 "Enter your answer" %}

**c)** What is $\lim_{x \to -1} \frac{|x|}{x}$?
{% answerNumeric "lim3" -1 "Enter your answer" %}

**d)** What is $\lim_{x \to 3^+} \frac{1}{x-3}$?
{% answerNumeric "lim4" 98765 "Enter your answer" %}

**e)** What is $\lim_{x \to 3^-} \frac{1}{x-3}$?
{% answerNumeric "lim5" -98765 "Enter your answer" %}

**f)** What is $\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$?
{% answerNumeric "lim6" 6 "Enter your answer" %}

**g)** What is $\lim_{x \to -1^+} \frac{1}{x^2 - 1}$?
{% answerNumeric "lim7" -98765 "Enter your answer" %}

**h)** What is $\lim_{x \to 1^-} \frac{x^2 - 1}{x-1}$?
{% answerNumeric "lim8" 2 "Enter your answer" %}

**i)** What is $\lim_{x \to 1^+} \frac{x^2 - 1}{x-1}$?
{% answerNumeric "lim9" 2 "Enter your answer" %}

{% endanswerChecker %}

## 2. Evaluate the limit using graphs

Use graphs (Desmos or GeoGebra) to estimate the following limits.

{% answerChecker %}
Write **98765** if the limit is $\infty$ and **-98765** if the limit is $-\infty$.

**a)** $\lim_{x \to 2^+} \frac{\log (x)}{x-2}$.

{% answerNumeric "lim10" 98765 "Enter your answer" %}

**b)** $\lim_{x \to 1} \frac{\log (x)}{x-1}$. (Round to 2 decimal places)

{% answerNumeric "lim11" 0.43 "Enter your answer" %}

**c)** $\lim_{x \to \infty} 4x^5-3x^2+1$.

{% answerNumeric "lim12" 98765 "Enter your answer" %}

**d)** $\lim_{x \to -\infty} 4x^5-3x^2+1$.

{% answerNumeric "lim13" -98765 "Enter your answer" %}

**e)** $\lim_{x \to \infty} \sqrt{x} - x$.

{% answerNumeric "lim14" -98765 "Enter your answer" %}

**f)** $\lim_{x \to \infty} \frac{\sqrt{4+9x^2}}{x+1}$.

{% answerNumeric "lim15" 3 "Enter your answer" %}

{% endanswerChecker %}

## 3. Evaluate the limit using algebra

Do the corrective assignment problems in the following link:
[solving limits algebraically](https://calculus.flippedmath.com/uploads/1/1/3/0/11305589/calc_1.7_ca1.pdf)

(For more problems and videos, see this [lesson page](https://calculus.flippedmath.com/17-selecting-procedures-for-determining-limits.html) and [this other lesson](https://calculus.flippedmath.com/16-determining-limits-using-algebraic-manipulation.html))