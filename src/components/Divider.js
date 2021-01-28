import React from 'react'
import Radium from 'radium'

import { color, padding } from './CommonStyles'

const styles = {
  container: {
      borderColor: color.divider,
      borderWidth: '1px',
      borderStyle: 'solid',
      marginLeft: '26%',
      marginRight: '26%',
      marginTop: padding.big,

      '@media (min-width: 768px)': {  
        marginTop: padding.veryBig
      },

      '@media (min-width: 1024px)': {  
            // no change.
        marginTop: padding.extraBig
      },
       
      '@media (min-width: 1200px)': {  
            // no change.
        marginTop: padding.huge,
        
      }
  }
};

const Divider = () => {
    return (
        <div style={styles.container} />
    )
}

export default Radium(Divider); 