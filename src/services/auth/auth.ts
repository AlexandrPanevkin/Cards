import { baseApi } from '../base-api.ts'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<any, any>({
        query: args => {
          return {
            url: `v1/decks`,
            method: 'GET',
            params: args,
          }
        },
      }),
    }
  },
})

export const { useLoginMutation } = authApi
