import React from 'react'

const Score = ({score}) => (
    <h1 id="Score">
        {
            Math.round(score)
        }%
    </h1>
);

export default Score;
