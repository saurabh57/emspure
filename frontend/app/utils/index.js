import React from 'react';
module.exports = {
	replaceParamInRoot:(path,param,value)=>{
		return path.replace(`:${param}`,value)
	},
	renderChildren: (children,props)=>{

		return (React.Children.map(children,
		    (child) => React.cloneElement(child,props)
	    ))
	}
}