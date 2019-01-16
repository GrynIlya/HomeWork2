// новый ценник на яблоки

let applesPrice =30;
let applesDiscount =10;
let totalPrice;

console.log(!isNaN(applesDiscount));

if(applesDiscount) {
    if(isNaN(applesDiscount)) {
        console.log('Ошибка!Вы ввели не число');
    }else if(applesDiscount > 0 && applesDiscount < 100) {
        console.log('Вы ввели число');
        totalPrice = applesPrice - applesPrice * (applesDiscount/100);
        console.log(`Цена на яблоки:
        ${totalPrice.toFixed(2)} грн`);
    }else {
        console.log('Скидка должная быть от 0 до 99');
    }
}else {
    console.log(`Цена на яблоки:
    ${applesPrice.toFixed(2)} грн`)
}

//новый ценник на апельсины

let orangesPrice = getPrice('oranges');
let orangesProfit = getProfit('oranges');
let totalPrice;

console.log(!isNaN(orangesPrice));

if (isNaN(orangesPrice)) {
    console.log('Ошибка!Вы ввели не число');
} else if (orangesPrice > 0) {
    console.log('Вы ввели положительное число');
    totalPrice = +orangesPrice + orangesPrice * (orangesProfit / 100);
    console.log(`Цена на апельсины:
    ${totalPrice.toFixed(2)} грн`);
} else {
    console.log('Цена должна быть положительным числом');
}
