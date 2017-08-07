export default function httpReq(opts) {
    if (typeof XMLHttpRequest === 'undefined' || typeof FormData === 'undefined') {
        return;
    }

    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    handleParams(formData, opts);
    handleProgress(xhr, opts);
    handleCallBack(xhr, opts);

    xhr.open('post', opts.action, true);

    handleBeforeSend(xhr, opts);

    xhr.send(formData);

    return xhr;
}

function handleParams(formData, opts) {
    formData.append(opts.fileName, opts.file);

    if (opts.data) {
        let hasOwn = Object.prototype.hasOwnProperty;
        for (let key in opts.data) {
            if (hasOwn.call(opts.data, key)) {
                formData.append(key, opts.data[key]);
            }
        }
    }
}

function handleProgress(xhr, opts) {
    if (xhr.upload) {
        xhr.upload.onprogress = function (e) {
            if (e.total > 0) {
                e.percent = Math.round(e.loaded / e.total * 100);
            }
            opts.onProgress(e);
        };
    }
}

function handleCallBack(xhr, opts) {
    xhr.onerror = function (e) {
        opts.onError(e);
    };

    xhr.onload = function (e) {
        if (xhr.status < 200 || xhr.status >= 300) {
            opts.onError(getError(xhr));
        } else {
            opts.onSuccess(getResponse(xhr));
        }
        opts.onAlways();
    };
}

function handleBeforeSend(xhr, opts) {
    if (opts.withCredentials && 'withCredentials' in xhr) {
        xhr.withCredentials = true;
    }

    let headers = opts.headers || {};
    Object.keys(headers).forEach(key => {
        let val = headers[key];
        if (val) {
            xhr.setRequestHeader(key, val);
        }
    });
}

function getError(xhr) {
    return {
        status: xhr.status,
        error: xhr.response.error || xhr.responseText
    };
}

function getResponse(xhr) {
    let res = xhr.responseText || xhr.response || '';

    try {
        return JSON.parse(res);
    } catch (e) {
        return res;
    }
}


