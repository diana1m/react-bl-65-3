import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');
  const handleInput = e => {
    setRegion(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!region) {
      alert('Select please region ');
      return;
    }
    onSubmit(region);
    setRegion('');
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        onChange={handleInput}
        aria-label="select"
        name="region"
        required
        defaultValue="default"
      >
        <option value="default" disabled>
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
