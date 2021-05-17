import React, {Component} from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from './components/home/home';
import Layout from './hoc/layout/layout';

class Routes extends Component{
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/"  exact component={Home} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;
