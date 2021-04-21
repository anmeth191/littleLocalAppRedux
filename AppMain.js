import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import DisplayElement from './DisplayElement';
import DisplayList from './DisplayList';
class AppMain extends React.Component{
    render(){

        return(
            <Router>
         <div> 
             <Switch>
             <Route exact path='/' component={DisplayList} />
             <Route path='/:id' component={DisplayElement} />
             </Switch>
        </div>
        </Router>
        )//end of the return
    }//end of the render
}//end of the class component

export default AppMain;