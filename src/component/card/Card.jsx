import React from "react";
import '../styles/Card.css';

function Card (props)
{

    return(
        <div className='card-container'>
        <img 
            alt="Monster" 
            src={`https://robohash.org/${props.Items.id}?set=set2&size=180x180`}
        />
        <h2 key={props.Items.id}>{props.Items.username}</h2>
        <p>{props.Items.email}</p>
        </div>
    )
}

export default Card;