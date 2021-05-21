import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

function BubblesPage(props) {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/bubbles')
        .then((res) => {
            setBubbles(res.data);
        })
        .catch(err => console.log({err: err}));
    }, []);

    return(
        <div>
            <h3> Current Bubbles</h3>
           
        </div>
    )
}

export default BubblesPage;