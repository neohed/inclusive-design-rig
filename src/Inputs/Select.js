import React from 'react'

const Select = ({words, inputName, value, onChange, color, backgroundColor}) => (
    <span>
        <select style={{color, backgroundColor}} id="title" name="title" onChange={onChange} value={value}>
            <option value={''} />
            {
                words.map(word => <option key={inputName + word} value={word}>{word}</option>)
            }
        </select>
    </span>
);

export default Select;
