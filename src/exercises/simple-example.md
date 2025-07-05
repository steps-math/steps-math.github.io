---
layout: base.njk
title: Simple Answer Checker Example
category: exercises
description: A simple example showing the markdown-friendly answer checker syntax
---

# Simple Answer Checker Example

This page demonstrates how to write exercises using clean, markdown-friendly syntax.

## Basic Numeric Question

{% answerChecker %}
What is 2 + 3?

{% answerNumeric "basic-math" 5 "Enter your answer" %}
{% endanswerChecker %}

## Multiple Choice Question

{% answerChecker %}
What is the capital of France?

{% multipleChoice "capital" '["London", "Paris", "Berlin", "Madrid"]' "b" %}
{% endanswerChecker %}

## Text Answer with Hint

{% answerChecker %}
What is the chemical symbol for gold?

{% answerText "gold-symbol" "Au" "Enter chemical symbol" "Think of the periodic table!" %}
{% endanswerChecker %}

## Mathematical Expression

{% answerChecker %}
What is the value of $x$ if $2x + 3 = 7$?

{% answerNumeric "solve-x" 2 "Enter value of x" "Subtract 3 from both sides, then divide by 2" %}
{% endanswerChecker %}

 