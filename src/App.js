import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import TodoItemList from "./components/todoItemList";
import AddTodo from "./components/addTodo";

const App = () => {
  const [data, setData] = useState([]);
  const [addValue, setAddValue] = useState("");

  const handleDelete = (id) => {
    const updateDataAfterDelete = data.filter((item) => {
      return item.id !== id;
    });
    setData(updateDataAfterDelete);
  };

  const handleInputChange = (e) => {
    setAddValue(e.target.value);
  };

  const handleAdd = () => {
    setData([
      ...data,
      { id: Math.floor(Math.random() * 1000000), todo: addValue },
    ]);
    setAddValue("");
  };

  const handleEdit = (index) => {
    const newData = data.slice();
    newData[index].isEditMode = true;
    setData(newData);
  };

  const handleChangeOfEdit = (e, index) => {
    const newData = data.slice();
    newData[index].todo = e.target.value;
    setData(newData);
  };

  const handleFinishEdit = (index) => {
    const newData = data.slice();
    newData[index].isEditMode = false;
    setData(newData);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/todos").then((res) =>
        res.json()
      );
      const newArry = [
        ...data,
        ...response.todos.map((item) => {
          item.isEditMode = false;
          return item;
        }),
      ];
      setData(newArry);
    };
    getData();
  }, []);

  return (
    <>
      <AddTodo
        onChangeChangedInput={handleInputChange}
        addValue={addValue}
        handleAdd={handleAdd}
      />
      <TodoItemList
        data={data}
        handleFinishEdit={handleFinishEdit}
        handleChangeOfEdit={handleChangeOfEdit}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default App;
