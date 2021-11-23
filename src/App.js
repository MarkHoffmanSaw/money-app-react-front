import "./App.css";
import { useState } from "react";
import Search from "./components/Search.js";
import Currencies from "./components/Currencies.js";
import Pagination from "./components/Pagination.js";

function App() {
  const [currencies, setCurrencies] = useState([
    { id: 1, name: "RUB", low: 19, high: 45 },
    { id: 2, name: "EUR", low: 43, high: 67 },
    { id: 3, name: "USD", low: 38, high: 49 },
    { id: 4, name: "CNY", low: 21, high: 34 },
    { id: 5, name: "RUB", low: 19, high: 45 },
    { id: 6, name: "EUR", low: 43, high: 67 },
    { id: 7, name: "USD", low: 38, high: 49 },
    { id: 8, name: "CNY", low: 21, high: 34 },
    { id: 9, name: "RUB", low: 19, high: 45 },
    { id: 10, name: "EUR", low: 43, high: 67 },
    { id: 11, name: "USD", low: 38, high: 49 },
    { id: 12, name: "CNY", low: 21, high: 34 },
    { id: 13, name: "RUB", low: 19, high: 45 },
    { id: 14, name: "EUR", low: 43, high: 67 },
    { id: 15, name: "USD", low: 38, high: 49 },
    { id: 16, name: "CNY", low: 21, high: 34 },
    { id: 17, name: "CNY", low: 21, high: 34 },
    { id: 18, name: "RUBSSSSSSSSSS", low: 19, high: 45 },
    { id: 19, name: "EUR", low: 43, high: 67 },
    { id: 20, name: "USD", low: 38, high: 49 },
    { id: 21, name: "CNYSSSSS", low: 21, high: 34 },
    { id: 22, name: "RUB", low: 19, high: 45 },
    { id: 23, name: "EUR", low: 43, high: 67 },
    { id: 24, name: "USD", low: 38, high: 49 },
    { id: 25, name: "CNY", low: 21, high: 34 },
  ]);
  const [searchCurrency, setSearchCurrency] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currenciesPerPage, setCurrenciesPerPage] = useState(5);

  // ************ SEARCH
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search: ", searchCurrency);
    // СДЕЛАТЬ ПОИСКОВОЙ ФИЛЬТР!!!!!!!!!!!!!!!!
  };

  // ************ RESET
  const handleReset = () => {
    setSearchCurrency("");
  };

  // ************ GET CURRENT CURRENCIES
  const indexOfLastCurrency = currentPage * currenciesPerPage;
  // n * X
  const indexOfFirstCurrency = indexOfLastCurrency - currenciesPerPage;
  // n * X - X
  const currentCurrency = currencies.slice(
    indexOfFirstCurrency,
    indexOfLastCurrency
  );
  // from (n * X - X) to (n * X)

  // ************ SET CURRENT PAGE
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else return;
  };

  const nextPage = () => {
    if (currentPage === Math.ceil(currencies.length / currenciesPerPage)) {
      return;
    } else setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* SEARCH */}
      <Search
        handleSearch={handleSearch}
        handleReset={handleReset}
        searchCurrency={searchCurrency}
        setSearchCurrency={setSearchCurrency}
      />

      {/* CURRENCIES LIST */}
      <div className="curr-list">
        <Currencies currencies={currentCurrency} />
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <Pagination
          currenciesPerPage={currenciesPerPage}
          totalCurrencies={currencies.length}
          paginate={paginate}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </>
  );
}

export default App;
