import Currency from "./Currency.js";

const Currencies = ({ currencies }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Currency name</td>
        </tr>
      </thead>
      <tbody>
        {currencies.map((currency) => (
          <Currency key={currency.symbol} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};

export default Currencies;
