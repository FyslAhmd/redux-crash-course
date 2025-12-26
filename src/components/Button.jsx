function Button({ children, type, handler }) {
  const style =
    type === "danger"
      ? "bg-red-500 text-white py-2 px-3 rounded shadow"
      : "bg-blue-500 text-white py-2 px-3 rounded shadow";
  return (
    <button className={style} onClick={handler}>
      {children}
    </button>
  );
}

export default Button;
