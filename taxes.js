function calcStateTaxes(income, bracket) {
    var incomeLeft = income;
    var taxTotal = 0;
    var taxTotalArr = [];
    var temp;
    var incomeChunk;
    for (let i = bracket.length - 1; i > -1; i--) {
        if (income <= bracket[i][0]) continue;
        var cutoff = bracket[i][0];
        var percent = bracket[i][1];
        incomeChunk = incomeLeft - cutoff;
        incomeLeft = cutoff;
        temp = incomeChunk * percent / 100;
        taxTotal += temp;
        taxTotalArr.push(temp);
    }
    // console.log(taxTotal);
    // console.log(taxTotalArr);
    return taxTotal;
    // var total = 0;
    // for (let i = 0; i < taxTotalArr.length; i++) {
    //     total += taxTotalArr[i];
    // }
    // console.log(total);
}

var bracket = [
    [0, 1],
    [8223, 2],
    [19495, 3],
    [30769, 4],
    [42711, 8],
    [53980, 9.3]
];
var fedBracket = [
    [0, 10],
    [9700, 12],
    [39475, 22],
    [84200, 24]
];
var income = 120000;

var state = calcStateTaxes(income, bracket);
var fedral = calcStateTaxes(income, fedBracket);
console.log(state, fedral, state + fedral, "=", income - state - fedral, "/", income, "%", (income - state - fedral) / income * 100);