import './transactionhistory.scss';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transactions => (
          <tr key={transactions.id}>
            <td>{transactions.type}</td>
            <td>{transactions.amount}</td>
            <td>{transactions.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
