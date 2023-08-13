import { useGetDecksQuery } from '../../services/decks/decks-api.ts'

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage: 20,
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
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
