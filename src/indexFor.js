module.exports = function multiply(first, second) {
    let itog = Array(first.length + second.length + 1).fill(0);
    let arrFirst = first.split("").reverse();
    let arrSecond = second.split("").reverse();
    arrFirst.forEach(function(elI, index) {
        arrSecond.forEach(function(elJ, jndex) {
            let prom = elI * elJ;
            itog[index + jndex] += prom;
        });
    });
    for (i = 0; i < itog.length; i++) {
        let el = itog[i] % 10;
        let div = Math.floor(itog[i] / 10);
        itog[i] = el;
        if (itog[i + 1]) {
            itog[i + 1] += div;
        } else {
            if (div != 0) {
                itog[i + 1] = div;
            }
        }
    }
    return itog.reverse().join("");
};
console.log(multiply("329568934658432659586", "58379426534596"));