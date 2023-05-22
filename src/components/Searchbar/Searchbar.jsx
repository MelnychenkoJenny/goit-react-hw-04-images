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
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error(
        'The search field cannot be empty. Please enter a search query.'
      );
      return;
    }
    onSubmit(searchQuery.trim());
    setSearchQuery('');
  };

  return (
    <Header>
      <MainTitle>Image search</MainTitle>
      <FormStyle onSubmit={handleSubmit}>
        <Input
          name="searchValue"
          value={searchQuery}
          onChange={handleQueryChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <Button type="submit">
          <FcSearch />
        </Button>
      </FormStyle>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
