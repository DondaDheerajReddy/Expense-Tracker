interface Props {
  filter: string;
  data: {
    description: string;
    amount: number;
    category:
      | "Groceries"
      | "Utilities"
      | "Entertainment"
      | "Education"
      | "Healthcare"
      | "Other";
  }[];
  deleteItem: (index: number) => void;
}

const Table = ({ filter, data, deleteItem }: Props) => {
  const filteredData =
    filter === "all" ? data : data.filter((item) => item.category === filter);

  const totalExpense = filteredData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="mt-5">
      {filteredData.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>₹{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    onClick={() => deleteItem(data.indexOf(item))}
                    className="btn btn-outline-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>₹{totalExpense}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Table;
