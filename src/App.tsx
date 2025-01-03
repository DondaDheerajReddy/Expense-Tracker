import { useState } from "react";

import Form from "./components/Form";
import Filter from "./components/Filter";
import Table from "./components/Table";
import { FormData } from "./components/Form";

const App = () => {
  const [items, setItems] = useState<FormData[]>([]);
  const [selectedText, setSelectedText] = useState("all");

  const handleSubmit = (data: FormData) => {
    setItems([...items, data]);
  };

  const handleChange = (value: string) => {
    setSelectedText(value);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((_, index) => index !== id));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}></Form>
      <Filter onChange={handleChange}></Filter>
      <Table data={items} filter={selectedText} deleteItem={removeItem}></Table>
    </div>
  );
};

export default App;
