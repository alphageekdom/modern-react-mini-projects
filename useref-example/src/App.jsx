import { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const submit = () => {
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    inputRef.current.style.backgroundColor = 'red';
    inputRef.current.style.color = 'white';
    inputRef.current.setAttribute('placeholder', 'Updated...');
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-gray-100 p-6 text-center shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">userRef Example</h2>

      <input
        type="text"
        placeholder="Type Something..."
        className="w-full rounded-lg border p-2"
        ref={inputRef}
      />

      <button
        onClick={submit}
        className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default App;
