// get data 
function getData(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(null, xhr.responseText);
        } else {
            callback(new Error(xhr.statusText));
        }
    };
    xhr.onerror = function () {
        callback(new Error("Network Error"));
    };
    xhr.send();
}