import React from 'react'
import Radium from 'radium'
import { padding } from './CommonStyles'

import LabourA from '../Assets/labour1.jpg'
import LabourB from '../Assets/labour2.jpg'
import LabourC from '../Assets/labour3.jpg'

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
        marginTop: padding.small,

        '@media (min-width: 1200px)': {  
            marginTop: padding.big
        },
    },

    twoImages: {
        width: 'calc(100%/2 - 1.0%)',
        alignSelf: 'center',
        height: '100%',

        '@media (min-width: 450px)': {  
            width: 'calc(100%/2 - 1.3%)'
        },
        '@media (min-width: 600px)': {  
        },
        '@media (min-width: 750px)': {  
            width: 'calc(100%/2 - 1.2%)',
        },
        '@media (min-width: 900px)': {  
            width: 'calc(100%/2 - 1.0%)'
        },
        '@media (min-width: 1200px)' : {
        },
        '@media (min-width: 1400px)' : {
            width: 'calc(100%/2 - 0.9%)'
        },
        '@media (min-width: 1700px)' : {
        }
    },

    oneImage: {
        width: '100%'
    },
}

const Labour = () => {
    return (
        <div style={styles.container}>
            <div style={styles.imgContainer} >
                <img style={styles.oneImage} alt={'One'} src={LabourA} />
            </div>
            <div style={styles.imgContainer} >
                <div style={styles.multiImageContainer}>
                    <img style={styles.twoImages} alt={'Two'} src={LabourB} />
                    <img style={styles.twoImages} alt={'Three'} src={LabourC} />
                </div>
            </div>
        </div>
    );
}

export default Radium(Labour); 