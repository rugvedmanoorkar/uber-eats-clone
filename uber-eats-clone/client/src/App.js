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
      {/* <Router>
        <Route path='/signup' render={(props) => <CustomerSignup />}/>
        <Route path="/" exact component={Main}/>
      </Router> */}
      {/* <Header />
      <Main /> */}
      <CustomerSignup />
    </div>
  );
}

export default App;
