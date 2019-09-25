import React from 'react'
import './radio-buttons.css'

const RadioButtons = ({words, inputName, onChange, color, backgroundColor}) => (
    <span>
        <ul style={{listStyleType: 'none', color, backgroundColor}}>
            {words.map(word => {
                const radioButtonId = inputName + '_' + word;

                return (
                    <li key={inputName + word}>
                        <input
                            type="radio"
                            id={radioButtonId}
                            name={inputName}
                            onChange={onChange}
                            value={word}
                        />
                        <label htmlFor={radioButtonId}>
                            {word}
                        </label>
                    </li>
                )
            })}
        </ul>
    </span>
);

export default RadioButtons;
