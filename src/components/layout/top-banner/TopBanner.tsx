import React from "react"
import styles from "./TopBanner.module.scss"
import Link from "next/link"
import Cross from "@/public/icons/cross.svg"

const TopBanner = () => {
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

export default TopBanner
