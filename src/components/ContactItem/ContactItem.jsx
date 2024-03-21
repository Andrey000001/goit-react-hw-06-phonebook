import { FaGenderless } from 'react-icons/fa';
import { Item, Name, Number, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../Redux/store';

const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(id));
  };

  return (
    <Item>
      <FaGenderless />
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button onClick={() => handleDelete()}>Delete</Button>
    </Item>
  );
};
export default ContactItem;
