import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ImagePlace from '../../components/ImagePlace/ImagePlace';
import './Blog.css';
import BlueSection from '../../components/BlueSection/BlueSection';
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection';
import Footer from '../../components/Footer/Footer';
import Blogg from '../../../public/Assets/Blog_img.png';
import { Categories, Blog_articles } from '../../utils/data';


function Blog() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <>
      <Navbar />
      <ImagePlace text='Blog' description='Blog articles for "Inspiration".' backgroundImage={Blogg} />

      <div className='categories_section'>
        <ul>
          {Categories.map((value, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(index)}
              style={{
                backgroundColor: selectedCategory === index ? 'blue' : '#F5F7FA',
                color: selectedCategory === index ? '#ffffff' : '#3A4D5A',
              }}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className='articles_section'>
        <div className='blog_articles'>
          {/* First Row with 2 columns */}
          <div className='upper_blogs'>
            {Blog_articles.slice(0, 2).map(article => (
              <div key={article.title} className="trip_card">
                <img src={article.image} alt={article.title} />
                <div className='trip_card_text'>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row with 3 columns */}
          <div className='down_blogs'>
            {Blog_articles.slice(2, 5).map(article => (
              <div key={article.title} className="trip_card">
                <img src={article.image} alt={article.title} />
                <div className='trip_card_text'>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BlueSection />
      <JoinUsSection />
      <Footer />
    </>
  );
}

export default Blog;
