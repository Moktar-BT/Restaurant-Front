import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Signup.module.css';
import logo from '../../assets/logo 1.png';
import openeye from '../../assets/openeye.png';
import closeeye from '../../assets/closeeye.png';
import checkImage from '../../assets/check.png'; 
import errorImage from '../../assets/x-button.png'; // Import the error image

function Signup() {
  const [firstName, setFirstName] = useState(''); // Changed 'nom' to 'firstName'
  const [lastName, setLastName] = useState(''); // Changed 'prenom' to 'lastName'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const navigate = useNavigate();

  const emailPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/auth/signup', { // Updated endpoint
        firstName, // Updated field name
        lastName, // Updated field name
        email,
        password,
      });
      if (response.status === 200) { // Check the HTTP status code
        setSuccessMessage('Inscription réussie !');
        setModalOpen(true); // Open the success modal
        setFirstName(''); // Clear firstName
        setLastName(''); // Clear lastName
        setEmail('');
        setPassword('');
        setTimeout(() => {
          navigate('/Signin'); // Redirect after showing the modal
        }, 2000); // Delay to allow modal to be visible
      } else {
        setError('Inscription invalide. Veuillez vérifier vos informations.');
        setErrorModalOpen(true); // Open the error modal
      }
    } catch (error) {
      setError('Erreur lors de l\'inscription. Veuillez réessayer.');
      setErrorModalOpen(true); // Open the error modal
      console.error('Signup failed', error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const Modal = ({ isOpen, onClose, message, image }) => {
    if (!isOpen) return null;

    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <img src={image} alt="Modal Icon" className={styles.modalImage} />
          <p>{message}</p>
          <button onClick={onClose} className={styles.closeButton}>OK</button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftcontainer}>
        <img src={logo} className={styles.logo} alt="Logo" />
      </div>
      <div className={styles.rightcontainer}>
        <h1 className={styles.titre}>SignUp</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="firstName" className={styles.label}>First Name :</label>
            <input
              type="text"
              id="firstName" // Updated id
              name="firstName" // Updated name
              value={firstName} // Updated value
              onChange={(e) => setFirstName(e.target.value)} // Updated state setter
              className={styles.input_field}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="lastName" className={styles.label}>Last Name:</label>
            <input
              type="text"
              id="lastName" // Updated id
              name="lastName" // Updated name
              value={lastName} // Updated value
              onChange={(e) => setLastName(e.target.value)} // Updated state setter
              className={styles.input_field}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input_field}
              pattern={emailPattern}
              title="Entrez un email valide au format exemple@exemple.exemple"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="password" className={styles.label}>Password :</label>
            <div className={styles.password_container}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.password_input}
                required
              />
              <button type="button" onClick={toggleShowPassword} className={styles.show_password_button}>
                {showPassword ? <img src={closeeye} alt="Cacher" className={styles.eye_icon} /> : <img src={openeye} alt="Voir" className={styles.eye_icon} />}
              </button>
            </div>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          {successMessage && <p className={styles.success}>{successMessage}</p>}
          <div className={styles.form_group}>
            <input type="submit" value="SignUp" className={styles.submit_button} />
          </div>
          <div className={styles.signup_link}>
            <p>Vous avez déjà un compte ? <Link to="/Signin" className={styles.ins}>Connectez-vous ici</Link></p>
          </div>
        </form>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        message="Votre compte a été créé avec succès !"
        image={checkImage}
      />
      <Modal
        isOpen={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        message={error}
        image={errorImage}
      />
    </div>
  );
}

export default Signup;
