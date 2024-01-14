import { TodoItem } from "../TodoItem";
export const TodoItemList = ({
  data,
  toggleEditMode,
  handleEditChange,
  handleDelete,
}) => {
  return (
    <>
      <div className="border m-10">
        <ul className="inline-block mt-3 w-full">
          <div className="m-2">
            {data.map((item) => (
              <TodoItem
                editMode={item.isEditMode}
                key={item.id}
                todo={item.todo}
                onEditClick={(e) => handleEditChange(e, item)}
                onFinishEditClick={() => toggleEditMode(item)}
                onDeleteClick={() => {
                  handleDelete(item.id);
                }}
                onClickEdit={() => toggleEditMode(item)}
              />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};
