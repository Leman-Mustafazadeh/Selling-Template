import React from 'react'
import styles from "./index.module.scss"
const SellShop = () => {
  return (
  <section className={styles.sell_sec}>
    <div className="container">
     <div className={styles.sell_title}>
     <h1>Shop With Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
      <div>
        <button className={styles.show}>SHOW NOW</button>
        <button className={styles.club}>CLUB MEMBERSHIP</button>
      </div>
     </div>
    </div>
  </section>
  )
}

export default SellShop