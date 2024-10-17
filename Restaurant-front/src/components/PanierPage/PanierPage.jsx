import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import styles from './PanierPage.module.css';
import s7an from '../../assets/dish-5.png'; // Image du plat
import x from '../../assets/effacer.png';
import ma9la from '../../assets/Group (11).png';
import { Link } from 'react-router-dom';
import hchicha from '../../assets/Group (9).png'
import Footer from '../Footer/Footer';
import hchicha2 from '../../assets/Group (1).png'

function PanierPage() {
  // Définir les quantités initiales pour chaque produit
  const [quantities, setQuantities] = useState({
    appleWatch: 1,
    tajine: 1, // Ajout du Tajine ici
  });

  // Fonction pour augmenter la quantité
  const incrementQuantity = (product) => {
    setQuantities({
      ...quantities,
      [product]: quantities[product] + 1,
    });
  };

  // Fonction pour diminuer la quantité
  const decrementQuantity = (product) => {
    if (quantities[product] > 1) {
      setQuantities({
        ...quantities,
        [product]: quantities[product] - 1,
      });
    }
  };

  return (
    <>
      
      <Navbar />
      <img src={ma9la} alt="" className={styles.ma9la} />
      <img src={hchicha} alt="" className={styles.hchicha}/>
      
      <div className={styles.total}>
        <span className={styles.titre}>Order Summary</span>
        <p className={styles.p}>Shipping, taxes, and discounts will be calculated at checkout.</p>
        <span className={styles.subtotal}>
          Subtotal: ${(quantities.appleWatch * 599 + quantities.tajine * 25).toFixed(2)}
        </span>
        <button className={styles.btnptc}>Proceed to Checkout</button>
        <Link to='/Menu'><button className={styles.btncs}>Continue Shopping</button></Link>
      </div>
      <div className={styles.container}>
        <div className={styles.table}>
          <div className="relative overflow-x-auto shadow-md z-30 ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-l text-gray-500 bg-white dark:bg-gray-700 dark:text-white">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">Dish</th>
                  <th scope="col" className="px-6 py-3">Quantity</th>
                  <th scope="col" className="px-6 py-3">Unit Price</th>
                  <th scope="col" className="px-6 py-3">Total</th>
                  <th scope="col" className="px-6 py-3">Remove</th>
                </tr>
              </thead>
              <tbody>
                {/* Première ligne : Apple Watch */}
                <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img src={s7an} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                  </td>
                  <td className={`px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl ${styles.productName}`}>
                 Apple Watch
                    </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => decrementQuantity('appleWatch')}
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-white bg-[#EA6D27] border border-gray-300 rounded-full"
                        type="button"
                      >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input
                        type="number"
                        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg px-2.5 py-1"
                        value={quantities.appleWatch}
                        readOnly
                      />
                      <button
                        onClick={() => incrementQuantity('appleWatch')}
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-white bg-[#EA6D27] border border-gray-300 rounded-full"
                        type="button"
                      >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl">$599</td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl">
                    ${(quantities.appleWatch * 599).toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <button className={styles.btnX}>
                      <img src={x} alt="" className={styles.ximg} />
                    </button>
                  </td>
                </tr>
                

                {/* Deuxième ligne : Moroccan Tajine */}
                <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img src={s7an} className="w-16 md:w-32 max-w-full max-h-full" alt="Moroccan Tajine" />
                  </td>
                  <td className={`px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl ${styles.productName}`}>
                    Moroccan Tajine
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => decrementQuantity('tajine')}
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-white bg-[#EA6D27] border border-gray-300 rounded-full"
                        type="button"
                      >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input
                        type="number"
                        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg px-2.5 py-1"
                        value={quantities.tajine}
                        readOnly
                      />
                      <button
                        onClick={() => incrementQuantity('tajine')}
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-white bg-[#EA6D27] border border-gray-300 rounded-full"
                        type="button"
                      >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl">$25</td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl">
                    ${(quantities.tajine * 25).toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <button className={styles.btnX}>
                      <img src={x} alt="" className={styles.ximg} />
                    </button>
                  </td>
                </tr>
                
                
              </tbody>
            </table>
          </div>
        </div>    
      </div>
      <Footer />
      
    </>
  );
}

export default PanierPage;
