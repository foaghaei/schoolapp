import { useState } from 'react'
import  styles from './Navbar.module.css';
import {Link} from "react-router-dom"


function Navbar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }


  return (
    <div className="App">
      <header className="App-header">


        <nav className={`${styles.navbar}`}>


          {/* logo */}
          <Link to='/' className={`${styles.logo}`}>Kherad - School </Link>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to='/' className={`${styles.navLink}`}>About us</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/gallery' className={`${styles.navLink}`}>Gallery</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/admission' className={`${styles.navLink}`}>Admission</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/join' className={`${styles.navLink}`}>Join us</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/contact' className={`${styles.navLink}`}>Contact us</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/farsi' className={`${styles.navLink}`}>Farsi</Link>
            </li>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>


      </header>
    </div>
  );
}


export default Navbar;