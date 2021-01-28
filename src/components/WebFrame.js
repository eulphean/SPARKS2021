import React from 'react'
import Radium from 'radium'

import { padding } from './CommonStyles'

const styles = {
  frameContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginTop: padding.big,

    '@media (min-width: 768px)': {  
      marginTop: padding.veryBig,
    },

    '@media (min-width: 1024px)': {  
        // no change.
        marginTop: padding.extraBig
        
    },
    '@media (min-width: 1200px)': {  
      // no change.
      marginTop: padding.huge
    }
  },

  webFrame: {
    width: '100%',
    border: 'none',
    height: '600px',

    '@media (min-width: 1200px)': {  
      // no change.
      height: '900px',
    }
  }
}
const WebFrame = (props) => {
    return (
      <div style={styles.frameContainer}>
        <iframe title={props.title} style={styles.webFrame} src={props.url}></iframe>
      </div>
    )
}

export default Radium(WebFrame);