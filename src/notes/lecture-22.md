---
layout: base.njk
title: Derivatives rules 3 - Chain rule
date: 2025-08-02
category: differentiation
description: Lecture 22
---

# Lecture 22: Chain Rule

> Watch 3Blue1Brown videos on [visualizing the chain rule](https://www.youtube.com/watch?v=YG15m2VwSjA&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr&index=5) for a further conceptual understanding of the rule.

## Chain Rule

If $f(x)$ and $g(x)$ are both differentiable, then:

$$
\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)
$$

or in Leibniz notation:

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

(Note that this looks like a multiplication of fractions, but it is not. It's a multiplication of two derivatives.)

> **Example 1:**
>
> $f(x) = x^2$, $g(x) = x+1 \implies f(g(x)) = (x+1)^2$  
> $f'(x) = 2x$, $g'(x) = 1$  
> $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x) = 2(x+1) \cdot 1 = 2x + 2$
> 
> In Leibniz notation:
> $\frac{d}{dx}[(x+1)^2] = \frac{d}{du}[u^2] \cdot \frac{du}{dx} = 2u \cdot 1 = 2(x+1)$ where $u = x+1$

> **Example 2:**
>
> Find $\frac{d}{dx}[e^{-x}]$:
> Let $u = -x \implies \frac{d}{dx}[e^{-x}] = \frac{d}{dx}[e^u] \cdot \frac{du}{dx} = e^u \cdot (-1) = -e^{-x}$
>
> In Lagrange notation:
> $f(x) = e^x, g(x) = -x \implies f(g(x)) = e^{-x}$
> $f'(x) = e^x, g'(x) = -1$
> $\implies (e^{-x})' = (f(g(x)))' = f'(g(x)) \cdot g'(x) = e^{-x} \cdot (-1) = -e^{-x}$

> **Example 3:**
>
> Find $\frac{d}{dx}[\ln(x^2 + 1)]$:
> Let $u = x^2 + 1 \implies \frac{d}{dx}[\ln(x^2 + 1)] = \frac{d}{dx}[\ln(u)] \cdot \frac{du}{dx} = \frac{1}{u} \cdot 2x = \frac{2x}{x^2 + 1}$
>
> In Lagrange notation:
> $f(x) = \ln(x), g(x) = x^2 + 1 \implies f(g(x)) = \ln(x^2 + 1)$
> $f'(x) = \frac{1}{x}, g'(x) = 2x$
> $\implies (\ln(x^2 + 1))' = (f(g(x)))' = f'(g(x)) \cdot g'(x) = \frac{1}{x^2 + 1} \cdot 2x = \frac{2x}{x^2 + 1}$

## General Strategy

1. Identify the inner and outer functions: What is $g(x)$ and what is $f(x)$?
2. Differentiate the outer function while leaving the inner function untouched.
3. Multiply by the derivative of the inner function.

---

# Exercises

## 1. Practice Chain Rule

Find the derivative using the chain rule:

1. $f(x) = (x^2 + 1)^2$
2. $f(x) = e^{x^2}$
3. $f(x) = \ln(4x^2 + 4)$
4. $f(x) = 2e^{3x+2}$

## 2. More Chain Rule

Find the derivative of the following functions:

1. $f(x) = \sqrt{3x^2+4}$
2. $f(x) = \ln (\sqrt{x^2 + 1})$
3. $f(x) = (e^{2x+1}+3)^4$
4. $f(x) = \sqrt{\ln(x)}$
5. $f(x) = \frac{1}{\sqrt{4x^3 + 2}}$
6. $f(x) = (\ln(2x^2 + 1))^5$

## 3. Even more Chain Rule

1. The radius of a balloon is increasing over time as $r(t)=2t+1$. The volume of the balloon is $V(r) = \frac{4}{3}\pi r^3$.
   - Find $\frac{dV}{dt}$ in terms of $t$.

2. A chemical's concentration is given by $C(t) = e^{-0.2t^2}$. 
   - Find the rate of change of concentration with respect to time.
  
3. The brightness $B$ of a light bulb over time is modeled by:
   $$B(t) = \frac{1}{\sqrt{1+e^{-t}}}$$
   - Find the rate of change of brightness with respect to time.

