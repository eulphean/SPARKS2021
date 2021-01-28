import React from 'react'
import Radium from 'radium'
import { padding } from './CommonStyles'

import thanks from '../Assets/thanks.jpg'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: padding.big,

        '@media (min-width: 768px)': {  
            marginTop: padding.veryBig,
        },


        '@media (min-width: 1024px)': {  
            marginTop: padding.extraBig,
        },

        '@media (min-width: 1200px)': {  
            marginTop: padding.huge,
        },
    },

    imgContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    oneImage: {
        width: '100%',
        border: 'none'
    },
}

const Thanks = () => {
    return (
        <div style={styles.container}>
            <div style={styles.imgContainer} >
                <img style={styles.oneImage} alt={'One'} src={thanks} />
            </div>
        </div>
    );
}

export default Radium(Thanks); 