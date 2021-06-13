import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";

const App =()=>{
    return(
        <div className="App">
        <Router>
           <Header/>
           <Switch>
               <Route path="/" exact component={ProductListing} />
               <Route path="/product/:productId" component={ProductListing} />
               <Route>404 Not Found </Route>
           </Switch>  
        </Router>
            
        </div>
    )
}

export default App;