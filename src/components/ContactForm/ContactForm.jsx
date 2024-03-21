import { Formik } from 'formik';
import { addContacts } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { updateListContacts } from '../../Redux/store';
import { useSelector } from 'react-redux';
import {
  StyledForm,
  ButtonForm,
  Label,
  StyledField,
} from './ContactForm.styled';
import { useEffect } from 'react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts);
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    dispatch(addContacts(values));
    dispatch(updateListContacts({ filter: '', contacts }));
  };
  useEffect(() => {
    dispatch(updateListContacts({ contacts: contacts }));
  }, [contacts, dispatch]);
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <StyledForm>
        <Label>
          Name
          <br />
          <StyledField
            type="text"
            name="name"
            pattern="^[A-Za-z\s]+"
            placeholder="Please enter only letters."
            required
          />
        </Label>
        <br />
        <Label>
          Number
          <br />
          <StyledField
            type="tel"
            name="number"
            pattern="[0-9]{8,}"
            required
            placeholder="Please enter 8 digits."
          />
        </Label>
        <br />
        <ButtonForm type="submit">Add contact</ButtonForm>
      </StyledForm>
    </Formik>
  );
};
