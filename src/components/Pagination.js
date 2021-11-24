const Pagination = ({
  currenciesPerPage,
  totalCurrencies,
  handlePaginate,
  prevPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCurrencies / currenciesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <button onClick={prevPage}>Prev</button>

      {pageNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={() => handlePaginate(pageNumber)}>
          {pageNumber}
        </button>
      ))}

      <button onClick={nextPage}>Next</button>
    </>
  );
};

export default Pagination;
