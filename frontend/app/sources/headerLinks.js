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
		role: true
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