import Banner from './components/Banner';
import './App.css';
import Card from "./components/Card";
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [program, setProgram] = useState({
    image: "",
    institution: "",
    name: "",
    programType: ""
  });
  const [page, setPage] =useState(1);

useEffect(function(){
  axios.get(`https://staging.wherewego.org/api/programs?limit=12&page=${page}`)
    .then(res => {
      setProgram(res.data[1]);
    })
    .catch(err => console.error);
},[page])
  
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
      <Card program={program}/>
      <button>Load More</button>
    </div>
  );
}

export default App;
