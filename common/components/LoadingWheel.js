import React from 'react';

const LoadingWheel = ({ context }) => {
    render(
        <div className="loadingWheelContainer">
            <div className="loadingWheel"></div>
            <div className="message">{context}</div>
        </div>
    )
}

export default LoadingWheel;