import product from '../component/Product';
import addProduct from '../component/addProduct';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function AppRoutes() {
    return (
      <Router>
      <Switch>
        <Route path="/" exact component={product}/>
        <Route path="/addProduct" exact component={addProduct}/>
      </Switch>
      </Router>

    );
}

export default AppRoutes;
