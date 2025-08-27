import React from "react"

import { Button } from "@/shared/ui/button"

import styles from "./ProductSection.module.scss"

type Props = {
  title: string
  // products: IProduct[]
}

export const ProductSection = ({ title }: Props) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.list}></div>
    <Button appearance='secondary' size='medium'>
      View All
    </Button>
  </section>
)

