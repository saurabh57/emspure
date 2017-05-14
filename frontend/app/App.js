import React,{Component} from 'react';
import { Provider } from 'react-redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Dashboard,Layout,Profile, Signup, Signin} from 'containers';
import {About,Organisation} from 'components/tabs';
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
							<Route path="signup" component={Signup} />
							<Route path="signin" component={Signin} />
							<Route path="dashboard" component={Dashboard} /> 
							<Route path="profile" component={Profile}>
								<IndexRoute component={About} />
								<Route path="about" component={About} />
								<Route path="organisation" component={Organisation} />
							</Route>
						</Route>
					</Router>
				</Provider>
			)
	}
}
export default App;