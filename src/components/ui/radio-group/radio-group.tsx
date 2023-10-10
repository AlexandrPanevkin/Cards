import { FC } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

export type RadioGroupItemType = {
  label: string
  value: string
  id: string
}

type RadioGroupPropsType = {
  items: RadioGroupItemType[]
  className?: string
  value?: string
  onChange: (value: string) => void
}

export const RadioGroup = ({ className, items, value, onChange }: RadioGroupPropsType) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <form>
      <RadioGroupRadix.Root
        className={classNames.root}
        defaultValue="default"
        value={value}
        onValueChange={onChange}
      >
        {items.map(el => (
          <RadioGroupItem id={el.id} value={el.value} label={el.label} key={el.id} />
        ))}
      </RadioGroupRadix.Root>
    </form>
  )
}

const RadioGroupItem: FC<RadioGroupItemType> = ({ id, value, label }) => {
  return (
    <div className={s.container}>
      <RadioGroupRadix.Item id={id} className={s.item} value={value}>
        <RadioGroupRadix.Indicator className={s.indicator} />
      </RadioGroupRadix.Item>
      <label className={s.label}>{label}</label>
    </div>
  )
}
