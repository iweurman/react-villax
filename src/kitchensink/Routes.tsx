import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Page1 from './p1';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Page1} />
        </Switch>
    </BrowserRouter>
);

export default hot(Routes);
