import Input from "../input";
import Button from "../button";

const AddTodo = ({ onChangeChangedInput, addValue, handleAdd }) => {
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
          className={`btn btn-primary ml-3 ${
            addValue.trim() === "" ? "disabled" : ""
          }`}
        />
      </div>
    </>
  );
};

export default AddTodo;
