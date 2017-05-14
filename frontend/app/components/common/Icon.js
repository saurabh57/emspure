import React from 'react';
const Icon  = (props) => {

	return (
			<i className={`fa fa-${props.iconClass}`} aria-hidden="true"></i>
		)
}

export default Icon;