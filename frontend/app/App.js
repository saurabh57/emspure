import React,{Component} from 'react';
import { Provider } from 'react-redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Dashboard,Layout,Profile, Signup, Signin} from 'containers';
import {About,Organisation} from 'components/tabs';
import configureStore from 'store/configureStore';
import Routes from 'routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);
class App extends Component{
	render(){
		return(
				<Provider store={store}>
					<Router history={history}>
						<Route path={Routes.home} component={Layout}>
							<IndexRoute component={Dashboard} /> 
							<Route path={Routes.signup} component={Signup} />
							<Route path={Routes.signin} component={Signin} />
							<Route path={Routes.dashboard} component={Dashboard} /> 
							<Route path={Routes.profile} component={Profile}>
								<IndexRoute component={About} />
								<Route path={Routes.profileAbout} component={About} />
								<Route path={Routes.profileOrganization} component={Organisation} />
							</Route>
						</Route>
					</Router>
				</Provider>
			)
	}
}
export default App;