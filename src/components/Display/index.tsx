"use client"
import styles from "./Display.module.scss"
// HOOKS
import { useEffect, useState } from "react"
// COMPONENTS
import Number from "./Number"

interface DisplayProps {
  start: boolean
}

export default function Display(props: DisplayProps) {
  const [time, setTime] = useState(0.1 * 60 * 1000)

  const minutes = Math.floor(time / (60 * 1000))
  const seconds = Math.floor((time % (60 * 1000)) / 1000)
  const milliseconds = Math.floor(time % 1000)

  useEffect(() => {
    if (minutes === 0 && seconds === 0 && milliseconds === 0) {
    } else {
      props.start === true
        ? setTimeout(() => {
            setTime(time - 10)
          }, 10)
        : ""
    }
  }, [time, props.start, minutes, seconds, milliseconds])

  return (
    <div className={styles.container}>
      <div>
        <Number>{minutes.toString().padStart(2, "0")}</Number>
        <span>:</span>
        <Number>{seconds.toString().padStart(2, "0")}</Number>
        <span>:</span>
        <Number>{milliseconds.toString().padStart(2, "0")}</Number>
      </div>
    </div>
  )
}
