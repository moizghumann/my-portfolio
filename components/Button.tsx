import { ReactNode } from "react"
import styles from './styles/Button.module.css'

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className={styles.buttonSax}>
      {children}
    </button>
  )
}

export default Button