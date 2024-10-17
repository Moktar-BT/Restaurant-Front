import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import './Booking1.css';
import Footer from '../Footer/Footer';
import BookingModal from '../book a table/BookingModal/BookingModal';

function Booking1() {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <span className='ktiba'>
          Reserve your table in just a few clicks <br />
          Customize your dining experience now!
        </span>
        <button className='booknow' onClick={openModal}>Book Now</button>     
      </div>

      <BookingModal isOpen={isModalOpen} closeModal={closeModal} />

      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default Booking1;
