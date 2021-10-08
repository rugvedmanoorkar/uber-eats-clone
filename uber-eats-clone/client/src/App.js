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
import CustomerSignup2 from './components/Authentication/CustomerSignup2';
import CustomerLogin from './components/Authentication/CustomerLogin';
import Profile from './components/Customer/Profile';
import {Provider } from 'react-redux';
import store from './store'
import RestaurantPage from './components/RestaurantPage';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      <Router>
      <Header />
        <Route path='/signup' exact component= {CustomerLogin }/>
        <Route path="/" exact component={Main}/>
        <Route path="/restaurant"  component={RestaurantPage}/>
      </Router>
      
      {/* <Main />
      <CustomerSignup /> */}

        {/* <RestaurantPage /> */}



      {/* <Profile/> */}
      
    </div>
    </Provider>
  );
}

export default App;
