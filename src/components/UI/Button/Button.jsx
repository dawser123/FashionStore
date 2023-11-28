const Button = ({ children, onClick, className,disabled }) => {
  return (
    <button
    disabled={disabled}
      onClick={onClick}
      className={`rounded bg-secondary-color font-bold uppercase shadow-2xl transition duration-300 hover:bg-secondary-color-hover text-black ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
