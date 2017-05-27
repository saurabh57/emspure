import Routes from 'routes';
import {replaceParamInRoot} from 'utils';

<<<<<<< HEAD
const headerLinks = [
	{
		displayText: 'Dashboard',
		toLink: Routes.dashboard,
		role: true
	},
	{
		displayText: 'Profile',
		toLink: Routes.profile,
		role: true,
		subLinks: [
			{
				displayText: 'Profile',
				toLink: Routes.profile,
				iconClass: 'fa-code',
			},
			{
				displayText: 'Logout',
				toLink: Routes.signin,
				iconClass: 'fa-code',
			}
		]
	},
	{
		displayText: 'Services',
		toLink: Routes.services,
		role: false
	},
	{
		displayText: 'Contact us',
		toLink: Routes.contactUs,
		role: false
	}
];
=======
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
							],
							subLinks: [
								{
									displayText: 'Profile',
									toLink: Routes.profile,
									iconClass: 'fa-code',
								},
								{
									displayText: 'Logout',
									toLink: Routes.signin,
									iconClass: 'fa-code',
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
>>>>>>> d173b641debcae03256f3a589b46ba97874df421

export default headerLinks;
