import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import store from './store';
import {Route,Link} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import history from './store/history';

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <React.Fragment>
                <Link to="/">counter1</Link>
                <Link to="/2">counter2</Link>
                <Route path="/" exact component={Counter1}/>
                <Route path="/2" exact component={Counter2}/>
            </React.Fragment>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));