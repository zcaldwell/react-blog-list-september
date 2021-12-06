import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { getBlogs } from './services/blogs';
import { useState, useEffect } from 'react';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      console.log(data);
      setBlogs(data);
    };
    fetchData();
  }, []);
  return (
    <main>
      <section className="main">
        <Header />
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
        <Footer />
      </section>
    </main>
  );
}

export default App;
