---
layout: base.njk
title: Operations on Functions — Transformations and Composition
category: functions
description: Lecture 8
date: 2025-07-09
---

# lecture 8: Operations on functions — Transformations: shifting, squeezing, reflecting, and composing functions

## 1. Motivation: Why Transform and Compose?

In modeling real‐world phenomena, we often need to tweak basic functions to fit data or combine them to capture complex relationships:

- **Audio volume control**: stretching or squeezing the waveform.
- **Image translation**: shifting pixel coordinates.
- **Signal inversion**: reflecting a waveform.
- **Nested processes**: feeding the output of one function into another (composition). 

---

## 2. Transformations of the Graph

A transformation modifies the graph of a “parent” function $f(x)$.  

### 2.1 Shifting

- **Vertical shift**: $g(x)=f(x)+k$
  - Up $k>0$, down $k<0$.  
  - *Example:* $g(x)=x^2+3$ moves the parabola up 3 units. 
- **Horizontal shift**: $g(x)=f(x-h)$
  - Right $h>0$, left $h<0$.  
  - *Example:* $g(x)=(x-2)^2$ moves $f(x)=x^2$ right 2 units. 

#### Graphical summary

| Transform      | Rule                | Effect                |
|----------------|---------------------|-----------------------|
| Up $k$       | $f(x)+k$          | Shift up $k$        |
| Right $h$    | $f(x-h)$          | Shift right $h$     |

---

### 2.2 Stretching and Squeezing

- **Vertical stretch/compress**: $g(x)=a\,f(x)$
  - Stretch if $|a|>1$, compress if $0<|a|<1$.
  - *Example:* $2\sin x$ is a vertical stretch of $\sin x$ by factor 2. 
- **Horizontal stretch/compress**: $g(x)=f(bx)$
  - Compress if $|b|>1$, stretch if $0<|b|<1$.
  - *Example:* $\sin(2x)$ is horizontally compressed by factor $\tfrac12$. 

---

### 2.3 Reflection

- **Reflect about the x-axis**: $g(x)=-f(x)$
  - Flips graph upside down.
- **Reflect about the y-axis**: $g(x)=f(-x)$
  - Mirrors graph left to right.

> **Example:**  
> Reflect $f(x)=2^x$ about the y-axis to get $g(x)=2^{-x}$, which decays instead of grows. 

---

## 3. Combining Transformations

Transformations can be **chained**.  Always apply inside-the-function (horizontal) shifts/scales first, then reflections, then outside (vertical) scales/shifts.

> **Example:**  
> Given  
> $f(x)=x^2,\quad
> g(x)=-2\,f(3(x+1)) + 4$
> 1. Inside: $x\to 3(x+1)$ → shift left 1, compress horizontally by 1/3.  
> 2. Reflect x-axis and stretch vertically by 2.  
> 3. Shift up 4. 

---

## 4. Composition of Functions

Composition feeds one function into another:

$$
(h\circ g)(x) = h\bigl(g(x)\bigr).
$$

- **Notation:** $h\circ g$ or $h(g(x))$.
- **Domain:** those $x$ for which $g(x)$ is in the domain of $h$.

> **Real-world example:**  
> Temperature conversion then rate calculation:
> $$
> C(t)=\tfrac{5}{9}(F(t)-32),
> \quad
> R(C)=2C+1
> \quad
> (R\circ C)(t)=2\bigl(\tfrac{5}{9}(F(t)-32)\bigr)+1
> $$

### 4.1 Decomposing a Function

Given $h(x)=\sqrt{2x+3}$, one composition is:

- $g(x)=2x+3$
- $f(u)=\sqrt{u}$
- Then $h=f\circ g$. 

You can often find **multiple** decompositions by regrouping operations. 

---

# Regular Exercises

### 1. Graphing Transformations

Sketch $f(x)=\ln(x)$ and then sketch $g(x)=-3\,\ln(2(x-1))+2$. Label asymptotes and intercepts.

### 2. Chain of Transformations

   Describe the sequence of shifts, stretches, and reflections to go from $y=x^3$ to $y=4\,( - (x+2)^3 ) -1$.

### 3. Composition Practice

If $f(x)=x^2-1$ and $g(x)=3x+2$, find and simplify $(f\circ g)(x)$ and $(g\circ f)(x)$. Determine their domains.

### 4. Transformation Proof

Let $f(x)=x^2, k=2, h=3$. 
Prove that performing a horizontal stretch by factor $k$ then a shift by $h$ is **not** the same as shifting first then stretching (unless $h=0$).

### 5. Domain Composition

Given $f(x)=\sqrt{x-1}$ and $g(x)=\ln(x)$, determine the domain of $g\circ f$ and $f\circ g$, and explain any restrictions.



