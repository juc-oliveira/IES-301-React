import ComponentsAula04 from './Components/ComponentsAula04';
import { Link } from "react-router-dom";

export default function Atv03() {
    return(
        <>
            <h1>Atividade 03</h1>
            <ComponentsAula04 />
            <br />
            <Link to="/">Retornar a página inicial</Link>
        </>
    );
}