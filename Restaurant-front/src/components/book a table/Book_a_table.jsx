  import React, { useState } from 'react';
  import styles from './book_a_table.module.css';
  import Navbar from '../navbar/Navbar';
  import ma9la from '../../assets/Group (11).png';
  import rasthoum from '../../assets/Group (5).png';
  import rasthoum1 from '../../assets/Group (6).png';
  import tableImage from '../../assets/table.webp';
  import BookingModal from './BookingModal/BookingModal';
import Footer from '../Footer/Footer';
  

  function Book_a_table() {
    const [selectedTable, setSelectedTable] = useState(null);
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const tables = [
      { id: 1, number: 1, description: "Window view", capacity: 4, img: tableImage, isAvailable: true },
      { id: 2, number: 2, description: "Outside seating", capacity: 2, img: tableImage, isAvailable: false },
      { id: 3, number: 3, description: "Private booth", capacity: 6, img: tableImage, isAvailable: true },
      { id: 4, number: 4, description: "Corner table", capacity: 4, img: tableImage, isAvailable: true },
      { id: 5, number: 5, description: "Family table", capacity: 8, img: tableImage, isAvailable: false },
      { id: 6, number: 6, description: "Romantic table", capacity: 2, img: tableImage, isAvailable: true },
      { id: 7, number: 7, description: "Large group", capacity: 10, img: tableImage, isAvailable: true },
    ];

    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <img src={ma9la} alt="" className={styles.ma9la} />
          <img src={rasthoum} alt="" className={styles.r1} />
          <img src={rasthoum1} alt="" className={styles.r2} />
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                {/* <tr>
                  <th>Table</th>
                  <th>Table Number</th>
                  <th>Description</th>
                  <th>Capacity</th>
                  <th>Status</th>
                  <th>Action</th>        
                </tr> */}
              </thead>
              <tbody>
                {tables.map((table) => (
                  <tr key={table.id} className={!table.isAvailable ? styles.tableUnavailable : ''}>
                    <td>
                      <div className={styles.tableImgWrapper}>
                        <img src={table.img} alt={`Table ${table.number}`} className={styles.tableImg} />
                        <div className={table.isAvailable ? styles.available : styles.notAvailable}></div>
                      </div>
                    </td>
                    <td><div className={styles.tableNumber}>{table.number}</div></td>
                    <td>{table.description}</td>
                    <td>{table.capacity} people</td>
                    <td>
                      <span className={table.isAvailable ? styles.availableText : styles.notAvailableText}>
                        {table.isAvailable ? 'Available' : 'Not Available'}
                      </span>
                    </td>
                    <td>
                      <button 
                        onClick={openModal}
                        className={styles.bookBtn} 
                        disabled={!table.isAvailable} 
                        
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>       
         <BookingModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
        <Footer />
      </>
    );
  }

  export default Book_a_table;
