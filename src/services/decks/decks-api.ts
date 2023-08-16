import { baseApi } from '../base-api.ts'

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
      }),
      createDeck: builder.mutation<any, any>({
        query: ({ name }) => {
          return {
            url: `v1/decks`,
            method: 'POST',
            body: { name },
          }
        },
      }),
    }
  },
})

type GetDecksArgs = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi

export interface Pagination {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export interface Author {
  id: string
  name: string
}

export interface Deck {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover?: string | null
  rating: number
  isDeleted?: boolean | null
  isBlocked?: boolean | null
  created: string
  updated: string
  cardsCount: number
  author: Author
}

export interface DecksResponse {
  maxCardsCount: number
  pagination: Pagination
  items: Deck[]
}
