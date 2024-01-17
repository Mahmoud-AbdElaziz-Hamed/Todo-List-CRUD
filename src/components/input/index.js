export const Input = ({ type, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onChange}
      className="border w-3/4 p-2 rounded-2xl"
    />
  );
};
