---
layout: base.njk
title: Notation Notes
---

# Mathematical Notations Cheatsheet

This is a short list of some math notations that we discussed during class that can be helpful for review and reading.

### 1. $\Sigma$ (Sum notation)
Sum notation is used to compress writing sum of terms if there's a pattern. It's just a different way of writing sums on paper.

> **Example 1:**
> The summation $1+2+3+...+1000$ can be written as 
> $$1+2+...+1000=\sum_{n=1}^{1000} \, n$$
> It can be read as "the sum of $n$ from $n$ equals to 1 up to 1000"
> **Example 2:**
> The summation $2+4+8+16+...+2^{100}$ can be written as
> $$2^1+2^2+2^3+2^4+...+2^{100}=\sum_{n=1}^{100}\, 2^n$$
> This notation can be read as "the sum of $2^n$ from $n=1$ up to $n=100$"
> **Example 3:**
> If you have data points of heights in meters:
> $$x_1=1.7, x_2=1.52, x_3=1.81, x_4=1.49, x_5=1.75$$
> you can write the summation as:
> $$x_1+x_2+x_3+x_4+x_5 = \sum_{i=1}^5 \, x_i$$
> It can be read as "the sum of $x_i$ for $i=1$ to $i=5$."


### 2. $P(\cdot | \cdot)$ (conditional probability)
The bar in the probability notation is used for conditional probability when a posterior event has a priori. 

> You would read $P(A|B)$ as "the probability of $A$ *given that* $B$ happened"

### 3. $\infty$ (infinity symbol)
It's just a symbol to denote infinity. We would have $+\infty$ for positive infinity, and $-\infty$ for negative infinity. 

### 4. $[0,1] \& (0,1)$ (open and closed brackets for ranges)
I describing ranges, the closed bracket "$[$" means to *include* the value, and the closed bracket "$($" means to exclude that value.

> **Example 1**
> - $[0, 1]$ is the set of all real numbers between 0 and 1, *including* 0 and 1.
> - $(0, 1)$ is the set of all real numbers between 0 and 1, *excluding* 0 and 1.
> - $[0, 1)$ is the set of all real numbers between 0 and 1, including 0 and excluding 1.
> **Example 2**
> When we are describing ranges up to positive infinity, for example, the notation to be used is to have open brackets: 
> - $[0, +\infty)$ the set of all non-negative real numbers.
> - $(0, +\infty)$ the set of all positive real numbers.

### 5. $\mathbb{R}$ (set of real numbers)
The symbol $\mathbb{R}$ denotes the set of all real numbers. We can also write it as $(-\infty, +\infty)$. 

We use $\mathbb{N}$ to denote the set of natural numbers: $\{1, 2, 3, ...\}$, 
$\mathbb{Z}$ for integers $\{...,-2,-1,0,1,2,...\}$, 
$\mathbb{Z}^+$ for positive integers $\{1, 2, 3, ...\}=\mathbb{N}$, 
$\mathbb{Z}^-$ for negative integers $\{-1, -2, -3, ...\}$, and 
$\mathbb{Z}_{\ge 0}$ for non-negative integers $\{0, 1, 2, 3, ...\}$. 

### 6. $\in$ (in symbol)
The symbol $\in$ means "is an element of" or "belongs to" a set.

> **Example**
> 1. $\text{Head} \in \{\text{Head}, \text{Tail}\}$ (Head is an element of the set {Head, Tail})
> 2. $2 \in \{1, 2, 3, 4\}$ (2 belongs to the set {1, 2, 3, 4})

### 7. $\cup, \cap$ (union and intersection)
The symbols $\cup$ and $\cap$ are used when dealing with sets.

- $\cup$ means union: it represents all elements that are in either set (or both).
- $\cap$ means intersection: it represents only the elements that are in both sets.

> **Example**
> If $A = {1, 2, 3}$ and $B = {3, 4, 5}$, then:
> $A \cup B = {1, 2, 3, 4, 5}$ (all unique elements in either set)
> $A \cap B = {3}$ (only what they share)

### 8. $\bar{x}$ (average notation)
The notation $\bar{x}$ is used to represent the **mean (average)** of a set of numbers.

> **Example**
> Given data points: $x_1=3, x_2=5, x_3=7$, the average is:
> $$\bar{x} = \frac{1}{3}\sum_{i=1}^3 \, x_i = \frac{1}{3}(x_1+x_2+x_3)=\frac{1}{3}(3+5+7)=5$$
> This is often used in statistics to denote the *sample mean*.

### 9. $\mu, \sigma^2$ (mean and variance of normal distribution)
In probability and statistics, especially with the normal distribution, the symbols $\mu$ and $\sigma^2$ are used:

$\mu$ (mu) denotes the mean (or expected value).
$\sigma^2$ (sigma squared) denotes the variance, which measures how spread out the values are.

> **Example**
> In a normal distribution $X \sim \mathcal{N}(\mu, \sigma^2)$ ($X$ is sampled from a normal distribution with mean $\mu$ and variance $\sigma^2$): 
> - $\mu = 170$ cm could represent average height.      
> - $\sigma^2 = 25$ means the variance is 25, so standard deviation $\sigma = 5$.

### 10. $\to$ in $f:A \to B$ vs. $f(x)\to a$ (arrow for maps and approaches)
The symbol $\to$ can mean different things depending on context:

1. In **functions**:    
    - $f: A \to B$ means “$f$ is a function from set $A$ to set $B$”.
    - For example, $f: \mathbb{R} \to \mathbb{R}$ means the function takes real numbers as inputs and outputs real numbers.
2. In **limits**:
    - $f(x) \to a$ as $x \to b$ means “as $x$ approaches $b$, $f(x)$ approaches $a$”.
    - For example: as $x \to +\infty$, $\frac{1}{x} \to 0$  (as $x$ goes to $+\infty$, $\frac{1}{x}$ goes to $0$).

> So, in short:
> - $f: A \to B$: function definition (domain → codomain) 
> - $x \to a$: limit or convergence behavior (approaching a value)