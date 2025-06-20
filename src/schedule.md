---
layout: base.njk
title: Course Schedule
---

# Course Schedule

Below is the complete schedule for our 7-week summer course (June 29 - August 14). 

## Quick Navigation

<div class="week-nav">
  <button onclick="showWeek(1)" class="week-btn">Week 1</button>
  <button onclick="showWeek(2)" class="week-btn">Week 2</button>
  <button onclick="showWeek(3)" class="week-btn">Week 3</button>
  <button onclick="showWeek(4)" class="week-btn">Week 4</button>
  <button onclick="showWeek(5)" class="week-btn">Week 5</button>
  <button onclick="showWeek(6)" class="week-btn">Week 6</button>
  <button onclick="showWeek(7)" class="week-btn">Week 7</button>
  <button onclick="showToday()" class="today-btn">Today</button>
</div>

## Week 1 (June 29 - July 4)

<div id="week-1" class="week-section">

| Day | Date | Topic |Class Notes | Exercises / Lab |
|-----|------|-------------|-----------|-----|
| 1 | Sunday, June 29 | _Functions and Graphs_ | [Lecture 1](/notes/functions-and-graphs/) | [Exercises 1](/exercises/quadratic-functions/) |
| 2 | Monday, June 30 | _Function Transformations_ | - | [**Lab 1**](/labs/function-transformations/) |
| 3 | Tuesday, July 1 | _Introduction to Limits_ | [Lecture 2](/notes/limits-introduction/) | [Exercises 2](/exercises/limit-evaluation/) |
| 4 | Wednesday, July 2 | _Graphical Exploration of Limits_ | - | [**Lab 2**](/labs/limits-graphical-exploration/) |
| 5 | Thursday, July 3 | _Limits of Functions_ | Lecture 3 | Exercises 3 |
| - | Friday, July 4 | **No Class** |  |  |

</div>

## Week 2 (July 5 - July 11)

<div id="week-2" class="week-section">

| Day | Date | Topic |Class Notes | Exercises / Lab |
|-----|------|-------------|-----------|-----|
| 6 | Saturday, July 5 |  |  |  |
| 7 | Sunday, July 6 |  |  |  |
| 8 | Monday, July 7 |  |  |  |
| 9 | Tuesday, July 8 |  |  |  |
| 10 | Wednesday, July 9 |  |  |  |
| 11 | Thursday, July 10 |  |  |  |
| - | Friday, July 11 | **No Class** |  |  |

</div>

## Week 3 (July 12 - July 18)

<div id="week-3" class="week-section">

| Day | Date | Topic |Class Notes | Exercises / Lab |
|-----|------|-------------|-----------|-----|
| 12 | Saturday, July 12 |  |  |  |
| 13 | Sunday, July 13 |  |  |  |
| 14 | Monday, July 14 |  |  |  |
| 15 | Tuesday, July 15 |  |  |  |
| 16 | Wednesday, July 16 |  |  |  |
| 17 | Thursday, July 17 |  |  |  |
| - | Friday, July 18 | **No Class** |  |  |

</div>

## Week 4 (July 19 - July 25)

<div id="week-4" class="week-section">

| Day | Date | Topic |Class Notes | Exercises / Lab |
|-----|------|-------------|-----------|-----|
| 18 | Saturday, July 19 |  |  |  |
| 19 | Sunday, July 20 |  |  |  |
| 20 | Monday, July 21 |  |  |  |
| 21 | Tuesday, July 22 |  |  |  |
| 22 | Wednesday, July 23 |  |  |  |
| 23 | Thursday, July 24 |  |  |  |
| - | Friday, July 25 | **No Class** |  |  |

</div>

## Week 5 (July 26 - August 1)

<div id="week-5" class="week-section">

| Day | Date | Topic |Class Notes | Exercises / Lab |
|-----|------|-------------|-----------|-----|
| 24 | Saturday, July 26 |  |  |  |
| 25 | Sunday, July 27 |  |  |  |
| 26 | Monday, July 28 |  |  |  |
| 27 | Tuesday, July 29 |  |  |  |
| 28 | Wednesday, July 30 |  |  |  |
| 29 | Thursday, July 31 |  |  |  |
| - | Friday, August 1 | **No Class** |  |  |

</div>

## Week 6 (August 2 - August 8)

<div id="week-6" class="week-section">

| Day | Date | Topic |Class Notes | Exercises / Lab |
|-----|------|-------------|-----------|-----|
| 30 | Saturday, August 2 |  |  |  |
| 31 | Sunday, August 3 |  |  |  |
| 32 | Monday, August 4 |  |  |  |
| 33 | Tuesday, August 5 |  |  |  |
| 34 | Wednesday, August 6 |  |  |  |
| 35 | Thursday, August 7 |  |  |  |
| - | Friday, August 8 | **No Class** |  |  |

</div>

## Week 7 (August 9 - August 15)

<div id="week-7" class="week-section">

| Day | Date | Topic |Class Notes | Exercises / Lab |
|-----|------|-------------|-----------|-----|
| 36 | Saturday, August 9 |  |  |  |
| 37 | Sunday, August 10 |  |  |  |
| 38 | Monday, August 11 |  |  |  |
| 39 | Tuesday, August 12 |  |  |  |
| 40 | Wednesday, August 13 |  |  |  |
| 41 | Thursday, August 14 |  |  |  |
| - | Friday, August 15 | **No Class** |  |  |

</div>

<script>
// Week navigation functionality
function showWeek(weekNumber) {
    // Hide all week sections
    const weekSections = document.querySelectorAll('.week-section');
    weekSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Hide all week headers
    const weekHeaders = document.querySelectorAll('h2');
    weekHeaders.forEach(header => {
        if (header.textContent.includes('Week')) {
            header.style.display = 'none';
        }
    });
    
    // Show selected week
    const selectedWeek = document.getElementById(`week-${weekNumber}`);
    if (selectedWeek) {
        selectedWeek.style.display = 'block';
    }
    
    // Show the corresponding header
    const weekHeadersArray = Array.from(document.querySelectorAll('h2'));
    const targetHeader = weekHeadersArray.find(header => 
        header.textContent.includes(`Week ${weekNumber}`)
    );
    if (targetHeader) {
        targetHeader.style.display = 'block';
    }
    
    // Update active button
    document.querySelectorAll('.week-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function showToday() {
    const today = new Date();
    const startDate = new Date('2024-06-29'); // Actual start date
    const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
    if (daysDiff >= 0 && daysDiff <= 40) {
        let weekNumber;
        if (daysDiff < 5) {
            weekNumber = 1; // First week (Sunday-Friday)
        } else {
            weekNumber = Math.floor((daysDiff - 5) / 7) + 2; // Subsequent weeks (Saturday-Friday)
        }
        showWeek(weekNumber);
        
        // Highlight today's row
        const todayRow = document.querySelector(`tr[data-day="${daysDiff + 1}"]`);
        if (todayRow) {
            todayRow.classList.add('today');
        }
    } else {
        showWeek(1); // Show week 1 if before start date
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Show current week by default
    const today = new Date();
    const startDate = new Date('2024-06-29'); // Actual start date
    const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
    if (daysDiff >= 0 && daysDiff <= 40) {
        let weekNumber;
        if (daysDiff < 5) {
            weekNumber = 1; // First week (Sunday-Friday)
        } else {
            weekNumber = Math.floor((daysDiff - 5) / 7) + 2; // Subsequent weeks (Saturday-Friday)
        }
        showWeek(weekNumber);
    } else {
        showWeek(1); // Default to week 1 if before start date
    }
});
</script>

<style>
.week-nav {
    margin: 20px 0;
    text-align: center;
}

.week-btn, .today-btn {
    margin: 5px;
    padding: 10px 15px;
    border: 2px solid #007bff;
    background: white;
    color: #007bff;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.week-btn:hover, .today-btn:hover {
    background: #007bff;
    color: white;
}

.week-btn.active {
    background: #007bff;
    color: white;
}

.today-btn {
    background: #0056b3;
    border-color: #0056b3;
    color: white;
}

.today-btn:hover {
    background: #004085;
    border-color: #004085;
}

.week-section {
    display: none;
    margin-bottom: 30px;
}

.week-section:first-of-type {
    display: block;
}

tr.today {
    background-color: #fff3cd !important;
    border-left: 4px solid #ffc107;
}

h2 {
    margin-top: 30px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 5px;
    border-left: 4px solid #007bff;
}

</style>




