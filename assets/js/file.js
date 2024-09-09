
// задание 1

let price = prompt('Стоимость товара:');
let money = prompt('Сколько у вас денег?:');

price = parseFloat(price);
money = parseFloat(money);

if (price === money){
    alert('Покупка совершенна');
}

else if (price > money){
    alert(`Для покупки не хватает ${price - money} рублей`);
}

else if (price < money){
    alert(`Покупка совершенна. Сдача ${money - price} рублей`);
}

else {
    alert(`Неверный формат данных`);
}


// задание 2

let number = prompt('Введите число'); 
number = parseFloat(number);

if (number > -10 && number < 10){
    if (number > 0) {
        alert ('1');
    }
    
    else if (number < 0) {
        alert ('-1');
    }
    
    else if (number === 0){
        alert('0');
    }
}

else {
    alert('Вы пытаетесь ввести цифру, а не число. Введите значение от -9 до 9');
}


// задание 3

let resultSum = (a + b < 4) ? 'Мало' : 'Много';


// задание 4 

let user_login = 'Директор'; 

let message =   (user_login === 'Сотрудник') ? 'Привет' :
                (user_login === 'Директор') ? 'Здравствуйте' :
                (user_login === '') ? 'Нет логина' :
                '';
alert(message);


// задание 5

let login = prompt("Введите ваш логин:");

if (login === null || login === "") {
    alert("Отменено");
} 

else if (login === "Админ") {
    let password = prompt("Введите пароль:");

    if (password === null || password === ""){
        alert("Отменено");
    }

    else if (password === "Я главный") {
        alert("Здравствуйте!");
    }

    else {
        alert("Неверный пароль");
    }
}

else {
    alert("Я вас не знаю");
}
