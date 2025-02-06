import React from "react"
import styles from "./TopBanner.module.scss"
import Link from "next/link"

const TopBanner = () => {
  return (
    <div className={styles["top-banner"]}>
      <p className={styles["banner-text"]}>
        Sign up and get 20% off to your first order.{" "}
        <Link href={"/"} className={styles.link}>
          Sign Up Now
        </Link>
      </p>
    </div>
  )
}

export default TopBanner
