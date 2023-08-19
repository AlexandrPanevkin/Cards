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
        <Table.Body>
          <Table.Row>
            <Table.Cell>Текст</Table.Cell>
            <Table.Cell>Текст</Table.Cell>
            <Table.Cell>Текст</Table.Cell>
            <Table.Cell>Текст</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Текст</Table.Cell>
            <Table.Cell>Текст</Table.Cell>
            <Table.Cell>Текст</Table.Cell>
            <Table.Cell>Текст</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Текст</Table.Cell>
            <Table.Cell>Текст</Table.Cell>
            <Table.Cell>Текст</Table.Cell>
            <Table.Cell>Текст</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}

const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

export const WithMapMethod = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Cards</Table.HeadCell>
            <Table.HeadCell>Last Updated</Table.HeadCell>
            <Table.HeadCell>Created by</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.title}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.cardsCount}</Table.Cell>
              <Table.Cell>{item.updated}</Table.Cell>
              <Table.Cell>{item.createdBy}</Table.Cell>
              <Table.Cell>icons...</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}
