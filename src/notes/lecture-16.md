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
