---
layout: page
title: Posts
permalink: /posts/
---

{% for post in site.posts %}
<article class="mb-12">
  <h2 class="text-2xl font-bold mb-4">
    <a href="{{ post.url }}" class="hover:text-blue-500 dark:hover:text-blue-300  transition-colors">{{ post.title }}</a>
  </h2>
  <p class="text-gray-700 dark:text-gray-300 mb-4"><b>Category: </b> {{ post.category | capitalize }}</p>
  <p class="text-gray-700 dark:text-gray-300 mb-4">{{ post.excerpt }}</p>

  <div class="flex justify-end">
    <a href="{{ post.url }}" class="font-semibold inline-flex items-center text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
      More
      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</article>
{% endfor %}