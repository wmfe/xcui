import MsgCollection from './msgCollection';

const prefixCls = 'x-message';
const iconPrefixCls = 'x-icon';
const prefixUuid = 'x_message_uuid_';

const iconTypes = {
    'info': 'information',
    'success': 'checkmark',
    'warning': 'alert',
    'error': 'close'
};

const xMessage = {
    install(Vue) {
        let defaultDuration = 3000;
        let top;
        let messageInstance;
        let uuid = 1;
        let insertDom;

        function getMessageInstance() {
            messageInstance = messageInstance || MsgCollection.newInstance(Vue, {
                prefixCls: prefixCls,
                styles: {
                    top: `${top}px`
                }
            }, insertDom);

            return messageInstance;
        }

        function message(content, duration = defaultDuration, type, onClose) {
            if (!onClose) {
                onClose = function () {

                };
            }
            const iconType = iconTypes[type];

            let instance = getMessageInstance();
            instance.msg({
                uuid: `${prefixUuid}${uuid}`,
                duration: duration,
                styles: {},
                transitionName: 'x-move-up',
                content: `
                    <div class="${prefixCls}-custom-content ${prefixCls}-${type}">
                        <div class="${prefixCls}-icon-wrap">
                            <i class="${iconPrefixCls} ${iconPrefixCls}-${iconType}"></i>
                        </div>
                        <div class="${prefixCls}-text-wrap">
                            <span>${content}</span>
                        </div>
                    </div>
                `,
                visible: true,
                onClose: onClose
            });

            // 用于手动消除
            return (function () {
                let target = uuid++;

                return function () {
                    instance.remove(`${prefixUuid}${target}`);
                };
            })();
        }

        Vue.prototype.$Message = {
            config(options) {
                if (options.top) {
                    top = options.top;
                }
                if (options.duration) {
                    defaultDuration = options.duration;
                }
                if (options.insertTo) {
                    insertDom = options.insertTo;
                }
            },
            destroy() {
                let instance = getMessageInstance();
                messageInstance = null;
                instance.destroy();
            }
        };

        ['info', 'success', 'warning', 'error'].forEach(type => {
            Vue.prototype.$Message[type] = (content, duration, onClose) => {
                return message(content, duration, type, onClose);
            };
        });
    }
};

export default xMessage;

