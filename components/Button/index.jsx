import styles from './Button.module.scss'

const Button = ({ variant = 'primary', isDisabled, children, ...props }) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
