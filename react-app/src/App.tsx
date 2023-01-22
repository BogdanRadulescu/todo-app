import { useEffect, useState } from 'react';
import './App.css';
import { TodoCard, ToDoProps } from './Components/TodoCard';

function App() {
  const [cards, setCards] = useState([]);
  const fetchProps = useEffect(() => {
    fetch('/list')
         .then((response) => response.json())
         .then((data) => {
            setCards(data.map((card: any) =>
            <li key={card.id}>
              <TodoCard
                id={card.id}
                description={card.description}
                state={card.state}
                owner={card.owner} 
              />
            </li>
            ));
         })
         .catch((err) => {
            console.log(err.message);
         });
  }, []);

  return (<>
      <div>Hello React</div>
      <ul>
        {cards}     
      </ul>
    </>
  );
}

export default App;
