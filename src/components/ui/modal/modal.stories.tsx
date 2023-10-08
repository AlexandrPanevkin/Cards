import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Checkbox } from '../checkbox'
import { Select } from '../select'
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

export const Header: Story = {
  args: {
    title: 'Header Only',
  },
}

export const Body: Story = {
  args: {
    children: (
      <Modal.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniamdsa
      </Modal.Body>
    ),
  },
}

export const Body_variant: Story = {
  args: {
    children: (
      <Modal.Body>
        <Select options={[1, 2, 3, 4]} />
        <TextField label={'input'} />
        <TextField label={'input'} />
        <Checkbox label={'Check-box'} />
      </Modal.Body>
    ),
  },
}

export const Footer_One_Button: Story = {
  args: {
    children: (
      <Modal.Footer>
        <Button variant={'primary'}>Primary</Button>
      </Modal.Footer>
    ),
  },
}

export const Footer_Two_Buttons: Story = {
  args: {
    children: (
      <Modal.Footer>
        <Button variant={'primary'}>Primary</Button>
        <Button variant={'secondary'}>Cancel</Button>
      </Modal.Footer>
    ),
  },
}
