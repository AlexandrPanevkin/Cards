import { useState } from 'react'

import { Button } from '../../components/ui/button'
import { TextField } from '../../components/ui/text-field'
import { useCreateDeckMutation, useGetDecksQuery } from '../../services/decks/decks-api.ts'
import { decksSlice } from '../../services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '../../services/store.ts'

export const Decks = () => {
  const [cardName, setCardName] = useState('')
  const dispatch = useAppDispatch()
  const itemsPerPage = useAppSelector(state => state.decksSlice.itemsPerPage)
  const currentPage = useAppSelector(state => state.decksSlice.currentPage)
  const searchByName = useAppSelector(state => state.decksSlice.searchByName)

  const setItemsPerPage = (itemsPerPage: number) =>
    dispatch(decksSlice.actions.setItemsPerPage(itemsPerPage))
  const setCurrentPage = (currentPage: number) =>
    dispatch(decksSlice.actions.setCurrentPage(currentPage))
  const setSearch = (searchValue: string) =>
    dispatch(decksSlice.actions.setSearchByName(searchValue))

  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
    orderBy: 'created-desc',
  })

  const [createDeck, { isLoading: isCreateLoading }] = useCreateDeckMutation()

  const handlerCreateClicked = () => createDeck({ name: cardName })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <TextField value={cardName} onChange={e => setCardName(e.currentTarget.value)} />
      <div>
        <Button onClick={() => setItemsPerPage(10)}>ItemsPerPage: 10</Button>
        <Button onClick={() => setItemsPerPage(20)}>ItemsPerPage: 20</Button>
        <Button onClick={() => setItemsPerPage(30)}>ItemsPerPage: 30</Button>
      </div>
      <div>
        <Button onClick={() => setCurrentPage(1)}>SetCurrentPage 1</Button>
        <Button onClick={() => setCurrentPage(2)}>SetCurrentPage 2</Button>
        <Button onClick={() => setCurrentPage(3)}>SetCurrentPage 3</Button>
      </div>
      <TextField value={searchByName} onChange={e => setSearch(e.currentTarget.value)} />
      <TextField
        label={'set card name'}
        value={cardName}
        onChange={e => setCardName(e.currentTarget.value)}
      />
      <Button onClick={handlerCreateClicked}>Create Deck</Button>
      isCreateDeckLoading: {isCreateLoading.toString()}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Cards</th>
            <th>Last updated</th>
            <th>Created by</th>
          </tr>
          {data?.items.map(deck => {
            return (
              <tr key={deck.id}>
                <td>{deck.name}</td>
                <td>{deck.cardsCount}</td>
                <td>{new Date(deck.updated).toLocaleDateString('ru-Ru')}</td>
                <td>{deck.author.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
