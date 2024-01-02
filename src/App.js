import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const App = () => {
  // const todoList = ["work", "sleep", "palying"];
  const [data, setData] = useState([]);
  const [isedite, setIsEdite] = useState("hidden block");
  const [addvalue, setAddvalue] = useState("");
  const [eidtValue, setEidtValue] = useState("");
  const [idOfEdite, setidOfEdite] = useState(-1);

  const handelDelete = (id) => {
    const upateDatAfterDelete = data.filter((item) => {
      return item.id !== id;
    });
    console.log("upateDatAfterDelete: ", upateDatAfterDelete);
    setData(upateDatAfterDelete);
  };
  const handelInputChange = (e) => {
    setAddvalue(e.target.value);
  };
  const handelAdd = (value) => {
    setData([...data, { id: data.length + 1, todo: addvalue }]);
    setAddvalue("");
  };

  const handelEdite = (id) => {
    setIsEdite("m-3");
    setidOfEdite(id);
  };

  const handelInputEidt = (e) => {
    setEidtValue(e.target.value);
  };

  const finishEdit = (valueEdite) => {
    const editedArry = [...data];
    const itemToEdit = editedArry.find((item) => item.id === idOfEdite);
    console.log(itemToEdit);
    console.log(valueEdite);

    itemToEdit
      ? (itemToEdit.todo = valueEdite)
      : (itemToEdit.todo = itemToEdit.todo);
    setData(editedArry);
    setEidtValue("");
    setIsEdite("hidden block");
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/todos").then((res) =>
        res.json()
      );

      const newarry = [...data, ...response.todos];
      // console.log(newarry);
      setData(newarry);
    };
    getData();
  }, []);

  return (
    <>
      <div className=" m-3">
        <label className=" m-2 block">Insert your work</label>
        <input
          type="text"
          value={addvalue}
          onChange={(e) => handelInputChange(e)}
          className="border w-96 h-20 "
        />
        <button
          className=" btn btn-primary ml-3"
          onClick={() => {
            handelAdd(addvalue);
          }}
        >
          {" "}
          Add to todo
        </button>
      </div>
      <div className={isedite}>
        {" "}
        <label className=" m-2 block">Edite your Todo</label>
        <input
          type="text"
          className="border w-96 h-20 "
          value={eidtValue}
          onChange={(e) => handelInputEidt(e)}
        />
        <button
          onClick={() => finishEdit(eidtValue)}
          className="btn btn-primary ml-3 w-32"
        >
          edit
        </button>
      </div>
      <div className="border rounded-2xl m-10">
        <ul className="list-[upper-roman] inline-block mt-3 w-full">
          {" "}
          {data.map((iteam) => (
            <div className="m-2" key={iteam.id}>
              <li className="flex flex-row w-auto justify-between">
                {iteam.todo}
                <div className="w-auto mr-20">
                  <button
                    className=" btn btn-primary m-2"
                    onClick={() => {
                      handelDelete(iteam.id);
                    }}
                  >
                    {" "}
                    DELETE
                  </button>
                  <button
                    onClick={() => handelEdite(iteam.id)}
                    className=" btn btn-primary m-2"
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
