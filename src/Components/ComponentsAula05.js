/*
function Button(){
    function handleClick(){

    }
    return(
        
        //<button onClick={handleClick}>
        //    Click me
        //</button>
        
       <button onClick={() => alert('You clicked me!')}>Click me</button>
    );
}

function AlertButton({ message, children }){
    return(
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

function Toolbar(){
    return(
        <div>
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>
        </div>
    );
}
*/
/*
function Button({ onClick, children}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    );
}
function PlayButton({ movieName }){
    function handlePlayClick(){
        alert('Playing ${movieName}!');
    }
    
    return(
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton(){
    return(
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

function Toolbar(){
    return(
        <div>
            <PlayButton movieName="Kiki's Deivery Service" />
            <UploadButton />
        </div>
    );
}


function Signup(){
    return(
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting!');
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}
*/
// ComponentsAula05.js

import React, { useState, useEffect } from 'react';
//import { createRoot } from 'react-dom/client';
import { useImmer } from 'use-immer';

const sculptureList = [
    {
        name: 'Homenaje a la Neurocirugía',
        artist: 'Marta Colvin Andrade',
        description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
        url: 'https://i.imgur.com/Mx7dA2Y.jpg',
        alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
    },
    {
        name: 'Floralis Genérica',
        artist: 'Eduardo Catalano',
        description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
        url: 'https://i.imgur.com/ZF6s192m.jpg',
        alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
    },
    {
        name: 'Eternal Presence',
        artist: 'John Woodrow Wilson',
        description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
        url: 'https://i.imgur.com/aTtVpES.jpg',
        alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
    },
    {
        name: 'Moai',
        artist: 'Unknown Artist',
        description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
        url: 'https://i.imgur.com/RCwLEoQm.jpg',
        alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
    },
    {
        name: 'Blue Nana',
        artist: 'Niki de Saint Phalle',
        description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
        url: 'https://i.imgur.com/Sd1AgUOm.jpg',
        alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
    },
    {
        name: 'Ultimate Form',
        artist: 'Barbara Hepworth',
        description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
        url: 'https://i.imgur.com/2heNQDcm.jpg',
        alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
    },
    {
        name: 'Cavaliere',
        artist: 'Lamidi Olonade Fakeye',
        description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
        url: 'https://i.imgur.com/wIdGuZwm.png',
        alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
    },
    {
        name: 'Big Bellies',
        artist: 'Alina Szapocznikow',
        description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
        url: 'https://i.imgur.com/AlHTAdDm.jpg',
        alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
    },
    {
        name: 'Terracotta Army',
        artist: 'Unknown Artist',
        description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
        url: 'https://i.imgur.com/HMFmH6m.jpg',
        alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
    },
    {
        name: 'Lunar Landscape',
        artist: 'Louise Nevelson',
        description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
        url: 'https://i.imgur.com/rN7hY6om.jpg',
        alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
    },
    {
        name: 'Aureole',
        artist: 'Ranjani Shettar',
        description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
        url: 'https://i.imgur.com/okTpbHhm.jpg',
        alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
    },
    {
        name: 'Hippos',
        artist: 'Taipei Zoo',
        description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
        url: 'https://i.imgur.com/6o5Vuyu.jpg',
        alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
    }
];

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

function Toolbar() {
    return (
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    );
}

function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting!');
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}

function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick(){
        setIndex(index + 1);
    }

    function handleMoreClick(){
        setShowMore(!showMore);
    }
/*
    function handleClick() {
        setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
    }
*/
    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>

            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <br></br>
            <br></br>
            <img src={sculpture.url} alt={sculpture.alt} />

        </>
    );
}

//imagem


/*
const root = createRoot(document.getElementById('root'))
root.render(<Image />);

function Image(){
    return(
        <img src="https://i.imgur.com/ZF6s192.jpg" alt="'Floralis Genérica' by Eduardo Catalano" />

    );
}*/

function Clock({time}){
    return(
        <>
            <h1>{time}</h1>
            <input />
        </>
    );
}

function useTime(){
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return() => clearInterval(id);
    }, []);
    return time;
}

function App(){
    const time = useTime();
    return(
        <Clock time={time.toLocaleDateString()} />
    );
}

//Form.js

function Form() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Olá');
  
    function handleSubmit(e) {
      e.preventDefault();
      setTimeout(() => {
        alert(`Você disse ${message} para ${to}`);
      }, 5000);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Para:{' '}
          <select
            value={to}
            onChange={e => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }

//MovingDot.js

function MovingDot() {
    const [position, setPosition] = useState({
      x: 0,
      y: 0
    });
    return (
      <div
        onPointerMove={e => {
          setPosition({
            x: e.clientX,
            y: e.clientY
          });
        }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }} />
      </div>
    );
  }

