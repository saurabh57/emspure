import Routes from 'routes';
import {replaceParamInRoot} from 'utils';

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

export default headerLinks;
