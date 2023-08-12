import { useLazyGetDecksQuery } from '../../services/decks/decks-api.ts'

export const Decks = () => {
  const [initializeQuery, { data, isLoading }] = useLazyGetDecksQuery()

  return (
    <div>
      isLoading: {isLoading.toString()}
      <button onClick={() => initializeQuery()}>fetch</button>
      {JSON.stringify(data)}
    </div>
  )
}
