import Currency from "./Currency.js";

const Currencies = ({ currencies }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Currency name</td>
          <td>Price LOW</td>
          <td>Price HIGH</td>
        </tr>
      </thead>
      <tbody>
        {currencies.map((currency) => (
          <Currency key={currency.id} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};

export default Currencies;
