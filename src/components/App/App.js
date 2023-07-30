import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import ErrorMessege from "../Error/ErrorMessege";
import Scroll from "../Scroll/Scroll";
import SearchForm from "../SearchForm/SearchForm";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Sciletons from "../Sciletons/Sciletons";
import { useState } from "react";

function App() {
  const error = useSelector((state) => state.error.error);

  //стейт для загрузки
  const [loading, setLoading] = useState(false);

  //создаю новый массив скиллетонов из 10-ти элементов,разворачиваю его и заполняю разметкой скилетона
  const scilletons = [...new Array(1)].map((elem, index) => {
    return <Sciletons key={index} />;
  });

  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              error ? (
                <ErrorMessege />
              ) : (
                <>
                  <Header />
                  <Cards />
                </>
              )
            }
          />
          {loading ? scilletons : <Route path="/:id" element={<Profile />} />}
        </Routes>
      </div>
    </div>
  );
}

export default App;
