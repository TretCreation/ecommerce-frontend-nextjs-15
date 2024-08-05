import Image from "next/image"

import Button from "@/components/ui/button/Button"
import Input from "@/components/ui/input/Input"
import styles from "./Header.module.css"

export function Header() {
  return (
    <div>
      <div className={styles["header-main"]}>
        {/* Image */}
        <Image src={"/logo.svg"} alt='logo' width={100} height={50} />
        {/* Searchbox */}
        <div className={styles.searchbox}>
          <Input appearance='primary' type='search' placeholder='search' />
          <Button appearance='primary'>Search</Button>
        </div>
        {/* Icons */}
        <div className={styles.icons}>Icons</div>
      </div>
      <div className={styles["header-second"]}></div>
    </div>
  )
}
