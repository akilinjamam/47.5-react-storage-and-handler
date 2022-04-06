import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getReducer } from './calculates';


const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const total = getReducer(cosmetics);

    return (
        <div>
            <h2>total : {total}</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    name={cosmetic.name}


                    phone={cosmetic.phone}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;