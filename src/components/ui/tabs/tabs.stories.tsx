import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './'

const meta = {
  title: 'Components/Tabs',
  component: TabSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof TabSwitcher>

export const Default: Story = {
  args: {
    tabs: [
      { value: 'Tab1', title: 'my decks' },
      { value: 'Tab2', title: 'decks' },
      { value: 'Tab3', title: 'all decks' },
    ],
    defaultValue: 'Tab1',
  },
}
