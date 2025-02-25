import React from "react"
import styles from "./SearchBox.module.scss"
import FindIcon from "@/public/icons/find.svg"

const SearchBox = () => {
  return (
    <div className={styles.searchbox}>
      <input type='text' placeholder='Search for products...' className={styles.input} />
      <FindIcon className={styles.icon} />
    </div>
  )
}

export default SearchBox
