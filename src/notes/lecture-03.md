---
layout: base.njk
title: Descriptive Statistics – Mean, Median, and Variance
category: probability
description: Lecture 3
date: 2025-07-02
---

# Lecture 3: Descriptive Statistics – Mean, Median, and Variance

## 1. Introduction to Measures of Central Tendency

### Mean (Average):

- **Definition**: The sum of all values divided by the number of values.
    
- **Formula**:
    
    $$ Mean=\bar{x}=\frac{x_1+x_2+\cdots+x_n}{n} $$
> **Real-Life Example**: Average test scores of students in a class. If students scored 70, 75, 80, and 85:
> $$ Mean=\frac{70+75+80+85}{4}=77.5 $$

### Median:

- **Definition**: The middle value when all data points are arranged in order.
    
- **Use**: More resistant to outliers than the mean.
    
> **Examples**: 
> 1. For the dataset $[1, 4, 5, 6, 9]$, the median is $5$.
> 2. For the dataset $[1, 4, 5, 6, 9, 10]$, the median is $\frac{5+6}{2}=5.5$.

---

## 2. Introduction to Variability Measures

### Variance:

- **Definition**: The average of the squared differences from the Mean.
    
- **Formula**:
    
    $$ Variance=\frac{1}{n}\sum_{i=1}^{n}(x_i-Mean)^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i-\bar{x})^2 $$

### Standard Deviation:

- **Definition**: The square root of variance. Gives spread in same units as the data.

- **Formula**:
    
    $$ Standard\_Deviation=\sqrt{Variance}=\sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i-Mean)^2} $$
    
> **Real-Life Example**: Consistency of delivery times for a courier company. Two delivery teams may have the same mean time, but very different consistency (standard deviation).
> <div style="text-align: center; margin: 20px 0;">
>     <img src="/images/03-delivery.png" alt="Delivery times" style="max-width: 80%; height: auto; border: 1px solid gray;">
> </div>
    

---

## 3. Why Do These Measures Matter in Real Life?

- **Mean**: Good for general performance (e.g., GPA, batting averages).
    
- **Median**: Crucial when data has outliers (e.g., housing prices, income).
    
- **Variance/Standard Deviation**: Important for risk (e.g., in finance, customer service times, quality control in manufacturing).
    

---

## 4. Visualizing Probability Distributions with Different Variances

We'll plot normal distributions with:

- Same **mean**
    
- Increasing **variance**
    

This shows how data spreads more as variance increases.

### Graph Sketches:

- Distribution A: $\mu = 0, \sigma^2 = 1$
    
- Distribution B: $\mu = 0, \sigma^2 = 3$
    
- Distribution C: $\mu = 0, \sigma^2 = 5$
    
<div style="text-align: center; margin: 20px 0;">
    <div id="imageContainer">
        <img id="toggleImage" src="/images/normal_distributions.gif" alt="Normal distributions visualization" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1);">
    </div>
    
    <div style="margin-top: 15px;">
        <button id="imageToggle" style="
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            font-family: 'Lora', serif;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2);
            line-height: 1.2;
            vertical-align: middle;
            display: inline-block;
        " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(52, 152, 219, 0.3)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(52, 152, 219, 0.2)'">
            Show Static Image
        </button>
    </div>
</div>

<script>
document.getElementById('imageToggle').addEventListener('click', function() {
    const image = document.getElementById('toggleImage');
    const button = document.getElementById('imageToggle');
    
    if (image.src.includes('.gif')) {
        image.src = '/images/normal_distributions.png';
        button.textContent = 'Show Animated GIF';
        button.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
    } else {
        image.src = '/images/normal_distributions.gif';
        button.textContent = 'Show Static Image';
        button.style.background = 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)';
    }
});
</script>


# Exercises

### 1. Outlier Impact Analysis

You are given two datasets:

- Dataset A: $[10, 12, 13, 15, 15, 16]$
- Dataset B: $[10, 12, 13, 15, 15, 100]$

Tasks:

- **a)** Compute the **mean** and **median** for both datasets.
- **b)** Discuss how the outlier (100) in Dataset B affects both measures.
- **c)** Which measure (mean or median) better represents the "typical" value?

