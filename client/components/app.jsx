import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom'
import Routes from '../utils/routes'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {Routes.map((route, index) => (
              <Route 
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
              />
          ))}
        </Switch>
      </Router>
    )
  }
}