//Form2.js
function Form2() {
    const [person, setPerson] = useState({
      firstName: 'Barbara',
      lastName: 'Hepworth',
      email: 'bhepworth@sculpture.com'
    });
  
    function handleFirstNameChange(e) {
      setPerson({
        ...person,
        firstName: e.target.value
      });
    }
  
    function handleLastNameChange(e) {
      setPerson({
        ...person,
        lastName: e.target.value
      });
    }
  
    function handleEmailChange(e) {
      setPerson({
        ...person,
        email: e.target.value
      });
    }
  
    return (
      <>
        <label>
          Nome:
          <input
            value={person.firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Sobrenome:
          <input
            value={person.lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <label>
          E-mail:
          <input
            value={person.email}
            onChange={handleEmailChange}
          />
        </label>
        <p>
          {person.firstName}{' '}
          {person.lastName}{' '}
          ({person.email})
        </p>
      </>
    );
  }


//Counter.js

function Counter() {
    const [score, setScore] = useState(0);
  
    function increment() {
      setScore(s => s + 1);
    }
  
    return (
      <>
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => {
          increment();
          increment();
          increment();
        }}>+3</button>
        <h1>Score: {score}</h1>
      </>
    )
  }

//Form3.js

    function Form3() {
      const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
      });
    
      function handleNameChange(e) {
        setPerson({
          ...person,
          name: e.target.value
        });
      }
    
      function handleTitleChange(e) {
        setPerson({
          ...person,
          artwork: {
            ...person.artwork,
            title: e.target.value
          }
        });
      }
    
      function handleCityChange(e) {
        setPerson({
          ...person,
          artwork: {
            ...person.artwork,
            city: e.target.value
          }
        });
      }
    
      function handleImageChange(e) {
        setPerson({
          ...person,
          artwork: {
            ...person.artwork,
            image: e.target.value
          }
        });
      }
    
      return (
        <>
          <label>
            Name:
            <input
              value={person.name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Title:
            <input
              value={person.artwork.title}
              onChange={handleTitleChange}
            />
          </label>
          <label>
            City:
            <input
              value={person.artwork.city}
              onChange={handleCityChange}
            />
          </label>
          <label>
            Image:
            <input
              value={person.artwork.image}
              onChange={handleImageChange}
            />
          </label>
          <p>
            <i>{person.artwork.title}</i>
            {' by '}
            {person.name}
            <br />
            (located in {person.artwork.city})
          </p>
          <img
            src={person.artwork.image}
            alt={person.artwork.title}
          />
        </>
      );
    }

//List.js

function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

//List2.js

let initialArtists2 = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];
  
function List2() {
    const [artists, setArtists] = useState(
      initialArtists2
    );
  
    return (
      <>
        <h1>Inspiring sculptors:</h1>
        <ul>
          {artists.map(artist => (
            <li key={artist.id}>
              {artist.name}{' '}
              <button onClick={() => {
                setArtists(
                  artists.filter(a =>
                    a.id !== artist.id
                  )
                );
              }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
  
//ShapeEditor.js
let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
  ];
  
  function ShapeEditor() {
    const [shapes, setShapes] = useState(
      initialShapes
    );
  
    function handleClick() {
      const nextShapes = shapes.map(shape => {
        if (shape.type === 'square') {
          // No change
          return shape;
        } else {
          // Return a new circle 50px below
          return {
            ...shape,
            y: shape.y + 50,
          };
        }
      });
      // Re-render with the new array
      setShapes(nextShapes);
    }
  
    return (
      <>
        <button onClick={handleClick}>
          Move circles down!
        </button>
        {shapes.map(shape => (
          <div
            key={shape.id}
            style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius:
              shape.type === 'circle'
                ? '50%' : '',
            width: 20,
            height: 20,
          }} />
        ))}
      </>
    );
  }

//CounterList.js

let initialCounters = [
    0, 0, 0
  ];
  
  function CounterList() {
    const [counters, setCounters] = useState(
      initialCounters
    );
  
    function handleIncrementClick(index) {
      const nextCounters = counters.map((c, i) => {
        if (i === index) {
          // Increment the clicked counter
          return c + 1;
        } else {
          // The rest haven't changed
          return c;
        }
      });
      setCounters(nextCounters);
    }
  
    return (
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button onClick={() => {
              handleIncrementClick(i);
            }}>+1</button>
          </li>
        ))}
      </ul>
    );
  }
  
//List3.js

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

function List3() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

//List4.js

const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
  ];
  
  function List4() {
    const [list, setList] = useState(initialList);
  
    function handleClick() {
      const nextList = [...list];
      nextList.reverse();
      setList(nextList);
    }
  
    return (
      <>
        <button onClick={handleClick}>
          Reverse
        </button>
        <ul>
          {list.map(artwork => (
            <li key={artwork.id}>{artwork.title}</li>
          ))}
        </ul>
      </>
    );
  }
  

//BucketList.js

const initialList3 = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function BucketList() {
  const [myList, updateMyList] = useImmer(
    initialList3
  );
  const [yourList, updateYourList] = useImmer(
    initialList3
  );

  function handleToggleMyList(id, nextSeen) {
    updateMyList(draft => {
      const artwork = draft.find(a =>
        a.id === id
      );
      artwork.seen = nextSeen;
    });
  }

  function handleToggleYourList(artworkId, nextSeen) {
    updateYourList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}


export default function ComponentsAula05() {
    return (
        <section>
            <Toolbar />

            <hr></hr>
            <br></br>

            <Gallery />

            <hr></hr>
            <br></br>

            <Form />

            <hr></hr>
            <br></br>

            <MovingDot />

            <hr></hr>
            <br></br>
            
            <Form2 />

            <hr></hr>
            <br></br>

            <Counter />
                        
            <hr></hr>
            <br></br>
            
            <Form3 />
                        
            <hr></hr>
            <br></br>
            
            <List />

            <hr></hr>
            <br></br>
            
            <List2 />

            <hr></hr>
            <br></br>
            
            <ShapeEditor />

            <hr></hr>
            <br></br>

            <List3 />

            <hr></hr>
            <br></br>
            
            <List4 />

            <hr></hr>
            <br></br>
            
            <CounterList />

            <hr></hr>
            <br></br>
            
            <BucketList />
   
        </section>
    );
}
