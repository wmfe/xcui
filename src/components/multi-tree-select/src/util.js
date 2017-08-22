export const isChildOf = (child, parent) => {
    var parentNode;
    if (child && parent) {
        parentNode = child.parentNode;
        while (parentNode) {
            if (parent === parentNode) {
                return true;
            }
            parentNode = parentNode.parentNode;
        }
    }
    return false;
};

// from => to
export const clone = (to, fro) => {
    for (var key in fro) {
        to[key] = fro[key];
    }
    return to;
};

// 将某列下所有 item 的 list 聚集成一列 for `all`
export const concatMultiList = (list) => {
    var ret = {};
    for (var key in list) {
        clone(ret, list[key].list);
    }
    return ret;
};
// 根据关键词筛选，键值对转数组
export const filterList = (list, keyword, valName) => {
    if (list) {
        return Object.keys(list).map(key => {
            let item = list[key];
            if (([item[valName]] + '').indexOf(keyword) > -1) {
                return item;
            }
        })
            .filter(item => item)
            .sort(function (a, b) { // 保留原始序列
                return parseInt(a.order, 10) - parseInt(b.order, 10);
            });
    }
    return [];
};

export const travelUp = (item, handler, keyName) => {
    if (item[keyName] === 'root') return;
    let parent = item.parent;
    if (parent) {
        handler(parent);
        travelUp(parent, handler, keyName);
    }
};

export const travelDown = (item, handler) => {
    let list = item.list;
    if (list) {
        let subItem = null;
        let keys = Object.keys(list);
        for (let i = 0, len = keys.length; i < len; i++) {
            subItem = list[keys[i]];
            if (!handler(item, subItem)) {
                travelDown(subItem, handler);
            }
        }
    }
};
