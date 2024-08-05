import { ButtonProps } from "@/types/button.interface"
import cn from "classnames"

import styles from "./Button.module.css"

const Button = ({ children, appearance, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn({
        [styles.primary]: appearance === "primary",
        [styles.solid]: appearance === "solid"
      })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
