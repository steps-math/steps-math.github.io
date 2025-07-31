---
layout: base.njk
title: "Lab 4: Application of Derivatives in Real Life"
date: 2025-07-23
---

# Lab: Derivatives in Context – Deep Applications of Product & Quotient Rules


## **1. Function and its Derivative graphs**

Let:

$$f(x) = e^x + \frac{1}{e^x} + x^3$$


### **Step-by-Step Instructions**

#### 1. Find the derivative $f'(x)$.
#### 2. Use *GeoGebra* to plot $f(x)$ and $f'(x)$.
#### 3. Find the critical points of $f(x)$ by solving $f'(x) = 0$ algebraically. 
- (What are the x values for which $f'(x) = 0$?)
#### 4. Determine the local maxima and minima of $f(x)$.
#### 5. Determine the sign of $f'(x)$ in each interval divided by those points. (
- Whether $f'(x)$ is positive or negative in each interval decided by the critical points?)
#### 6. Determine the intervals on which $f(x)$ is increasing or decreasing. 
- (*Hint*: can you see the connection between the sign of $f'(x)$ and the increasing/decreasing intervals?)

> Observe the graphs of $f(x)$ and $f'(x)$ to get answers and intuition for the questions above.

---

## **2. Server Load Model**

A server handles incoming data packets. The incoming data rate (in packets/sec) is modeled as:

$$f(t) = (5t + 1)(e^{-t})$$

where $t$ is time in seconds.

**Tasks:**

#### 1. Compute $f'(t)$ using the **product rule**.
#### 2. Interpret the meaning of $f'(2)$. Is the load increasing or decreasing at this moment?
#### 3. Use *GeoGebra* to plot $f(t)$ and $f'(t)$ on the same axes.
#### 4. Mark local max/min and points where $f'(t) = 0$.
#### 5. Relate these turning points to real-world server behavior (e.g. peak load time, diminishing usage).

---

## Your feedback!

Please spend a couple of minutes filling the following feeback form: [form link](https://docs.google.com/forms/d/e/1FAIpQLSdhKe7ihSxG1jphQUG0pXJsipYnfvJtIL8Pj3H0FiR2X9htWQ/viewform?usp=header)

---

## **3. Pollution Density in a River**

The concentration of a pollutant at a certain downstream point is modeled by:

$$
C(t) = \frac{100t}{t^2 + 1}
$$

where $C(t)$ is the concentration (in ppm) at time $t$ hours.

**Tasks:**

#### 1. Use the **quotient rule** to find $C'(t)$.
#### 2. Simplify the derivative and determine when the concentration is increasing or decreasing.
#### 3. Find the time $t$ when the concentration is at its maximum.
#### 4. Explain why this makes sense physically (e.g. build-up vs. dilution of the pollutant over time).

---

## **4. Cooling of a Beverage**

You take a hot drink outside in the winter. Its temperature (in °C) is modeled by:

$$
T(t) = \frac{100 + 10t}{t + 2}
$$

where $t$ is time in minutes after exposure.

**Tasks:**

- Compute $T'(t)$ using the **quotient rule**.
- Use *GeoGebra* to plot $T(t)$ and $T'(t)$ on the same axes.

**Label:**

- Points where $|T'(t)|$ is **large** (i.e. the drink is cooling fastest).
- Points where $T'(t) \approx 0$ (i.e. cooling has slowed down).

**Answer:**

#### 1. At what time is the drink cooling fastest? Why?
#### 2. What does it mean when $T'(t) \to 0$? Is this realistic?

---

## **5. Visibility from a Drone: Tangents to a Hill**

A drone hovers at the point **(3, 20)**, observing a hill whose shape is modeled by the function:

$$
f(x) = -x^2 + 3x + 15
$$

The drone’s camera can just barely see the edges of the hill where its line of sight is **tangent** to the surface.


### Your Task:

Find the equations of all lines that pass through the point **(3, 20)** and are tangent to the graph of 

$$
f(x) = -x^2 + 3x + 15.
$$

### Why It Matters:

In terrain mapping and environmental science, this kind of problem helps determine the visible range of land from an elevated observation point, such as a drone or watchtower. The tangent lines define the outer boundary of what the observer can see.



