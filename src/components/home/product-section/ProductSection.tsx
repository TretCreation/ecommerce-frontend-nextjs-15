import React from "react"
import styles from "./ProductSection.module.scss"
import Button from "@/components/ui/button/Button"

type Props = {
  title: string
  // products: IProduct[]
}

const ProductSection = ({ title }: Props) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.list}></div>
    <Button appearance='secondary' size='medium'>
      View All
    </Button>
  </section>
)

export default ProductSection
