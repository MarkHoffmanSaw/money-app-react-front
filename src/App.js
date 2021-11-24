import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search.js";
import Currencies from "./components/Currencies.js";
import Pagination from "./components/Pagination.js";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [savedCurrencies, setSavedCurrencies] = useState([]);

  const [searchCurrency, setSearchCurrency] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [currenciesPerPage, setCurrenciesPerPage] = useState(20);

  // ************ 1. LOAD DATA ************

  // GET CURRENCIES
  useEffect(() => {
    const getCurrencies = async () => {
      const currenciesData = await fetchCurrencies();

      setCurrencies(currenciesData);
      setSavedCurrencies(currenciesData);
    };

    getCurrencies();
  }, [savedCurrencies]);

  // FETCHING FROM SERVER
  const fetchCurrencies = async () => {
    const res = await fetch("http://localhost:5000/currencies");

    const data = await res.json();

    return data;
  };
  // setInterval(async () => {
  //   console.log("data updated");
  //   await fetchCurrencies();
  // }, 60000);

  // ************ SEARCH METHOD ************

  const handleSearch = () => {
    if (!searchCurrency) {
      alert("Please fill the input data");
      return;
    }

    const filtered = currencies.filter((curr) =>
      curr.name.toString().toLowerCase().match(searchCurrency.toLowerCase())
    );

    setCurrencies(filtered); // currencies = filtered
  };

  // ************ RESET METHOD ************

  const handleReset = () => {
    setSearchCurrency("");
    setCurrencies(savedCurrencies);
  };

  // ************ PAGINATION ************

  // GET CURRENT CURRENCIES
  const indexOfLastCurrency = currentPage * currenciesPerPage;
  // n * X
  const indexOfFirstCurrency = indexOfLastCurrency - currenciesPerPage;
  // n * X - X
  const currentCurrency = currencies.slice(
    indexOfFirstCurrency,
    indexOfLastCurrency
  );
  // from (n * X - X) to (n * X)

  // SET CURRENT PAGE
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
          handlePaginate={handlePaginate}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </>
  );
}

export default App;
