interface Props {
  filter: string;
  data: {
    description: string;
    amount: number;
    category: "Groceries" | "Utilities" | "Entertainment";
  }[];
  deleteItem: (index: number) => void;
}

const Table = ({ filter, data, deleteItem }: Props) => {
  const filteredData =
    filter == "all" ? data : data.filter((item) => item.category == filter);

  return (
    <div className="mt-5">
      <table className="table table-striped">
        <thead className="thead-dark">
          {filteredData.length !== 0 && (
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          )}
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  onClick={() => deleteItem(index)}
                  className="btn btn-outline-primary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
