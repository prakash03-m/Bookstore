// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Registration from './components/Registration';
import Checkout from './UI/Checkout';
import HomepageScreen from './UI/HomepageScreen';

function App() {
  return (
    <div>
      {/* <HomepageScreen /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomepageScreen} />
          <Route path="/registration" component={Registration} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
