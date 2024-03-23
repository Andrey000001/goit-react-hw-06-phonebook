import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
export const ContactList = () => {
  const contacts = useSelector(({ contacts }) => contacts);
  const value = useSelector(({ filter }) => filter.toLowerCase().trim());

  const result = [...contacts].filter(({ name }) =>
    name.toLowerCase().trim().includes(value)
  );

  return (
    <ul>
      {result.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
