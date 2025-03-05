import React from "react"
import styles from "./HeroSection.module.scss"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
      <p>
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater
        to your sense of style.
      </p>
      <div className={styles.brands}></div>
      <Image alt='' src='/images/hero.png' width={1440} height={663} />
    </section>
  )
}

export default HeroSection
