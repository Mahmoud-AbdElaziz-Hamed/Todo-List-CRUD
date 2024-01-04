import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [addValue, setAddValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState(0);

  const handleDelete = (id) => {
    const updateDataAfterDelete = data.filter((item) => {
      return item.id !== id;
    });
    console.log("updateDataAfterDelete: ", updateDataAfterDelete);
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

  const handleEdite = (item) => {
    console.log(item);
    console.log("item id is :", item.id);
    setIsEdit(true);
    setEditId(item.id);
    setEditValue(item.todo);
  };

  const handleChangeOfEdit = (e) => {
    console.log(e.target.value);
    setEditValue(e.target.value);
  };

  const handleFinshEdit = () => {
    const newData = data.map((ele) => {
      if (ele.id === editId) {
        ele.todo = editValue;
        return ele;
      } else {
        return ele;
      }
    });
    setIsEdit(false);
    setData(newData);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/todos").then((res) =>
        res.json()
      );
      const newArry = [...data, ...response.todos];
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
          className={`btn btn-primary ml-3 ${
            addValue.trim() === "" ? "disabled" : ""
          }`}
          onClick={() => {
            handleAdd(addValue);
          }}
        >
          {" "}
          Add to todo
        </button>
      </div>
      <div className="border m-10">
        <ul className="list-[upper-roman] inline-block mt-3 w-full">
          {" "}
          <div className="m-2">
            {data.map((item) =>
              isEdit ? (
                editId === item.id ? (
                  <div
                    key={item.id}
                    className="flex flex-row w-auto justify-between"
                  >
                    <input
                      type="text"
                      value={editValue}
                      className="border w-max rounded-2xl"
                      onChange={(e) => handleChangeOfEdit(e)}
                    />
                    <div className="w-auto mr-20">
                      <button
                        onClick={() => handleFinshEdit(item)}
                        className="btn btn-primary m-2"
                      >
                        {" "}
                        OK
                      </button>
                    </div>
                  </div>
                ) : (
                  <li
                    className="flex flex-row w-auto justify-between"
                    key={item.id}
                  >
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
                        onClick={() => handleEdite(item)}
                        className="btn btn-primary m-2"
                      >
                        {" "}
                        EDIT
                      </button>
                    </div>
                  </li>
                )
              ) : (
                <li
                  className="flex flex-row w-auto justify-between"
                  key={item.id}
                >
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
                      onClick={() => handleEdite(item)}
                      className="btn btn-primary m-2"
                    >
                      {" "}
                      EDIT
                    </button>
                  </div>
                </li>
              )
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default App;
