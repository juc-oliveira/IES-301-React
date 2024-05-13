import React, { useState, useEffect } from 'react';
import './ContadorDePessoas.css'; // Importe o arquivo CSS
import icon_woman from './Imagens/icon_woman.png';
import icon_man from './Imagens/icon_man.png';
import icon_reset from './Imagens/icon_reset.png';

export default function MyApp() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [total, setTotal] = useState(0);

  // Atualiza o total sempre que homens ou mulheres forem modificados
  useEffect(() => {
    setTotal(homens + mulheres);
  }, [homens, mulheres]);

  const resetValues = () => {
    setHomens(0);
    setMulheres(0);
    setTotal(0);
  };

  return (
    <div className="container">
        <img src={icon_reset} className='reset' alt="icon_reset" onClick={resetValues} />
      <div className='total'>  
        <h2>Total</h2>
        <div className="counter-box">{total}</div>
      </div>
      <div className="counter">
      <div>
      <img src={icon_man} alt="icon_man" />
        <div className="counter-buttons">
          <MyButton count={homens} setCount={setHomens} />
          <MyButtonMenos count={homens} setCount={setHomens} />
        </div>
        <h3>Homens</h3>
        <div className="counter-box">
          <div>{homens}</div>
        </div>
      </div>
      <div>
        <img src={icon_woman} alt="icon_woman" />
        <div className="counter-buttons">
          <MyButton count={mulheres} setCount={setMulheres} />
          <MyButtonMenos count={mulheres} setCount={setMulheres} />
        </div>
        <h3>Mulheres</h3>
        <div className="counter-box">
          <div>{mulheres}</div>
        </div>
      </div>

    </div>
    </div>
  );
}

function MyButton({ count, setCount }) {
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

function MyButtonMenos({ count, setCount }) {
  function handleClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>-</button>
    </div>
  );
}
