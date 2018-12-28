let applesPrice = getPrice('apples');
let applesDiscount = getDiscount('apples');
let orangesPrice = getPrice('oranges');
let orangesProfit = getProfit('oranges');

if(applesPrice<0 || applesDiscount<0 || orangesPrice<0 || orangesProfit<0){
	console.log('Введите корректную информацию');
}else{
	let applesCurrentPrice = applesPrice - applesPrice * applesDiscount / 100;
	let orangesCurrentPrice = orangesPrice + orangesPrice * orangesProfit / 100;

	console.log(`
	Current apples price ${(Math.round(applesCurrentPrice * 100) / 100)}.
	Current oranges price ${(Math.round(orangesCurrentPrice * 100) / 100)}.`);
}
