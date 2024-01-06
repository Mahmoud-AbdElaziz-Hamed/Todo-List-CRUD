const Button = ({ onClick, className, text, disabled }) => {
  return (
    <>
      <button onClick={onClick} className={className} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default Button;
