import React from 'react'
import styles from "./index.module.scss"
const FeatureProducts = () => {
    return (
        <section className={styles.fea}>
            <div className="container">
                <h3>AWESOME PRODUCTS</h3>
                <h1>Featured Products</h1>
                <p className={styles.fea_tag}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>

                <div>
                    <div className={styles.fea_title}>
                        <div className={styles.fea_item}>
                            <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp" alt="" />
                        </div>
                        <div className={styles.fea_wrap}>
                            <h2>About This Product</h2>
                            <p>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>
                            <h4>Price:</h4>
                            <span><del>$269.00</del>  $269.00</span>
                            <div>
                                <button className={styles.fea_view}>VIEW DETAILS</button>
                                <button className={styles.fea_cards}>
                                    ADD TO CARDS
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className={styles.fea_title}>
                       
                        <div className={styles.fea_wrap}>
                            <h2>About This Product</h2>
                            <p>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>
                            <h4>Price:</h4>
                            <span><del>$269.00</del>  $269.00</span>
                            <div>
                                <button className={styles.fea_view}>VIEW DETAILS</button>
                                <button className={styles.fea_cards}>
                                    ADD TO CARDS
                                </button>
                            </div>

                        </div>


                        <div className={styles.fea_item}>
                            <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureProducts