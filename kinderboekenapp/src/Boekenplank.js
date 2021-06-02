import React from 'react';

import Boek from './Boek';

const Boekenplank = props => {
    return(
        <article className="boekenplank-container">
            <ul className="boekenplank">
                <Boek />
                <Boek />
                <Boek />
                <Boek />
            </ul>
        </article>
    );
}

export default Boekenplank;