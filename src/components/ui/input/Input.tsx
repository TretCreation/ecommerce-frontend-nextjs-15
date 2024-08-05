import cn from "classnames"

import { InputProps } from "@/types/input.interface"
import styles from "./Input.module.css"

const Input = ({ appearance, type, ...props }: InputProps): JSX.Element => {
  return (
    <input
      className={cn({
        [styles.primary]: appearance === "primary",
        [styles.solid]: appearance === "solid"
      })}
      {...props}
      type={type}
    />
  )
}

export default Input
