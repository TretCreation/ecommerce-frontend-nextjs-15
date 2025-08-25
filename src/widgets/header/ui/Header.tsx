import React from "react"
import styles from "./Header.module.scss"
import Link from "next/link"
import DownArrow from "@/public/icons/down-arrow.svg"
import Cart from "@/public/icons/cart.svg"
import Account from "@/public/icons/account.svg"
import { SearchBox } from "@/widgets/search-box"

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>shop.tr</h1>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.link}>
          Shop
          <DownArrow />
        </Link>
        <Link href={"/"}>On Sale</Link>
        <Link href={"/"}>New Arrivals</Link>
        <Link href={"/"}>Brands</Link>
      </nav>
      <SearchBox />
      <div className={styles.icons}>
        <Cart />
        <Account />
      </div>
    </header>
  )
}

