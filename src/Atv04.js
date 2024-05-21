import ComponentsAula05 from './Components/ComponentsAula05';
import { Link } from "react-router-dom";

export default function Atv04() {
    return(
        <>
            <h1>Atividade 04</h1>
            <ComponentsAula05 />
            <br />
            <Link to="/">Retornar a página inicial</Link>
        </>
    );
}