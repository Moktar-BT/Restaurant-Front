import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/logo 1.png'
import ma9la from '../../assets/Group (12).png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/social (1).png'
import twitter from '../../assets/twitter.png'
import starr from '../../assets/Line 2.png'

function Footer() {
  return (
   <>
   <div className={styles.container}>
    <img src={ma9la} alt=""  className={styles.ma9la} />
    <img src={logo} alt="" className={styles.logo} />
    <p className={styles.desc}>We offer you a unique culinary experience <br />with homemade dishes prepared from fresh,<br /> local ingredients. Come and enjoy a delightful<br /> moment in a warm and welcoming atmosphere.<br /> <a href="" style={{ textDecoration: 'underline' }}>Learn More.</a></p>
    <span className={styles.oh}>OPENING HOURS</span>
    <span className={styles.wa9t}> Monday - Friday <br /> 00:00PM to 11:30PM </span>
    <span className={styles.wa9t1}> Saturday <br /> 00:00PM to 11:30PM </span>
    <span className={styles.wa9t2}> Sunday <br /> CLOSED </span>
    <span className={styles.navigation}> NAVIGATION</span>
    <ul className={styles.nlink}>
        <li className={styles.nlinks}>Menu</li>
        <li className={styles.nlinks}>About us</li>
        <li className={styles.nlinks}>Contact us</li>
        <li className={styles.nlinks}>Main dishes</li>
    </ul>
    <span className={styles.dishes}> DISHES</span>
    <ul className={styles.nlink1}>
        <li className={styles.nlinks1}>Fish & Viggies</li>
        <li className={styles.nlinks1}>Tofu Chili</li>
        <li className={styles.nlinks1}>Egg & cocumber</li>
        <li className={styles.nlinks1}>lumpia w/suace</li>
    </ul>
    <span className={styles.follow}> FOLLOW US </span>
     <img src={facebook} alt=""  className={styles.facebook}/>
    <img src={instagram} alt=""  className={styles.instagram} />
    <img src={twitter} alt=""   className={styles.twitter}/>
    <img src={starr} alt="" className={styles.starr} />
    <span className={styles.copyright}>© 2024 Restaurant. All Right Reserved. Designed by Moktar Bouatay  </span>
    <span className={styles.copyright1}>Terms of Service </span>
    <span className={styles.copyright2}>Privacy Policy</span>
   </div>
   </>
  )
}

export default Footer