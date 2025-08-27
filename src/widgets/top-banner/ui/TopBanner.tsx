import Link from "next/link"
import React from "react"

import Cross from "@/public/icons/cross.svg"

import styles from "./TopBanner.module.scss"

export const TopBanner = () => {
  return (
    <div className={styles["top-banner"]}>
      <p>
        Sign up and get 20% off to your first order.{" "}
        <Link href={"/"} className={styles["banner-link"]}>
          Sign Up Now
        </Link>
      </p>
      <Cross className={styles.icon} />
    </div>
  )
}
