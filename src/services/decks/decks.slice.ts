import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  itemsPerPage: 10,
  currentPage: 1,
  searchByName: '',
  orderBy: 'created-desc',
  shownDecks: ['All cards'],
  sliderValue: [0, 20],
}

export const decksSlice = createSlice({
  initialState,
  name: 'decksSlice',
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setSearchByName: (state, action: PayloadAction<string>) => {
      state.searchByName = action.payload
    },
    setOrderBy: (state, action: PayloadAction<string>) => {
      state.orderBy = action.payload
    },
    setShowDecks: (state, action: PayloadAction<string[]>) => {
      state.shownDecks = action.payload
    },
    setSliderValue: (state, action: PayloadAction<number[]>) => {
      state.sliderValue = action.payload
    },
  },
})
