---
layout: base.njk
title: PLACEHOLDER Introduction to Limits
category: limits
description: Understanding the concept of limits and their role in calculus
date: 2024-06-21
---

# PLACEHOLDER Introduction to Limits

## Learning Objectives
- Understand the intuitive concept of a limit
- Evaluate simple limits algebraically and graphically
- Recognize when limits do not exist
- Apply limit laws to solve problems

## What is a Limit?

A **limit** describes the value that a function approaches as the input approaches a particular value.

We write: $$\lim_{x \to a} f(x) = L$$

This means: "As $x$ gets closer and closer to $a$, $f(x)$ gets closer and closer to $L$."

## Graphical Understanding

Consider the function $f(x) = \frac{x^2 - 1}{x - 1}$ when $x \neq 1$.

Even though $f(1)$ is undefined, we can ask: what value does $f(x)$ approach as $x$ approaches 1?

$$\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} \frac{(x-1)(x+1)}{x-1} = \lim_{x \to 1} (x+1) = 2$$

## Limit Laws

If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$, then:

1. **Sum Rule**: $\lim_{x \to a} [f(x) + g(x)] = L + M$

2. **Difference Rule**: $\lim_{x \to a} [f(x) - g(x)] = L - M$

3. **Product Rule**: $\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M$

4. **Quotient Rule**: $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}$ (if $M \neq 0$)

5. **Power Rule**: $\lim_{x \to a} [f(x)]^n = L^n$

## Types of Limits

### Direct Substitution
When $f(x)$ is continuous at $x = a$:
$$\lim_{x \to a} f(x) = f(a)$$

**Example**: $\lim_{x \to 2} (3x^2 - 5x + 1) = 3(2)^2 - 5(2) + 1 = 3$

### Indeterminate Forms
When direct substitution gives $\frac{0}{0}$, we need algebraic manipulation.

**Example**: 
$$\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = \lim_{x \to 3} \frac{(x-3)(x+3)}{x-3} = \lim_{x \to 3} (x+3) = 6$$

## One-Sided Limits

- **Left-hand limit**: $\lim_{x \to a^-} f(x)$ (approaching from the left)
- **Right-hand limit**: $\lim_{x \to a^+} f(x)$ (approaching from the right)

The limit $\lim_{x \to a} f(x)$ exists if and only if:
$$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)$$

## When Limits Don't Exist

1. **Different one-sided limits**
2. **Infinite limits**: $\lim_{x \to a} f(x) = \pm\infty$
3. **Oscillating behavior**: Function doesn't settle on a value

## Important Limit

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

This limit is crucial for derivatives of trigonometric functions.

## Practice Problems

Try these during class:
1. $\lim_{x \to 4} \frac{x^2 - 16}{x - 4}$
2. $\lim_{x \to 0} \frac{x^2 + 3x}{x}$
3. $\lim_{x \to 2^+} \frac{1}{x - 2}$