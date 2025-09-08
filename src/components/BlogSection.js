import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for First-Time Home Buyers in India',
      excerpt: 'Buying your first home is an exciting milestone. Here are some essential tips to navigate the process smoothly.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      date: 'May 15, 2023',
      category: 'Home Buying'
    },
    {
      id: 2,
      title: 'Understanding RERA and How It Benefits Home Buyers',
      excerpt: 'The Real Estate Regulation Act has transformed property buying in India. Learn how it protects your interests.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      date: 'April 28, 2023',
      category: 'Legal'
    },
    {
      id: 3,
      title: 'Top 5 Emerging Real Estate Markets in India',
      excerpt: 'Discover the Indian cities that are showing the most promising growth in property values and development.',
      image: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      date: 'April 10, 2023',
      category: 'Market Trends'
    },
    {
      id: 4,
      title: 'How to Stage Your Home for a Quick Sale',
      excerpt: 'Simple staging techniques that can help your property sell faster and for a better price.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      date: 'March 22, 2023',
      category: 'Home Selling'
    },
    {
      id: 5,
      title: 'Understanding Home Loan EMI Calculations',
      excerpt: 'A comprehensive guide to how banks calculate your home loan EMIs and what factors affect your payments.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      date: 'March 15, 2023',
      category: 'Home Loans'
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Real Estate Blog</h2>
        <p className="section-subtitle">Insights, tips and trends for home buyers and sellers</p>
        
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <Link to="/blog" className="read-more">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/blog" className="btn btn-primary">View All Articles</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;