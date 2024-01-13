import React from "react";
import TodoItem from "../todoItem";

const TodoItemList = ({
  data,
  toggleEditMode,
  handleEidtChange,
  handleDelete,
}) => {
  return (
    <>
      <div className="border m-10">
        <ul className="list-[upper-roman] inline-block mt-3 w-full">
          <div className="m-2">
            {data.map((item, id) => (
              <TodoItem
                editMode={item.isEditMode}
                key={item.id}
                itemTodo={item.todo}
                value={item.todo}
                onClickchangeOfEdit={(e) => handleEidtChange(e, id)}
                onClickFinishEdit={() => toggleEditMode(id)}
                onClickDelete={() => {
                  handleDelete(item.id);
                }}
                onClickEdit={() => toggleEditMode(id)}
              />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default TodoItemList;
