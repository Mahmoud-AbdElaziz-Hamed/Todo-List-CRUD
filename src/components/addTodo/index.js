import React from "react";
import Input from "../input";
import Button from "../button";
import classNames from "classnames";

const AddTodo = ({ onChangeChangedInput, addValue, handleAdd }) => {
  const combinedAddButtonClassName = classNames(
    addValue.trim() === "" ? "bg-gray-400" : "bg-blue-500",
    `text-white py-2 px-4 rounded ml-3 `,
    { disabled: addValue.trim() === "" }
  );

  return (
    <>
      <div className="m-3">
        <label className="m-3 block ">- Add you want to do to todo list</label>
        <Input
          hasLabel={true}
          labelText="Add you want to do todo list"
          type="text"
          value={addValue}
          onChange={(e) => onChangeChangedInput(e)}
          className={"border ml-7 w-3/4 p-2 rounded-2xl"}
        />
        <Button
          onClick={() => {
            handleAdd(addValue);
          }}
          text="Add to todo"
          className={combinedAddButtonClassName}
          disabled={addValue.trim() === ""}
        />
      </div>
    </>
  );
};

export default AddTodo;
