/**
 * @file clone
 * @author Vuex
 * Returns a depply cloned object without reference.
 * Copied from Vuex
 */

/**
 * clone
 * @param   {Object} obj 传值
 * @return {Object} 返回值
 */
const clone = function (obj) {
    if (Array.isArray(obj)) {
        return obj.map(clone);
    } else if (obj && typeof obj === 'object') {
        var cloned = {};
        var keys = Object.keys(obj);
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            cloned[key] = clone(obj[key]);
        }
        return cloned;
    } else {
        return obj;
    }
};

module.exports = clone;