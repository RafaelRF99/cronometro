"use client"
// HOOKS
import { useState } from "react"
// COMPONENTS
import styles from "./Counter.module.scss"
import Display from "@/components/Display"

export default function Counter() {
  const [start, setStart] = useState(false)
  const [time, setTime] = useState(0 * 60 * 1000)

  function handleChange() {
    setStart(start === false ? true : false)
  }

  function reset() {
    setTime(0 * 60 * 1000)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cronômetro</h1>
      <div>
        <Display start={start} setTime={setTime} time={time} />
      </div>
      <div className={styles.btn}>
        <button onClick={() => handleChange()}>Iniciar</button>
        <button onClick={() => reset()}>Reiniciar</button>
      </div>
    </div>
  )
}
