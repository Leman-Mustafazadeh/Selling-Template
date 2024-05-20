import React from 'react'
import styles from "./index.module.scss"
const EachProducts = () => {
  return (
   <section className={styles.each_pro}>

    <div className="container">
   <div className={styles.each_title}>
   <h3>Get notified on each updates.</h3>
    <div className={styles.each_item}>
        <input type="text" placeholder='enter you email adress'/>
        <button>Subcribe</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
    </div>
   </div>
    </div>
   </section>
  )
}

export default EachProducts