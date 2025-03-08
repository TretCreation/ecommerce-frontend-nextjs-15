import React from "react"
import styles from "./HeroSection.module.scss"
import Image from "next/image"
import Button from "@/components/ui/button/Button"
import VersaceIcon from "@/public/icons/versace.svg"
import ZaraIcon from "@/public/icons/zara.svg"
import GucciIcon from "@/public/icons/gucci.svg"
import PradaIcon from "@/public/icons/prada.svg"
import CalvinKleinIcon from "@/public/icons/calvin-klein.svg"

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
      <p>
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater
        to your sense of style.
      </p>
      <Button appearance='primary' size='medium'>
        Shop Now
      </Button>
      <div className={styles["hero__stats"]}>
        <div className={styles.stat}>
          <div className={styles.number}>200+</div>
          <div className={styles.label}>International Brands</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>2,000+</div>
          <div className={styles.label}>High-Quality Products</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>30,000+</div>
          <div className={styles.label}>Happy Customers</div>
        </div>
      </div>
      <div className={styles.brands}>
        <VersaceIcon />
        <ZaraIcon />
        <GucciIcon />
        <PradaIcon />
        <CalvinKleinIcon />
      </div>
      <Image alt='' src='/images/hero.png' width={1440} height={663} />
    </section>
  )
}

export default HeroSection
