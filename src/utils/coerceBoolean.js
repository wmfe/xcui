/**
 * @file Attempt to convert a string value to a Boolean.
 */
/**
 * 函数描述
 * @param {string} val 参数传值
 * @return {string} 返回string值,boolean或undefined
 */
export default val => (typeof val !== 'string' ? val
	: val === 'true' ? true
	: val === 'false' ? false
	: val === 'null' ? false
	: val === 'undefined' ? false : val);
