// Relogio.js
import React, { useState, useEffect } from 'react';

function Relogio() {
    const [agora, setAgora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setAgora(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <div>
            <h1>Olá Professora</h1>
            <h2>Agora são {agora}</h2>
        </div>
    );
}

export default Relogio;
