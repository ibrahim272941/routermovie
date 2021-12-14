import React from 'react'

const Time = () => {
    return (
      <div>
        <h1>{new Date().toLocaleTimeString()}</h1>
      </div>
    );
}

export default Time

