import type { Meta, StoryObj } from '@storybook/react'

import { EditProfile } from './edit-profile.tsx'

const meta = {
  title: 'Auth/Edit-profile',
  component: EditProfile,
  tags: ['autodocs'],
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
