import { useGetDecksQuery } from '../services/base-api.ts'

export const Decks = () => {
  const { isLoading, data } = useGetDecksQuery()

  if (isLoading) return <div>Loading...</div>

  return <div>{JSON.stringify(data)}</div>
}