> **Solution**  
> **a)** Calculate mean and median for both datasets:  
> - Dataset A: [10, 12, 13, 15, 15, 16]  
> Mean = (10 + 12 + 13 + 15 + 15 + 16) / 6 = 81 / 6 = 13.5  
> Median = average of middle two values (13 and 15) = (13 + 15) / 2 = 14  
>  
> - Dataset B: [10, 12, 13, 15, 15, 100]  
> Mean = (10 + 12 + 13 + 15 + 15 + 100) / 6 = 165 / 6 = 27.5  
> Median = (13 + 15) / 2 = 14 (same as Dataset A)  
>  
> **b)** The outlier (100) greatly increases the mean from 13.5 to 27.5, but does not affect the median.  
>  
> **c)** The median better represents the "typical" value here because it is resistant to outliers, unlike the mean which is pulled up by the extreme value.


### 2. Comparing Two Schools
School X and School Y both claim to have "the same average SAT score." Their score distributions are:

- School X: $[1200, 1210, 1220, 1180, 1190]$
- School Y: $[1000, 1050, 1200, 1350, 1400]$

- **a)** Compute the mean and standard deviation for both schools.
- **b)** Which school is more "consistent" in student performance?

> **Solution**  
> **a)** Calculate mean and standard deviation (SD) for both schools:  
>  
> - School X: [1200, 1210, 1220, 1180, 1190]  
> Mean = (1200 + 1210 + 1220 + 1180 + 1190) / 5 = 6000 / 5 = 1200  
> Variance = [(0)^2 + (10)^2 + (20)^2 + (-20)^2 + (-10)^2] / 5  
> = (0 + 100 + 400 + 400 + 100) / 5 = 1000 / 5 = 200  
> SD = sqrt(200) ≈ 14.14  
>  
> - School Y: [1000, 1050, 1200, 1350, 1400]  
> Mean = (1000 + 1050 + 1200 + 1350 + 1400) / 5 = 6000 / 5 = 1200  
> Variance = [(-200)^2 + (-150)^2 + 0^2 + 150^2 + 200^2] / 5  
> = (40000 + 22500 + 0 + 22500 + 40000) / 5 = 125000 / 5 = 25000  
> SD = sqrt(25000) = 158.11  
>  
> **b)** School X is more consistent because it has a much smaller standard deviation (~14.14) compared to School Y (~158.11).

### 3. Mean vs Median

Suppose that the average income in a city is 10,000 Riyals, and the median income is 5,000 Riyals.

What can you say about the distribution of income in this city? More people are richer or poorer than the average?

> **Solution**  
> The mean income (10,000 Riyals) is much higher than the median income (5,000 Riyals).  
> This suggests the income distribution is right-skewed, meaning that a few people earn much more than most others.  
> Because the mean is pulled upward by these high incomes, more people actually earn **less** than the average (mean).

### 4. Reverse Engineering a Dataset
You are told that a dataset of 5 numbers has:

- Mean = 10
- Median = 8
- Standard deviation ≈ 4

Tasks:

- **a)** Find at least one possible dataset that fits this description.
- **b)** Can you find a second dataset that fits the criteria but looks very different?
- **c)** What does this tell you about the uniqueness of statistical summaries?


> **Solution**  
> Given mean = 10, median = 8, SD ≈ 4, and 5 numbers in the dataset:  
>  
> **a)** One possible dataset: [5, 7, 8, 14, 16]  
> - Mean = (5 + 7 + 8 + 14 + 16) / 5 = 50 / 5 = 10  
> - Median = 8 (middle value when sorted)  
> - SD (approximate) close to 4  
>  
> **b)** Another dataset: [6, 6, 8, 12, 18]  
> - Mean = 10, median = 8, SD ≈ 4 as well  
>  
> **c)** This shows that statistical summaries like mean, median, and standard deviation are **not unique** and many different datasets can have the same summary statistics but very different values.


# Additional Advanced Exercises

### 1. Predicting the Effect of a Data Shift

Suppose a dataset has:

- Mean = 100
- Median = 95
- SD = 15

If each value in the dataset is multiplied by 2 and then 10 is added, what happens to:

- The mean?
- The median?
- The standard deviation?

### Follow-up Challenge: Generalize a rule for what happens to mean, median, and standard deviation under:

- Additive transformations (e.g. $x \rightarrow x + c$)
- Multiplicative transformations (e.g. $x \rightarrow kx$)

### 2. Prove or Disprove: The Mean is Always Closer to the Data

Statement: "The mean of a dataset is always closer to the data points than the median."

Task:

- Prove this is always true, OR
- Find a counterexample.
