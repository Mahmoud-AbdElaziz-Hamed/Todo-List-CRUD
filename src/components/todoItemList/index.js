import TodoItem from "../todoItem";

const TodoItemList = ({
  data,
  handleFinishEdit,
  handleChangeOfEdit,
  handleDelete,
  handleEdit,
}) => {
  return (
    <>
      <div className="border m-10">
        <ul className="list-[upper-roman] inline-block mt-3 w-full">
          <div className="m-2">
            {data.map((item, index) => (
              <TodoItem
                editMode={item.isEditMode}
                key={item.id}
                itemTodo={item.todo}
                value={item.todo}
                onClickchangeOfEdit={(e) => handleChangeOfEdit(e, index)}
                onClickFinishEdit={() => handleFinishEdit(index)}
                onClickDelete={() => {
                  handleDelete(item.id);
                }}
                onClickEdit={() => handleEdit(index)}
              />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default TodoItemList;
