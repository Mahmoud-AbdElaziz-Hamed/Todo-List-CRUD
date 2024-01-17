export const Button = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white py-2 px-4 rounded m-2 ${
        disabled ? "bg-gray-400" : "bg-blue-500"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
