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
        <option value="Education">Education</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Other">Other...</option>
      </select>
    </div>
  );
};

export default Filter;
