'use strict'; 

let money = +prompt ("Ваш бюджет на месяц?", "100"); /* + -что бы вводилось число */
let date = prompt ("Введите дату в формате YYYY-MM-DD", "2001-01-01");

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}




for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", "квартплата");
    let b = prompt ("Во сколько обойдется?", "40");
    if ((typeof(a)==="string") && (a != null) && (b != null) && a != "" && b != "" && a.length < 50) {
        appData.expenses [a] = b;
    } else {i--}
}; 
let i = 0;
/* while (i < 2) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", "квартплата");
    let b = prompt ("Во сколько обойдется?", "40");
    if ((typeof(a)==="string") && (a != null) && (b != null) && a != "" && b != "" && a.length < 50) {
        appData.expenses [a] = b;
    } else {i--}
    i++;
}; */
/* do {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", "квартплата");
    let b = prompt ("Во сколько обойдется?", "40");
    if ((typeof(a)==="string") && (a != null) && (b != null) && a != "" && b != "" && a.length < 50) {
        appData.expenses [a] = b;
    } else {i--}
    i++;
} while (i<2); */

/* console.log (appData.expenses); */

appData.moneyPerDay = appData.budget / 30;

alert ("бюджет на 1 день: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("высокий уровень достатка");
} else {
    console.log("ошибка ввода");
}