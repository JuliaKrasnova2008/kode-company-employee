import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import ErrorMessege from "../Error/ErrorMessege";
import Scroll from "../Scroll/Scroll";
import SearchForm from "../SearchForm/SearchForm";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";

function App() {
  const error = useSelector((state) => state.error.error);

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
          <Route path="/:id" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
