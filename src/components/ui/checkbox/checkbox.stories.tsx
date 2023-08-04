import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './index.ts'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: 'boolean' },
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
        <Checkbox {...args} checked={checked} onValueChange={() => setChecked(!checked)} />
      </>
    )
  },
}

export const NoWords: Story = {
  args: {
    checked: true,
  },

  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <Checkbox {...args} checked={checked} onValueChange={() => setChecked(!checked)} />
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
