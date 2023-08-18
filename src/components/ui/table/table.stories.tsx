import { Meta } from '@storybook/react'

import { Table } from './table.tsx'

export default {
  title: 'Components/Table',
  component: Table.Root,
} as Meta<typeof Table.Root>

export const Default = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell>Название</Table.HeadCell>
          </Table.Row>
        </Table.Head>
      </>
    ),
  },
}
