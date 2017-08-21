import React from 'react';
import { observer } from 'mobx-react';
import { Gif } from '../';
import './styles.css';

type Props = {
  value: string,
  onChange: Function,
}

// class SearchBarr {

// }

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
    </div>
  );
});

export default SearchBar;
