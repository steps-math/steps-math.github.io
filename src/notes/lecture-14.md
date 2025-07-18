---
layout: base.njk
title: Laws of limits and Squeeze theorem
category: limits
description: Lecture 14
date: 2025-07-19
---

# Laws of limits and Squeeze theorem

## Properties of limits

**1. Constant limit**

$$\lim_{x \to a} c = c, \text{ where } c \text{ is a constant}$$

**2. Identity limit**

$$\lim_{x \to a} x = a$$

**3. Sum/difference limit**

If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$, then:

$$\lim_{x \to a} (f(x) + g(x)) = \lim_{x \to a} f(x) + \lim_{x \to a} g(x) = L + M$$

$$\lim_{x \to a} (f(x) - g(x)) = \lim_{x \to a} f(x) - \lim_{x \to a} g(x) = L - M$$

> **Caution:** $L$ and $M$ must exist and are finite, so this is not true for $\infty - \infty$ or $\infty + (-\infty)$.

**4. Product limit**

$$\lim_{x \to a} (f(x) \cdot g(x)) = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x) = L \cdot M$$

> Example: $\lim_{x \to 3} (x^2) = \lim_{x \to 3} x \cdot \lim_{x \to 3} x = 3 \cdot 3 = 9$
>
> **Caution:** $L$ and $M$ must exist and are finite, so this is not true for $\infty \cdot 0$ or $\infty \cdot (-\infty)$.

**5. Quotient limit**

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)} = \frac{L}{M}, \text{ where } M \neq 0$$

> **Caution:** $L$ and $M$ must exist and are finite, so this is not true for $\frac{0}{0}$ or $\frac{\infty}{\infty}$.

**6. Power limit**

If $\lim_{x \to a} f(x) = L$ and $n$ is any real number, then:

$$\lim_{x \to a} (f(x))^n = (\lim_{x \to a} f(x))^n = L^n$$

> You can see that if $n$ is a fraction of the form $\frac{1}{n}$, then the power limit is the $n$-th root of the limit.
> So, for example, if $n = \frac{1}{2}$, $\lim_{x \to a} (f(x))^{\frac{1}{2}} = \sqrt{\lim_{x \to a} f(x)} = \sqrt{L}$.

#### Corollary

If $p(x)$ is a polynomial function, then:

$$\lim_{x \to a} p(x) = p(a)$$

> Example: $\lim_{x \to 3} (x^2 + 2x + 1) = 3^2 + 2 \cdot 3 + 1 = 16$

---
## Squeeze theorem

If $f(x) \leq g(x) \leq h(x)$ for all $x$ in an open interval containing $a$, except possibly at $a$, and if

$$\lim_{x \to a} f(x) = \lim_{x \to a} h(x) = L$$

then

$$\lim_{x \to a} g(x) = L$$

> Example: 
> $$\lim_{x \to 0} x \sin(\frac{1}{x}) = 0$$
>
> Reasoning:
>
> For all $x$, $-1 \leq \sin(\frac{1}{x}) \leq 1$.
>
> Multiply through by $x$:
>
> $$-x \leq x \sin(\frac{1}{x}) \leq x$$
>
> Since $\lim_{x \to 0} (-x) = 0$ and $\lim_{x \to 0} x = 0$, by the Squeeze Theorem,
>
> $$\lim_{x \to 0} x \sin(\frac{1}{x}) = 0$$
>
> <div style="text-align: center; margin: 20px 0;">
>    <img src="/images/14-squeeze.png" alt="Graph of squeeze theorem" style="max-width: 90%; height: auto; border: 1px solid gray;">
> </div>

---
## Exercises

## 1. Check your understanding - Basic limit properties

{% answerChecker %}

**a)** What is $\lim_{x \to 2} (3x^2 + 2x - 1)$?
{% answerNumeric "basic1" 15 "Enter your answer" %}

**b)** What is $\lim_{x \to -1} (x^3 - 2x^2 + 4)$?
{% answerNumeric "basic2" 1 "Enter your answer" %}

**c)** What is $\lim_{x \to 0} \frac{x^2 + 3x}{x+1}$?
{% answerNumeric "basic3" 0 "Enter your answer" %}

**d)** What is $\lim_{x \to 4} \sqrt{x^2 + 9}$?
{% answerNumeric "basic4" 5 "Enter your answer" %}

**e)** What is $\lim_{x \to 2} \frac{x^2 - 3x + 2}{x - 2}$?
{% answerNumeric "basic5" 1 "Enter your answer" %}

**f)** What is $\lim_{x \to 1} \frac{x^3 - 1}{x - 1}$?
{% answerNumeric "basic6" 3 "Enter your answer" %}

{% endanswerChecker %}

## 2. Applying limit properties step by step

{% answerChecker %}

