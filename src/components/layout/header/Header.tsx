import React from "react"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>Tret.Shop with css</div>
      <div className={styles.menuItem}>default Tret.Shop</div>
    </div>
  )
}

export default Header
