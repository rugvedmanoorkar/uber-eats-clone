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
import CustomerSignup3 from './components/Authentication/CustomerSignup3';
import CustomerLogin from './components/Authentication/CustomerLogin';
import RestaurantLogin from './components/Authentication/RestaurantLogin';
import Profile from './components/Customer/Profile';
import RProfile from './components/Restaurant/Profile';
import {Provider } from 'react-redux';
import store from './store'
import RestaurantPage from './components/RestaurantPage';

import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import RestaurantSignup from './components/Authentication/RestaurantSignup';
import Menu from './components/Restaurant/Menu';
import Orders from './components/Orders/Orders';




function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      <Router>
      <Header />
        <Route path='/signin' exact component= {CustomerLogin }/>
        <Route path='/signup' exact component= {CustomerSignup3 }/>
        <Route path='/signup/restaurant' exact component= {RestaurantSignup }/>
        <Route path='/signin/restaurant' exact component= {RestaurantLogin}/>

        <Route path='/profile/restaurant' exact component= {RProfile}/>
        <Route path='/profile/customer' exact component= {Profile}/>
        <Route path='/menu' exact component= {Menu}/>
        <Route path='/orders' exact component= {Orders}/>
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
