function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}
// add(34, 45)
var total = add(80, 20);
// console.log('total', total);
function bringSingera(money){
    var bringSingera = 10;
    var quantity = money / bringSingera;
    return quantity;
}

var mytaka = 150;
var singara = bringSingera(mytaka);
console.log('Eating singra: singara:', singara);



