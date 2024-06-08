import React, { useState, useEffect, useRef } from 'react';

function Effect() {
    const [count, setCount] = useState(0);
    const [maxCount, setMaxCount] = useState(0);

    useEffect(() => {
        document.title = `Max Count: ${maxCount}`;
    }), [maxCount];

    function addCount() {
        setCount(prevCount => {
            const newCount = prevCount + 1;
            setMaxCount(prevMaxCount => Math.max(prevMaxCount, newCount));
            return newCount;
        });
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={addCount}>Increment</button>
            <button onClick={subtractCount}>Decrement</button>
        </>
    );
}

export default Effect;
