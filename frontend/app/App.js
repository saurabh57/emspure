import React,{Component} from 'react';
import { Provider } from 'react-redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Dashboard,Layout} from 'containers';
import configureStore from 'store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);
class App extends Component{
	render(){
		return(
				<Provider store={store}>
					<Router history={history}>
						<Route component={Layout}>
							<Route>
								<IndexRoute component={Dashboard} /> 
								<Route path="/" component={Dashboard} /> 
							</Route>
						</Route>
					</Router>
				</Provider>
			)
	}
}
export default App;