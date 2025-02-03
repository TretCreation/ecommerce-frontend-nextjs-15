import React from "react"
import styles from "./TopBanner.module.scss"
import Link from "next/link"

const Header = () => {
  return (
    <p className={styles.text}>
      Sign up and get 20% off to your first order.{" "}
      <Link href={"/"} className={styles.link}>
        Sign Up Now
      </Link>
    </p>
  )
}

export default Header
