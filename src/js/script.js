'use strict'; 

let money = prompt ("Ваш бюджет на месяц?", "100");
let date = prompt ("Введите дату в формате YYYY-MM-DD", "2001-01-01");

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}


let a1 = prompt ("Введите обязательную статью расходов в этом месяце", "квартплата");
let a2 = prompt ("Во сколько обойдется?", "40");
let a3 = prompt ("Введите обязательную статью расходов в этом месяце", "квартплата");
let a4 = prompt ("Во сколько обойдется?", "40");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert ("бюджет на 1 день: " + appData.budget / 30 );
