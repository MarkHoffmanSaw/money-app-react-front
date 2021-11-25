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

  const URL = "http://localhost:5000/currencies";
  const time = 60000; // 1 min

  // ************ 1. LOAD DATA ************

  // GET CURRENCIES WITH INTERVAL
  useEffect(() => {
    const getData = async () => {
      {
        try {
          const currenciesData = await fetchCurrencies();

          setCurrencies(currenciesData);
          setSavedCurrencies(currenciesData);
        } catch (err) {
          console.log(err);
        }
      }
    };

    const intervalID = setInterval(() => {
      getData();
    }, time);

    getData();

    return () => clearInterval(intervalID);
  }, []);

  // FETCHING FROM SERVER
  const fetchCurrencies = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  };

  // ************ 2. SEARCH METHOD ************

  const handleSearch = () => {
    if (!searchCurrency) {
      alert("Please fill the input data");
      return;
    }

    setCurrencies(savedCurrencies);

    const filtered = currencies.filter((curr) =>
      curr.name
        .toString()
        .toLowerCase()
        .match(searchCurrency.toString().toLowerCase())
    );

    setCurrencies(filtered); // currencies = filtered
  };

  // ************ 3. RESET METHOD ************

  const handleReset = () => {
    setSearchCurrency("");
    setCurrencies(savedCurrencies);
  };

  // ************ 4. PAGINATION ************

  // GET CURRENT CURRENCIES
  const indexOfLastCurrency = currentPage * currenciesPerPage;
  const indexOfFirstCurrency = indexOfLastCurrency - currenciesPerPage;
  const currentCurrency = currencies.slice(
    indexOfFirstCurrency,
    indexOfLastCurrency
  );

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
      <div className="search">
        <Search
          handleSearch={handleSearch}
          handleReset={handleReset}
          searchCurrency={searchCurrency}
          setSearchCurrency={setSearchCurrency}
        />
      </div>

      {/* CURRENCIES LIST */}
      <div className="list-item">
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
