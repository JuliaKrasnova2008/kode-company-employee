import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
      let error = action.payload;
      state.error = error;
    },
  },
});

export default errorSlice.reducer; //экспортируем хранилище
export const { setError } = errorSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
