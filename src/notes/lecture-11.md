---
layout: base.njk
title: Types of Discontinuities (No Limits)
category: continuity
description: Lecture 11
date: 2025-07-14
---

# Discontinuities and Function Behavior — Before Limits

## What is a Discontinuity?

A **discontinuity** is a place on a graph where the function is *not connected smoothly*.  
Think of it as a place where you have to **lift your pencil** while drawing the graph.

We say a function is **continuous** if you can draw its graph *without lifting your pencil*.  
If you **do** have to lift it, the function is **discontinuous** at that point.

---

## Types of Discontinuities

We’ll focus on **three major types** of discontinuities that show up in graphs:

### 1. Removable Discontinuity (a "hole")

- The graph looks almost perfect — but there’s a **hole** at one point.
- It’s like the function is *missing one value* — but everywhere else behaves smoothly.
- This usually happens when a function is **defined almost everywhere**, except at one point.

> **Example:**
>
> $f(x) = \frac{x^2 - 1}{x - 1} = \frac{(x - 1)(x + 1)}{x - 1}$
>
> This simplifies to $f(x) = x + 1$ **except** at $x = 1$ (since division by 0 is undefined).
>
> So we get a straight line with a **hole** at $x = 1$.

---

### 2. Jump Discontinuity

- The graph suddenly **jumps** from one height to another.
- You might see this in **piecewise functions** that change rules at certain $x$-values.
- The function has a value on both sides of the jump, but they **don’t match**.

> **Example:**
>
> $f(x) = \begin{cases}
2 & \text{if } x < 0 \\
5 & \text{if } x \geq 0
\end{cases}$
>
> When $x$ moves past 0, the function **jumps from 2 to 5**.  
> The graph has a **gap** (discontinuity) at $x = 0$.

---

### 3. Infinite Discontinuity (vertical asymptote)

- The graph **shoots up or down very fast**
- There is a **vertical asymptote** — a vertical line that the graph tries to avoid but gets close to.

> **Example:**
>
> $f(x) = \frac{1}{x}$
>
> Near $x = 0$, the function becomes very large or very small.  
> It **blows up** and never actually reaches a value at $x = 0$.

---

## How to Recognize These from Graphs

| Type                 | What You See in the Graph     |
|----------------------|-------------------------------|
| Removable            | A single hole                 |
| Jump                 | A gap between two pieces      |
| Infinite             | Sharp vertical spike or drop  |

---

## Why Discontinuities Matter

- Discontinuities tell us **where a function changes behavior**.
- They are important in **real-world modeling**: for example, jumps in pricing, holes in data, or boundaries in physics.
- We need to understand them before we study **limits** and **calculus**.

---

## Sketch Examples

**1. Removable Discontinuity:**

<div style="text-align:center; margin: 20px 0;">
    <img src="/images/11-removable-hole.png" alt="Removable discontinuity" style="max-width: 60%; border: 1px solid gray;">
</div>

**2. Jump Discontinuity:**

<div style="text-align:center; margin: 20px 0;">
    <img src="/images/11-jump.png" alt="Jump discontinuity" style="max-width: 60%; border: 1px solid gray;">
</div>

**3. Infinite Discontinuity:**

<div style="text-align:center; margin: 20px 0;">
    <img src="/images/11-infinite.png" alt="Infinite discontinuity" style="max-width: 60%; border: 1px solid gray;">
</div>

---

# Exercises
## 1. Determine Continuity 
a) $log_3(x)$

b)
$$
f(x) = 
\begin{cases}
2x & \text{if } x < 2 \\
x^3 & \text{if } x \geq 2
\end{cases}
$$


c) 
$$
f(x) = 
\begin{cases}
2^x & \text{if } x < 4 \\
x^2 & \text{if } x \geq 4
\end{cases}
$$


d) $\frac{2}{x+3} +2$

