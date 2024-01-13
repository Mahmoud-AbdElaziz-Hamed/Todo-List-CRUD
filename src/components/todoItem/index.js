import React from "react";
import Button from "../button";
import Input from "../input";
import classNames from "classnames";

const TodoItem = ({
  customKey,
  itemTodo,
  editMode,
  onClickDelete,
  onClickEdit,
  onClickchangeOfEdit,
  value,
}) => {
  const combinedOkButtonClassName = classNames(
    value.trim() === "" ? "bg-gray-400" : "bg-blue-500",
    `text-white py-2 px-4 rounded ml-3 `,
    { disabled: value.trim() === "" }
  );
  return (
    <>
      {editMode ? (
        <div
          key={customKey}
          className="flex flex-row w-auto justify-between m-3"
        >
          <Input
            hasLabel={false}
            type="text"
            value={value}
            className="border w-4/5 p-2 rounded-2xl"
            onChange={onClickchangeOfEdit}
          />
          <div className="w-auto mr-20">
            <Button
              onClick={value.trim() === "" ? undefined : onClickEdit}
              text={"OK"}
              className={combinedOkButtonClassName}
            />
          </div>
        </div>
      ) : (
        <li
          className="flex flex-row w-auto items-center ml-2 justify-between"
          key={customKey}
        >
          {itemTodo}
          <div className="w-auto mr-10">
            <Button
              text="DELETE"
              onClick={onClickDelete}
              className="bg-blue-500 text-white py-2 px-4 rounded m-3"
            />
            <Button
              text="Eidt"
              onClick={onClickEdit}
              className="bg-blue-500 text-white py-2 px-4 rounded m-3"
            />
          </div>
        </li>
      )}
    </>
  );
};

export default TodoItem;
