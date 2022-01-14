'use strict'; 

let money, date;

function start () {
    money = +prompt ("Ваш бюджет на месяц?", ""); /* + -что бы вводилось число */
    date = prompt ("Введите дату в формате YYYY-MM-DD", "");
    while ( isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt ("Во сколько обойдется?", "");
        if ((typeof(a)==="string") && (a != null) && (b != null) && a != "" && b != "" && a.length < 50) {
            appData.expenses [a] = b;
        } else {i--}
    };  
}

chooseExpenses ();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt ("Статья необязательных расходов?", "");
        appData.optionalExpenses [i + 1] = a;
    }; 
}

chooseOptExpenses();

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

function detectDayBudget() {
    appData.moneyPerDay = appData.budget / 30;
    alert ("бюджет на 1 день: " + (appData.moneyPerDay).toFixed(2));
}

detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log("средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("высокий уровень достатка");
    } else {
        console.log("ошибка ввода");
    }
}


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
         appData.monthIncone = save/100/12*percent;
        alert ("Доход в месяц с Вашего депозита: " + (appData.monthIncone).toFixed(2));   
    }
}

checkSavings ();

/* function factorial(x) {
 if (x <= 1) {return 1;} else {return x * factorial(x - 1);}
}
console.log (factorial(5)); */

