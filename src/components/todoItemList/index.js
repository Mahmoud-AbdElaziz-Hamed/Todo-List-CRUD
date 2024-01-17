import { TodoItem } from "../TodoItem";
export const TodoItemList = ({
  data,
  onEditClick,
  onEditChange,
  onDeleteClick,
}) => {
  return (
    <div className="border m-10">
      <ul className="inline-block mt-3 w-full">
        <div className="m-2">
          {data.map((item) => (
            <TodoItem
              editMode={item.isEditMode}
              key={item.id}
              todo={item.todo}
              onEditChange={(e) => onEditChange(e, item.id)}
              onEditClick={() => onEditClick(item.id)}
              onDeleteClick={() => {
                onDeleteClick(item.id);
              }}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};
