import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupItemType } from './'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  decorators: [
    Story => (
      <div
        style={{
          margin: '3em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof RadioGroup>

const items: RadioGroupItemType[] = [
  { id: 'qwe', label: 'label1', value: 'value1' },
  { id: 'asd', label: 'label2', value: 'value2' },
  { id: 'zxc', label: 'label3', value: 'value3' },
  { id: 'rty', label: 'label4', value: 'value4' },
  { id: 'fgh', label: 'label5', value: 'value5' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('value5')

    return <RadioGroup value={value} onChange={setValue} items={items} />
  },
}
