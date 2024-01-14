import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import classNames from "classnames";

export const TodoItem = ({
  customKey,
  todo,
  editMode,
  onDeleteClick,
  onEditClick,
  onFinishEditClick,
}) => {
  const combinedOkButtonClassName = classNames(
    !todo.trim() ? "bg-gray-400  disabled" : "bg-blue-500",
    `text-white py-2 px-4 rounded ml-3`
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
            value={todo}
            className="border w-4/5 p-2 rounded-2xl"
            onChange={onEditClick}
          />
          <div className="w-auto">
            <Button
              onClick={onFinishEditClick}
              className={combinedOkButtonClassName}
              disabled={!todo.trim()}
            >
              Finish
            </Button>
          </div>
        </div>
      ) : (
        <li
          className="flex flex-row w-auto items-center ml-2 justify-between"
          key={customKey}
        >
          {todo}
          <div className="w-auto">
            <Button
              onClick={onDeleteClick}
              className="bg-blue-500 text-white py-2 px-4 rounded m-3"
            >
              DELETE
            </Button>
            <Button
              onClick={onFinishEditClick}
              className="bg-blue-500 text-white py-2 px-4 rounded m-3"
            >
              Eidt
            </Button>
          </div>
        </li>
      )}
    </>
  );
};
