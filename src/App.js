import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { getBlogs } from './services/blogs';
import { useState, useEffect } from 'react';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      <Header />
      <Footer />
    </section>
  );
}

export default App;
