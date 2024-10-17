import './BookingModal.css';
import React, { useEffect, useState } from 'react';
import 'flowbite';
import hchicha from '../../../assets/Group.png'
import hchicha1 from '../../../assets/Group (2).png'

function BookingModal({ isOpen, closeModal }) {
  const [durationOpen, setDurationOpen] = useState(false); // State for dropdown visibility
  const [selectedDuration, setSelectedDuration] = useState(''); // State for selected duration
  const [timebegin,setTimebegin]=useState('')
  const [numPeople, setNumPeople] = useState(0); // State for number of people
  const[timeend , setTimeend]=useState('')
  const[dateselected,setDateselected]=useState('')
  const[specialInstructions,setSpecialInstructions]=useState('')
  const [reservationDateBegin, setReservationDateBegin] = useState('');
  const [reservationDateEnd, setReservationDateEnd] = useState('');

  const maxPeople = 20; // Max number of people for the table

  const reservationData = {
    reservationDateBegin,
    reservationDateEnd,
    numPeople,
    specialInstructions,
  };
  
  const combineDateAndTime = (dateselected, timebegin) => {
    if (!dateselected || !timebegin ) return null;
  
    // Assurez-vous que `dateselected` est bien une instance de `Date`
    const date = new Date(dateselected);
  
    // Séparer l'heure et le suffixe AM/PM
    const [time, meridian] = timebegin.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
  
    // Convertir en format 24h si nécessaire
    if (meridian === 'PM' && hours !== 12) {
      hours += 12;
    } else if (meridian === 'AM' && hours === 12) {
      hours = 0;
    }
  
    // Mettre à jour la date avec les heures et minutes
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
  
    return date;
  };
  
  useEffect(() => {
    if (timebegin && dateselected) {
      const dateBegin = combineDateAndTime(dateselected, timebegin);
      setReservationDateBegin(dateBegin);
    }
  }, [timebegin, dateselected]);
  
  useEffect(() => {
    // Fonction pour combiner la date et l'heure de fin
    const combineDateAndTimeEnd = (dateselected, timeend) => {
      if (!dateselected || !timeend) return null;
    
      // Assurez-vous que `dateselected` est bien une instance de `Date`
      const date = new Date(dateselected);
    
      // Séparer l'heure et le suffixe AM/PM
      const [time, meridian] = timeend.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
    
      // Convertir en format 24h si nécessaire
      if (meridian === 'PM' && hours !== 12) {
        hours += 12;
      } else if (meridian === 'AM' && hours === 12) {
        hours = 0;
      }
    
      // Mettre à jour la date avec les heures et minutes
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(0);
    
      // Mettre à jour l'état reservationDateEnd avec la nouvelle date
      setReservationDateEnd(date);
  
      return date;
    };
  
    // Appeler la fonction si les dépendances sont disponibles
    if (dateselected && timeend) {
      combineDateAndTimeEnd(dateselected, timeend);
    }
    
  }, [dateselected, timeend]); // Déclenchement du useEffect lorsque `dateselected` ou `timeend` change
  
  // Log pour vérifier les données
  console.log(reservationData);

  

 
  useEffect(() => {
    const initDatepicker = () => {
      const datepickerEl = document.getElementById('datepicker-inline');
      if (datepickerEl && window.Datepicker) {
        const datepicker = new window.Datepicker(datepickerEl, {
          inline: true,
          defaultDate: new Date(),
        });
  
        // Add event listener to capture selected date
        datepickerEl.addEventListener('changeDate', (event) => {
          setDateselected(event.detail.date);
        });
      }
    };
  
    if (isOpen) {
      initDatepicker();
    }
  }, [isOpen]);
  

  const generateTimeSlots = () => {
    const times = [];
    let hour = 1; // Start from 12:00 PM
    let isPM = true; // Only PM times
    times.push('12:00 AM');
    times.push('12:30 AM');
    while (hour !== 12 || isPM) {
      const suffix = isPM ? 'PM' : 'AM';
      times.push(`${hour}:00 ${suffix}`);
      times.push(`${hour}:30 ${suffix}`);

      hour++;
      if (hour === 13) {
        hour = 1; // Reset hour to 1 after 12
      }

      // Stop at 11:30 PM
      if (hour === 12 && isPM === true) {
        break;
      }
    }
    return times;
  };

  const calculateEndTime = (timebegin, duration) => {
    let [time, meridian] = timebegin.split(' '); // Split time and AM/PM
    let [hour, minutes] = time.split(':').map(Number); // Split into hours and minutes
  
    // Convert duration to minutes
    let durationMinutes = 0;
    if (duration === '30 minutes') durationMinutes = 30;
    if (duration === '1 hour') durationMinutes = 60;
    if (duration === '1 h 30 mintues') durationMinutes = 90 ;
    if (duration === '2 hours') durationMinutes = 120;
  
    // Calculate the total minutes by adding duration
    let totalMinutes = hour * 60 + minutes + durationMinutes;
  
    // Convert total minutes back to hours and minutes
    let endHour = Math.floor(totalMinutes / 60);
    let endMinutes = totalMinutes % 60;
  
    // Adjust for AM/PM transition if necessary
    if (endHour >= 12) {
      meridian = meridian === 'AM' ? 'PM' : 'AM';
      if (endHour > 12) endHour -= 12;
    }
  
    // Format the end time with leading zero for minutes
    return `${endHour}:${endMinutes < 10 ? '0' : ''}${endMinutes} ${meridian}`;
  };
  
  // Assuming you already have the code to handle the dropdown and time selection...
  
  useEffect(() => {
    if (timebegin && selectedDuration) {
      const calculatedTimeEnd = calculateEndTime(timebegin, selectedDuration);
      setTimeend(calculatedTimeEnd);
    }
  }, [timebegin, selectedDuration]);

  const timeSlots = generateTimeSlots();

  if (!isOpen) return null;

  // Handle dropdown toggle
  const toggleDurationDropdown = () => {
    setDurationOpen(!durationOpen);
  };

  // Handle duration selection
  const selectDuration = (duration) => {
    setSelectedDuration(duration);
    setDurationOpen(false); // Close the dropdown after selection
  };

  // Handle form submission (later to be sent to the backend)
  const handleSubmit = () => {
    const bookingDetails = {
      duration: selectedDuration,
      numPeople: numPeople,
    };
    console.log('Booking details:', bookingDetails);

    // You can use Axios or Fetch API here to send `bookingDetails` to the backend
  };

  // Handle increment and decrement of the number of people
  const incrementPeople = () => {
    if (numPeople < maxPeople) {
      setNumPeople(numPeople + 1);
    }
  };

  const decrementPeople = () => {
    if (numPeople > 1) {
      setNumPeople(numPeople - 1);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={hchicha}  className='hchicha'alt="" />
        <img src={hchicha1}  className='hchicha1'alt="" />
        {/* Flex container to align datepicker and timetable */}
        <div className="modal-body">
          {/* Datepicker on the left */}
          <div id="datepicker-inline" className="datepicker"></div>

          {/* Timepicker on the right */}
          <ul id="timetable" className="timepicker">
            {timeSlots.map((time, index) => (
              <li key={index}>
                <input
                  type="radio"
                  id={`time-${index}`}
                  value={time}
                  className="hidden peer"
                  name="timetable"
                  onChange={() => setTimebegin(time)}
                />
                <label
                  htmlFor={`time-${index}`}
                  className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:peer-checked:bg-blue-500"
                >
                  {time}
                </label>
              </li>
            ))}
          </ul>
        </div>
         {/* <span className='msgerror'>msg d'erreur </span>    */}
        {/* Duration button with dropdown */}
        <div></div>
        <button
          id="dropdown-duration-button"
          onClick={toggleDurationDropdown}
          className="border-s-10 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 duration"
          type="button"
        >
          Duration: {selectedDuration || 'Select Duration'}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {durationOpen && (
          <div
            id="dropdown-duration"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-duration-button"
            >
              <li>
                <button
                  onClick={() => selectDuration('30 minutes')}
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  30 minutes
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectDuration('1 hour')}
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  1 hour
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectDuration('1 h 30 mintues')}
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  1 h 30 minutes
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectDuration('2 hours')}
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  2 hours
                </button>
              </li>
            </ul>
          </div>
        )}

        <div className='number-of-people-input-container'>
        <form className="max-w-xs mx-auto mt-4">
          <label
            htmlFor="quantity-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of People:
          </label>
          <div className="relative flex items-center max-w-[8rem]">
            <button
              type="button"
              id="decrement-button"
              onClick={decrementPeople}
              className="bg-[#EA6D27] dark: dark:hover:bg-bg-[#EA6D27] dark:border-gray-600 hover:bg-[#EA6D09] border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
  type="text"
  id="quantity-input"
  value={numPeople}
  readOnly
  className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-[#EA6D27] focus:border-[#EA6D27] block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#EA6D27] dark:focus:border-[#EA6D27]"
/>

            <button
              type="button"
              id="increment-button"
              onClick={incrementPeople}
              className="bg-[#EA6D27] dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-[#EA6D27] border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </form>
        </div>
       
        <textarea 
        placeholder='Write your special instructions...'
        className='textarea'
  style={{ border: '1px solid #ccc', borderRadius: '10px' }}
  onFocus={(e) => {
    e.target.style.borderColor = '#EA6D27';
    e.target.style.boxShadow = '0 0 0 2px rgba(234, 109, 39, 0.5)';
    e.target.style.outline = 'none';
   
    
  }}
  onBlur={(e) => {
    e.target.style.borderColor = '';
    e.target.style.boxShadow = '';
    e.target.style.outline = '';
  }}
  onChange={(e) => setSpecialInstructions(e.target.value)} // Update state on input change
  ></textarea>

       
        
        {/* Submit Button */}
        <button
          className="modal-submit-btn"
          onClick={handleSubmit}
        >
          Submit Booking
        </button>

        <button className="modal-close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default BookingModal;
