import React from 'react'
import Radium from 'radium'

import { color, fontFamily, fontSize, padding } from './CommonStyles.js';
import { ReactComponent as Title } from '../Assets/yearning.svg'
import sparks from '../Assets/sparks.jpg'
import siggraph from '../Assets/siggraph.jpg'
import sponsors from '../Assets/sponsors.jpg'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }, 
  mainTitle: {
    width: '100%',
    height: '100%',

    '@media (min-width: 600px)': {  
      
    },

    '@media (min-width: 900px)': {  
        // no change.
        
    },
    '@media (min-width: 1200px)': {  
      // no change.
      
    }
  },
  labels: {
    color: color.sunLight,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: fontFamily.dinalternate,
    fontSize: fontSize.weirdSmall,
    marginTop: '-' + padding.small,
    letterSpacing: '1.5px',
    textAlign: 'center',
    lineHeight: '18px',

    '@media (min-width: 768px)': {  
      fontSize: fontSize.big,
      lineHeight: '25px',
      marginTop: '-' + padding.extraBig
    },

    '@media (min-width: 1024px)': {  
        // no change.
        fontSize: fontSize.extraBig,
        lineHeight: '35px',
        marginTop: '-' + padding.huge
    },

    '@media (min-width: 1200px)': {  
      // no change.
      fontSize: fontSize.huge,
      marginTop: '-' + padding.extraHuge,
      lineHeight: '45px'
    }
  },
  labelTitle: {
    fontFamily: fontFamily.krungthep,
    textAlign: 'center',
    fontSize: fontSize.weirdSmall,
    lineHeight: '20px',
    marginTop: padding.verySmall,
    width: '80%',

    '@media (min-width: 768px)': {  
      // no change.
      marginTop: padding.big,
      lineHeight: '30px',
      marginTop: padding.small,
      fontSize: fontSize.veryBig
    },

    '@media (min-width: 900px)': {  
      // no change.
      lineHeight: '35px',
      width: '75%',
      marginTop: padding.big,
      fontSize: fontSize.extraBig
    },

    '@media (min-width: 1200px)': {  
      // no change.
      lineHeight: '35px',
      width: '60%',
      marginTop: padding.veryBig,
      fontSize: fontSize.huge
    },
  },
  sponsors: {
      marginTop: padding.small,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      border: 'none',
      width: '100%',
      height: '100%',

      '@media (min-width: 768px)': {  
        marginTop: padding.big
      },

      '@media (min-width: 1200px)': {  
        marginTop: padding.veryBig
      }
  },

  oneImage: {
    width: '100%'
  },

};

const Header = () => {
    return (
        <div style={styles.container}>
            <Title style={styles.mainTitle} />
            <div style={styles.labels}>
                <span>Amay Kataria</span>
                <span>https://momimsafe.live</span>
                <span>January 29, 2021</span>
                <div style={styles.sponsors}>
                  <img style={styles.oneImage} src={sponsors} alt={'sponsors'} />
                </div>
                <span style={styles.labelTitle}>Screenworlds: NetArt and Online Communities</span>
            </div>
        </div>
    )
}

export default Radium(Header); 