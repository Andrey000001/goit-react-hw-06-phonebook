import { Formik } from 'formik';
import { addContact } from '../../Redux/contactSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import {
  StyledForm,
  ButtonForm,
  Label,
  StyledField,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    dispatch(addContact({ ...values, id: nanoid() }));
  };

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
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
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
