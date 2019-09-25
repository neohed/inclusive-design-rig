import React, {useRef} from 'react'
import './collapsible.css'

const Collapsible = ({
    title,
    children
}) => {
    const content = useRef(null);

    return (
        <div>
            <button className="collapsible" onClick={() => {
                const {style, scrollHeight} = content.current;

                style.maxHeight
                    ? style.maxHeight = null
                    : style.maxHeight = scrollHeight + 'px';
            }}>
                {title}
            </button>
            <div className="content" ref={content}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Collapsible;
