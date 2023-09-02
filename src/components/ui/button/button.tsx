import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
  disabled?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    variant = 'primary',
    fullWidth,
    disabled,
    className,
    as: Component = 'button',
    ...rest
  } = props

  const classNames = {
    component: clsx(
      s[variant],
      className,
      disabled ? s.disabled : '',
      s.main,
      fullWidth ? s.fullWidth : ''
    ),
  }

  return (
    <>
      <Component className={classNames.component} {...rest} />
    </>
  )
}
