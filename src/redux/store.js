import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from "./slices/departmentReducer";
import errorReducer from "./slices/errorReducer";
import searchReducer from "./slices/searchReducer";

//создаю конст persistedState, пытемся получить localStorage сохраненные данные о всем сторе
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    department: departmentReducer,
    error: errorReducer,
    search: searchReducer,
  },
  //preloadedState- состояние, которое должно подгрузиться сначала, и  в него добавляю данные из localStorage
  preloadedState: persistedState,
});

//подписываю store на то, чтобы при каждом изменении в localStorage сохранялся весь store
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
