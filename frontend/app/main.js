import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
ReactDom.render(<MuiThemeProvider muiTheme={getMuiTheme()}>
					<App/>
				</MuiThemeProvider>,
				document.getElementById('app')); 