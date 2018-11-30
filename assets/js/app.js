var arr = [];

// Убираем в строке "-", склеиваем,
// меняем регистр первой буквы каждого слова

function camelize(str) {
    var arr = str.split("-");
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    return arr.join('');
}

// Удаляем класс у объекта только при полном совпадении,
// с дублями тоже работает
function removeClass(obj, cls) {
    var classes = obj.className.split(" ");

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1);
            i--;
        }
    }

    obj.className = classes.join(' ');
}
var obj = {
    className: 'open menu me'
};

// Удаляем из массива элементы, не входящие в [a, b]
function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i--, 1);
        }
    }
}

arr = [5, 3, 8, 1];


// Сортируем от большего к меньшему

function compareNumericReverse(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
}
arr = [ 1, 2, 15 ];
arr.sort(compareNumericReverse);

//
// Копируем массив и сортируем

var arrSorted = arr.slice(0).sort(); // Сортируем его по дефолту
arr = ["Father", "into", "your", "hands"];


// Случайная сортировка массива

function randomSort(a, b) {
    return Math.random() - 0.5;
}
arr = [1, 2, 3, 4, 5];
arr.sort(randomSort);


// Сортируем массив объектов по возрасту

function sortByAge(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
}
var vasya = { name: "Vasya", age: 23 };
var masha = { name: "Masha", age: 18 };
var vovochka = { name: "Vovan", age: 6 };

arr = [ vasya, masha, vovochka ];
arr.sort(sortByAge);


// Вывод односвязного списка
// (в каждом элементе ссылка на следующий)

// Вывод через цикл:
function printList1(list) {
    var tmp = list;

    while (tmp) {
        alert( tmp.value );
        tmp = tmp.next;
    }
}
// Вывод через рекурсию:
function printList2(list) {

    alert( list.value );

    if (list.next) {
        printList(list.next);
    }

}
//Вывод через рекурсию в обратном порядке:
function printReverseList1(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    alert( list.value );
}
//Вывод в обратном порядке без рекурсии:
function printReverseList2(list) {
    var arr = [];
    var tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
    }
}

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};


// Фильтруем анаграммы,
// из анаграмм оставляем только 1 слово.
// Мой код - дерьмо и не работает. Хотя код из учебника тут тоже не работает. :(

function noAnagrams(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var sortedArr = arr[i].toLowerCase().split('').sort().join('');
        obj[sortedArr] = arr[i];
    }

    var result = [];

    for (var key in obj) result.push(obj[i]);

    return result;
}

arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];


// Оставляем только уникальные элементы массива:

function unique(arr) {

    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}
var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"];


// Новый массив с помощью map

arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arr.map(function(arr) {
    return arr.length;
});


// Новый массив, каждый элемент которого -
// сумма элементов до него, включая его

arr = [1, 2, 3, 4, 5];
var result = arr.reduce(function(sum, current) {
    return sum + current;
}, 0);


// Удаляем из массива элементы, не входящие в [a, b] с filter
arr = [5, 3, 8, 1];
a = 4;
b = 9;
result = arr.filter(function(number) {
    return (number > a && number < b);
});

// Удаляем из массива элементы, не входящие в [a, b], без методов
arr = [1,3,5,9];

function deleteElem(arr, a, b) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] > a) && (arr[i] < b)) {
                newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}


// Удаляем из массива элементы по индексу
arr = [1,2,3,4,5,6];
function deleteElemByIndex(arr, index) {
    for (var i = 0; i < arr.length; i++) {
        if ((i >= index) && (i <= arr.length - 1)) {
            arr[i] = arr[i + 1];
        }
    }
    delete arr[arr.length];
    arr.length = arr.length - 1;
    return arr;
}


// Проверка, отсутствует элемент или undefined

function argExistence(x){
    if (arguments.length)
        return 1;
    else return 0;
}


// Сумма аргументов функции
function sumYourself() {
    var argSum = 0;
    for (var i = 0; i < arguments.length; i++) {
        argSum += arguments[i];
    }
    return argSum;
}


// Создаём дату

var randomDate = new Date(2012, 1, 22, 3, 12);

// Выводим название дня недели вместо его номера

function getWeekDay(date) {
    var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    return days[date.getDay()];
}


// Выводим номер дня недели (1-7, начиная с пн)

function getWeekDayNumber(date) {
    var day = date.getDay();

    if (day == 0) day = 7;
    return day;
}


// Выводим номер дня недели (1-7, начиная с пн), метод 2

function getWeekDayNumber2(date) {
    var days = ['7', '1', '2', '3', '4', '5', '6'];
    return days[date.getDay()];
}


// Выводим какой день был х дней назад

function whatWasTheDay(date, days) {
    var dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

var date = new Date;


// Последний день месяца

function lastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);
    return date.getDate();
}
alert(lastDayOfMonth(2018,12));


// Время, прошедшее с начала дня
function howMuchSecondPastToday() {
    var currentTime = new Date(), dayStartTime = new Date(now.getFullYear(), now.getMonth(), now.getMinutes());
    var diff = dayStartTime - currentTime;
    return Math.floor(seconds / 1000);
}
alert(howMuchSecondPastToday());


















