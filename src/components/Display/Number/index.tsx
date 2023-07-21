import styles from "./Number.module.scss"

interface NumberProps {
  children: string
}

export default function Number({ children }: NumberProps) {
  return <span className={styles.container}>{children}</span>
}
