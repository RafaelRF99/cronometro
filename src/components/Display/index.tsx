"use client"
import styles from "./Display.module.scss"
// HOOKS
import { useEffect, useState } from "react"
// COMPONENTS
import Number from "./Number"

interface DisplayProps {
  start: boolean
  setTime: (e: number) => void
  time: number
}

export default function Display({ start, setTime, time }: DisplayProps) {
  const minutes = Math.floor(time / (60 * 1000))
  const seconds = Math.floor((time % (60 * 1000)) / 1000)
  const milliseconds = Math.floor((time % 1000) / 10)

  console.log(milliseconds)

  useEffect(() => {
    start === true
      ? setTimeout(() => {
          setTime(time + 10)
        }, 10)
      : ""
  }, [time, start, minutes, seconds, milliseconds, setTime])

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
