import React from 'react'
import logo from '../../assets/logo 1.png'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import panier from '../../assets/panier-repas.png'
import profile from '../../assets/ajouter-un-utilisateur.png'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Link to='/'><img src={logo} alt="logo" className={styles.logo} /></Link>
      <div className={styles.centerContainer}>
        <Link to='/menu'><span className={styles.links}>Menu</span></Link>
        <span className={styles.links}>Events</span>
        <span className={styles.links}>Gallery</span>
        <span className={styles.links}>About</span>
        <span className={styles.links}>Contact</span>
      </div>
    </div>
    <div className={styles.rightContainer}>
     <Link to ='/Panier'><button className={styles.panier}><img src={panier} alt=""  className={styles.panierImg} /></button></Link> 
      <Link to="/booking"><button className={styles.btn}>Book a table</button></Link>
    </div>
    <Link to='/Signin'><button className={styles.profile}><img src={profile} alt=""  className={styles.profileImg} /></button></Link>

    
    </div>
    
  )
}

export default Navbar;