function first() {
    let str = ``
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            str = str + ` * `

        }
        str = str + '\n'
    }
    return str

}
console.log(first())

function second() {
    let str = ``
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 || i === 6) {
                str = str + ` * `
            } else if (j === 0 || j === 6) {
                str = str + ` * `
            }
            else{
                str = str + `   `
            }
        }
        str = str + '\n'
    }
    return str
}
console.log(second())

function third() {
    let str = ``
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++){
            if (i === 0) {
                str = str + ` * `
            }
            else if (j === 0){
                str = str + ` * `
            }
            else if (j === 6 - i){
                str = str + ` * `
            }
            else{
                str = str + `   `
            }
        }
        str = str + '\n'
    }
    return str
}
console.log(third())

function fourth() {
    let str = ``
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++){
            if (i === 6) {
                str = str + ` * `
            }
            else if (j === 0){
                str = str + ` * `
            }
            else if (j === i){
                str = str + ` * `
            }
            else{
                str = str + `   `
            }
        }
        str = str + '\n'
    }
    return str
}
console.log(fourth())

function fifth() {
    let str = ``
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++){
            if (i === 6) {
                str = str + ` * `
            }
            else if (j === 6){
                str = str + ` * `
            }
            else if (i === 6 - j ){
                str = str + ` * `
            }
            else{
                str = str + `   `
            }
        }
        str = str + '\n'
    }
    return str
}
console.log(fifth())

function sixth() {
    let str = ``
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++){
            if (i === 0) {
                str = str + ` * `
            }
            else if (j === 6){
                str = str + ` * `
            }
            else if (j === i){
                str = str + ` * `
            }
            else{
                str = str + `   `
            }
        }
        str = str + '\n'
    }
    return str
}
console.log(sixth())

function seventh() {
    let str = ``
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++){
            if (i === 0 && i === 6) {
                str = str + ` *`
            }
            else if (j === 0 && j === 6){
                str = str + ` *`
            }
            else if (j === i){
                str = str + ` *`
            }
            else if (j === 6 - i){
                str = str + ` *`
            }
            else if (i === 6 - j){
                str = str + ` *`
            }
            else{
                str = str + `  `
            }
        }
        str = str + '\n'
    }
    return str
}
console.log(seventh())

function eighth() {
    let str = ``
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++){
            if (i === 0) {
                str = str + ` * `
            }
            else if (j === i && i < 4){
                str = str + ` * `
            }
            else if (j === 6 - i && i < 4){
                str = str + ` * `
            }
            else{
                str = str + `   `
            }
        }
        str = str + '\n'
    }
    return str
}
console.log(eighth())

function ninth() {
    let str = ``
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++){
            if (i === 6) {
                str = str + ` * `
            }
            else if (j === i && i > 2){
                str = str + ` * `
            }
            else if (j === 6 - i && i > 2){
                str = str + ` * `
            }
            else{
                str = str + `   `
            }
        }
        str = str + '\n'
    }
    return str
}
console.log(ninth())
