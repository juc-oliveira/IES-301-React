import ComponentsAula06 from './Components/ComponentsAula06';
import { Link } from "react-router-dom";

export default function Atv05() {
    return(
        <>
            <h1>Atividade 05</h1>
            <ComponentsAula06 />
            <br />
            <Link to="/">Retornar a página inicial</Link>
        </>
    );
}