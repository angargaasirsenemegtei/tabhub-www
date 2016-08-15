import CSSModules from 'react-css-modules'
import {container, jumbotron, buttons} from 'bootstrap-css'
import React from 'react'
import ReactDOM from 'react-dom'
import DevTool from 'mobx-react-devtools'
import {observer} from 'mobx-react'

import Users from './Users'
import Institutions from './Institutions'
import NavigationBar from './NavigationBar'

import styles from './Tabhub.css'
Object.assign(styles, jumbotron, container, buttons)

@observer
class Tabhub extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <DevTool/>
        <NavigationBar/>
        <div className={styles.appHeading}>
          <h1>Tabhub</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CSSModules(Tabhub, styles)
