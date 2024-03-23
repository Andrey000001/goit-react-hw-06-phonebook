import { FaGenderless } from 'react-icons/fa';
import { Item, Name, Number, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contactSlice';
const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const handleDelete = ids => {
    dispatch(deleteContact(ids));
  };

  return (
    <Item>
      <FaGenderless />
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button onClick={() => handleDelete(id)}>Delete</Button>
    </Item>
  );
};
export default ContactItem;
