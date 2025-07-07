---
layout: base.njk
title: Operations on Functions — Inverses & Implicit vs. Explicit
category: functions
description: Lecture 9
date: 2025-07-12
---

# Lecture 9: Operations on Functions (continued) — Inverse Functions & Implicit vs. Explicit

## 1. Inverse Functions

### 1.1 Definition & Existence  
An inverse function $f^{-1}$ “undoes” $f$:
$$
f^{-1}(f(x)) = x,\quad f(f^{-1}(x)) = x.
$$
A function $f$ has an inverse **if and only if** it is **one-to-one** (injective) and onto its range.

### 1.2 One-to-One & the Horizontal Line Test  
- **One-to-One**: each $y$ in the range is hit by exactly one $x$.  
- **Horizontal Line Test**: no horizontal line intersects the graph of $f$ more than once.

> **Example:**  
> - $f(x)=x^3$ passes the test → invertible on $\mathbb{R}$.  
> - $g(x)=x^2$ fails on $\mathbb{R}$ (two $x$’s for positive $y$) → not invertible unless domain restricted.  

---

## 2. Finding an Inverse Algebraically

1. **Write** $y = f(x)$.  
2. **Swap** $x$ and $y$: $x = f(y)$.  
3. **Solve** for $y$; that gives $f^{-1}(x)$.  
4. **State** domain of $f^{-1}$ = range of $f$, and vice versa.

> **Example:**  
> $f(x)=\dfrac{x-1}{x+2}$.  
> $$
> y = \frac{x-1}{x+2}
> \;\Longrightarrow\;
> x = \frac{y-1}{y+2}
> \;\Longrightarrow\;
> x(y+2)=y-1
> \;\Longrightarrow\;
> y(x-1) = -2x-1 
> $$
> $$\Longrightarrow \boxed{f^{-1}(x) = \frac{-2x - 1}{\,x - 1\,}.}$$

---

## 3. Graphing Inverses

- **Plot** $y = f(x)$ and $y = f^{-1}(x)$ together.  
- **Draw** the line $y = x$.  
- **Observe** the mirror symmetry: each point $(a,b)$ on $f$ corresponds to $(b,a)$ on $f^{-1}$.

> **Tip:** Reflect landmark points (intercepts, extrema) across the line $y=x$.

---

## 4. Implicit vs. Explicit Functions

### 4.1 Explicit Form  
$$
y = f(x).
$$
– Direct formula for $y$.  
– Easy to evaluate and plot.

### 4.2 Implicit Form  
$$
F(x,y) = 0,
$$
where solving for $y$ may require multiple branches or be impossible in closed form (i.e. no single $y=$ expression in $x$).

> **Example (Circle):**  
> $$
> x^2 + y^2 - 9 = 0.
> $$
> Explicit branches:  
> $\displaystyle y = +\sqrt{9 - x^2},\quad y = -\sqrt{9 - x^2}.$

---

## 5. When to Use Implicit Representation

- **Vertical tangents** or **cusps** (hard to express $y$ as a single-valued function).  
- **Closed loops** or **self-intersecting** curves.  
- **Relations** that are not global functions but split into branches.

> **Example (Folium):**  
> $\displaystyle x^3 + y^3 - 3xy = 0$  
> – Has a loop; no single explicit $y=f(x)$ covering all points.

---

## Regular Exercises

1. **Inverse Practice**  
   **a)** $f(x)=3x-5$  
   **b)** $f(x)=\sqrt{x+2}$ (restrict to $x\ge -2$)  
   **c)** $f(x)=\dfrac{2x+1}{x-1}$

2. **Horizontal Line Test**  
   Determine if each is invertible on $\mathbb{R}$:  
   **a)** $y = x^2 - 4$  
   **b)** $y = 2^x$  
   **c)** $y = \log_{10} x$

3. **Graph & Reflect**  
   - Plot $f(x)=x^3 - 3x$.  
   - On $[1,\infty)$, find and plot its inverse branch.  
   - Include the line $y = x$.

4. **Implicit → Explicit**  
   Given $x^2 + xy + y^2 - 7 = 0$:  
   - Solve for $y$ to find both branches.  
   - State the domain for each branch.

5. **Implicit Curve Analysis**  
    For $x^4 + y^4 = 8xy$:  
   - Sketch or graph the relation.  
   - Identify loops or intersections.  
   - Explain why no single explicit $y=f(x)$ exists.

6. **Inverse Composition**  
   Let $f(x)=2x+3$, $g(x)=\sqrt{x}$.  
   - Compute $(f\circ g)^{-1}$.  
   - Compare with $g^{-1}\circ f^{-1}$.


