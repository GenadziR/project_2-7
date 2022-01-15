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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            let b = prompt("Во сколько обойдется?", "");
            if ((typeof(a)==="string") && (a != null) && (b != null) && a != "" && b != "" && a.length < 50) {
                appData.expenses [a] = b;
                } else {i--}
        }  
    },
    detectDayBudget: function() {
        appData.moneyPerDay = appData.budget / 30;
        alert ("бюджет на 1 день: " + (appData.moneyPerDay).toFixed(2));
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("высокий уровень достатка");
        } else {
            console.log("ошибка ввода");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
             appData.monthIncone = save/100/12*percent;
            alert ("Доход в месяц с Вашего депозита: " + (appData.monthIncone).toFixed(2));
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt ("Статья необязательных расходов?", "");
            appData.optionalExpenses [i + 1] = opt;
        }
    },
    chooseIncome: function() {
        let items;
        for (let i = 0; i < 1; i++){
            items = prompt("Что принесет дополнительный доход? (Перечислите через запяиую)", '');
            if ((typeof(items)==="string") && (items != null) && items != "" ) {
                appData.income = items.split(', ');
                } else {alert("Вы ввели некорректные данные или не ввели их вовсе"); i--}
        }
        
        appData.income.push(prompt('Может, еще что приноcит доход?'));
        appData.income.sort();
        appData.income.forEach(function(elem, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + elem);            
        })
    }
}

console.log("Наша программа включает в себя данные: ");
for (var prop in appData) {
    console.log("appData." + prop + " = " + appData[prop]);
}




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







/* function factorial(x) {
 if (x <= 1) {return 1;} else {return x * factorial(x - 1);}
}
console.log (factorial(5)); 
 */
/* function first(x, callback) {
    setTimeout(function() {console.log(x / 1000 + " с")}, x);
    callback();
}
function secomd() {
    console.log("пуля");
}
first(3000, secomd); */
/* secomd(); */ 