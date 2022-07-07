import Banner from './components/Banner';
import './App.css';
import Card from "./components/Card";
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [programs, setPrograms] = useState([]);
 
  const [page, setPage] = useState(1);

useEffect(function(){
  axios.get(`https://staging.wherewego.org/api/programs?limit=12&page=${page}`)
    .then(res => {
      setPrograms(res.data);
    })
    .catch(err => console.error);
},[page])

const cards = programs.map(program => {
  return (
      <Card
          key={program._id}
          program={{...program}} 
          
      />
  )
})
  return (
    <div className="App">
      <header className="App__header">
        <div className="container">
          <img
            src="https://res.cloudinary.com/wherewego/image/upload/v1633703966/lntpxfldojazr0wkpdhb.png"
            alt="WhereWeGo logl"
          />
          <nav>
            <a target="_blank" rel="noreferrer" href="https://wherewego.org">
              Learn more
            </a>
          </nav>
        </div>
      </header>
      <Banner />
      <section className='cards'>
        {cards}
        {page > 1 && <button onClick={() => setPage(page - 1) } className="cards--previous">Load Previous</button>}
        {page < 10 && <button onClick={() => setPage(page + 1) } className="cards--more">Load More</button>}
      </section> 
    </div>
  );
}

export default App;
