import Image from "next/image"
import React from "react"

import CalvinKleinIcon from "@/public/icons/calvin-klein.svg"
import DiamondSmallIcon from "@/public/icons/diamond-small.svg"
import DiamondIcon from "@/public/icons/diamond.svg"
import GucciIcon from "@/public/icons/gucci.svg"
import PradaIcon from "@/public/icons/prada.svg"
import VersaceIcon from "@/public/icons/versace.svg"
import ZaraIcon from "@/public/icons/zara.svg"
import { Button } from "@/shared/ui/button"

import styles from "./HeroSection.module.scss"

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Image alt='hero-image' src='/images/hero.png' width={1440} height={663} unoptimized />
      <div className={styles.hero__content}>
        <div>
          <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
          <p>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and
            cater to your sense of style.
          </p>
          <Button appearance='primary' size='medium'>
            Shop Now
          </Button>
        </div>
        <div className={styles.hero__stats}>
          <div className={styles.stat}>
            <div className={styles.number}>200+</div>
            <div className={styles.label}>International Brands</div>
          </div>
          <hr />
          <div className={styles.stat}>
            <div className={styles.number}>2,000+</div>
            <div className={styles.label}>High-Quality Products</div>
          </div>
          <hr />
          <div className={styles.stat}>
            <div className={styles.number}>30,000+</div>
            <div className={styles.label}>Happy Customers</div>
          </div>
        </div>
      </div>
      <div className={styles.diamond}>
        <DiamondIcon className={styles.diamond__regular} />
        <DiamondSmallIcon className={styles.diamond__small} />
      </div>
      <div className={styles.brands}>
        <VersaceIcon />
        <ZaraIcon />
        <GucciIcon />
        <PradaIcon />
        <CalvinKleinIcon />
      </div>
    </section>
  )
}

