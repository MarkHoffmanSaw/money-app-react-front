const Search = ({
  handleSearch,
  handleReset,
  searchCurrency,
  setSearchCurrency,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="enter a currency name..."
        value={searchCurrency}
        onChange={(e) => setSearchCurrency(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Search;
