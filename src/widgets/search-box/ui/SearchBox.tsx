import React from "react"

import FindIcon from "@/public/icons/find.svg"

import styles from "./SearchBox.module.scss"

export const SearchBox = () => {
  return (
    <div className={styles["searchbox-container"]}>
      <FindIcon className={styles.icon} />
      <input type='text' placeholder='Search for products...' className={styles.searchbox} />
    </div>
  )
}

