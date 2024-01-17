import { Button } from "../Button";
import { Input } from "../Input";

export const TodoItem = ({
  todo,
  editMode,
  onDeleteClick,
  onEditChange,
  onEditClick,
}) => {
  return (
    <>
      {editMode ? (
        <div className="flex flex-row w-auto justify-between mb-1">
          <Input
            hasLabel={false}
            type="text"
            value={todo}
            onChange={onEditChange}
          />
          <div className="w-auto">
            <Button onClick={onEditClick} disabled={!todo.trim()}>
              Finish
            </Button>
          </div>
        </div>
      ) : (
        <li className="flex flex-row w-auto items-center ml-2 justify-between">
          {todo}
          <div className="w-auto">
            <Button onClick={onDeleteClick}>DELETE</Button>
            <Button onClick={onEditClick}>Edit</Button>
          </div>
        </li>
      )}
    </>
  );
};
