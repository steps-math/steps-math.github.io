---
layout: base.njk
title: Algebraic manipulation of limits and asymptotes. Euler number $e$ and its properties.
category: limits
description: Lecture 15
date: 2025-07-21
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
> **Example 1**:  
> $$\lim_{x\to\infty}\frac{3x^4- x+2}{5x^4+7x^2}= \lim_{x\to\infty}\frac{3x^4}{5x^4} = \frac{3}{5}$$
> so $y=\frac{3}{5}$ is the horizontal asymptote.
> 
> **Example 2**:  
> $$\lim_{x\to\infty}\frac{3x^3 + 2x}{x^5 - 3x^2 + 1}= \lim_{x\to\infty}\frac{3x^3}{x^5} = 0$$
> so $y=0$ is the horizontal asymptote.
> 
> **Example 3**:  
> $$\lim_{x\to\infty}\frac{x^4 + 2x^2 + 1}{x^3 - 3x^2 + 3x - 1}= \lim_{x\to\infty}\frac{x^4}{x^3} = \infty$$
> so there is no horizontal asymptote.


> - Lower‑power terms “vanish” at infinity (e.g. $x^2/x^3=1/x\to0$).
> - Asymptotes come from comparing only the highest‑power terms.
> - **Horizontal asymptotes** are found by looking at $x \to \infty$ or $x \to -\infty$.
> - If you get $\infty$ or $-\infty$, there is no horizontal asymptote. Otherwise, the horizontal asymptote is the answer number you get.

### 3. Vertical & Slant Asymptotes
- **Vertical** at $x=c$ if $\lim_{x\to c^\pm}f(x)=\pm\infty$.
- **Slant** when $\deg p \geq \deg q+1$. Divide:
  $$
  \frac{p(x)}{q(x)}=L(x)+\frac{R(x)}{q(x)},
  $$
  then $y=L(x)$ is the slant asymptote since $\lim_{x\to\pm\infty}R(x)/q(x)=0$.

> **Example 1**:
> $$\lim_{x\to 1}\frac{1}{(x-1)^2} = \infty$$
> so $x=1$ is the vertical asymptote.
> 
> **Example 2**:
> $$\lim_{x\to 0^+}\log_4 (x) = -\infty$$
> so $x=0$ is the vertical asymptote.
>
> **Example 3**:
> $$\lim_{x \to 1}\frac{x^2 - 1}{x-1} = \lim_{x \to 1}\frac{(x-1)(x+1)}{x-1} = \lim_{x \to 1}(x+1) = 2$$
> so (1, 2) is a hole in the graph.

---

# Euler Number $e$ and its properties

## What is $e$?

$e$ is a special constant, approximately
$$
e \approx 2.718281828\ldots
$$
It is defined in several equivalent ways. At this point, we will use the limit definition:

**Limit definition (compound interest):**
$$
e = \lim_{n \to \infty}\Bigl(1 + \tfrac1n\Bigr)^n.
$$

## Natural logarithm

The natural logarithm, $\ln(x)$, is the inverse of the exponential function $e^x$.

$$
\ln(x) = \log_e(x)
$$

---

**The rest of this set of notes are for your reference and might make more sense later.**

<details>
<summary>Additional properties of <em>e</em></summary>

## Properties of $e$

1. **Irrationality:**  $e$ cannot be expressed as a fraction of two integers.
2. **Transcendence:**  $e$ is not a root of any nonzero polynomial with integer coefficients.
3. **Limit of a sequence:**
   $$
   e = \lim_{n \to \infty}\Bigl(1 + \tfrac1n\Bigr)^n.
   $$
4. **Infinite series expansion:**
   $$
   e = \sum_{k=0}^\infty \frac{1}{k!}.
   $$
5. **Unique growth rate:** among all exponential functions $a^x$, the function $e^x$ is the only one whose rate of change at $x=0$ is exactly 1.
6. **Derivative and integral:**
   $$
   \frac{d}{dx}e^x = e^x, 
   \qquad
   \int e^x\,dx = e^x + C.
   $$
7. **Euler’s formula (complex extension):**
   $$
   e^{i\theta} = \cos\theta + i\sin\theta,
   $$
   which for $\theta = \pi$ gives the celebrated identity
   $$
   e^{i\pi} + 1 = 0.
   $$

## Why do we care about $e$?

- **Calculus:** $e^x$ is its own derivative and integral, making it central in solving differential equations.
- **Growth and decay models:** continuous compound interest, population growth, radioactive decay all use $e$.
- **Probability & statistics:** appears in the Poisson distribution and normal distribution’s density function.
- **Complex analysis:** Euler’s formula links exponential and trigonometric functions, underpinning Fourier analysis.
- **Natural logarithm:** $\ln(x)$—the inverse of $e^x$—simplifies many integrals and solves equations involving products and powers.

