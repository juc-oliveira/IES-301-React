import App1 from './Components/App1';
import { Link } from "react-router-dom";

export default function Atv03() {
    return(
        <>
            <h1>Atividade 03</h1>
            <App1 />
            <br />
            <Link to="/">Retornar a página inicial</Link>
        </>
    );
}