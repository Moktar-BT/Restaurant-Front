import React from 'react'
import Navbar from '../navbar/Navbar'
import styles from './homePage.module.css'
import text from '../../assets/Group 1.png'
import hchicha1 from '../../assets/Group.png'
import hchicha2 from '../../assets/Group (1).png'
import hchicha3 from '../../assets/Group (2).png'
import taswira from '../../assets/Mask group.png'
import shan from '../../assets/dish-2 1.png'
import ligne1 from '../../assets/Ellipse 3.png'
import ligne2 from '../../assets/Ellipse 4.png'
import ligne3 from '../../assets/Ellipse 5.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/social (1).png'
import twitter from '../../assets/twitter.png'
import starr from '../../assets/Line 1.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'



function HomePage() {
  return (
    <>
    <Navbar />

    <div className={styles.container}>
    <img src={ligne1} alt="" className={styles.ligne} />
      <img src={ligne2} alt="" className={styles.ligne} />
      <img src={ligne3} alt="" className={styles.ligne} />
        <img src={text} alt="" className={styles.text}/>
      <span className={styles.partie1}>We provide the <br/> best food for you</span>
      <img src={shan} alt="" className={styles.shan} />
      <img src={taswira} alt="" className={styles.taswira}  />
      <img src={hchicha1} alt=""  className={styles.hchicha1} />
      <img src={hchicha2} alt=""  className={styles.hchicha2} />
      <img src={hchicha3} alt="" className={styles.hchicha3} />
      <span className={styles.desc}>Indulge in a culinary adventure where every bite tells <br />a story and every  moment is savored.</span>
      <Link to='/menu' className={styles.Menu}>Menu</Link>
      <Link to='/booking'><button className={styles.bat}>Book a table</button></Link>
      <button className={styles.linkbtn1}><img src={facebook} alt="" className={styles.facebook} /></button>
      <button className={styles.linkbtn2}><img src={instagram} alt="" className={styles.instagram}/></button>
      <button className={styles.linkbtn3}><img src={twitter} alt="" className={styles.twitter}/></button>
      <img src={starr} alt="" className={styles.starr}/>
     
    </div>
    <div className={styles.footer}>
    <Footer />
    </div>
    

    </>
  )
}

export default HomePage