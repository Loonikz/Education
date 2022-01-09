function tickets(person) {
    for (let i = 0; i < person.length; i++) {
        if (Number(person[i]) + Number(person[i + 1]) >= Number(person[i + 2])) {
            return `Yes`
        } else {
            return `No`;
        }
    }
}

module.exports = tickets;