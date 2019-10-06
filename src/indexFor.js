module.exports = function multiply(first, second) {
    let itog = [];
    if (first.lengt > second.length) {
        let arrFirst = first.split("").reverse();
        let arrSecond = second.split("").reverse();
    } else {
        let arrFirst = second.split("").reverse();
        let arrSecond = first.split("").reverse();
    }
    arrFirst.forEach(elI, index => {
        arrSecond.forEach(elJ, jndex => {
            let prom = elI * elJ;
            itog.push(0);
            itog[index + jndex] +=
        });
    });
};