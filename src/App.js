import {Route, Switch} from 'react-router-dom'

import Contact from './components/Contact/index'

import About from './components/About/index'

import Home from './components/Home/index'

import NotFound from './components/NotFound/index'

import Header from './components/Header/index'

import './App.css'

const App = () => (
  <div className="app-container">
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  </div>
)

export default App
