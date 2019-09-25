import React, {useState, useEffect} from 'react'
import './generate-form.css'
import {getRandom, getRandomElement, getRandomElements} from './utility'
import {top100} from './dictionary'
import RadioButtons from './Inputs/RadioButtons'
import Select from './Inputs/Select'
import TextInput from './Inputs/TextInput'

const GenerateForm = ({top, controls, setScore, color, backgroundColor}) => {
    const [formData, setFormData] = useState([]);
    const [formState, setFormState] = useState({});

    useEffect(() => {
        const data = [];

        for (let i = 0; i < controls; i++) {
            const words = getRandomElements(top100, top);
            const word = getRandomElement(words);

            data.push({
                inputType: getRandom(3),
                words,
                word
            })
        }

        setFormData(data)
    }, [controls, top]);

    const getControl = ({inputType, words, word}, i) => {
        const onChange = ({target}) => {
            const {value} = target;

            setFormState(formState => ({
                ...formState,
                [i]: value
            }));

            if (value.toLowerCase() === word.toLowerCase()) {
                setScore(score => score + 1)
            }
        };
        let input;
        const value = formState[i];
        const inputName = 'input_' + i;
        const commonProps = {
            key: i,
            onChange,
            color,
            backgroundColor
        };

        switch (inputType) {
            case 0:
                input = <RadioButtons {...commonProps} words={words} inputName={inputName} />;
                break;
            case 1:
                input = <Select {...commonProps} words={words} inputName={inputName} value={value} />;
                break;
            case 2:
            default:
                input = <TextInput {...commonProps} value={value} />;
                break;
        }

        return [
            <label className='correct-word' key={'label_' + i} htmlFor={inputName}>{word}</label>,
            input
        ]
    };

    return [
        formData.map((data, i) => getControl(data, i))
    ]
};

export default GenerateForm;
