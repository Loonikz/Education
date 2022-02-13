const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "DB",
    password: ""
});

connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

function allPerson() {
    const query = "SELECT COUNT(1) AS count FROM person";
    connection.query(query, (err, res) => {
        if (!err) {
            console.table(res);
        }
    })
}

function averageAge() {
    const query = "SELECT AVG(Age) AS averageAge FROM person";
    connection.query(query, (err, res) => {
        if (!err) {
            console.table(res);
        }
    })
}

function lastNameList() {
    const query = "SELECT DISTINCT LastName FROM person ORDER BY LastName";
    connection.query(query, (err, res) => {
        if (!err) {
            console.table(res);
        }
    })
}

function lastNameCounter() {
    const query = "SELECT LastName, COUNT(*) AS repeatCounter FROM person GROUP BY LastName"
    connection.query(query, (err, res) => {
        if (!err) {
            console.table(res);
        }
    })
}

function findLetterInLastName() {
    const query = "SELECT LastName FROM person WHERE LastName LIKE '%б%'"
    connection.query(query, (err, res) => {
        if (!err) {
            console.table(res);
        }
    })
}

function findHomeless() {
    const query = "SELECT * FROM person WHERE id_Street is NULL";
    connection.query(query, (err, res) => {
        if (!err) {
            console.table(res);
        }
    })
}

function findPplByStreet() {
    const query = "SELECT * FROM person INNER JOIN street ON person.id_Street = street.id WHERE Age < 18 AND name='Правды'";
    connection.query(query, (err, res) => {
        if (!err) {
            console.table(res);
        }
    })
}

function streetListCounter() {
    const query = "SELECT street.streetId, street.streetName, COUNT(person.personID) FROM street JOIN person ON street.streetId = person.Id_Street GROUP BY street.streetId, street.streetName";
    connection.query(query, (err, res) => {
        if (!err) {
            console.table(res);
        }
    })
}

function streetsLength() {
    const query = "SELECT * FROM street WHERE CHAR_LENGTH(streetName) = 6"
    connection.query(query, (err, res) => {
        if (!err) {
            console.table(res);
        }
    })
}

function streetsThreePpl() {
    const query = "SELECT street.StreetID, street.streetName FROM street JOIN person ON street.StreetID = person.Id_Street GROUP BY street.StreetID, street.streetName HAVING COUNT(person.PersonId)  < 3 "
    connection.query(query, (err, res) => {
        if (!err) {
            console.table(res);
        }
    })
}

allPerson()
averageAge()
lastNameList()
lastNameCounter()
findLetterInLastName()
findHomeless()
findPplByStreet()
streetListCounter()
streetsLength()
streetsThreePpl()

module.exports = {
    allPerson,
    averageAge,
    lastNameList,
    lastNameCounter,
    findLetterInLastName,
    findHomeless,
    findPplByStreet,
    streetListCounter,
    streetsLength,
    streetsThreePpl
}