import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger'
}

export default function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded text-white ${
        variant === 'danger' ? 'bg-red-500' : 'bg-blue-500'
      }`}
    >
      {children}
    </button>
  )
}
