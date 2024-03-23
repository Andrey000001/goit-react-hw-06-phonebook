import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateListContacts } from '../../Redux/updateContacts';
export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = e => {
    const { value } = e.target;
    setFilter(value);
    dispatch(updateListContacts({ filter: value }));
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
