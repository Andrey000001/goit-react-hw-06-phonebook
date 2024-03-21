import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';

export default function App() {

  // const addUser = caseUser => {
  //   const { name } = caseUser;
  //   const id = nanoid();
  //   if (contacts.some(({ name: currentNames }) => currentNames === name)) {
  //     alert('Contact with this name already exists');
  //   } else {
  //     setContacts(prevContacts => [
  //       ...prevContacts,
  //       {
  //         id,
  //         ...caseUser,
  //       },
  //     ]);
  //   }
  // };
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
