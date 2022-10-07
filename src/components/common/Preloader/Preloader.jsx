import React from 'react';
import preloader from '../../../assets/images/loader.gif'

const Preloader = (props) => {
    return <div>
        <img src={preloader} style={ {width: '60px'} } />
    </div>
}

export default Preloader;