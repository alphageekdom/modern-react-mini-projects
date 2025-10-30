import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

const NoteForm = ({ notes, setNotes }) => {
  //   const [title, setTitle] = useState('');
  //   const [priority, setPriority] = useState('Medium');
  //   const [category, setCategory] = useState('Work');
  //   const [description, setDescription] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title || !formData.description) return;

    // Create note object
    const newNote = { id: Date.now(), ...formData };

    // Add notes to state
    setNotes([newNote, ...notes]);

    // Reset form data
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="cursor-pointer-hover:bg-purple-200 mb-4 w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-purple-800 transition hover:border-purple-300"
      >
        {isFormVisible ? 'Hide Form ✖️' : 'Add New Note ➕'}
      </button>

      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title "
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'High', label: '🔴 High' },
              { value: 'Medium', label: '🟠 Medium' },
              { value: 'Low', label: '🟢 Low' },
            ]}
          />

          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: '📁 Work' },
              { value: 'Personal', label: '🏠 Personal' },
              { value: 'Ideas', label: '💡 Ideas' },
            ]}
          />

          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button className="hover:bg-purple600 w-full cursor-pointer rounded-lg bg-purple-500 py-2 text-white">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
