import { Avatar, Rating } from '@mui/material'
import React, {useState} from 'react'
 
import './Feedback.css'


function Feedback(props) {
    return(
        <div className="Feedback">
        <div className="innerContainer">
            <Avatar 
            src={props.image}
            sx={{ width: 150, height: 150 }}
            />
            <h4>{props.review}</h4>
            <p>{props.user} - {props.location}</p>
            <Rating 
            value ="4" 
            readOnly
            />
        </div>
                              
        </div>
       )
}
    

export default Feedback 



// const [bobo, setBobo] = useState({})
 
//     React.useEffect(function() {
//         fetch('http://www.omdbapi.com/?i=tt3896198&apikey=67eda881')
//         .then(response => response.json())
         
//         .then(data => setBobo(data))
//         .catch(err => console.error(err));
//     }, []) 
  
//   return (
//     <>
//         <pre>{JSON.stringify(bobo, null, 2)}</pre>
//        <img src={bobo.Poster} alt="" />
//     </>
//   )