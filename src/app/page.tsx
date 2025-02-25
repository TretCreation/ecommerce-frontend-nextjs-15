import Header from "@/components/layout/header/Header"
import styles from "./page.module.css"
import TopBanner from "@/components/layout/top-banner/TopBanner"

export default function Home() {
  return (
    <div className={styles.container}>
      <TopBanner />
      <Header />
    </div>
  )
}
