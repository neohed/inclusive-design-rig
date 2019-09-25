import React from 'react'

const TextInput = ({value = '', onChange, color, backgroundColor}) => (
    <span>
        <input
            style={{color, backgroundColor}}
            type="text"
            value={value}
            onChange={onChange}
        />
    </span>
);

export default  TextInput;
