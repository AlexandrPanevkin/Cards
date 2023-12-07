import { useState } from 'react'

import { useDebounce } from 'usehooks-ts'

import DeleteIcon from '../../assets/icons/DeleteIcon.tsx'
import { Button } from '../../components/ui/button'
import { Pagination } from '../../components/ui/pagination'
import { Slider } from '../../components/ui/slider'
import { Table } from '../../components/ui/table'
import { TabSwitcher } from '../../components/ui/tabs'
import { TextField } from '../../components/ui/text-field'
import { Typography } from '../../components/ui/typography'
import { useGetDecksQuery } from '../../services/decks'
import { decksSlice } from '../../services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '../../services/store.ts'

import { columns } from './data/columns.ts'
import { tabs } from './data/tabs.ts'
import s from './decks.module.scss'
import { Sort } from './types.ts'

export const Decks = () => {
  // const [cardName, setCardName] = useState('')
  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'asc' })
  const sortString = sort ? `${sort.key}-${sort.direction}` : null
  const dispatch = useAppDispatch()
  // const itemsPerPage = useAppSelector(state => state.decksSlice.itemsPerPage)
  // const currentPage = useAppSelector(state => state.decksSlice.currentPage)
  const searchByName = useAppSelector(state => state.decksSlice.searchByName)
  const debounceSearchByName = useDebounce<string>(searchByName, 300)
  //
  // const setItemsPerPage = (itemsPerPage: number) =>
  //   dispatch(decksSlice.actions.setItemsPerPage(itemsPerPage))
  // const setCurrentPage = (currentPage: number) =>
  //   dispatch(decksSlice.actions.setCurrentPage(currentPage))
  const setSearchByName = (searchName: string) => {
    dispatch(decksSlice.actions.setSearchByName(searchName))
  }
  //
  const { data } = useGetDecksQuery({ name: debounceSearchByName, orderBy: sortString ?? '' })
  //
  // const [createDeck, { isLoading: isCreateLoading }] = useCreateDeckMutation()
  //
  // const handlerCreateClicked = () => createDeck({ name: cardName })
  //
  // if (isLoading) return <div>Loading...</div>

  return (
    <div className={s.container}>
      <div className={s.title}>
        <Typography variant={'large'}>Packs list</Typography>
        <Button>
          <Typography variant={'subtitle1'} as={'span'}>
            Add New Pack
          </Typography>
        </Button>
      </div>
      <div className={s.filterContainer}>
        <TextField
          onChangeValue={setSearchByName}
          value={searchByName}
          type={'search'}
          placeholder={'Input search'}
        />
        <TabSwitcher label={'Show packs cards'} tabs={tabs} />

        <div className={s.sliderBox}>
          <Typography variant={'body2'} as={'span'}>
            Number of cards
          </Typography>
          <Slider value={[10, 20]} />
        </div>
        <Button variant={'secondary'}>
          <DeleteIcon />
          <Typography variant={'subtitle2'}>Clear filter </Typography>
        </Button>
      </div>
      <div className={s.table}>
        <Table.Root>
          <Table.Header sort={sort} onSort={setSort} columns={columns} />
          <Table.Body>
            {data?.items.map(deck => {
              return (
                <Table.Row key={deck.id}>
                  <Table.Cell>{deck.name}</Table.Cell>
                  <Table.Cell>{deck.cardsCount}</Table.Cell>
                  <Table.Cell>{new Date(deck.updated).toLocaleDateString('ru-Ru')}</Table.Cell>
                  <Table.Cell>{deck.author.name}</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
      </div>
      <Pagination count={10} page={1} onChange={() => {}} />
    </div>
    // <div>
    //   <TextField value={cardName} onChange={e => setCardName(e.currentTarget.value)} />
    //   <div>
    //     <Button onClick={() => setItemsPerPage(10)}>ItemsPerPage: 10</Button>
    //     <Button onClick={() => setItemsPerPage(20)}>ItemsPerPage: 20</Button>
    //     <Button onClick={() => setItemsPerPage(30)}>ItemsPerPage: 30</Button>
    //   </div>
    //   <div>
    //     <Button onClick={() => setCurrentPage(1)}>SetCurrentPage 1</Button>
    //     <Button onClick={() => setCurrentPage(2)}>SetCurrentPage 2</Button>
    //     <Button onClick={() => setCurrentPage(3)}>SetCurrentPage 3</Button>
    //   </div>
    //   <TextField
    //     label={'set card name'}
    //     value={cardName}
    //     onChange={e => setCardName(e.currentTarget.value)}
    //   />
    //   <Button onClick={handlerCreateClicked}>Create Deck</Button>
    //   isCreateDeckLoading: {isCreateLoading.toString()}
    //     </div>
  )
}
