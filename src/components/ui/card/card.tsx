import { ComponentPropsWithoutRef } from 'react'

import s from './card.module.scss'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = ({ className, ...rest }: CardProps) => {
  return <div className={`${s.main} ${className}`} {...rest}></div>
}
