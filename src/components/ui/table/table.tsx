import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import { Sort } from '../../../services/decks/types.ts'

import { ChevronUp } from './icons/ChevronUp.tsx'
import s from './table.module.scss'

export type RootProps = ComponentProps<'table'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}

export type Column = {
  title: string
  key: string
  sortable?: boolean
}

export const Header: FC<
  Omit<
    HeadProps & {
      columns: Column[]
      sort?: Sort
      onSort?: (sort: Sort) => void
    },
    'children'
  >
> = ({ columns, sort, onSort, ...rest }) => {
  const classNames = {
    chevron: sort?.direction === 'asc' ? '' : s.chevronDown,
  }

  const handleSort = (key: string, sortable?: boolean) => {
    if (!onSort || !sortable) return

    if (sort?.key !== key) return onSort({ key, direction: 'asc' })

    if (sort.direction === 'desc') return onSort(null)

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  return (
    <Head {...rest}>
      <Row>
        {columns.map(({ title, key, sortable }) => (
          <HeadCell key={key} onClick={() => handleSort(key, sortable)} sortable={sortable}>
            {title}
            {sort?.key === key ? <ChevronUp className={classNames.chevron} /> : ''}
          </HeadCell>
        ))}
      </Row>
    </Head>
  )
}

export type HeadCellProps = ComponentProps<'th'> & {
  sortable?: boolean
}

export const HeadCell: FC<HeadCellProps> = ({ className, children, sortable, ...rest }) => {
  const classNames = {
    headCell: clsx(className, s.headCell, sortable && s.sortable),
  }

  return (
    <th className={classNames.headCell} {...rest}>
      <span>{children}</span>
    </th>
  )
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = props => {
  return <tr {...props} />
}

export type CellProps = ComponentProps<'td'>

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return <td className={classNames.cell} {...rest} />
}

export const Table = {
  Root,
  Head,
  HeadCell,
  Body,
  Row,
  Cell,
  Header,
}
