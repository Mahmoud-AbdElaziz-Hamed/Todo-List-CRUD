import React, { useEffect, useState } from "react";
import AddTodo from "../../components/addTodo/index";
import TodoItemList from "../../components/todoItemList";
import { getRandomNumber } from "../../utils/getRandomNumber";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [addValue, setAddValue] = useState("");

  const handleDelete = (id) => {
    const updateDataAfterDelete = data.filter((item) => {
      return item.id !== id;
    });
    setData(updateDataAfterDelete);
  };

  const handleAddChange = (e) => {
    setAddValue(e.target.value);
  };

  const handleAdd = () => {
    setData([...data, { id: getRandomNumber(6), todo: addValue }]);
    console.log([...data, { id: getRandomNumber(6), todo: addValue }]);
    setAddValue("");
  };

  const toggleEditMode = (id) => {
    const newData = [...data];
    newData[id].isEditMode = !newData[id].isEditMode;
    setData(newData);
  };

  const handleEidtChange = (e, id) => {
    const newData = [...data];
    newData[id].todo = e.target.value;
    setData(newData);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/todos").then((res) =>
        res.json()
      );
      const newArray = [
        ...data,
        ...response.todos.map((item) => {
          item.isEditMode = false;
          return item;
        }),
      ];
      setData(newArray);
    };
    getData();
  }, []);

  return (
    <>
      <AddTodo
        onChangeChangedInput={handleAddChange}
        addValue={addValue}
        handleAdd={handleAdd}
      />
      <TodoItemList
        data={data}
        toggleEditMode={toggleEditMode}
        handleEidtChange={handleEidtChange}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default HomePage;
