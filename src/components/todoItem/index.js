import { Button } from "../Button";
import { Input } from "../Input";

export const TodoItem = ({
  customKey,
  todo,
  editMode,
  onDeleteClick,
  onEditChange,
  onEditClick,
}) => {
  return (
    <>
      {editMode ? (
        <div
          key={customKey}
          className="flex flex-row w-auto justify-between mb-1"
        >
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
        <li
          className="flex flex-row w-auto items-center ml-2 justify-between"
          key={customKey}
        >
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
