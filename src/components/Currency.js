const Currency = ({ currency }) => {
  return (
    <tr>
      <td>{currency.name}</td>
      <td>{currency.high}</td>
      <td>{currency.low}</td>
    </tr>
  );
};

export default Currency;
