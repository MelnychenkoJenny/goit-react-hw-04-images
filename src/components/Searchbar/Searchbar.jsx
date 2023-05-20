import { Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  FormStyle,
  Header,
  Input,
  MainTitle,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (value, actions) => {
    if (value.searchValue.trim() === '') {
      toast.error(
        'The search field cannot be empty. Please enter a search query.'
      );
      return;
    }
    onSubmit(value.searchValue.trim());
    actions.resetForm();
  };
  return (
    <Header>
      <MainTitle>Image search</MainTitle>
      <Formik initialValues={{ searchValue: '' }} onSubmit={handleSubmit}>
        <FormStyle>
          <Input
            name="searchValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Button type="submit">
            <FcSearch />
          </Button>
        </FormStyle>
      </Formik>
    </Header>
  );
};
