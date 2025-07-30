---
layout: base.njk
title: "Lab 4: Application of Derivatives in Real Life"
date: 2025-07-23
---

# Lab: Derivatives in Context – Deep Applications of Product & Quotient Rules

## Objectives
- Apply the product and quotient rules in real-world models  
- Interpret derivative values in terms of physical meaning  
- Use the derivative to analyze and sketch behavior of a system  

---

## Part A: Layered Real-World Applications

### **1. Server Load Model (Product Rule)**

A server handles incoming data packets. The incoming data rate (in packets/sec) is modeled as:

$$
f(t) = (5t + 1)(e^{-t})
$$

where $t$ is time in seconds.

**Tasks:**

- Compute $f'(t)$ using the **product rule**.
- Simplify your answer as much as possible.
- Interpret the meaning of $f'(2)$. Is the load increasing or decreasing at this moment?
- Use a graphing tool or sketch by hand:
  - Plot $f(t)$ and $f'(t)$ on the same axes.
  - Mark local max/min and points where $f'(t) = 0$.
- Relate these turning points to real-world server behavior (e.g. peak load time, diminishing usage).

---

### **2. Pollution Density in a River (Quotient Rule)**

The concentration of a pollutant at a certain downstream point is modeled by:

$$
C(t) = \frac{100t}{t^2 + 1}
$$

where $C(t)$ is the concentration (in ppm) at time $t$ hours.

**Tasks:**

- Use the **quotient rule** to find $C'(t)$.
- Simplify the derivative and determine when the concentration is increasing or decreasing.
- Find the time $t$ when the concentration is at its maximum.
- Explain why this makes sense physically (e.g. build-up vs. dilution of the pollutant over time).

---

## Part B: Graphing and Interpreting Function & Derivative

### **3. Cooling of a Beverage (Graphical Analysis + Interpretation)**

You take a hot drink outside in the winter. Its temperature (in °C) is modeled by:

$$
T(t) = \frac{80}{t + 2}
$$

where $t$ is time in minutes after exposure.

**Tasks:**

- Compute $T'(t)$ using the **quotient rule**.
- Sketch both $T(t)$ and $T'(t)$ on the same axes.

**Label:**

- Points where $|T'(t)|$ is **large** (i.e. the drink is cooling fastest).
- Points where $T'(t) \approx 0$ (i.e. cooling has slowed down).

**Answer:**

- At what time is the drink cooling fastest? Why?
- What does it mean when $T'(t) \to 0$? Is this realistic?
- How does this model reflect **Newton’s Law of Cooling**?

---

## Part C: Graphing – When the Derivative is Simpler than the Function

### **5. Interpreting a Complex Function Using Its Simple Derivative**

Let:

$$
f(x) = x^3 - 6x^2 + 9x + 5
$$

This function has:
- A messy shape with turning points and inflection
- A derivative that is much simpler:
  $$
  f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)
  $$

---

### Your Task

You are given the function $f(x) = x^3 - 6x^2 + 9x + 5$. Do **not** graph it directly.  
Instead, work **only** with its derivative:

$$
f'(x) = 3x^2 - 12x + 9
$$

---

### **Step-by-Step Instructions**

#### **1. Analyze the Derivative**
- Solve $f'(x) = 0$ to find critical points.
- Determine the sign of $f'(x)$ in each interval divided by those points.

#### **2. Determine Function Behavior**
- On what intervals is $f(x)$ increasing? Decreasing?
- Identify where $f(x)$ has local maxima and minima based on the sign changes of $f'(x)$.

#### **3. Compute Key Values**
- Calculate the values of $f(x)$ at:
  - $x = 1$
  - $x = 3$
  - One or two additional nearby points to better sketch the function.

#### **4. Sketch the Graphs**
- **(a)** On one coordinate grid, sketch the graph of the derivative $f'(x) = 3x^2 - 12x + 9$.
- **(b)** On another grid, sketch your prediction of $f(x)$ using:
  - Increasing/decreasing intervals
  - Local extrema
  - Optional: Use $f''(x) = 6x - 12$ to estimate concavity or locate inflection points.



## Reflection (Optional Discussion or Short Write-Up)

- How do product and quotient models naturally arise in modeling real-world systems?
- When might looking at a **derivative** tell us more than looking at the **function** directly?
- Can the shape of a derivative graph predict system behavior **before** it happens?
