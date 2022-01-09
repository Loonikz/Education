function getCookingTime(eggsAmount) {
    if (eggsAmount < 1 || typeof eggsAmount === 'string') {
        return false
    }
    let result = 5;
    let times = Math.ceil(eggsAmount / 5);
    if (eggsAmount.length <= 5) {
        return result;
    } else {
        return times * 5;
    }
}

module.exports = getCookingTime;