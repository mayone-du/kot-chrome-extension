export const Button: React.VFC = () => {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log("call Button component!!", chrome);
  };
  return (
    <button onClick={handleClick} className="block p-2 m-2 mx-auto rounded border">
      Click me!
    </button>
  );
};
