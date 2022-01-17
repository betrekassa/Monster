import React from 'react';

import '../styles/Search.css';

export const Search = ({placeholder,handleChange}) =>( 
        <input className='search' 
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    );




