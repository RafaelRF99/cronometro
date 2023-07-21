import styles from "./Counter.module.scss"
import Display from "@/components/Display"

export default function Counter() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cronômetro</h1>
      <div>
        <Display />
      </div>
    </div>
  )
}
