/*
import TodoList from './TodoList.js';

import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';


import Avatar from './Avatar.js';
export default function App(){
    return(
        <section>
            <Profile />
            <TodoList />
            <Avatar />
        </section>
    );
}

*/
/*
import{getImageUrl} from './utils.js';

function Avatar({ person, size }){
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


import Avatar from './Avatar.js';

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}
export default function Profile(){
    return(
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lenna',
                    imageId: 'OkS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />

        </Card>
    );
}
*/

import {people} from './data.js';
import { getImageUrl } from './utils.js';

export default function List(){
    const chemists = people.filter(person => person.profession === 'chemist');
    const listItems = chemists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        
    );
    return <ul>{listItems}</ul>;
}