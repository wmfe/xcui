import MsgCollection from './msgCollection.vue';
import { isAppendableDOM } from 'xcui/src/utils/dom';

const camelcaseToHyphen = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

MsgCollection.newInstance = (Vue, properties, insertTo) => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `<msg-collection${props}></msg-collection>`;

    let insertDom = isAppendableDOM(insertTo) ? insertTo : document.body;
    debugger;
    insertDom.appendChild(div);

    const msgCollection = new Vue({
        el: div,
        data: _props,
        components: { MsgCollection }
    }).$children[0];

    return {
        msg(props) {
            msgCollection.add(props);
        },
        remove(key) {
            msgCollection.close(key);
        },
        component: msgCollection,
        destroy() {
            insertDom.removeChild(div);
        }
    };
};

export default MsgCollection;
