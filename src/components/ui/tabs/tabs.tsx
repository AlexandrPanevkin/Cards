import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as TabsRadix from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './tabs.module.scss'

export type TabType = {
  value: string
  title: string
  disabled?: boolean
}

export type TabSwitcherProps = {
  tabs: TabType[]
  label?: string
  value?: string
  defaultValue?: string
  children?: ReactNode
  className?: string
  onValueChange: (value: string) => void
} & ComponentPropsWithoutRef<typeof TabsRadix.Root>

export const TabSwitcher = ({
  label,
  children,
  className,
  tabs,
  defaultValue,
  value,
  onValueChange,
}: TabSwitcherProps) => {
  const classNames = {
    root: clsx(s.root, className),
    trigger: clsx(s.trigger),
  }

  return (
    <div className={classNames.root}>
      <Typography className={s.tabs} as={'span'} variant={'body2'}>
        {label}
      </Typography>
      <TabsRadix.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
        <TabsRadix.List className={s.list}>
          {tabs.map(tab => (
            <Trigger
              disabled={tab.disabled}
              className={classNames.trigger}
              key={tab.value}
              value={tab.value}
            >
              <Typography variant={'body1'}>{tab.title}</Typography>
            </Trigger>
          ))}
        </TabsRadix.List>
        {children}
      </TabsRadix.Root>
    </div>
  )
}

type TriggerPropsType = {
  className?: string
  children: ReactNode
  disabled?: boolean
  value: string
}
const Trigger: FC<TriggerPropsType> = props => {
  const { className, children, value, disabled } = props

  return (
    <TabsRadix.Trigger asChild className={className} value={value} disabled={disabled}>
      {children}
    </TabsRadix.Trigger>
  )
}
