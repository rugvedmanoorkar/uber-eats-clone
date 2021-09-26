import './App.css';
import Header from './components/Header' ;
import Main from './components/MainContent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CustomerSignup from '../src/components/Authentication/CustomerSignup'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path='/signup' exact component= {CustomerSignup }/>
        <Route path="/" exact component={Main}/>
      </Router>
      
      {/* <Main />
      <CustomerSignup /> */}
    </div>
  );
}

export default App;
