import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { boolean } from 'zod'

import { Checkbox } from './checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: boolean },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    checked: true,
    label: 'Check-box',
  },
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />
      </>
    )
  },
}

export const NoWords: Story = {
  args: {
    checked: false,
  },

  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />
      </>
    )
  },
}

export const DisabledOn: Story = {
  args: {
    checked: true,
    label: 'Check-box',
    disabled: true,
  },
}
export const DisabledOff: Story = {
  args: {
    checked: false,
    label: 'Check-box',
    disabled: true,
  },
}
