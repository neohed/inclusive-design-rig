import React, {useState} from 'react';
import './app.css';
import Collapsible from './Collapsible'
import LayoutFormGrid from './Layouts/LayoutFormGrid'
import Header from './Header'
import GenerateForm from './GenerateForm'
import Score from './Score'
import TextInput from './Inputs/TextInput'

function App() {
    const [score, setScore] = useState(0);
    const [top, setTop] = useState(10);
    const [controls, setControls] = useState(8);
    const [fontSize, setFontSize] = useState(12);
    const [color, setColor] = useState('black');
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [submitted, setSubmitted] = useState(false);

    const getValueFromEvent = ({target}) => target.value;

    const customStyle = {
        color,
        backgroundColor,
        fontSize
    };

    return (
        <div className="App">
            <Collapsible title={'Open Settings'}>
                <LayoutFormGrid>
                    <label htmlFor='TopNWords'>Top n Words</label>
                    <TextInput value={top} onChange={value => setTop(getValueFromEvent(value))} name='TopNWords' />
                    <label htmlFor='ControlsToRender'>Controls to Render</label>
                    <TextInput value={controls} onChange={value => setControls(getValueFromEvent(value))} name='ControlsToRender' />
                    <label htmlFor='fontSize'>Font Size</label>
                    <TextInput value={fontSize} onChange={value => setFontSize(getValueFromEvent(value))} name='fontSize' />
                    <label htmlFor='fontColour'>Font Colour</label>
                    <TextInput value={color} onChange={value => setColor(getValueFromEvent(value))} name='fontColour' />
                    <label htmlFor='backgroundColour'>Background Colour</label>
                    <TextInput value={backgroundColor} onChange={value => setBackgroundColor(getValueFromEvent(value))} name='backgroundColour' />
                </LayoutFormGrid>
            </Collapsible>
            <Header/>
            <LayoutFormGrid onSubmit={event => {
                event.preventDefault();
                setSubmitted(true)
            }} style={customStyle}>
                {
                    submitted
                        ? [
                            <Score key='score' score={score / controls * 100} />,
                            <button key='button' onClick={() => setSubmitted(false)}>Try Again</button>
                        ]
                        : [
                            <GenerateForm key='form' controls={controls} top={top} setScore={setScore} color={color} backgroundColor={backgroundColor} />,
                            <input key='button' type="submit" value="Submit" />
                        ]
                }
            </LayoutFormGrid>
        </div>
    );
}

export default App;
