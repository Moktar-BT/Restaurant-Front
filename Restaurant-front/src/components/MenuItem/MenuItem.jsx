import React from 'react';
import styles from './MenuItem.module.css';
import add from '../../assets/food-and-restaurant.png';

// Base URL where your images are served from
const BASE_URL = 'http://localhost:8081/images/';

function MenuItem({ name, price, description, imagePath, onAdd }) {
  // Construct the full image URL
  const imageUrl = `${BASE_URL}${imagePath}`;

  const handleAddClick = () => {
    const cartItem = {
      cartItemId: 0, // This might need to be handled by the backend
      menuItemId: imagePath.split('/').pop().split('.')[0], // Assuming the ID is part of the image path
      cartId: 0, // You might need to get this from your app state or backend
      quantity: 1, // Default quantity
      totalPrice: price, // Price for one item
      customization: "" // If you have any customization options
    };

    onAdd(cartItem);
  };

  return (
    <div className={styles.container}>
      <div className={styles.price}>${price}</div>
      <img src={imageUrl} alt={name} className={styles.platimg} />
      <div className={styles.card}>
        <span className={styles.titre}>{name}</span>
        <p className={styles.desc}>{description}</p>
        <button className={styles.btnadd} onClick={handleAddClick}>
          <img src={add} alt="Add" className={styles.addimg} />
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
