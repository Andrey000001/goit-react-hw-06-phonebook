import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
export const ContactList = () => {
  const caseContacts = useSelector(({ contacts }) => contacts);

  return (
    <ul>
      {caseContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
