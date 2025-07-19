---
layout: base.njk
title: Euler Number $e$ and its properties
category: limits
description: Lecture 16
date: 2025-07-21
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

## Exercises

### 1. Limit calculations

Compute the following limits algebraically.

{% answerChecker %}

Each of the following limits can be evaluated as $e$ to the power of some expression.

**a)** What is $x$: $\lim_{n \to \infty} (1+\frac{1}{2n})^n = e^x$?
{% answerNumeric "complex1" 0.5 "Enter your answer" %}

**b)** What is $x$: $\lim_{n \to 0^+} (1+n)^{\frac{3}{n}} = e^x$?
{% answerNumeric "complex3" 3 "Enter your answer" %}

**c)** What is $x$: $\lim_{n \to \infty} \sqrt{(1+\frac{4}{n})^{n}} = e^x$?
{% answerNumeric "complex2" 2 "Enter your answer" %}

**d)** What is $x$: $\lim_{n \to \infty} \sqrt[n]{(1+\frac{5}{n})^n} = e^x$?
{% answerNumeric "complex4" 0 "Enter your answer" %}

{% endanswerChecker %}

## 2. Decay exercise

The amount of Carbon-14 in a sample decays according to 
$$N(t) = N_0 e^{-kt}$$
where $N_0$ is the initial amount of Carbon-14 and $k$ is the decay constant.

**a)** If the half-life of Carbon-14 is 5730 years, what is the decay constant $k$? (compute it in terms of $\ln$)
**b)** If a sample has 1000 grams of Carbon-14, how much will be left after 10000 years?
**c)** If a relic contains 80% of the Carbon-14 it originally had, how old is the relic?

## Challenge exercise

Try to evaluate the following limits:

**a)** $\lim_{x \to 0} \frac{e^x - 1}{x}$ &nbsp;&nbsp;&nbsp;&nbsp; (**Hint**: use the definition of $e$ and the limit laws.)

**b)** $\lim_{x \to 0} \frac{2^x - 1}{x}$ &nbsp;&nbsp;&nbsp;&nbsp; (**Hint**: the answer should be expressed in terms of $\ln$)

**c)** $\lim_{x \to 0} \frac{b^x - 1}{x}$ for $b > 0$ &nbsp;&nbsp;&nbsp;&nbsp; (**Hint**: the answer should be expressed in terms of $\ln$)