/**
 * Filter posts by category
 * @param {string} category - The category to filter by, or 'all' to show all posts
 */
function filterPosts(category) {
  // Get all post items
  const posts = document.querySelectorAll('.post-item');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Update active button state
  filterBtns.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active', 'bg-blue-500', 'text-white', 'dark:bg-blue-600');
    } else {
      btn.classList.remove('active', 'bg-blue-500', 'text-white', 'dark:bg-blue-600');
    }
  });

  // Filter posts
  posts.forEach(post => {
    if (category === 'all' || post.dataset.category === category) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}
