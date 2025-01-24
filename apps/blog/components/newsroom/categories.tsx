import { useState } from 'react';

interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
}

interface CategoriesProps {
  posts: Post[];
}

export default function Categories({ posts }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(posts.map((post) => post.category))); // Estrai le categorie uniche

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <div>
      <div className="categories">
        <button onClick={() => setSelectedCategory(null)}>Tutte</button>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <a href={`/newsroom/${post.slug}`}>{post.title}</a>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}