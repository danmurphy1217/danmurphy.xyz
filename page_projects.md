---
layout: page
title: Projects
permalink: /projects/
---

{% for project in site.projects %}
<article class="mb-12">
  <h2 class="text-2xl font-bold mb-4">
    <a href="{{ project.url }}" class="hover:text-blue-500 transition-colors">{{ project.title }}</a>
  </h2>
  <p class="text-gray-700 dark:text-gray-300 mb-4"><a href="{{ project.github-link }}">GitHub Link </a> </p>
  <p class="text-gray-700 dark:text-gray-300 mb-4">{{ project.excerpt }}</p>
</article>
{% endfor %}