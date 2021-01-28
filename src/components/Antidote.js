import React from 'react'
import Radium from 'radium'
import { padding } from './CommonStyles'

import AntidoteA from '../Assets/antidote1.jpg'
import AntidoteB from '../Assets/antidote2.jpg'
import AntidoteC from '../Assets/antidote3.jpg'
import AntidoteD from '../Assets/antidote4.jpg'

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

    multiImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        border: 'none',
        marginTop: padding.verySmall,

        '@media (min-width: 1024px)': {  
            marginTop: padding.small,
        },
    },

    threeImages: {
        display: 'flex',
        width: '32.5%'
    },

    oneImage: {
        width: '100%'
    }
}

const Antidote = () => {
    return (
        <div style={styles.container}>
            <div style={styles.imgContainer} >
                <img style={styles.oneImage} alt={'One'} src={AntidoteA} />
            </div>
            <div style={styles.imgContainer} >
                <div style={styles.multiImageContainer}>
                    <img style={styles.threeImages} alt={'Two'} src={AntidoteB} />
                    <img style={styles.threeImages} alt={'Three'} src={AntidoteC} />
                    <img style={styles.threeImages} alt={'Four'} src={AntidoteD} />
                </div>
            </div>
        </div>
    );
}

export default Radium(Antidote); 