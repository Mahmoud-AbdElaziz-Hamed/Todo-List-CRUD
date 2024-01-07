import Button from "../button";
import Input from "../input";

const TodoItem = ({
  customKey,
  itemTodo,
  editMode,
  onClickDelete,
  onClickEdit,
  onClickchangeOfEdit,
  value,
}) => {
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
              onClick={onClickEdit}
              text={"OK"}
              className="bg-blue-500 text-white py-2 px-4 rounded"
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
