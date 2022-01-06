import React from 'react';
import Loader from '../../../assets/image/load.gif'
import './Preloder.css'
function Preloder(props) {
    return (
        <div className="preloder">
         <img src={Loader} />

        </div>
    );
}

export default Preloder;