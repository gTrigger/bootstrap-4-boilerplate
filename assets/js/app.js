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

for (var i = 0; i < arr.length; i++) {
    alert(arr[i].name);
}


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

// Оставляем толоько уникальные элементы массива:

function unique(arr) {

    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}
var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) );