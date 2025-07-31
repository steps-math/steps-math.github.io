---
layout: base.njk
title: Derivatives and Graphs of Functions
category: differentiation
description: Lecture 24
date: 2025-08-04
---

# lecture 24: Derivatives and Graphs of Functions

## How Derivatives Shape Graphs

- **First Derivative** $f'(x)$: Tells us **where a function is increasing or decreasing**.
- **Second Derivative** $f''(x)$: Tells us about **concavity** and **inflection points**.

> Knowing $f'(x)$ and $f''(x)$ helps us understand the shape and features of a graph.


## First Derivative Test

### 1. Critical Points
- Points where $f'(x) = 0$ or $f'(x)$ is undefined.

### 2. Increasing / Decreasing Behavior
- If $f'(x) > 0$ on an interval $\Rightarrow$ function is **increasing** there.
- If $f'(x) < 0$ on an interval $\Rightarrow$ function is **decreasing** there.

### 3. Local Max/Min
- If $f'(x)$ changes from **positive to negative** $\Rightarrow$ **local max**
- If $f'(x)$ changes from **negative to positive** $\Rightarrow$ **local min**

> **Example:**
> $f(x) = x^3 - 3x^2 + 2$
> $f'(x) = 3x^2 - 6x$
> Critical points at $x = 0$, $x = 2$
> Use sign chart to determine max/min


## Second Derivative Test

### 1. Concavity
- If $f''(x) > 0$ $\Rightarrow$ graph is **concave up** ($\cup$-shape)
- If $f''(x) < 0$ $\Rightarrow$ graph is **concave down** ($\cap$-shape)

### 2. Inflection Points
- Points where $f''(x) = 0$ and concavity changes

### 3. Alternative Max/Min Test
- At a critical point $x = c$:
  - If $f''(c) > 0$ $\Rightarrow$ local **min**
  - If $f''(c) < 0$ $\Rightarrow$ local **max**
  - If $f''(c) = 0$ $\Rightarrow$ test is **inconclusive**

> **Example:**
> $f(x) = x^4 - 4x^2$
> $f'(x) = 4x^3 - 8x$
> $f''(x) = 12x^2 - 8$
> Critical points at $x = 0$, $x = \pm 2$
> Inflection points at $x = \pm \sqrt{\frac{2}{3}}$
> At $x = 0$, $f''(x) = -8 < 0 \Rightarrow$ local max
> At $x = \pm 2$, $f''(x) = 40 > 0 \Rightarrow$ local min



## Graph Sketching Strategy

1. **Find domain**
2. **Find intercepts** (of x-axis and y-axis)
3. **Find critical points** from $f'(x)$
4. **Use $f''(x)$** to determine concavity
5. **Find asymptotes** (if any)
6. Combine all info for a full sketch

> Helpful tip: Create a sign chart for $f'$ and $f''$.

---

## Example Problem

**Given:** $f(x) = x^3 - 6x^2 + 9x + 1$

1. $f'(x) = 3x^2 - 12x + 9$
2. Critical points: $x = 1$, $x = 3$
3. $f''(x) = 6x - 12$
4. Inflection point: $x = 2$

| Interval        | $f'(x)$ | Behavior     | $f''(x)$ | Concavity    |
|-----------------|--------|--------------|---------|--------------|
| $(-\infty, 1)$  | +      | Increasing   | -       | Concave Down |
| $(1, 2)$        | -      | Decreasing   | -       | Concave Down |
| $(2, 3)$        | -      | Decreasing   | +       | Concave Up   |
| $(3, \infty)$   | +      | Increasing   | +       | Concave Up   |

<div style="text-align: center; margin: 20px 0;">
    <img src="/images/24-behavior-table.png" alt="Behavior table" style="max-width: 70%; height: auto; border: 1px solid gray;">
    <img src="/images/24-detailed-analysis.png" alt="Detailed analysis" style="max-width: 80%; height: auto; border: 1px solid gray;">
</div>

---

## Summary

- **First derivative**: increasing/decreasing, local max/min
- **Second derivative**: concavity, inflection points
- Combine both to **sketch better graphs**

---

# Exercises

## 1. First and Second Derivative Analysis
Given $f(x) = x^3 - 9x^2 + 24x$:
- a) Find $f'(x)$ and $f''(x)$
- b) Identify intervals of increase/decrease
- c) Find local extrema
- d) Identify concavity and inflection points

## 2. Graph Sketching
Sketch a complete graph of:
- a) $f(x) = \frac{x^2}{x^2 + 1}$
- b) $f(x) = x^4 - 4x^2$

## 3. Real-Life Interpretation
Suppose $P(t)$ models population over time:
- a) What does it mean if $P'(t) > 0$ but $P''(t) < 0$?
- b) What does an inflection point mean in this context?

## 4. Build a Function
Create a polynomial function with:
- A local max at $x = -1$
- A local min at $x = 2$
- An inflection point at $x = 0$

---
