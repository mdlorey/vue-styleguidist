const examplesLoaderRsg = require('react-styleguidist/lib/loaders/examples-loader').default
const getComponentVueDoc = require('./utils/getComponentVueDoc')

function isVueFile(filepath) {
	return /.vue$/.test(filepath)
}

module.exports = function examplesLoader(source) {
	const file = this.request.split('!').pop()
	if (isVueFile(file)) {
		source = getComponentVueDoc(source, file)
	}
	return examplesLoaderRsg.call(this, source)
}
