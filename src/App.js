import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState("hidden block");
  const [addValue, setAddValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState(-1);

  const handleDelete = (id) => {
    const upateDatAfterDelete = data.filter((item) => {
      return item.id !== id;
    });
    console.log("upateDatAfterDelete: ", upateDatAfterDelete);
    setData(upateDatAfterDelete);
  };
  const handleInputChange = (e) => {
    setAddValue(e.target.value);
  };
  const handleAdd = (value) => {
    setData([
      ...data,
      { id: Math.floor(Math.random() * 1000000), todo: addValue },
    ]);
    setAddValue("");
  };

  const handleEdite = (id) => {
    setIsEdit("m-3");
    setEditId(id);
  };

  const handleInputEdit = (e) => {
    setEditValue(e.target.value);
  };

  const finishEdit = (valueEdit) => {
    const editedArry = [...data];
    const itemToEdit = editedArry.find((item) => item.id === editId);
    console.log(itemToEdit);
    console.log(valueEdit);

    itemToEdit
      ? (itemToEdit.todo = valueEdit)
      : (itemToEdit.todo = itemToEdit.todo);
    setData(editedArry);
    setEditValue("");
    setIsEdit("hidden block");
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/todos").then((res) =>
        res.json()
      );

      const newArry = [...data, ...response.todos];
      // console.log(newArry);
      setData(newArry);
    };
    getData();
  }, []);

  return (
    <>
      <div className="m-3">
        <label className="m-2 block">Insert your work</label>
        <input
          type="text"
          value={addValue}
          onChange={(e) => handleInputChange(e)}
          className="border w-96 h-20"
        />
        <button
          className="btn btn-primary ml-3"
          onClick={() => {
            handleAdd(addValue);
          }}
        >
          {" "}
          Add to todo
        </button>
      </div>
      <div className={isEdit}>
        {" "}
        <label className="m-2 block">Edit your Todo</label>
        <input
          type="text"
          className="border w-96 h-20"
          value={editValue}
          onChange={(e) => handleInputEdit(e)}
        />
        <button
          onClick={() => finishEdit(editValue)}
          className="btn btn-primary ml-3 w-32"
        >
          edit
        </button>
      </div>
      <div className="border rounded-2xl m-10">
        <ul className="list-[upper-roman] inline-block mt-3 w-full">
          {" "}
          {data.map((item) => (
            <div className="m-2" key={item.id}>
              <li className="flex flex-row w-auto justify-between">
                {item.todo}
                <div className="w-auto mr-20">
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    {" "}
                    DELETE
                  </button>
                  <button
                    onClick={() => handleEdite(item.id)}
                    className="btn btn-primary m-2"
                  >
                    {" "}
                    EDIT
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
