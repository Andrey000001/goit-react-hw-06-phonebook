import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(({ filter }) => filter.filter);
  const contacts = useSelector(({ contacts }) => contacts.contacts);
  const result = contacts.filter(({ name }) => {
    const nameUpdate = name.toLowerCase().trim();
    return nameUpdate.includes(filter);
  });

  return (
    <ul>
      {result.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
