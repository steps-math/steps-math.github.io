---
layout: base.njk
title: Optimization Problems and Related Rates
category: differentiation
description: Lecture 25
date: 2025-08-05
---

# lecture 25: Optimization Problems and Related Rates

## Optimization Review

Recall the strategy:
1. Identify the function to optimize.
2. Write it in terms of one variable.
3. Determine the domain.
4. Find the derivative, solve for critical points.
5. Test points to find max/min.
6. Interpret in context.


## Application: Minimizing Cost

### Problem:
You’re building a box with a square base and open top. It must have a volume of 32,000 cm³. What dimensions minimize the surface area?

### Steps:

- Let the base side = $x$, height = $h$
- Volume: $x^2 h = 32{,}000 \Rightarrow h = \frac{32{,}000}{x^2}$
- Surface Area (no top):  
  $$A(x) = x^2 + 4xh = x^2 + 4x\left(\frac{32{,}000}{x^2}\right) = x^2 + \frac{128{,}000}{x}$$
- Derivative:
  $$A'(x) = 2x - \frac{128{,}000}{x^2}$$
- Set $A'(x) = 0$:
  $$2x = \frac{128{,}000}{x^2} \Rightarrow 2x^3 = 128{,}000 \Rightarrow x = 40$$
- Then $h = \frac{32{,}000}{40^2} = 20$

> **Min surface area** when base is 40 cm × 40 cm and height is 20 cm.

---

## Introduction to Related Rates

Related rates describe **how two or more quantities change together over time**.

### Key Idea:
Take the **derivative with respect to time** $t$, using the **chain rule**.


## Steps for Solving Related Rates Problems

1. **Identify** all changing quantities.
2. **Write an equation** that relates them.
3. **Differentiate** with respect to time $t$.
4. **Plug in** known values and solve for the unknown rate.
5. Include **units** and interpret your result.


## Application: Balloon Inflation

### Problem:
Air is being pumped into a spherical balloon at a rate of 100 cm³/s. How fast is the radius increasing when the radius is 5 cm?

### Steps:
- Volume of a sphere: $V = \frac{4}{3}\pi r^3$
- Differentiate:
  $$\frac{dV}{dt} = \frac{dV}{dr} \cdot \frac{dr}{dt} = 4\pi r^2 \frac{dr}{dt}$$
- Given: $\frac{dV}{dt} = 100$, $r = 5$
- Plug in:
  $$100 = 4\pi (25) \frac{dr}{dt} \Rightarrow \frac{dr}{dt} = \frac{100}{100\pi} = \frac{1}{\pi} \approx 0.318 \text{ cm/s}$$

> **Radius increasing at ~0.318 cm/s**



## Application: Sliding Ladder

### Problem:
A 10 ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?

### Setup:
- Use Pythagorean Theorem: $x^2 + y^2 = 100$
- Differentiate:
  $$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$
- Given: $x = 6$, $\frac{dx}{dt} = 2$

Find $y$: $6^2 + y^2 = 100 \Rightarrow y = 8$

Plug in:
$$2(6)(2) + 2(8)\frac{dy}{dt} = 0 \Rightarrow 24 + 16\frac{dy}{dt} = 0$$  
$$\frac{dy}{dt} = -\frac{3}{2} = -1.5 \text{ ft/s}$$

> **Top of ladder descending at 1.5 ft/s**

---

## Exercises

### 1. Rectangle Problem
A rectangle has a fixed perimeter of 100 cm. What dimensions maximize the area?

### 2. Draining Tank
Water drains from a cylindrical tank at 5 L/min. What’s the rate of change of the water depth when the radius is 1 m and depth is 2 m? (Volume of a cylinder is $\pi r^2 h$)

### 3. Expanding Circle
A circle’s area increases at 10 cm$^2$/s. How fast is the radius changing when the area is $100\pi$ cm$^2$?

### 4. Cone Volume
A conical water tank is being filled at 3 m$^3$/min. The tank’s radius is always half its height. How fast is the water level rising when the tank is 4 m deep? (Volume of a cone is $\frac{1}{3}\pi r^2 h$)

