import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './menu.module.css';
import Navbar from '../navbar/Navbar';
import hchicha1 from '../../assets/Group (3).png';
import hchicha2 from '../../assets/Group (4).png';
import MenuItem from '../MenuItem/MenuItem';
import basla from '../../assets/Group (5).png';
import rasthoum from '../../assets/Group (6).png';
import zina1 from '../../assets/Group (7).png';
import zina2 from '../../assets/Group (8).png';
import zina3 from '../../assets/Group (9).png';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../Footer/Footer';

function Menu() {
  const [menuItems, setMenuItems] = useState({
    'Main Courses': [],
    'Appetizers': [],
    'Desserts': [],
    'Drinks': []
  });

  useEffect(() => {
    fetch('http://localhost:8081/menuItems/menu')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched menu items:', data);
        setMenuItems({
          'Appetizers': data['Appetizers'] || [],
          'Main Courses': data['Main Courses'] || [],
          'Desserts': data['Desserts'] || [],
          'Drinks': data['Beverages'] || []
        });
      })
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 5,
    slidesToScroll: 3,
    centerMode: false,
  };

  const handleAdd = (cartItem) => {
    fetch('http://localhost:8081/cart/cartItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Item added to cart:', data);
    })
    .catch(error => console.error('Error adding item to cart:', error));
  };

  return (
    <>
      <Navbar />
      {/* Appetizers Section */}
      <div className={styles.container1}>
        <img src={hchicha1} alt="Appetizers Background" className={styles.hchicha1} />
        <span className={styles.entres}>Appetizers</span>
        <span className={styles.desc1}>Start your meal right.</span>
        <img src={hchicha2} alt="Appetizers Accent" className={styles.hchicha2} />
        <img src={zina1} alt="Appetizers Image 1" className={styles.zina1} />
        <img src={zina2} alt="Appetizers Image 2" className={styles.zina2} />
        <img src={zina3} alt="Appetizers Image 3" className={styles.zina3} />
        
        {/* Slider Integration for Appetizers */}
        <div className={styles.sliderContainer}>
          <Slider {...sliderSettings}>
            {(menuItems['Appetizers'] || []).map(item => (
              <div key={`Appetizers-${item.id}`}> {/* Composite key */}
                <MenuItem
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  imagePath={item.imagePath}
                  onAdd={handleAdd} // Pass the handleAdd function
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      {/* Main Courses Section */}
      <div className={styles.container2}>
        <img src={hchicha1} alt="Main Courses Background" className={styles.hchicha11} />
        <span className={styles.entres1}>Main Courses</span>
        <span className={styles.desc2}>Delightful main dishes.</span>
        <img src={hchicha2} alt="Main Courses Accent" className={styles.hchicha21} />
        <img src={basla} alt="Main Courses Image 1" className={styles.basla} />
        <img src={rasthoum} alt="Main Courses Image 2" className={styles.rasthoum} />
        
        {/* Slider Integration for Main Courses */}
        <div className={styles.sliderContainer}>
          <Slider {...sliderSettings}>
            {(menuItems['Main Courses'] || []).map(item => (
              <div key={`MainCourses-${item.id}`}> {/* Composite key */}
                <MenuItem
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  imagePath={item.imagePath}
                  onAdd={handleAdd} // Pass the handleAdd function
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Desserts Section */}
      <div className={styles.container3}>
        <img src={hchicha1} alt="Desserts Background" className={styles.hchicha12} />
        <span className={styles.entres2}>Desserts</span>
        <span className={styles.desc1}>Sweet and delicious.</span>
        <img src={hchicha2} alt="Desserts Accent" className={styles.hchicha22} />
        <img src={zina3} alt="Desserts Image" className={styles.zina3} />

        {/* Slider Integration for Desserts */}
        <div className={styles.sliderContainer1}>
          <Slider {...sliderSettings}>
            {(menuItems['Desserts'] || []).map(item => (
              <div key={`Desserts-${item.id}`}> {/* Composite key */}
                <MenuItem
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  imagePath={item.imagePath}
                  onAdd={handleAdd} // Pass the handleAdd function
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Drinks Section */}
      <div className={styles.container4}>
        <img src={hchicha1} alt="Drinks Background" className={styles.hchicha13} />
        <span className={styles.entres3}>Drinks</span>
        <span className={styles.desc3}>Refreshments for all.</span>
        <img src={hchicha2} alt="Drinks Accent" className={styles.hchicha23} />
        <img src={zina3} alt="Drinks Image" className={styles.zina3} />

        {/* Slider Integration for Drinks */}
        <div className={styles.sliderContainer1}>
          <Slider {...sliderSettings}>
            {(menuItems['Drinks'] || []).map(item => (
              <div key={`Drinks-${item.id}`}> {/* Composite key */}
                <MenuItem
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  imagePath={item.imagePath}
                  onAdd={handleAdd} // Pass the handleAdd function
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Menu;
