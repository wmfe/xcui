import Message from './index.vue';

const isEmptyObject = obj => !Object.keys(obj).length;

let MessageInstall = (Vue) => {
    let messageInstance;
    let newMessageInstance = () => {
        const div = document.createElement('div');
        div.innerHTML = `
            <Message :content="content"
                :type="type"
                :duration="duration"
                :show.sync="show">
            </Message>
        `;
        document.body.appendChild(div);

        let messageVM = new Vue({
            el: div,
            components: {
                Message
            },
            data() {
                return {
                    show: false,
                    content: '',
                    duration: 3000,
                    type: 'info'
                };
            }
        });

        return {
            _show(props) {
                props = !props || isEmptyObject(props) ? {} : props;
                Object.keys(props).forEach(propKey => {
                    messageVM[propKey] = props[propKey];
                });
                messageVM.$children[0].onShow();
            }
        };
    };

    let getMessageInstance = () => {
        messageInstance = messageInstance || newMessageInstance();
        return messageInstance;
    };

    Vue.prototype.$Message = {
        show(content, type, duration) {
            let instance = getMessageInstance();
            instance._show({
                content,
                type,
                duration
            });
        }
    };
};

export default MessageInstall;
