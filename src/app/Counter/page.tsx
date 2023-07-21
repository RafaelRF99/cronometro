"use client"
// HOOKS
import { useState } from "react"
// COMPONENTS
import styles from "./Counter.module.scss"
import Display from "@/components/Display"

export default function Counter() {
  const [start, setStart] = useState(false)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cronômetro</h1>
      <div>
        <Display start={start} />
      </div>
      <button onClick={() => setStart(true)}>Iniciar</button>
    </div>
  )
}
