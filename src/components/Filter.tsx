interface Props {
  onChange: (value: string) => void;
}

const Filter = ({ onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value);
  };
  return (
    <div className="mt-5">
      <select
        onChange={handleChange}
        className="form-select"
        aria-label="Default select example"
        defaultValue="all"
      >
        <option value="all">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default Filter;
