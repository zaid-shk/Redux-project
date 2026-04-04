import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 0,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      state.page = 1; // Reset page on new query
    },
    setActiveTabs(state, action) {
      state.activeTab = action.payload;
      state.page = 1; // Reset page on tab change
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTabs,
  setError,
  setLoading,
  setPage,
  setTotalPages,
  setResults,
  clearResults,
} = searchSlice.actions;

export default searchSlice.reducer;
