function getValue(id) {
    const input = document.getElementById(id);
    if (input){
        return input;
    }
    return '';
}

function getInputId(id) {
    let node = document.getElementById(id);
    if (node){
        node = +node.value;
        return node;
    }
    return '';
}

function callAlert(text) {
    alert(text);
}

function addListener (id, eventType, callback){
    const node = document.getElementById(id);
    if (node){
        node.addEventListener(eventType, callback);
    }
}

module.exports = {
    getValue,
    callAlert,
    addListener,
    getInputId
}