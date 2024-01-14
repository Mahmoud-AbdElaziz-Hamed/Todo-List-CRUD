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
    if (e.key === "Enter" && addValue.trim()) {
      handleAddClick();
    }
  };

  const handleAddClick = () => {
    setData([...data, { id: getRandomNumber(6), todo: addValue }]);
    setAddValue("");
  };

  const toggleEditMode = (id) => {
    const newData = [...data];
    const editedElement = newData.find((ele) => ele.id === id);
    editedElement.isEditMode = !editedElement.isEditMode;
    setData(newData);
  };

  const handleEditChange = (e, id, todo) => {
    const newData = [...data];
    const editedElement = newData.find((ele) => ele.id === id);
    editedElement.todo = e.target.value;
    setData(newData);
    if (e.key === "Enter" && todo.trim()) {
      toggleEditMode(id);
    }
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
        onAddClick={handleAddClick}
      />
      <TodoItemList
        data={data}
        onEditClick={toggleEditMode}
        onEditChange={handleEditChange}
        onDeleteClick={handleDelete}
      />
    </>
  );
};
