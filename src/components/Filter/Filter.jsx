import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContacts } from '../../Redux/filterSlice';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const handleKeyDown = e => {
    const { value } = e.target;
    setFilter(value);
    dispatch(updateContacts(value.toLowerCase().trim()));
  };

  return (
    <label>
      Find contacts by name
      <br />
      <input
        name="findName"
        type="text"
        value={filter}
        onChange={handleKeyDown}
      />
    </label>
  );
};
