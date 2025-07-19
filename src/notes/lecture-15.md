---
layout: base.njk
title: Algebraic manipulation of limits and asymptotes
category: limits
description: Lecture 15
date: 2025-07-20
---

# Algebraic manipulation of limits and asymptotes

## Some Algebraic Rules

1. $\frac{a+b}{c} = \frac{a}{c} + \frac{b}{c}$
2. $a^2 - b^2 = (a+b)(a-b)$
3. $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$
4. $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$
5. $a^4 - b^4 = (a+b)(a-b)(a^2 + b^2)$
6. $ax^2 + bx + c = a(x-r_1)(x-r_2)$ where $r_1$ and $r_2$ are the roots of the quadratic equation $ax^2 + bx + c = 0$

> Usually, you will see these rules involving a number in place of $a$ or $b$.
> For example: 
> - $x^2 - 4 = (x-2)(x+2)$
> - $x^2 - 1 = (x-1)(x+1)$
> - $x^3 - 1 = (x-1)(x^2 + x + 1)$
> - $x^3 + 1 = (x+1)(x^2 - x + 1)$
>
> For quadratic expressions, you can use the quadratic formula to find the roots.
> For example: 
> $x^2 - 4x + 3 = (x-1)(x-3)$, where $r_1 = 1$ and $r_2 = 3$ are the solutions to the quadratic equation $x^2 - 4x + 3 = 0$.


### Reminder of Log rules

1. $\log_b(xy) = \log_b(x) + \log_b(y)$
2. $\log_b(\frac{x}{y}) = \log_b(x) - \log_b(y)$
3. $\log_b(x^k) = k \log_b(x)$
4. $\log_{b^k}(x) = \frac{1}{k} \log_b(x)$
5. $\log_b(b^x) = x$
6. $\log_b(1) = 0$
7. $\log_b(b) = 1$
8. $\log_b(x) = \frac{\log_c(x)}{\log_c(b)}$

---

## Asymptotes & Intuitive Growth

### 1. Growth “Ladder”
From slowest to fastest (as $x \to \infty$):

1. **Constants**: $f(x)=c$ — flat line  
2. **Logarithms**: $\log x$ — very slow climb  
3. **Roots/fractional powers**: $x^{1/2},\,x^{1/3}$ — slow but steady  
4. **Polynomials**: $x^n$ — speed is proportional to degree $n$  
5. **Exponentials**: $e^x$ or $a^x$ — rapid “explosion”  

> **Visual**: log = gentle path; root = shallow hill; $x^2$ = ski slope; $e^x$ = cliff.

### 2. Horizontal Asymptotes of Rational Functions
For $f(x)=\frac{p(x)}{q(x)},\quad p(x)=a_nx^n+\dots,\;q(x)=b_nx^n+\dots$ both of degree $n$,  

$$
\lim_{x\to\pm\infty}f(x)
=\frac{a_n}{b_n}.
$$
**Asymptote**:  
$$
y=\frac{a_n}{b_n}.
$$
> **Example**:  
> $\lim_{x\to\infty}\frac{3x^4- x+2}{5x^4+7x^2}=3/5$, so $y=3/5$.


> - Lower‑power terms “vanish” at infinity (e.g. $x^2/x^3=1/x\to0$).
> - Asymptotes come from comparing only the highest‑power terms.

### 3. Vertical & Slant Asymptotes
- **Vertical** at $x=c$ if $\lim_{x\to c^\pm}f(x)=\pm\infty$.
- **Slant** when $\deg p \geq \deg q+1$. Divide:
  $$
  \frac{p(x)}{q(x)}=L(x)+\frac{R(x)}{q(x)},
  $$
  then $y=L(x)$ is the slant asymptote since $\lim_{x\to\pm\infty}R(x)/q(x)=0$.


---
# Exercises

## 1. Limit calculations

Compute the following limits algebraically. (You can use the [limit calculator](https://www.symbolab.com/solver/limit-calculator) to check your answers and steps.)

{% answerChecker %}

**a)** What is $\lim_{x \to 0} \frac{x^2 + 2x}{x^2 + x}$?
{% answerNumeric "complex6" 2 "Enter your answer" %}

**b)** What is $\lim_{x \to -1} \frac{x^2 - 1}{x+1}$?
{% answerNumeric "complex7" -2 "Enter your answer" %}

**c)** What is $\lim_{x \to 1} \frac{x^4 - 1}{x^2 - 1}$?
{% answerNumeric "complex2" 2 "Enter your answer" %}

**d)** What is $\lim_{x \to 2} \frac{x^3 - 8}{x^2 - 4}$?
{% answerNumeric "complex1" 3 "Enter your answer" %}

**e)** What is $\lim_{x \to 3} \frac{x^2 - 9}{\sqrt{x} - \sqrt{3}}$?
{% answerNumeric "complex5" 6 "Enter your answer" %}

**f)** What is $\lim_{x \to -2} \frac{x^2+x-2}{x^2-4}$?
{% answerNumeric "complex8" 0.75 "Enter your answer" %}

**g)** What is $\lim_{x \to 0} \frac{\sqrt{1 + x} - 1}{x}$?
{% answerNumeric "complex3" 0.5 "Enter your answer" %}

**h)** What is $\lim_{x \to 0} \frac{\sqrt{4 + x} - 2}{x}$?
{% answerNumeric "complex4" 0.25 "Enter your answer" %}

{% endanswerChecker %}

## 2. Limits with infinity

Compute the following limits algebraically. (You can use the [limit calculator](https://www.symbolab.com/solver/limit-calculator) to check your answers and steps.)

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

**g)** What is $\lim_{x \to \infty} \frac{\log_3(x)}{\sqrt{x}}$?
{% answerNumeric "inf7" 0 "Enter your answer" %}

**h)** What is $\lim_{x \to \infty} \frac{x^2+2^x}{x^3 + 2x}$?
{% answerNumeric "inf8" 98765 "Enter your answer" %}

**i)** What is $\lim_{x \to -\infty} \frac{x^2+2^x}{x^3 + 2x}$?
{% answerNumeric "inf9" -98765 "Enter your answer" %}

**j)** What is $\lim_{x \to 0^+} x^{\log_2(x)}$?
{% answerNumeric "inf10" 98765 "Enter your answer" %}

{% endanswerChecker %}

## 3. Additional general practice

- [https://precalculus.flippedmath.com/uploads/1/1/3/0/11305589/pc_15.1_ca1.pdf](https://precalculus.flippedmath.com/uploads/1/1/3/0/11305589/pc_15.1_ca1.pdf)
- [https://tutorial.math.lamar.edu/Problems/CalcI/LimitsAtInfinityI.aspx](https://tutorial.math.lamar.edu/Problems/CalcI/LimitsAtInfinityI.aspx)

## 4. Previous exercises

Solve any of the given exercises in previous lectures if you haven't already.