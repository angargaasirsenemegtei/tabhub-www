import React from 'react';
import {Route, IndexRoute} from 'react-router'

import Tabhub       from './components/Tabhub'
import Users        from './components/Users'
import Institutions from './components/Institutions'

export default() => {
  return (
    <Route path="/" component={Tabhub}>
      <IndexRoute component={Tabhub}/>
      <Route path="users" component={Users}/>
      <Route path="institutions" component={Institutions}/>
    </Route>
  )
}
