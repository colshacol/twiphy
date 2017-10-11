import React from 'react';
import { observer } from 'mobx-react';
import SearchIcon from '@assets/search.svg';
import { Gif } from '../';
import './styles.css';

type Props = {
  value: string,
  onChange: Function,
}

// TODO: Hold search input state here.
const SearchBar = observer((props: Props) => {
  return (
    <div styleName='SearchBar'>
      <input
        styleName='input'
        placeholder='search gifs'
        value={props.value}
        onChange={props.onChange}
      />
      <SearchIcon styleName='search-icon' width={16} height={16}/>
    </div>
  );
});

export default SearchBar;
