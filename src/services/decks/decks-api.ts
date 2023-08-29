import { current } from '@reduxjs/toolkit'

import { CreateDeckArgs, Deck, DecksResponse, GetDecksArgs } from '../../pages/decks/types.ts'
import { baseApi } from '../base-api.ts'
import { RootState } from '../store.ts'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, GetDecksArgs>({
        query: args => {
          return {
            url: `v1/decks`,
            method: 'GET',
            params: args,
          }
        },
        providesTags: ['Decks'],
      }),
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        query: ({ name }) => {
          return {
            url: `v1/decks`,
            method: 'POST',
            body: { name },
          }
        },
        async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
          const state = getState() as RootState
          const { searchByName, currentPage, itemsPerPage, orderBy } = state.decksSlice

          try {
            const res = await queryFulfilled

            dispatch(
              decksApi.util.updateQueryData(
                'getDecks',
                {
                  name: searchByName,
                  currentPage,
                  itemsPerPage,
                  orderBy,
                },
                draft => {
                  draft.items.pop()
                  draft.items.unshift(res.data)
                  console.log(current(draft))
                }
              )
            )
          } catch {
            // patchResult.undo()
          }
        },
        invalidatesTags: ['Decks'],
      }),
    }
  },
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi
