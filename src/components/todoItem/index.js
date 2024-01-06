import Button from "../button";
import Input from "../input";

const TodoItem = ({
  customKey,
  itemTodo,
  editMode,
  onClickDelete,
  onClickEdit,
  onClickFinishEdit,
  onClickchangeOfEdit,
  value,
}) => {
  return (
    <>
      {editMode ? (
        <div key={customKey} className="flex flex-row w-auto justify-between">
          <Input
            hasLabel={false}
            type="text"
            value={value}
            className="border w-max rounded-2xl"
            onChange={onClickchangeOfEdit}
          />
          <div className="w-auto mr-20">
            <Button
              onClick={onClickFinishEdit}
              text={"OK"}
              className="btn btn-primary m-2"
            />
          </div>
        </div>
      ) : (
        <li className="flex flex-row w-auto justify-between" key={customKey}>
          {itemTodo}
          <div className="w-auto mr-20">
            <Button
              text="DELETE"
              onClick={onClickDelete}
              className="btn btn-primary m-2"
            />
            <Button
              text="Eidt"
              onClick={onClickEdit}
              className="btn btn-primary m-2"
            />
          </div>
        </li>
      )}
    </>
  );
};

export default TodoItem;
