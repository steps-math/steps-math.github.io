---
layout: base.njk
title: Introduction to Limits
category: limits
description: Lecture 12
date: 2025-07-15
---

# Introduction to limits, limits on graphs, and limits of infinity.

Before we introduce limits, you can review some notes about discontinuities without limits: [lecture 11](/notes/lecture-11/)

## What is a limit?

A limit is the value that a function approaches as the input approaches a certain value.

We say that the limit of $f(x)$ as $x$ approaches $a$ is $L$ if the function $f(x)$ gets close to $L$ as $x$ gets close to $a$.

$$\lim_{x\to a} f(x) = L$$

> This is read as "the limit of $f(x)$ as $x$ approaches $a$ is $L$",
> or "the limit of $f(x)$ as $x$ goes to $a$ is $L$".

## How to find a limit?

1. Substitute the value of the input into the function.
2. If the function is defined at the value of the input, then the limit is the value of the function.
3. If the function is not defined at the value of the input, then the limit is the value that the function approaches as the input approaches the value of the input.

> Example for a defined point
> The limit of $f(x) = x^2$ as $x$ approaches 2 is 4.
>
> Because $f(2) = 2^2 = 4$.
> $$\lim_{x\to 2} x^2 = 4$$

> Example for an undefined point
> The limit of $f(x) = \frac{(x-1)^2}{x-1}$ as $x$ approaches 1 is 0.
>
> Because as $x$ gets closer to 1, $f(x)$ gets closer to 0.
> $$\lim_{x\to 1} \frac{(x-1)^2}{x-1} = \lim_{x\to 1} (x-1) = 0$$

## Limits at a point

Limits at a point are the values that a function approaches as the input approaches a certain value.

1. If the function is defined at the point, then the limit is the value of the function at the point.

2. If the function is not defined at the point, then the limit is the value that the function approaches as the input approaches the point. This includes holes, jumps, and vertical asymptotes.

> Example
> If a hole exists at $x=3$, and $f(x)=\frac{x^2-9}{x-3}$, then the limit of $f(x)$ as $x$ approaches 3 is 6.
>
> Because $f(x)=\frac{(x-3)(x+3)}{x-3}=x+3$ for $x\neq 3$.
> $$\lim_{x\to 3} \frac{x^2-9}{x-3} = \lim_{x\to 3} (x+3) = 6$$

## Limits at infinity

Limits at infinity are the values that a function approaches as the input approaches infinity.

> Example
> The limit of $f(x) = x^2$ as $x$ approaches infinity is infinity.
> $$\lim_{x\to \infty} x^2 = \infty$$
> and the limit of $f(x) = x^2$ as $x$ approaches negative infinity is infinity.
> $$\lim_{x\to -\infty} x^2 = \infty$$

## Numerical examples

Let's explore limits numerically by examining how a function behaves as we get closer to a specific point.

### Example 1: Simple substitution
Consider the function $f(x) = 2x + 1$ and find $\lim_{x \to 3} f(x)$.

| $x$ | $f(x) = 2x + 1$ |
|-----|------------------|
| 2.9 | 6.8 |
| 2.99 | 6.98 |
| 2.999 | 6.998 |
| 2.9999 | 6.9998 |
| **3** | **7** |
| 3.0001 | 7.0002 |
| 3.001 | 7.002 |
| 3.01 | 7.02 |
| 3.1 | 7.2 |

As $x$ gets closer to 3, $f(x)$ gets closer to 7. Therefore, $\lim_{x \to 3} (2x + 1) = 7$.

### Example 2: Function with a hole
Consider the function $f(x) = \frac{x^2 - 4}{x - 2}$ and find $\lim_{x \to 2} f(x)$.

| $x$ | $f(x) = \frac{x^2 - 4}{x - 2}$ |
|-----|--------------------------------|
| 1.9 | 3.9 |
| 1.99 | 3.99 |
| 1.999 | 3.999 |
| 1.9999 | 3.9999 |
| **2** | **undefined** |
| 2.0001 | 4.0001 |
| 2.001 | 4.001 |
| 2.01 | 4.01 |
| 2.1 | 4.1 |

Even though $f(2)$ is undefined (division by zero), as $x$ approaches 2 from both sides, $f(x)$ approaches 4. Therefore, $\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$.

> **Note**: We can verify this algebraically:
> $$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x+2 \text{ for } x \neq 2$$
> So $\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} (x+2) = 4$

