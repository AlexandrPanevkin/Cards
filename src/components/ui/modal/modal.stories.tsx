import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { TextField } from '../text-field'
import { Typography } from '../typography'

import { Modal } from './modal.tsx'

const meta = {
  title: 'Components/Modal',
  component: Modal.Root,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    trigger: <Button variant={'primary'}>modal</Button>,
  },
} satisfies Meta<typeof Modal.Root>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    title: 'Title',
    children: (
      <>
        <Modal.Body>
          <TextField label={'Pack name'} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle2'}>Add New Pack</Typography>
          </Button>
          <Button variant={'secondary'}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </>
    ),
  },
}
