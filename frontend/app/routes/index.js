const ROOT = "";
const HOME = `${ROOT}/`;
const SIGNUP = `/signup`;
const SIGNIN = `/signin`;
const DASHBOARD = `/dashboard`;
const PROFILE = `/profile`;
const PROFILE_USER = `/profile/:username`;
const PROFILE_ABOUT = `/profile/about`;
const PROFILE_ABOUT_USER = `/profile/:username/about`;
const PROFILE_ORGANIZATION = `/profile/organization`;
const PROFILE_ORGANIZATION_USER = `/profile/:username/organization`;
const DEFAULT = `${PROFILE}`;

const ROUTER_MASTER = {
	default:DEFAULT,
	home:HOME,
	signin:SIGNIN,
	signup:SIGNUP,
	dashboard:DASHBOARD,
	profile:PROFILE,
	profileAbout:PROFILE_ABOUT,
	profileOrganization:PROFILE_ORGANIZATION
}

export default ROUTER_MASTER;