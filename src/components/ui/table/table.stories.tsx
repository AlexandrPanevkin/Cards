import { useState, useMemo } from 'react'

import { Meta } from '@storybook/react'

import { Sort } from '../../../services/decks/types.ts'

import { Column, Table } from './table.tsx'

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

export const WithSort = {
  render: (args: any) => {
    const [sort, setSort] = useState<Sort>(null)
    const sortString: string | null = sort ? `${sort?.key}-${sort?.direction}` : null

    console.log(sort, sortString)

    const columns: Column[] = [
      {
        key: 'title',
        title: 'Name',
        sortable: true,
      },
      {
        key: 'cardsCount',
        title: 'Cards',
        sortable: true,
      },
      {
        key: 'updated',
        title: 'Last Updated',
      },
      {
        key: 'createdBy',
        title: 'Created by',
        sortable: true,
      },
      {
        key: 'options',
        title: '',
      },
    ]
    const data1 = [
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
    const sortedData = useMemo(() => {
      if (!sortString) {
        return data1
      }
      const [key, direction] = sortString.split('-')

      return [...data1].sort((a, b) => {
        if (direction === 'asc') {
          return a[key as keyof typeof a] > b[key as keyof typeof b] ? 1 : -1
        }

        return a[key as keyof typeof a] < b[key as keyof typeof b] ? 1 : -1
      })
    }, [sortString])

    return (
      <Table.Root {...args} style={{ width: '100%' }}>
        <Table.Header columns={columns} onSort={setSort} sort={sort} />
        <Table.Body>
          {sortedData.map(item => (
            <Table.Row key={item.title}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.cardsCount}</Table.Cell>
              <Table.Cell>{item.updated}</Table.Cell>
              <Table.Cell>{item.createdBy}</Table.Cell>
              <Table.Cell>icons...</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
}
