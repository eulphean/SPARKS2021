import React from 'react'
import Radium from 'radium'
import { color, fontSize, padding } from './CommonStyles'
import Header from './Header'
import Divider from './Divider'
import { ReactComponent as Momimsafe } from '../Assets/momimsafe.svg'
import { ReactComponent as Live } from '../Assets/live.svg'
import WebFrame from './WebFrame'
import Antidote from './Antidote'
import Labour from './Labour'
import Thanks from './Thanks'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: color.pureTeal,
    borderRadius: fontSize.extraSmall,
    width: '100%',
    height: '100%',
    overflow: 'scroll',

    '@media (min-width: 768px)': {  
      margin: padding.big
    },

    '@media (min-width: 1024px)': {  
      // no change.
      margin: padding.huge
    },
    '@media (min-width: 1200px)': {  
      // no change.
      margin: '8%',
      borderStyle: 'dotted',
      borderColor: color.sunLight,
      borderWidth: '3px'
    }
  },

  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
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

  logoStyle: {
    width: '70%',
    height: '70%',

    '@media (min-width: 600px)': {  
      
    },

    '@media (min-width: 900px)': {  
        // no change.
        
    },
    '@media (min-width: 1200px)': {  
      // no change.
      width: '40%',
      height: '40%'
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }

  render() {
    return (
      <div style={styles.container}>
          <Header />
          <Divider />
          <div style={styles.logoWrapper}>
            <Momimsafe style={styles.logoStyle} />
          </div>
          <Divider />
          <WebFrame title={"Momimsafe"} url="https://momimsafe.live" />
          <Divider />
          <div style={styles.logoWrapper}>
            <Live style={styles.logoStyle} />
          </div>
          <Divider />
          <WebFrame title={"Printer"} url="https://momimsafe.live/#/printer" />
          <Divider />
          <Antidote />
          <Divider />
          <Labour />
          <Divider />
          <Thanks />
      </div>
    );
  }
}

export default Radium(App);
