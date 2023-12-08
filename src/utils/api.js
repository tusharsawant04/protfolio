export const fetchBlogPostById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/blog/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog post');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      throw error;
    }
  };