import React from 'react';

// utils.js
function getImageUrl(person) {
    return 'https://i.imgur.com/' + person.imageId + '.jpg';
}

// data.js
const people = [
    {
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
    },
    {
        id: 1,
        name: 'Mario José Molina-Pasquel Henriquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
    },
    {
        id: 2,
        name: 'Mohamed Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    },
    {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids',
        imageId: 'IOjWm71'
    },
    {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
    }
];

// Avatar.js
function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

// Profile.js
function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

function Profile() {
    return (
        <Card>
            {people.map(person => (
                <div key={person.id}>
                    <Avatar
                        size={100}
                        person={person}
                    />
                    <p>
                        <b>{person.name}:</b>
                        {' ' + person.profession + ' '}
                        known for {person.accomplishment}
                    </p>
                </div>
            ))}
        </Card>
    );
}

// TodoList.js
const today = new Date();
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

function Cup({ guest }){
    return <h2>Tea cup for guest #{guest}</h2>;
}

// App.js
export default function ComponentsAula04() {
    return (
        <section>
            <Profile />
            <TodoList />
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
        </section>
    );
}
