import Image from "next/image"

import Star from "@/public/icons/star.svg"

import styles from './ProductCard.module.scss'

export const ProductCard = () => {
  return (
    <article className={styles.product}>
      <figure className={styles.product__img}>
        <Image src='products/test-product.png' width={295} height={298} alt='test product' />
        <figcaption>ProductName</figcaption>
      </figure>
      <h3 className={styles.product__name}>Test Product Name</h3>
      <div className={styles.product__rating}>
        <div className={styles.star}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className={styles.number}>5/5</p>
      </div>
      <div className={styles.product__price}>
        $100
      </div>
    </article>
  )
}
