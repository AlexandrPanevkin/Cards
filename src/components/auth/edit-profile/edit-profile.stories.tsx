import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '../../../services/store.ts'

import { EditProfile } from './edit-profile.tsx'

const meta = {
  title: 'Auth/Edit profile',
  component: EditProfile,
  tags: ['autodocs'],
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: {
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9JqkBrfwaFEIRaVhyYtwjifjGJJwjT-lOx8QgN6XRe9T1UmUWXe17Tc5ZVLMRwmJeRE&usqp=CAU',
      id: '',
      isEmailVerified: false,
      created: '',
      updated: '',
      name: 'My name',
      email: 'Email@mail.com',
    },
  },
  decorators: [Story => <Provider store={store}>{Story()}</Provider>],
}
