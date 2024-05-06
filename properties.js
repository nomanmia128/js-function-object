var shoppingCart = {
    books: 3,
    sunglass: 1,
    keybord: 5,
    mouse: 1,
    pen: 25
}
// 1. when you know the specific property name, use dot notaion to get the property value 
var penCount = shoppingCart.pen;
// 2. when you know the specific property name, use dot notaion to get the property value 
var penCount = shoppingCart['pen'];
// 3.
var propertyName = 'mouse'
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue)
// console.log(penCount);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);

shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 80;
console.log(shoppingCart)
