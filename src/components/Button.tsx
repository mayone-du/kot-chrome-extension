export const Button: React.VFC = () => {
  const handleClick = () => {
    chrome.scripting.executeScript({
      target: { tabId: 2, allFrames: true },
      func: () => {
        // eslint-disable-next-line no-console
        console.log("Button Clicked!!");
        return;
      },
    });
  };
  return (
    <button onClick={handleClick} className="block p-2 m-2 mx-auto rounded border">
      Click me!
    </button>
  );
};
