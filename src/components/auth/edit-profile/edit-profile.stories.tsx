import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '../../../services/store.ts'

import { EditProfile } from './edit-profile.tsx'

const meta = {
  title: 'Auth/Edit-profile',
  component: EditProfile,
  tags: ['autodocs'],
  argTypes: {
    data: {
      avatar: '',
      id: '',
      isEmailVerified: false,
      created: '',
      updated: '',
      name: 'sdfsdfsdf',
      email: 'sdsdsd@mail.com',
    },
  },
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  decorators: [Story => <Provider store={store}>{Story()}</Provider>],
}
