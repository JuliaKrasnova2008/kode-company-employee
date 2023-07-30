import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departmentUser: "",
  sort: "alphabet",
  user: "",
};

export const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    setDepartment: (state, action) => {
      let department = action.payload;
      state.departmentUser = department;

      //императивный подход(используемся DOM)
      // document.querySelectorAll(".scroll__element").forEach((elem) => {
      //   elem.addEventListener("click", () => {
      //     document.querySelectorAll(".scroll__element").forEach((elem) => {
      //       elem.classList.remove("scroll__element_active");
      //     });
      //     elem.classList.add("scroll__element_active");
      //   });
      // });
    },

    setSort: (state, action) => {
      let sort = action.payload;
      state.sort = sort;
    },
    setUser: (state, action) => {
      let user = action.payload;
      state.user = user;
    },
  },
});

export default departmentSlice.reducer; //экспортируем хранилище
export const { setDepartment, setSort } = departmentSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
