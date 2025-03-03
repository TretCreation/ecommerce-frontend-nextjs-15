import React from "react"
import styles from "./HeroSection.module.scss"

const HeroSection = () => {
  return (
    <div className={styles["hero-section"]}>
      <p className={styles["banner-text"]}>Sign up and get 20% off to your first order. </p>
      <div className={styles.brands}></div>
    </div>
  )
}

export default HeroSection
