---
layout: base.njk
title: Exercises
---

# Lecture Exercises

Practice problems designed to be worked on during class time with instructor guidance.

## Available Exercises

{% for exercise in collections.exercises | sort(false, false, 'data.date') %}
{% if exercise.data.title != "Exercises" %}
<div class="content-card">
<h3><a href="{{ exercise.url }}">{{ exercise.data.title }}</a></h3>
<p>{{ exercise.data.description }}</p>
<p class="exercise-date"><strong>Date:</strong> {{ exercise.data.date | dateFormat }}</p>
</div>
{% endif %}
{% endfor %}