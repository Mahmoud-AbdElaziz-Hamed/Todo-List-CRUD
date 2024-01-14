import { Input } from "../Input";
import { Button } from "../Button";
import classNames from "classnames";

export const AddTodo = ({ onInputChange, addValue, handleAddClick }) => {
  const combinedAddButtonClassName = classNames(
    !addValue.trim() ? "bg-gray-400" : "bg-blue-500",
    `text-white py-2 px-4 rounded ml-3`
  );

  return (
    <div className="m-3">
      <label className="m-3 block">- Add you want to do to todo list</label>
      <Input
        hasLabel={true}
        labelText="Add you want to do todo list"
        type="text"
        value={addValue}
        onChange={(e) => onInputChange(e)}
        className={"border ml-7 w-3/4 p-2 rounded-2xl"}
      />
      <Button
        onClick={() => {
          handleAddClick(addValue);
        }}
        className={combinedAddButtonClassName}
        disabled={!addValue.trim()}
      >
        Add to todo
      </Button>
    </div>
  );
};
