import cn from "classnames"
import React from "react"
import styles from "./Button.module.scss"
import { IButtonProps } from "./Button.props"

export const Button = ({ appearance, size, children, className, ...props }: IButtonProps): React.JSX.Element => (
  <button
    className={cn(className, styles.button, {
      [styles.primary]: appearance === "primary",
      [styles.secondary]: appearance === "secondary",
      [styles.medium]: size === "medium",
      [styles.large]: size === "large"
    })}
    {...props}
  >
    {children}
  </button>
)
