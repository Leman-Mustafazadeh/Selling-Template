import React from 'react'
import styles from "./index.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
   <header>
    <div className="container">
        <div className={styles.sell_head}>
            <a href="" className={styles.sell_link}>Selling.</a>

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Special</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </div>
   </header>
  )
}

export default Header