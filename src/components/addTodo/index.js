import { Input } from "../Input";
import { Button } from "../Button";

export const AddTodo = ({ onInputChange, addValue, onAddClick }) => {
  return (
    <div className="ml-10">
      <label className="m-3 block">- Add you want to do to todo list</label>
      <Input
        hasLabel={true}
        labelText="Add you want to do todo list"
        type="text"
        value={addValue}
        onChange={(e) => onInputChange(e)}
      />
      <Button
        onClick={() => {
          onAddClick(addValue);
        }}
        disabled={!addValue.trim()}
      >
        Add to todo
      </Button>
    </div>
  );
};
