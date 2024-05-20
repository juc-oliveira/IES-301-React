/*export default function Avatar(){
    return(
        <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
    );
}*/
/*
export default function Avatar(){
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return(
        <img className="avatar" src={avatar} alt={description} />
    );
}
*/
import { getImageUrl } from "./utils";

export default function Avatar({ person, size}){
    return(
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}