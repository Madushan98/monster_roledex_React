import react from 'react';

import './seaqrchbox.styles.css'




export const SearchBox = ({ placeholder, handleChange }) => (

    <input className='search' type='search' placeholder={placeholder} onChange={handleChange}
    />

);
