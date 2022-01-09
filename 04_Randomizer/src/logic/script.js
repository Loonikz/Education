const { getValue, addListener, callAlert, getInputId } = require('./utils');

function init() {
    const state = {
        minNumber: 1,
        maxNumber: 10,
        arr: []
    };
    addListener('generate', 'click', generateClick.bind(null, state));
    addListener('reset', 'click', reset.bind(null, state));
}

function generateNumber(state){
    state.minNumber = getInputId('min');
    state.maxNumber = getInputId('max');
    if(state.minNumber > state.maxNumber) {
        callAlert("Минимальное число должно быть меньше максимального!");
        return false;
    }
    while ( state.arr.length <= ( state.maxNumber + 1 -  state.minNumber)) {
        do {
            state.number = Math.round( Math.random() * (state.maxNumber -  state.minNumber) +  state.minNumber);
        } while ( state.arr.includes( state.number))
        // console.log(state.arr.length)
        // console.log(state.number)
        state.arr.push( state.number);
        state.valueGenerate = getValue('text').innerHTML = `Generated number: ${ state.number}`;
        return state.arr;
    }
    return true;
}

function generateClick(state) {
    if (state.arr.length === (state.maxNumber - state.minNumber + 1)) {
        const generate = getValue('generate');
        const text =  getValue('text');
        text.innerHTML = `Generated number: <br>Elements are over`;
        generate.className += ' disabled';
        generate.disabled = true;
        return false;
    }
    generateNumber(state);
    state.arr.sort();
    return true;
}

function reset(state) {
    state.arr = [];
    const generate = getValue('generate');
    const text = getValue('text');
    text.innerHTML = '';
    generate.disabled = false;
}

document.addEventListener('DOMContentLoaded', function(){
    init();
})

module.exports = {
    init,
    generateNumber,
    generateClick,
    reset,
}