### Example 3: One-sided limits
Consider the function $f(x) = \frac{|x|}{x}$ and find $\lim_{x \to 0} f(x)$.

| $x$ (approaching from left) | $f(x) = \frac{\|x\|}{x}$ |
|-----------------------------|------------------------|
| -0.1 | -1 |
| -0.01 | -1 |
| -0.001 | -1 |
| -0.0001 | -1 |

| $x$ (approaching from right) | $f(x) = \frac{\|x\|}{x}$ |
|------------------------------|------------------------|
| 0.0001 | 1 |
| 0.001 | 1 |
| 0.01 | 1 |
| 0.1 | 1 |

From the left: $\lim_{x \to 0^-} \frac{|x|}{x} = -1$  
From the right: $\lim_{x \to 0^+} \frac{|x|}{x} = 1$

Since the left and right limits are different, $\lim_{x \to 0} \frac{|x|}{x}$ **does not exist**.


# Exercises

## 1. Check your understanding

{% answerChecker %}

**a)** What is $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$?
{% answerNumeric "lim1" 4 "Enter your answer" %}

**b)** What is $\lim_{x \to 5} (3x-2)$?
{% answerNumeric "lim2" 13 "Enter your answer" %}

**c)** What is $\lim_{x \to -1} \frac{|x|}{x}$?
{% answerNumeric "lim3" -1 "Enter your answer" %}

**d)** What is $\lim_{x \to -1} \frac{x^2-1}{x-1}$?
{% answerNumeric "lim4" 0 "Enter your answer" %}

{% endanswerChecker %}


## 2. Limits at infinity

{% answerChecker %}
Write **98765** if the limit is $\infty$ and **-98765** if the limit is $-\infty$.

**a)** What is $\lim_{x \to \infty} \frac{1}{x}$?
{% answerNumeric "lim5" 0 "Enter your answer" %}

**b)** What is $\lim_{x \to -\infty} \frac{1}{x}$?
{% answerNumeric "lim6" 0 "Enter your answer" %}

**c)** What is $\lim_{x \to \infty} \frac{x^2}{x+1}$?
{% answerNumeric "lim7" 98765 "Enter your answer" %}

**d)** What is $\lim_{x \to -\infty} \frac{x^2}{x+1}$?
{% answerNumeric "lim8" -98765 "Enter your answer" %}

**e)** What is $\lim_{x \to \infty} 2^x$?
{% answerNumeric "lim9" 98765 "Enter your answer" %}

**f)** What is $\lim_{x \to -\infty} 2^x$?
{% answerNumeric "lim10" 0 "Enter your answer" %}

**g)** What is $\lim_{x \to \infty} \log_2(x)$?
{% answerNumeric "lim11" 98765 "Enter your answer" %}

**h)** What is $\lim_{x \to 0^+} \log_2(x)$?
{% answerNumeric "lim12" -98765 "Enter your answer" %}

**i)** What is $\lim_{x \to \infty} \log_2(\frac{1}{x})$?
{% answerNumeric "lim13" -98765 "Enter your answer" %}

**j)** What is $\lim_{x \to \infty} \frac{2x+4}{x-2}$?
{% answerNumeric "lim14" 2 "Enter your answer" %}

**k)** What is $\lim_{x \to -\infty} \frac{2x+4}{x-2}$?
{% answerNumeric "lim15" 2 "Enter your answer" %}


{% endanswerChecker %}

## 3. Graph
Using graphical software (like Desmos or GeoGebra), plot the following functions and identify the limits:

**a)** $f(x) = \frac{x^3-x^2-x+1}{x-1}$ as $x$ approaches 1.

**b)** $g(x) = \frac{3^x-1}{x}$ as $x$ approaches 0.

**c)** $h(x) = \frac{\sqrt{1+x}-1}{x}$ as $x$ approaches 0.

**d)** $k(x) = \frac{\log_2(x+1)}{x}$ as $x$ approaches 0. (Compare $\log_2$ when it is replaced with $\ln$)

## 4. Compound limits
Evaluate the following limits:

**a)** $\lim_{x \to \infty} \log_3(\frac{x^3-8}{x+1})$

**b)** $\lim_{x \to \infty} (\sqrt{x^2+5} - x)$

**c)** $\lim_{x \to -\infty} \frac{\sqrt{x^2+1}}{x}$

**d)** $\lim_{x \to 2} \frac{\sqrt{x+7} - 3}{x-2}$