---
layout: base.njk
title: Introduction to Derivatives 
category: differentiation
description: Lecture 18
date: 2025-07-19
---

# Introduction to Derivatives: Rate of Change and Slopes

---

## Motivation: Why Study Rate of Change?

Imagine you're driving a car. Your **average speed** from one town to another might be 60 km/h. But at a given moment — say, when a police radar checks you — your **instantaneous speed** might be 72 km/h.

This difference is key in calculus:  
> **Derivatives measure how fast something is changing at a single moment** — not just over an interval.

---

## The Big Idea: From Average to Instantaneous Rate of Change

In algebra, we learned how to compute the **slope** between two points:

$$
\text{Average Rate of Change} = \frac{f(x_2) - f(x_1)}{x_2 - x_1}
$$

But what if we want the **rate of change at exactly one point**?  
We need a new idea — a limit — which leads to the **derivative**.

---

## Connecting to Graphs: Secant and Tangent Lines

- A **secant line** passes through two points on a curve.
- A **tangent line** touches the curve at a single point — representing the **instantaneous rate of change**.

> As the two points of the secant get closer together, the secant line becomes the tangent line.

---

## Interactive Example: Average Speed Between Two Times

We define a position function:

$$
s(t) = t^3 - 2t^2 - t + 3
$$

It models a moving object's position over time.

Use the sliders below to choose a starting and ending time ($t_0$ and $t_1$) to see:

- The curve $s(t)$
- A secant line connecting $s(t_0)$ and $s(t_1)$
- The **average speed** (slope) over $[t_0, t_1]$

> As you bring $t_0$ and $t_1$ closer, the red secant line approaches the **tangent** line.

### Interactive Graph

> Move the sliders to explore how the average rate of change behaves!

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Interactive Average Speed</title>
</head>
<body>

<div style="text-align:center; margin:2em 0;">
  <canvas id="avgSpeedGraph" width="600" height="420"
          style="border:1px solid #ccc; background:#fafafa;"></canvas>
  <br>
  <label>Start time ( t₀ ): 
    <input type="range" id="t0Slider" min="0" max="5" step="0.01" value="1.0">
  </label>
  <label>End time (t₁ ): 
    <input type="range" id="t1Slider" min="0.1" max="5" step="0.01" value="3.0">
  </label>
  <div> t₀ = <span id="t0Val">1.0</span>, t₁ = <span id="t1Val">3.0</span></div>
  <div>Average speed (slope) = <span id="slopeVal">?</span></div>
  <div>Line equation: <code>y = <span id="mDisplay">m</span>t + <span id="bDisplay">b</span></code></div>
</div>

