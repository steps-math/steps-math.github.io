---
layout: base.njk
title: Introduction to Probability
category: Probability and Statistics
description: Counting rules, probability, events, and sample space.
date: 2025-06-30
---

# What Does "Probably" Mean? An Introduction to Probability

## Learning Objectives
- Understand basic counting methods.
- Interpret events as probability.
- Understand the sample space.
- Tie events and probability with the sample space.

## 1. Ahmed and the Truth Behind "Probably"

Ahmed noticed something interesting about his friend Khaled.

No matter what people asked him—  
> “Are you coming?”  
> “Did you finish?”  
> “Will you help?”  

—Khaled almost always answered:  
> **“Probably.”**

Ahmed got curious. *What does "probably" really mean when Khaled says it?*

For three weeks, Ahmed kept track every time Khaled said **"probably"** and whether he actually followed through.

Here’s what he found:

- Khaled said **"probably"** 30 times.  
- He did the thing **21 times**.  
- He didn’t do it **9 times**.

Ahmed did the math:

$21 ÷ 30 = 0.7$

This means that about 70% of the time, when Khaled says "probably," he actually does the thing.  
So we might say:  
**P(Khaled does it | says "probably") = 0.7**


*What do you think will happen the next time someone asks:*
> “Are you bringing your laptop tomorrow?”

We use probability in many situations in our lives. Even subconsciously sometimes! Here are some examples of where we use it: 

- **Weather forecasts:** ``There is a 70\% chance of rain tomorrow.''
- **Games of chance:** Rolling dice, drawing cards, or spinning a wheel.
- **Medical testing:** ``There is a 95\% chance the test correctly detects the disease.''
- **Sports:** What is the chance your team wins the next game?
- **Finance:** What is the risk that a stock price goes down?
- **Traffic** What is the average time it will take you to get to school?
 ---

## 2. Why Study Probability?
Probability is the mathematics of chance. It helps us make better choices, analyze risks, and solve real-world problems. 

### What is probability?

**Probability** is a number between **0 and 1** that tells us how likely an event is to occur:

- **0** means the event is **impossible**.
- **1** means the event is **certain**.
- **0.5** means the event is **equally likely** to happen or not.
These probabilities help us make educated guesses, even when outcomes are uncertain.


### Examples:

- Tossing a fair coin:  
  `P(heads) = 1/2`

- Rolling a fair six-sided die:  
  `P(rolling a 4 or 2) = 2/6`

- Pulling a red card out of a 52-card deck: 
    `P(pulling a red card) = 26/52`


## 3. Random Experiments and Events

### Random Experiment

A **random experiment** is an action or process that results in one outcome from a set of possible outcomes, but the exact result cannot be predicted in advance.


### Event

A specific outcome or group of outcomes from a random experiment.

#### Examples:

- **Experiment:** Toss a coin  
  **Event:** Getting heads

- **Experiment:** Roll a die  
  **Event:** Rolling an even number = {2, 4, 6}

---

## 4. Sample Space and Events

### Sample Space (S)

The set of **all possible outcomes** of an experiment.

#### Examples:

- Coin toss:  
  `S = {Heads, Tails}`

- Die roll:  
  `S = {1, 2, 3, 4, 5, 6}`

- Drawing a card:  
  `S = {All 52 cards}`

### Event (E)

A subset of the sample space.

> **Quick Tip**:  
> - The action you do → **Experiment**  
> - The result you care about → **Event**  
> - All possible results → **Sample Space**

---

## 5. Probability of an Event

If all outcomes are **equally likely**, then:
the probability of an event **E** is:

$$P(E) = \frac{\text{Number of outcomes in } E}{\text{Total number of outcomes in } S}$$

### Example:

- Roll a die. What’s the probability of getting an even number?

Even numbers: {2, 4, 6} → 3 outcomes  
Total outcomes: 6

$$P(\text{even}) = \frac{3}{6} = 0.5$$
