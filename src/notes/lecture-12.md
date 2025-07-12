---
layout: base.njk
title: Introduction to Limits
category: limits
description: Lecture 12
date: 2025-07-15
---

# Introduction to limits, limits on graphs, and limits of infinity.

## What is a limit?

A limit is the value that a function approaches as the input approaches a certain value.

We say that the limit of $f(x)$ as $x$ approaches $a$ is $L$ if the function $f(x)$ gets close to $L$ as $x$ gets close to $a$.

$$\lim_{x\to a} f(x) = L$$

## How to find a limit?

1. Substitute the value of the input into the function.
2. If the function is defined at the value of the input, then the limit is the value of the function.
3. If the function is not defined at the value of the input, then the limit is the value that the function approaches as the input approaches the value of the input.

> Example
> The limit of $f(x) = x^2$ as $x$ approaches 2 is 4.
>
> Because $f(2) = 2^2 = 4$.
> $$\lim_{x\to 2} x^2 = 4$$

## Limits at a point

Limits at a point are the values that a function approaches as the input approaches a certain value.

1. If the function is defined at the point, then the limit is the value of the function at the point.

2. If the function is not defined at the point, then the limit is the value that the function approaches as the input approaches the point. This includes holes, jumps, and vertical asymptotes.

> Example
> If a hole exists at $x=3$, and $f(x)=\frac{x^2-9}{x-3}$, then the limit of $f(x)$ as $x$ approaches 3 is 6.
>
> Because $f(x)=\frac{(x-3)(x+3)}{x-3}=x+3$ for $x\neq 3$.
> $$\lim_{x\to 3} \frac{x^2-9}{x-3} = \lim_{x\to 3} (x+3) = 6$$

## Limits at infinity

Limits at infinity are the values that a function approaches as the input approaches infinity.

> Example
> The limit of $f(x) = x^2$ as $x$ approaches infinity is infinity.
> $$\lim_{x\to \infty} x^2 = \infty$$
> and the limit of $f(x) = x^2$ as $x$ approaches negative infinity is infinity.
> $$\lim_{x\to -\infty} x^2 = \infty$$


# Exercises

