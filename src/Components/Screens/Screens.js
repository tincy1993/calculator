import React from 'react';
import ResultScreen from './ResultScreen';
import ComputationScreen from './ComputationScreen';

const Screen = (props) => {
    return (
        <>
            <div className="screen">
                <ResultScreen>{props.result}</ResultScreen>
                <ComputationScreen>{props.equation}</ComputationScreen>
            </div>
        </>
    )
}

export default Screen;