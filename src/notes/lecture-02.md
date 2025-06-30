---
layout: base.njk
title: Dependent vs Independent Events, Conditional Probability, and Continuous Distributions
category: probability
description: dependent vs independent events, conditional probability, and continuous distributions.
date: 2025-07-01
---

#  Probability – Lecture 2: Dependent vs Independent Events, Conditional Probability, and Continuous Distributions

##  1. Independent vs Dependent Events

###  **Definition: Independent Events**
Two events are **independent** if the occurrence of one **does not affect** the probability of the other.

> **Example (Real Life):**  
> Tossing a coin and rolling a die.  
> - Tossing heads does **not** change the outcome of the die roll.

**Formal Definition:**
If A and B are independent, then:

$$ P(A \text{ and } B) = P(A) \times P(B) $$

---

###  **Definition: Dependent Events**
Two events are **dependent** if the outcome of one **affects** the probability of the other.

> **Example (Real Life):**  
> Drawing two cards from a deck **without replacing the first**.  
> - Drawing an ace first affects the probability of drawing another ace.

**Note:**  
In dependent events, the probabilities **change** as the experiment progresses.

---

##  2. Conditional Probability

**Conditional probability** is the probability that event **B** happens **given that** event **A** has happened.

###  **Formula:**

$$ P(B | A) = \frac{P(A \text{ and } B)}{P(A)} $$


> **Example (Real Life):**  
> In a class of 30 students, 18 are girls. Among the girls, 10 play soccer.  
> What is the probability that a student **plays soccer**, **given that** she is a girl?

$$ P(\text{Soccer} | \text{Girl}) = \frac{10}{18} = \frac{5}{9} $$



---

##  3. Independent Events and Conditional Probability

If A and B are **independent**, then:

$$ P(B | A) = P(B) $$

> **Why?** Because A has no effect on B.

So for independent events:
$$ P(A \text{ and } B) = P(A) \times P(B) $$



---

##  4. Visualizing with Venn Diagrams

### Venn Diagrams help show the relationships between sets and events.

Let:
- Circle A = students who play soccer  
- Circle B = students who play tennis

The **overlap** shows students who play **both** sports → P(A and B)

> Conditional probability is about **focusing only on part of the diagram**.  
> For example, given event A (we're inside circle A), what part of that is also in B?

Use:

$$ P(B | A) = \frac{P(A \text{ and } B)}{P(A)} $$

<div style="text-align: center; margin: 2px 0;">
<svg width="400" height="300" viewBox="0 0 400 300">
  <!-- Background -->
  <rect width="400" height="300" fill="#f8f9fa"/>
  
  <!-- Universal set rectangle -->
  <rect x="50" y="50" width="300" height="200" fill="none" stroke="#666" stroke-width="2" stroke="5,5"/>
  
  <!-- Circle A (Soccer) - Blue with transparency -->
  <circle cx="150" cy="150" r="80" fill="#007bff" fill-opacity="0.8" stroke="#007bff" stroke-width="2"/>
  
  <!-- Circle B (Tennis) - Green with transparency -->
  <circle cx="250" cy="150" r="80" fill="#00ff88" fill-opacity="0.8" stroke="#00ff88" stroke-width="2"/>
  
  <!-- Overlap area - Purple -->
  <path d="M 150 70 A 80 80 0 0 1 150 230 A 80 80 0 0 1 150 70 Z" fill="#6f42c1" fill-opacity="0.4"/>
  <path d="M 250 70 A 80 80 0 0 0 250 230 A 80 80 0 0 0 250 70 Z" fill="#6f42c1" fill-opacity="0.4"/>
  
</svg>
</div>

**Visual Explanation:**
- **Blue circle (A)**: All students who play soccer
- **Green circle (B)**: All students who play tennis  
- **Purple overlap (A∩B)**: Students who play both sports
- **Conditional probability P(B|A)**: Given we're in the blue circle (soccer players), what fraction are also in the green circle (tennis players)?

---

##  5. Introduction to Continuous Probability Distributions

### What is a Continuous Distribution?

- In a **discrete** distribution, outcomes are **countable** (like rolling a die).
- In a **continuous** distribution, outcomes are **uncountable**—they can take **any value in an interval**.

> **Example (Real Life):**
> - The exact **height** of a person (e.g., 172.3 cm)
> - The **time** it takes to run a race (e.g., 13.59 seconds)

---

### The Probability Density Function (PDF)

In continuous distributions, we talk about a **density**, not individual outcomes.

- Probability of an exact value is **0**
- We measure probability over **intervals**, e.g.:

$$ P(5 \leq X \leq 10) $$

> Think of it like the **area under a curve** on a graph.

---

###  Example: Uniform Distribution

Suppose the time it takes to microwave popcorn is **uniformly distributed** between 2 and 4 minutes.

- This means every time between 2 and 4 minutes is **equally likely**
- The probability of finishing between 2.5 and 3 minutes is:

$$ P(2.5 \leq X \leq 3) = \frac{3 - 2.5}{4 - 2} = \frac{0.5}{2} = 0.25 $$

