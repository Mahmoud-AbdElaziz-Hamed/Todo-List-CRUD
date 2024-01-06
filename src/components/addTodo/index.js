import Input from "../input";
import Button from "../button";

const AddTodo = ({ onChangeChangedInput, addValue, handleAdd }) => {
  console.log(addValue);
  console.log(addValue.trim() === "");
  return (
    <>
      <div className="m-3">
        <label className="m-2 block">Add you want to do to todo list</label>
        <Input
          hasLabel={true}
          labelText="Add you want to do todo list"
          type="text"
          value={addValue}
          onChange={(e) => onChangeChangedInput(e)}
          className={"border w-96 h-20"}
        />
        <Button
          onClick={() => {
            handleAdd(addValue);
          }}
          text="Add to todo"
          className={`${
            addValue.trim() === "" ? "bg-gray-400" : "bg-blue-500"
          } text-white py-2 px-4 rounded ml-3 `}
          disabled={addValue.trim() === ""}
        />
      </div>
    </>
  );
};

export default AddTodo;
