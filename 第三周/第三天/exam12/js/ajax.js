function ajax(cont) {
    // 1 建立对象 兼容IE
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    // 参数
    var method = cont.method ? cont.method : 'get', // method 
        async = cont.async === undefined ? true : cont.async, // async
        url = cont.url, // url
        data = cont.data, // data
        success = cont.success, // success
        error = cont.error; // error
    if (data && typeof data === 'object') {
        var str = '';
        for (var k in data) {
            str += k + '=' + data[k] + '&';
        }
        data = str.slice(0, -1);
    }
    var dataGet = (data && method === 'get') ? '?' + data : '';
    url += encodeURI(dataGet);
    // 2 连接服务器
    xhr.open(method, url, async);
    // 4 接收反应数据
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log('正在连接中.........');
            if (xhr.status === 200) {
                success && success(xhr.responseText); // 成功
            } else {
                error && error('发送失败，请重新发送'); // 失败
            }
        }
    };
    // 3 发送数据
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    var end = method === 'post' && data ? data : null;
    xhr.send(encodeURI(end));
}