## Alternative definitions

1. **Series definition:**
   $$
   e = \sum_{k=0}^\infty \frac{1}{k!} = 1 + 1 + \tfrac12 + \tfrac1{6} + \tfrac1{24} + \cdots.
   $$
2. **Differential equation definition:** the unique base for which the function $f(x)=e^x$ satisfies
   $$
   \frac{d}{dx}e^x = e^x \quad\text{and}\quad e^0 = 1.
   $$

3. **Via the natural logarithm:**
   $$
   \ln(e) = 1,\quad\text{and}\quad \ln(x) = \int_1^x \frac{1}{t}\,dt.
   $$
4. **As the unique real number satisfying**
   $$
   \int_1^e \frac{1}{t}\,dt = 1.
   $$

## Applications and examples

1. **Continuous compounding:**  
   If an account pays interest at annual rate $r$ compounded continuously, the balance after $t$ years is
   $$
   A(t) = A_0\,e^{rt}.
   $$
2. **Differential equations:**  
   The solution to 
   $$
   \frac{dy}{dx} = ky,\quad y(0)=y_0
   $$
   is
   $$
   y(x) = y_0\,e^{kx}.
   $$
3. **Approximating $e$:**  
   Using the series up to $k=5$,
   $$
   e \approx 1 + 1 + \tfrac12 + \tfrac16 + \tfrac1{24} + \tfrac1{120} = 2.716666\ldots
   $$
4. **Compound interest example:**  
   \$1000 at 5% interest for 3 years, continuously compounded:
   $$
   A = 1000\,e^{0.05 \times 3} \approx 1000 \times e^{0.15} \approx 1000 \times 1.1618 = \$1161.83.
   $$

</details>

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
{% answerNumeric "complex5" 20.78 "Enter your answer" %}

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

## 3. Limit calculations with $e$

Compute the following limits algebraically.

{% answerChecker %}

Each of the following limits can be evaluated as $e$ to the power of some expression.

**a)** What is $x$: $\lim_{n \to \infty} (1+\frac{1}{2n})^n = e^x$?
{% answerNumeric "euler1" 0.5 "Enter your answer" %}

**b)** What is $x$: $\lim_{n \to 0^+} (1+n)^{\frac{3}{n}} = e^x$?
{% answerNumeric "euler2" 3 "Enter your answer" %}

**c)** What is $x$: $\lim_{n \to \infty} \sqrt{(1+\frac{4}{n})^{n}} = e^x$?
{% answerNumeric "euler3" 2 "Enter your answer" %}

**d)** What is $x$: $\lim_{n \to \infty} \sqrt[n]{(1+\frac{5}{n})^n} = e^x$?
{% answerNumeric "euler4" 0 "Enter your answer" %}

{% endanswerChecker %}

## 4. Decay exercise

The amount of Carbon-14 in a sample decays according to 
$$N(t) = N_0 e^{-kt}$$
where $N_0$ is the initial amount of Carbon-14 and $k$ is the decay constant.

**a)** If the half-life of Carbon-14 is 5730 years, what is the decay constant $k$? (compute it in terms of $\ln$)
**b)** If a sample has 1000 grams of Carbon-14, how much will be left after 10000 years?
**c)** If a relic contains 80% of the Carbon-14 it originally had, how old is the relic?

## 5. Additional general practice

- [https://precalculus.flippedmath.com/uploads/1/1/3/0/11305589/pc_15.1_ca1.pdf](https://precalculus.flippedmath.com/uploads/1/1/3/0/11305589/pc_15.1_ca1.pdf)
- [https://tutorial.math.lamar.edu/Problems/CalcI/LimitsAtInfinityI.aspx](https://tutorial.math.lamar.edu/Problems/CalcI/LimitsAtInfinityI.aspx)


## 6. Challenge exercises

Try to evaluate the following limits:

**a)** $\lim_{x \to 0} \frac{e^x - 1}{x}$ &nbsp;&nbsp;&nbsp;&nbsp; (**Hint**: use the definition of $e$ and the limit laws.)

**b)** $\lim_{x \to 0} \frac{2^x - 1}{x}$ &nbsp;&nbsp;&nbsp;&nbsp; (**Hint**: the answer should be expressed in terms of $\ln$)

**c)** $\lim_{x \to 0} \frac{b^x - 1}{x}$ for $b > 0$ &nbsp;&nbsp;&nbsp;&nbsp; (**Hint**: the answer should be expressed in terms of $\ln$)
