import { useEffect, useState } from "react";
import { AddTodo } from "../../components/AddTodo";
import { TodoItemList } from "../../components/TodoItemList";
import { getRandomNumber } from "../../utils/getRandomNumber";

export const HomePage = () => {
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

  const handleAddClick = () => {
    setData([...data, { id: getRandomNumber(6), todo: addValue }]);
    setAddValue("");
  };

  const toggleEditMode = (item) => {
    const newData = [...data];
    const updatedData = newData.map((el) => {
      if (el.id === item.id) {
        el.isEditMode = !el.isEditMode;
      }
      return el;
    });
    setData(updatedData);
  };

  const handleEditChange = (e, item) => {
    const newData = [...data];
    const updatedData = newData.map((el) => {
      if (el.id === item.id) {
        el.todo = e.target.value;
      }
      return el;
    });
    setData(updatedData);
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
        onInputChange={handleAddChange}
        addValue={addValue}
        handleAddClick={handleAddClick}
      />
      <TodoItemList
        data={data}
        toggleEditMode={toggleEditMode}
        handleEditChange={handleEditChange}
        handleDelete={handleDelete}
      />
    </>
  );
};
