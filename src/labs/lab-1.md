---
layout: base.njk
title: "Lab 1: Probability and Statistics"
date: 2025-07-03
---

# Lab 1: Probability and Statistics

## Problem 1: Ten Coin Tosses

You have access to an online coin-flip simulator (just Google “coin flip”). Follow the steps below:

1. **One Run**  
   - Toss the coin **10 times**.  
   - Record how many heads you get.

2. **Repeat**  
   - Perform the 10-toss experiment **3 more times** (4 runs total).  
   - Record the number of heads in each run. You should have 4 numbers.

3. **Report**  
   - Report the number of heads in each run to the board.

4. **Compute the Average** 
   - Let $H_i$ be the number of heads in run $i$.  
   - Calculate  
     $$
     \overline{H} \;=\;\frac{1}{4}\sum_{i=1}^{4}H_i.
     $$

5. **Predict**  
   - Before checking your work, guess what value $\overline{H}$ will be.  
   - After you compute it, compare to your guess.

6. **Theory Check**  
   - Without doing more flips, what would you expect the number of heads to be in 10 tosses of a fair coin?  
   - How close was your $\overline{H}$ to that number?

7. **Explore Further**  
   - Try 10 runs of 10 tosses. How does the average change?  
   - You can do this by performing the 10-toss experiment 6 more times and average the new numbers with the previous 4.  
   - Make a brief note: when you increased the number of runs, what happened to your average?  

## Problem 2: Shelf Placement for Maximum Expected Revenue

A small grocery shop will stock three products—chocolate, tea, and cookies—one on each of three shelves. Customer behavior is as follows:

|Shelf Position|Notice Probability $p_s$|
|---|:---:|
|Top|0.75|
|Middle|0.60|
|Bottom|0.30|

If a customer notices a product, they then purchase it with probability $p_{buy}$ that depends on the product:


|Product|Purchase Probability $p_{buy}$| Price (Riyals)|
|---|:---:|:---:|
|Chocolate|0.80|3.00|
|Tea|0.25|2.00|
|Cookies|0.50|2.50|

>For example, if the products were placed in this order:
> - **Chocolate** on top
> - **Tea** in the middle
> - **Cookies** on the bottom
> then the expected revenue is:
> $$
> 0.8 \times 3 \times 0.75 + 0.25 \times 2 \times 0.6 + 0.5 \times 2.5 \times 0.3 = 1.8 + 0.3 + 0.375 = 2.475
> $$

The shop owner wants to maximize the expected revenue from sales.

1. What shelf position should the shop owner place the products on to maximize the expected revenue?
2. What is the maximum expected revenue?

3. Whenever a product sells, the shop pays a wholesale “restocking” cost to replace it:  
   - Chocolate: 2.00 Riyals per unit  
   - Tea: 0.20 Riyals per unit  
   - Cookies: 0.70 Riyals per unit  
  
    Find the placement of Chocolate, Tea, and Cookies on Top/Middle/Bottom that **maximizes** the **total** expected profit.

## Problem 3: Project Completion Time with Triangular Distribution

A small engineering team estimates that a certain project task will take at least 4 days, most likely 7 days, and at most 12 days to complete. They model the completion time $T$ using a triangular distribution on the interval $[4, 12]$ with peak at $c=7$. Its probability density function is given by:

$$f(t) = \begin{cases}
\frac{1}{12}(t-4) & \text{if } 4 \leq t \leq 7 \\
\frac{1}{20}(12-t) & \text{if } 7 \leq t \leq 12 \\
0 & \text{otherwise}
\end{cases}$$

and its plot is shown below (notice that the area under the curve is 1):

<div style="text-align: center;">
    <img src="/images/lab-1-prob-2.png" alt="density function plot" style="width: 80%;">
</div>

1. What is the probability that the task will take more than 8 days to complete?
2. What is the probability that the task will take between 5 and 9 days to complete?
3. The team needs a 90% confidence that the task finishes by a certain day $d$. Find $d$ such that $P(T \leq d) = 0.90$.

---  

## Additional Resources

If you are interested in additional practice with probability and statistics, you can check out the following resources:

- [Khan Academy: probability](https://www.khanacademy.org/math/statistics-probability/probability-library)
- [MIT OpenCourseWare: Introduction to Probability and Statistics](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)