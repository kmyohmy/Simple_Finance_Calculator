import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import ComponentDashboard from '../components/ComponentDashboard';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

 
const AppRouter = () => (
    <BrowserRouter>

    <div>
        <Header/>
        
        <Switch>
            <Route path="/" component={ComponentDashboard} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFound}/>
        </Switch>
    </div>

 

    </BrowserRouter>
);

export default AppRouter;



