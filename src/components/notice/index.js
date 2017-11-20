import MsgCollection from '../message/msgCollection';

const prefixCls = 'x-notice';
const iconPrefixCls = 'x-icon';
const prefixUuid = 'x_notice_uuid_';

const iconTypes = {
    'info': 'information-circled',
    'success': 'checkmark-circled',
    'warning': 'android-alert',
    'error': 'close-circled'
};

const xNotice = {
    install(Vue) {
        let defaultDuration = 4500;
        let top = 24;
        let noticeInstance;
        let uuid = 1;
        let insertDom;

        function getNoticeInstance() {
            noticeInstance = noticeInstance || MsgCollection.newInstance(Vue, {
                prefixCls: prefixCls,
                styles: {
                    top: `${top}px`,
                    right: 0
                }
            }, insertDom);

            return noticeInstance;
        }

        function notice(type, options) {
            const title = options.title || '';
            const desc = options.desc || '';
            const noticeUuid = options.uuid || `${prefixUuid}${uuid}`;
            const onClose = options.onClose || function() {};
            const duration = options.duration === 0 ? 0 : options.duration || defaultDuration;

            uuid++;

            let instance = getNoticeInstance();

            let content;

            const withDesc = desc === '' ? '' : ` ${prefixCls}-with-desc`;

            if (type === 'normal') {
                content = `
                    <div class="${prefixCls}-custom-content ${prefixCls}-with-normal${withDesc}">
                        <div class="${prefixCls}-title">${title}</div>
                        <div class="${prefixCls}-desc">${desc}</div>
                    </div>
                `;
            } else {
                const iconType = iconTypes[type];
                content = `
                    <div class="${prefixCls}-custom-content ${prefixCls}-with-icon
                        ${prefixCls}-with-${type}${withDesc}">
                        <span class="${prefixCls}-icon ${prefixCls}-icon-${type}">
                            <i class="${iconPrefixCls} ${iconPrefixCls}-${iconType}"></i>
                        </span>
                        <div class="${prefixCls}-title">${title}</div>
                        <div class="${prefixCls}-desc">${desc}</div>
                    </div>
                `;
            }

            instance.msg({
                name: noticeUuid.toString(),
                duration: duration,
                styles: {},
                transitionName: 'x-move-notice',
                content: content,
                onClose: onClose,
                closable: true
            });
        };

        Vue.prototype.$Notice = {
            config(options) {
                if (options.top) {
                    top = options.top;
                }
                if (options.duration || options.duration === 0) {
                    defaultDuration = options.duration;
                }
                if (options.insertTo) {
                    insertDom = options.insertTo;
                }
            },
            close(name) {
                if (name) {
                    name = name.toString();
                    if (noticeInstance) {
                        noticeInstance.remove(name);
                    }
                } else {
                    return false;
                }
            },
            destroy() {
                let instance = getNoticeInstance();
                noticeInstance = null;
                instance.destroy();
            }
        };

        Vue.prototype.$Notice.open = options => notice('normal', options);

        ['info', 'success', 'warning', 'error'].forEach(type => {
            Vue.prototype.$Notice[type] = (options) => {
                return notice(type, options);
            };
        });
    }
};

export default xNotice;
