export type PaginatedEntity<T> = {
  pagination: Pagination
  items: T[]
}

export interface Pagination {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null
