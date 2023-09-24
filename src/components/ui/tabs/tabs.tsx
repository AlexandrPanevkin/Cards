import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as TabsRadix from '@radix-ui/react-tabs'

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
} & ComponentPropsWithoutRef<typeof TabsRadix.Root>

export const TabSwitcher = ({ label, children, tabs, defaultValue, value }: TabSwitcherProps) => {
  return (
    <div className={s.container}>
      <Typography variant={'body2'}>{label}</Typography>
      <TabsRadix.Root defaultValue={defaultValue}>
        <TabsRadix.List>
          {tabs.map(tab => (
            <TabsRadix.Trigger key={tab.value} value={tab.value}>
              <Typography variant={'body1'}>{tab.title}</Typography>
            </TabsRadix.Trigger>
          ))}
        </TabsRadix.List>
        {children}
      </TabsRadix.Root>
    </div>
  )
}
