import React from "react"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>Tret.Shop</div>
      <div className={styles.menuItem}></div>
    </div>
  )
}

export default Header
