import Link from "next/link"
import React from "react"

import Account from "@/public/icons/account.svg"
import Cart from "@/public/icons/cart.svg"
import DownArrow from "@/public/icons/down-arrow.svg"
import { SearchBox } from "@/widgets/search-box"

import styles from "./Header.module.scss"

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