**a)** If $\lim_{x \to 3} f(x) = 4$ and $\lim_{x \to 3} g(x) = 2$, what is $\lim_{x \to 3} (f(x) + g(x))$?
{% answerNumeric "prop1" 6 "Enter your answer" %}

**b)** If $\lim_{x \to 3} f(x) = 4$ and $\lim_{x \to 3} g(x) = 2$, what is $\lim_{x \to 3} (f(x) \cdot g(x))$?
{% answerNumeric "prop2" 8 "Enter your answer" %}

**c)** If $\lim_{x \to 3} f(x) = 4$ and $\lim_{x \to 3} g(x) = 2$, what is $\lim_{x \to 3} \frac{f(x)}{g(x)}$?
{% answerNumeric "prop3" 2 "Enter your answer" %}

**d)** If $\lim_{x \to 3} f(x) = 4$, what is $\lim_{x \to 3} (f(x))^2$?
{% answerNumeric "prop4" 16 "Enter your answer" %}

**e)** If $\lim_{x \to 3} f(x) = 4$, what is $\lim_{x \to 3} \sqrt{f(x)}$?
{% answerNumeric "prop5" 2 "Enter your answer" %}

**f)** If $\lim_{x \to 3} f(x) = 5$ and $\lim_{x \to 3} g(x) = 2$, what is $\lim_{x \to 3} (f(x) - 2g(x))$?
{% answerNumeric "prop6" 1 "Enter your answer" %}

{% endanswerChecker %}

## 3. Squeeze theorem applications

{% answerChecker %}

**a)** What is $\lim_{x \to 0} x^2 \cos(\frac{1}{x})$?
{% answerNumeric "squeeze1" 0 "Enter your answer" %}


{% endanswerChecker %}

## 4. Complex limit calculations

{% answerChecker %}

**a)** What is $\lim_{x \to 2} \frac{x^3 - 8}{x^2 - 4}$?
{% answerNumeric "complex1" 3 "Enter your answer" %}

**b)** What is $\lim_{x \to 1} \frac{x^4 - 1}{x^2 - 1}$?
{% answerNumeric "complex2" 2 "Enter your answer" %}

**c)** What is $\lim_{x \to 0} \frac{\sqrt{1 + x} - 1}{x}$?
{% answerNumeric "complex3" 0.5 "Enter your answer" %}

**d)** What is $\lim_{x \to 0} \frac{\sqrt{4 + x} - 2}{x}$?
{% answerNumeric "complex4" 0.25 "Enter your answer" %}

**e)** What is $\lim_{x \to 3} \frac{x^2 - 9}{\sqrt{x} - \sqrt{3}}$?
{% answerNumeric "complex5" 6 "Enter your answer" %}

**f)** What is $\lim_{x \to 0} \frac{x^2 + 2x}{x^2 + x}$?
{% answerNumeric "complex6" 2 "Enter your answer" %}

{% endanswerChecker %}

## 5. Limits with infinity

{% answerChecker %}
Write **98765** if the limit is $\infty$ and **-98765** if the limit is $-\infty$.

**a)** What is $\lim_{x \to \infty} \frac{x^3 + 2x^2 + 1}{x^2 + 3}$?
{% answerNumeric "inf1" 98765 "Enter your answer" %}

**b)** What is $\lim_{x \to -\infty} \frac{x^3 + 2x^2 + 1}{x^2 + 3}$?
{% answerNumeric "inf2" -98765 "Enter your answer" %}

**c)** What is $\lim_{x \to \infty} \frac{2x^2 + 3x + 1}{3x^2 + 2x + 5}$?
{% answerNumeric "inf3" 0.67 "Enter your answer" %}

**d)** What is $\lim_{x \to \infty} \frac{x^2 + 1}{x^3 + 2x}$?
{% answerNumeric "inf4" 0 "Enter your answer" %}

**e)** What is $\lim_{x \to \infty} \frac{\sqrt{x^2 + 1}}{x + 1}$?
{% answerNumeric "inf5" 1 "Enter your answer" %}

**f)** What is $\lim_{x \to -\infty} \frac{\sqrt{x^2 + 1}}{x + 1}$?
{% answerNumeric "inf6" -1 "Enter your answer" %}

{% endanswerChecker %}


## 6. Graphical exploration

Using graphical software (like Desmos or GeoGebra), plot the following functions and identify the limits:

**a)** $f(x) = x \sin(\frac{1}{x})$ as $x$ approaches 0. Verify the squeeze theorem.

**b)** $h(x) = \frac{\sin(x)}{x}$ as $x$ approaches 0.

**c)** $k(x) = \frac{1 - \cos(x)}{x^2}$ as $x$ approaches 0.

**d)** Plot the functions $f(x) = -x^2$, $g(x) = x^2 \sin(\frac{1}{x})$, and $h(x) = x^2$ on the same graph. Observe how $g(x)$ is "squeezed" between $f(x)$ and $h(x)$.

