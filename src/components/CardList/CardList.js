import axios from 'axios';
import React, { useEffect, useState} from 'react';


import CardWidget from '../CardWidget/CardWidget';



const CardList = () => {
    const [users, setUsers] = useState([]);

     useEffect (() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) => 
            setUsers(res.data)
        );
     }, []);

  return (
    <div>
        {users.map((user)  => {
            return(
                <div>
                    <CardWidget />
                </div>
                
            )
        })}
    </div>
  )
}

export default CardList