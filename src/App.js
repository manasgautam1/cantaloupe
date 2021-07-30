import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import FoodItems from './FoodItems';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/food-items' exact>
          <FoodItems />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
