export const Button: React.VFC = () => {
  const handleClick = () => {
    console.log("call Button component!!", chrome);
  };
  return (
    <button onClick={handleClick} className="block rounded mx-auto p-2 m-2">
      Click me!
    </button>
  );
};
