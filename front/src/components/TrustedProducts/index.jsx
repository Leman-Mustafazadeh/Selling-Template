import React from 'react'
import styles from "./index.module.scss"
const TrustedProducts = () => {
    return (
        <section>
            <div className="container">
                <div className={`${styles.trust} row`}>
                    <div className={`${styles.trust_left} col-lg-6 col-md-6`}>
                        <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
                        <div className={styles.merc}>
                            <h1>
                                Trusted Merchant</h1>
                            <p>FOR 50 YEARS</p>
                        </div>
                    </div>

                    <div className={`${styles.trust_title} col-lg-12 col-md-6`}>
                        <h3>MERCHANT COMPANY</h3>
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
                    <button>Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedProducts