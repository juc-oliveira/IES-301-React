import React, { useState, useEffect } from 'react';

function Letreiro() {
    const texto = "Livrai-me de todo o mal. Amém.";
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < texto.length) {
                setDisplayText(texto.substring(0, index + 1)); // Atualiza o texto completo até o índice atual
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, []);

    return <h1>{displayText}</h1>;
}

export default Letreiro;
