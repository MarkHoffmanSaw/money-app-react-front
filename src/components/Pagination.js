const Pagination = ({
  currenciesPerPage,
  totalCurrencies,
  paginate,
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
        <button key={pageNumber} onClick={() => paginate(pageNumber)}>
          {pageNumber}
        </button>
      ))}

      <button onClick={nextPage}> Next</button>
    </>
  );
};

export default Pagination;
