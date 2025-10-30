const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        className="w-full rounded-lg border p-2"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
