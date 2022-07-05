import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function Card(){
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
      console.log(res.data[0].catalog)
      setProgram(res.data[0]);
    })
    .catch(err => console.error);
},[page])
  

  

  

  return (
    <div className="card">
      <img src={program.image.cloudinaryURL}/>
      <h3>{program.name}</h3>
      <h4>{program.institution.name}</h4>
      <h5>{program.programType}</h5>
    </div>
  );
};