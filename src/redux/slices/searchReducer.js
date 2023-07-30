import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      let search = action.payload;
      state.search = search;
    },
  },
});

export default searchSlice.reducer; //экспортируем хранилище
export const { setSearch } = searchSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
