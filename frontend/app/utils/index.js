module.exports = {
	replaceParamInRoot:(path,param,value)=>{
		return path.replace(`:${param}`,value)
	}
}