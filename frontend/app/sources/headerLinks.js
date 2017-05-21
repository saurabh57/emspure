import Routes from 'routes';
import {replaceParamInRoot} from 'utils';

const headerLinks = {
	'dashboard':{
					displayText: 'Dashboard',
					toLink: Routes.dashboard,
					role: true,
					subTab: [
								{
									displayText: 'ORGANISATIONS',
									toLink: Routes.dashboardOrganization
								}
							]
				},
	'profile':{
					displayText: 'Profile',
					toLink: Routes.profile,
					role: true,
					subTab: [
								{
									displayText: 'ABOUT',
									toLink: Routes.profileAbout
								}
							]
				},
	'services':{
					displayText: 'Services',
					toLink: Routes.services,
					role: false
				},
	'contactus':{
					displayText: 'Contact us',
					toLink: Routes.contactUs,
					role: false
				}
};

export default headerLinks;