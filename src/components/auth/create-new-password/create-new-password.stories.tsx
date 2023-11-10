import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from './create-new-password.tsx'

const meta = {
  title: 'Auth/Create new password',
  component: CreateNewPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
