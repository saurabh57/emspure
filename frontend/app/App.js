import React,{Component} from 'react';
import { Provider } from 'react-redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Dashboard,Layout,Profile} from 'containers';
import configureStore from 'store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);
class App extends Component{
	render(){
		return(
				<Provider store={store}>
					<Router history={history}>
						<Route path="/" component={Layout}>
							<IndexRoute component={Dashboard} /> 
							<Route path="dashboard" component={Dashboard} /> 
							<Route path="profile" component={Profile} /> 
						</Route>
					</Router>
				</Provider>
			)
	}
}
export default App;