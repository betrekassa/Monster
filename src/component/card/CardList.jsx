import React from 'react';
import Card from './Card';

import '../styles/CardList.css';

function CardList (props)
{
    return (
        <div className='card-list'>{props.monstersList.map(monster => <Card key={monster.id} Items={monster}/>)}</div>
    )
};

export default CardList;