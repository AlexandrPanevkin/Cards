import { useState } from 'react'

import { useDebounce } from 'usehooks-ts'

import DeleteIcon from '../../assets/icons/DeleteIcon.tsx'
import LightPencil from '../../assets/icons/LightPencil.tsx'
import PlayIcon from '../../assets/icons/PlayIcon.tsx'
import { Button } from '../../components/ui/button'
import { Pagination } from '../../components/ui/pagination'
import { Slider } from '../../components/ui/slider'
import { Table } from '../../components/ui/table'
import { TabSwitcher } from '../../components/ui/tabs'
import { TextField } from '../../components/ui/text-field'
import { Typography } from '../../components/ui/typography'
import { useMeQuery } from '../../services/auth/auth.api.ts'
import { useGetDecksQuery } from '../../services/decks'
import { decksSlice } from '../../services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '../../services/store.ts'

import { columns } from './data/columns.ts'
import { tabs } from './data/tabs.ts'
import s from './decks.module.scss'
import { Sort } from './types.ts'

export const Decks = () => {
  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'asc' })
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 100])
  const sortString = sort ? `${sort.key}-${sort.direction}` : null
  const dispatch = useAppDispatch()
  const { data: userData } = useMeQuery()
  const itemsPerPage = useAppSelector(state => state.decksSlice.itemsPerPage)
  const currentPage = useAppSelector(state => state.decksSlice.currentPage)
  const searchByName = useAppSelector(state => state.decksSlice.searchByName)
  const shownDecks = useAppSelector(state => state.decksSlice.shownDecks)
  const debounceSearchByName = useDebounce<string>(searchByName, 300)

  const setItemsPerPage = (itemsPerPage: number) =>
    dispatch(decksSlice.actions.setItemsPerPage(itemsPerPage))
  const setCurrentPage = (currentPage: number) =>
    dispatch(decksSlice.actions.setCurrentPage(currentPage))
  const setSearchByName = (searchName: string) => {
    dispatch(decksSlice.actions.setSearchByName(searchName))
    setCurrentPage(1)
  }

  const setShown = (owner: string) => {
    if (owner === 'My cards' && userData) {
      dispatch(decksSlice.actions.setShowDecks([owner, userData.id]))
    } else {
      dispatch(decksSlice.actions.setShowDecks([owner, '']))
    }
    setCurrentPage(1)
  }
  const onClearFilter = () => {
    setCurrentPage(1)
    setSearchByName('')
    setShown('All cards')
    setSliderValue([0, 100])
    setItemsPerPage(10)
  }

  const { data } = useGetDecksQuery({
    name: debounceSearchByName,
    authorId: shownDecks[1],
    orderBy: sortString ?? '',
    currentPage,
    itemsPerPage,
    minCardsCount: sliderValue[0],
    maxCardsCount: sliderValue[1],
  })
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
        <TabSwitcher
          defaultValue={''}
          label={'Show packs cards'}
          tabs={tabs}
          value={shownDecks[0]}
          onValueChange={setShown}
        />

        <div className={s.sliderBox}>
          <Typography variant={'body2'} as={'span'}>
            Number of cards
          </Typography>
          <Slider
            minValue={sliderValue[0]}
            maxValue={sliderValue[1]}
            value={sliderValue}
            onValueChange={setSliderValue}
          />
        </div>
        <Button variant={'secondary'} onClick={onClearFilter}>
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
                  <Table.Cell>
                    <div className={s.actions}>
                      <button className={s.playIcon}>
                        <PlayIcon />
                      </button>
                      {userData?.id === deck.author.id && (
                        <>
                          <button className={s.lightPencil}>
                            <LightPencil />
                          </button>
                          <button className={s.deleteIcon}>
                            <DeleteIcon />
                          </button>
                        </>
                      )}
                    </div>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
      </div>
      <Pagination
        count={data ? data.pagination.totalPages : 1}
        page={currentPage}
        onChange={setCurrentPage}
        perPageOptions={[10, 20, 30]}
        perPage={itemsPerPage}
        onPerPageChange={setItemsPerPage}
      />
    </div>
    // <div>
    //   <TextField value={cardName} onChange={e => setCardName(e.currentTarget.value)} />
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
