import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

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

  const handleEdite = (index) => {
    const newData = data.slice();
    newData[index].isEditMode = true;
    setData(newData);
  };

  const handleChangeOfEdit = (e, index) => {
    const newData = data.slice();
    newData[index].todo = e.target.value;
    setData(newData);
  };

  const handleFinshEdit = (index) => {
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
          Add to todo
        </button>
      </div>
      <div className="border m-10">
        <ul className="list-[upper-roman] inline-block mt-3 w-full">
          <div className="m-2">
            {data.map((item, index) =>
              item.isEditMode ? (
                <div
                  key={item.id}
                  className="flex flex-row w-auto justify-between"
                >
                  <input
                    type="text"
                    value={item.todo}
                    className="border w-max rounded-2xl"
                    onChange={(e) => handleChangeOfEdit(e, index)}
                  />
                  <div className="w-auto mr-20">
                    <button
                      onClick={() => handleFinshEdit(index)}
                      className="btn btn-primary m-2"
                    >
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
                      DELETE
                    </button>
                    <button
                      onClick={() => handleEdite(index)}
                      className="btn btn-primary m-2"
                    >
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
