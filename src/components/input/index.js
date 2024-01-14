export const Input = ({ type, value, onChange, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};