<script>
(function(){
  const canvas = document.getElementById('avgSpeedGraph');
  const ctx = canvas.getContext('2d');
  const t0Slider = document.getElementById('t0Slider');
  const t1Slider = document.getElementById('t1Slider');
  const t0Val = document.getElementById('t0Val');
  const t1Val = document.getElementById('t1Val');
  const slopeVal = document.getElementById('slopeVal');
  const mDisplay = document.getElementById('mDisplay');
  const bDisplay = document.getElementById('bDisplay');

  const width = canvas.width;
  const height = canvas.height;
  const paddingLeft = 80;
  const paddingBottom = 50;
  const scaleX = 80;  // pixels per unit time
  const scaleY = 20;  // pixels per unit position

  function s(t) {
    return t ** 3 - 2 * t ** 2 - t + 3;
  }

  function drawGraph(t0, t1) {
    ctx.clearRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, height - paddingBottom);
    ctx.lineTo(width - 20, height - paddingBottom);  // x-axis
    ctx.moveTo(paddingLeft, 20);
    ctx.lineTo(paddingLeft, height - paddingBottom); // y-axis
    ctx.stroke();

    // Draw x-axis ticks and labels (time)
    ctx.fillStyle = "#000";
    ctx.font = "12px sans-serif";
    for (let t = 0; t <= 5; t++) {
      const x = paddingLeft + t * scaleX;
      ctx.beginPath();
      ctx.moveTo(x, height - paddingBottom - 5);
      ctx.lineTo(x, height - paddingBottom + 5);
      ctx.stroke();
      ctx.fillText(t.toString(), x - 4, height - paddingBottom + 20);
    }

    // Draw y-axis ticks and labels (position)
    for (let sVal = -10; sVal <= 16; sVal += 2) {
      const y = height - paddingBottom - sVal * scaleY;
      ctx.beginPath();
      ctx.moveTo(paddingLeft - 5, y);
      ctx.lineTo(paddingLeft + 5, y);
      ctx.stroke();
      ctx.fillText(sVal.toString(), paddingLeft - 30, y + 4);
    }

    // Draw the curve s(t)
    ctx.strokeStyle = "#0066cc";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let t = 0; t <= 5; t += 0.05) {
      const x = paddingLeft + t * scaleX;
      const y = height - paddingBottom - s(t) * scaleY;
      if (t === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Compute points
    const x0 = paddingLeft + t0 * scaleX;
    const y0 = height - paddingBottom - s(t0) * scaleY;
    const x1 = paddingLeft + t1 * scaleX;
    const y1 = height - paddingBottom - s(t1) * scaleY;

    // Compute average speed (slope) and intercept
    const m = (s(t1) - s(t0)) / (t1 - t0);
    const b = s(t0) - m * t0;

    // Update display
    slopeVal.textContent = m.toFixed(2);
    mDisplay.textContent = m.toFixed(2);
    bDisplay.textContent = b >= 0 ? `+ ${b.toFixed(2)}` : `− ${Math.abs(b).toFixed(2)}`;

    // Draw extended secant line
    ctx.strokeStyle = "#cc0000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let t = 0; t <= 5; t += 0.05) {
      const x = paddingLeft + t * scaleX;
      const y = height - paddingBottom - (m * t + b) * scaleY;
      if (t === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw dots
    ctx.fillStyle = "#cc0000";
    ctx.beginPath();
    ctx.arc(x0, y0, 5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x1, y1, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Labels
    ctx.fillStyle = "#000";
    ctx.font = "14px sans-serif";
    ctx.fillText("s(t) = t³ - 2t² - t + 3", width - 230, 25);
    ctx.fillText("time (t)", width - 60, height - 10);
    ctx.fillText("position (s)", 10, 25);
  }

  function update() {
    let t0 = parseFloat(t0Slider.value);
    let t1 = parseFloat(t1Slider.value);
    if (t0 === t1) t1 += 0.1;
    if (t0 > t1) [t0, t1] = [t1, t0];

    t0Val.textContent = t0.toFixed(1);
    t1Val.textContent = t1.toFixed(1);

    drawGraph(t0, t1);
  }

  t0Slider.addEventListener('input', update);
  t1Slider.addEventListener('input', update);

  update();
})();
</script>

</body>
</html>

---

## Additional Example: A Leaking Water Tank

### Scenario 1: Constant Leak

Suppose a tank leaks water at a steady rate of **2 liters per minute**.

- If the tank starts with 100 liters, the water volume after $t$ minutes is:

$$
V(t) = 100 - 2t
$$

- The **rate of change** is constant:  
  $$
  \frac{V(t_2) - V(t_1)}{t_2 - t_1} = -2 \text{ liters/minute}
  $$

This is a **linear function**. The slope (rate) is always the same. We don’t even need calculus to describe how fast it's leaking — the rate of change is already constant.

---

### Scenario 2: Increasing Leak (Crack Worsens Over Time)

Now suppose the leak gets **worse over time** — the more water that escapes, the faster it leaks.

- Let’s say the volume behaves like:
$$
V(t) = 100 - t^2
$$

Now the leak **starts slowly**, but over time the rate of leakage **increases**.

Let’s compute average rates:

- From $t = 0$ to $t = 2$:  
  $$
  \frac{V(2) - V(0)}{2 - 0} = \frac{100 - 4 - 100}{2} = -2 \text{ L/min}
  $$

- From $t = 2$ to $t = 4$:  
  $$
  \frac{V(4) - V(2)}{2} = \frac{84 - 96}{2} = -6 \text{ L/min}
  $$

> Even though both intervals are 2 minutes long, the tank is losing water **more quickly** later on.  
> This is where **derivatives** shine — they tell us **exactly how fast** the leak is worsening at any moment.

---

## Summary of Concepts

| Concept                  | Description                                 |
|--------------------------|---------------------------------------------|
| Average Rate of Change   | Slope between two points on a curve         |
| Instantaneous Rate       | Slope at a single point (the derivative)    |
| Secant Line              | Line connecting two points on the curve     |
| Tangent Line             | Line just touching the curve at one point   |

---

## Practice Exercises

**1. Estimating Speed of a Thrown Ball**

A ball’s height after $t$ seconds is:

$$
h(t) = -5t^2 + 20t
$$

- (a) Find the average speed from $t = 1$ to $t = 2$  
- (b) Find the average speed from $t = 2$ to $t = 3$  
- (c) Describe what is happening to the speed over time

---

**2. Table of Values (Function: $f(x) = x^2$)**

| x     | f(x)   |
|-------|--------|
| 1     | 1      |
| 1.5   | 2.25   |
| 2     | 4      |

- (a) Find average rate of change from $x = 1$ to $x = 2$
- (b) Find average rate of change from $x = 1$ to $x = 1.5$
- (c) Estimate the slope at $x = 1$

---

**3. Graph-Based Estimation**

A function $f(x)$ (e.g. $x^2$) is plotted.

- (a) Sketch secant lines from $x = 1$ to $x = 3$, then $x = 1.5$ to $x = 2.5$
- (b) Visually estimate the slope at $x = 2$

---

**4. Real-Life Scenario**

A runner covers:

- 8 meters from $t = 1$ to $t = 3$
- 3 meters from $t = 3$ to $t = 4$

- (a) Compute average speed on both intervals  
- (b) Is her speed increasing or decreasing? Explain  
- (c) Sketch a possible distance-time graph

---

**5. Conceptual Challenge: Constant Acceleration**

A car’s speed increases by **3 m/s every second**.

- (a) What type of position function describes this?  
- (b) Sketch the position-time and speed-time graphs  
- (c) What does the slope of the speed-time graph represent?

---
## Extra Advanced Exercises 

### **1. Approaching the Instantaneous Rate with Limits**

Let the position of an object be given by:

$$
s(t) = \sqrt{t + 1}
$$

- (a) Compute the average rate of change from $t = 3$ to $t = 4$
- (b) Then compute it from $t = 3$ to $t = 3.1$, and from $t = 3$ to $t = 3.01$
- (c) Estimate the instantaneous rate of change at $t = 3$

> *Challenge:* Try computing  
$$
\frac{s(3+h) - s(3)}{h}
$$
for small values of $ h$ like $0.001, 0.0001$, and guess the limit as $h \to 0$.

---

### **2. Sharp Corner Behavior**

Let $f(x) = |x - 2|$

- (a) Compute average rate of change from $x = 1.9$ to $x = 2.1$
- (b) Find the rate from left ($x = 1.99$ to 2) and from right ($x = 2$ to $2.01$)
- (c) Can we define a **single tangent line** at $x = 2$? Why or why not?

---

### **3. Multidimensional Rate**

A balloon moves vertically and horizontally:

- Vertical position: $h(t) = 2t^2$
- Eastward position: $x(t) = 5t$

(a) Find the average vertical rate of change from $t = 2$ to $t = 4$.
(b) Compute total distance traveled.
(c) Estimate how fast the total distance is changing at $t = 3$.


---

### **4. Instantaneous Rate from a Rational Function**

Let the position of a car be given by:

$$
s(t) = \frac{t^2 + 3t + 1}{t + 1}
$$

- (a) Simplify the function (if possible)
- (b) Compute the average rate of change from $t = 1$ to $t = 2$
- (c) Compute average rates for intervals approaching $t = 1$ from both sides
- (d) Estimate the instantaneous rate at $t = 1$ and explain your reasoning

---

### **5. Function with Unpredictable Slope**

Consider the function:

$$
f(x) = x \cdot \sin\left(\frac{1}{x}\right), \quad \text{for } x \neq 0,\quad f(0) = 0
$$

(a) Plot or sketch this function (use Desmos or another graphing tool)
(b) What happens to the slope of the secant line as $x \to 0$?
(c) Can we estimate the slope at $x = 0$? Why is this difficult?

> *Hint:* This function is continuous at 0 but wildly oscillatory nearby.

---

## Conclusion

- The **rate of change** is how fast something changes with respect to something else.
- The **derivative** is the mathematical tool that tells us this rate at a single instant.
- In this lecture, we saw how **slopes of curves** connect to **real-world change**.


 In our next session, we’ll formally define the derivative using **limits**!
