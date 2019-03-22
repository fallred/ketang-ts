import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import store from './store';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
ReactDOM.render((
    <Provider store={store}>
        <React.Fragment>
            <Counter1 />
            <Counter2 />
        </React.Fragment>
    </Provider>
), document.getElementById('root'));