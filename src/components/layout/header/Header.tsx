import React from "react"
import styles from "./Header.module.scss"
import Link from "next/link"
import DownArrow from "@/public/icons/down-arrow.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p></p>
      </div>
      <nav className={styles.nav}>
        <Link href={"/"}>
          Shop
          <DownArrow />
        </Link>
        <Link href={"/"}>On Sale</Link>
        <Link href={"/"}>New Arrivals</Link>
        <Link href={"/"}>Brands</Link>
      </nav>
    </header>
  )
}

export default Header
