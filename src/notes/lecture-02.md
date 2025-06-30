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



# Exercises

### 1. Independent or Dependent?
Identify whether the following pairs of events are independent or dependent:

**a)** Flipping a coin and rolling a die  
**b)** Drawing two cards from a deck without replacement  
**c)** Rain today and whether you carry an umbrella

### 2. Conditional Probability Basics
A bag contains 3 red and 2 blue marbles. A marble is drawn and **not replaced**, then a second marble is drawn.

What is the probability that:

**a)** The first is red and the second is blue?  
**b)** Both are red?

### 3. Venn Diagram Logic
Interpret the formulas of independent events and conditional probability by drawing Venn diagrams.

### 4. In a class:
- 20 students play basketball (B)
- 15 students play soccer (S)
- 8 students play both sports

**a)** Draw a Venn diagram  
**b)** How many play only basketball?  
**c)** How many play neither sport if the class has 35 students?

### 5. Drawing Cards
A card is drawn from a deck. Then a second card is drawn **without replacement**.

**a)** What is the probability both are aces?  
**b)** What is the probability the second card is an ace **given** the first was an ace?

> *Hint:* There are 4 aces in 52 cards.

### 6. Continuous Probability
The time to complete an online quiz is uniformly distributed between 10 and 30 minutes.

**a)** What is the probability a student finishes in less than 15 minutes?  
**b)** What is the probability a student takes more than 25 minutes?  
**c)** What is the probability a student takes between 18 and 22 minutes?

> *Hint:* Use the formula:  
> $$P(a \leq X \leq b) = \frac{b - a}{\text{range width}}$$

### 7. Real-Life Dependent Event
A factory has a 5\% chance a part is defective. If a part is found defective, another one is checked.

**a)** What is the chance both parts are defective?  
**b)** What does this suggest about the assumption of independence?

> *Hint:* Think about whether the second part's probability should be the same as the first.

# Advanced exercises

## Exercise 1: Conditional Probability and Bayes-Like Reasoning

In a school, 40\% of students play chess. Among those who play chess, 70\% also play video games. Among those who don't play chess, only 20\% play video games.

### Questions:

**a)** What is the probability that a randomly chosen student plays both chess and video games?  
**b)** What is the probability that a student plays video games?  
**c)** If a student plays video games, what is the probability they play chess?

## Exercise 2: Multiple Dependent Draws

An urn contains 6 red balls and 4 blue balls. Three balls are drawn **without replacement**.

### Questions:

**a)** What is the probability all three balls are red?  
**b)** What is the probability the second ball is red **given** the first one was red?  
**c)** What is the probability that **exactly one** red ball is drawn?

## Exercise 3: Independence Testing

In a survey:
- 55\% of people like tea (event A)
- 40\% like coffee (event B)
- 25\% like both

Are the events "liking tea" and "liking coffee" independent?

## Exercise 4: Continuous Probability - Uniform Distribution

A factory machine produces metal rods with lengths **uniformly distributed** between 98 cm and 102 cm.

### Questions:

**a)** What is the probability that a randomly chosen rod is longer than 100 cm?  
**b)** What is the probability it is between 99.5 cm and 101 cm?  
**c)** The rods are considered defective if their length is not within ±1 cm of 100 cm. What proportion of rods are defective?

## Exercise 5: Continuous Probability - Time Modeling

A website's page load time (in seconds) follows a continuous distribution. Assume the load time follows a **triangular distribution** with minimum = 0.5s, most likely = 1s, and maximum = 2s.

### Questions:

**a)** Sketch the distribution shape (optional).  
**b)** Which value is most probable?  
**c)** Why is the probability of the load time being exactly 1s still zero?  
**d)** Estimate the probability the load time is between 0.5 and 1.5 seconds (conceptually or with software).

## Exercise 6: Medical Testing Scenario

A disease affects 2\% of a population. A test correctly detects it 95\% of the time if a person has it (true positive rate), and falsely identifies it 5\% of the time if the person does not have it (false positive rate).

### Questions:

**a)** If a person tests positive, what is the probability they actually have the disease?

## Exercise 7: Simulating Dependent Events

A student arrives late to school on rainy days **40\%** of the time, and on dry days only **10\%** of the time. Suppose it rains on 30\% of school days.

### Questions:

**a)** What is the overall probability the student is late on a random day?  
**b)** If the student is late, what is the probability that it was raining?

---

For extra and more interesting exercises, check out one of MIT's problem sets on [MIT 18.05 Problem Set 1 website](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/resources/mit18_05_s22_pset01_pdf)!

## Summary

- **Independent events** don't affect each other, while **Dependent events** do.
- **Conditional probability** focuses on **"given that"** situations.
- **Venn diagrams** help visualize overlaps and relationships.
- **Continuous distributions** model values over a range, not individual outcomes.