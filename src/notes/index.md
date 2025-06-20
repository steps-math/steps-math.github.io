---
layout: base.njk
title: Topics
---

# Daily Topics

Here you'll find organized notes for each class session covering probability and statistics, functions and graphs, continuity, limits, and differentiation concepts.

## Probability and Statistics Topics

{% for topic in collections.topics %}
{% if topic.data.category == "probability" %}
- [{{ topic.data.title }}]({{ topic.url }}) - {{ topic.data.description }}
{% endif %}
{% endfor %}

## Functions and Graphs Topics

{% for topic in collections.topics %}
{% if topic.data.category == "functions" %}
- [{{ topic.data.title }}]({{ topic.url }}) - {{ topic.data.description }}
{% endif %}
{% endfor %}

## Continuity Topics

{% for topic in collections.topics %}
{% if topic.data.category == "continuity" %}
- [{{ topic.data.title }}]({{ topic.url }}) - {{ topic.data.description }}
{% endif %}
{% endfor %}

## Limits Topics

{% for topic in collections.topics %}
{% if topic.data.category == "limits" %}
- [{{ topic.data.title }}]({{ topic.url }}) - {{ topic.data.description }}
{% endif %}
{% endfor %}

## Differentiation Topics

{% for topic in collections.topics %}
{% if topic.data.category == "differentiation" %}
- [{{ topic.data.title }}]({{ topic.url }}) - {{ topic.data.description }}
{% endif %}
{% endfor %}
