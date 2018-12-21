'use strict';

//  метод 1

    let applesPrice = `12,50`;
    let applesPriceTag = `\n\t\`Яблоки украинские.
    \t цена: ${applesPrice}грн\``;
    console.log( `1 Method
    ${applesPriceTag}`);

//  метод 2

    applesPrice = "цена\:12,50 грн";
    let applesTitle = "Яблоки украинские.\n";


console.log('2 Method' + '\n\n\t\`' +applesTitle + '\t '+ applesPrice + '\`');