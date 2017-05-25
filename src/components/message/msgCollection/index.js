import MsgCollection from './msgCollection.vue';
const camelcaseToHyphen = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

MsgCollection.newInstance = (Vue, properties) => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `<msg-collection${props}></msg-collection>`;
    document.body.appendChild(div);

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
            document.body.removeChild(div);
        }
    };
};

export default MsgCollection;
