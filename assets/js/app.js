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
    date = new Date(year, month + 1, 0);
    return date.getDate();
}


// Время, прошедшее с начала дня
function howMuchSecondPastToday() {
    date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}


// Сколько секунд до завтра
function howMuchSecondsToTomorrow() {
    var now = new Date();
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    date = tomorrow - now;
    return (now/1000);
}


// Текущая дата в формате дд.мм.гг
function currentDate() {
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    var mm = date.getMonth();
    if (mm < 10) mm = '0' + mm;
    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
    return dd + '.' + mm + '.' + yy;
}


// Форматирование даты в зависимости от "прошедшего" времени
function formatDate(date) {
    var diff = new Date() - date;
    if (diff < 1000) {
        return "right now";
    }
    var sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec + " sec. ago";
    }
    var min = Math.floor(diff / (1000 * 60));
    if (min < 60) {
        return min + " min. ago";
    }
    var day = date;
    day = ["0" + day.getDate(),
        "0" + (day.getMonth()+1),
        "" + day.getFullYear(),
        "0" + day.getHours(),
        "0" + day.getMinutes() ];
    for (var i = 0; i < day.length; i++) {
        day[i] = day[i].slice(-2);
    }
    return day.slice(0, 3).join("-") + " " + day.slice(3).join(":");
}


// Сумма через замыкание
function sum(a) {
    return function (b) {
        return a + b;
    }
}


// Строковый буфер
function makeBuffer() {
    var text = '';
    function buffer(value) {
        if (arguments.length == 0) {
            return text;
        }
        text += value;
    };
    buffer.clear = function() {
        text = '';
    };
    return buffer;
};
var buffer = makeBuffer();

buffer('Smack ');
buffer('my ');
buffer('bitch ');
buffer('up!');

buffer.clear();


//Сортировка по свойству
function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1: -1;
    }
}

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

/*users.sort(byField('name'));
users.forEach(function(user) { alert( user.name );});*/


//Фильтр
var arr = [1, 2, 3, 4, 5, 6, 7];
function filter(arr, func) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if ( func(val) ) {
            result.push(val);
        }
    }
    return result;
}
var arr = [1, 2, 3, 4, 5, 6, 7];

/*alert(filter(arr, function(a) {
    return a % 2 == 0;
} ));*/

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function(x) {
        return arr.indexOf(x) != -1;
    };
}

/*alert(filter (arr, inArray([1,3,5,7])) );
alert(filter (arr, inBetween(3, 6)));*/


// Массив функций
function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = function() {
            return function() {
                alert(i);
            };
        }(i);
    shooters.push(shooter);
    }
    return shooters;
}
var army = makeArmy();

/*
army[0]();
army[5]();*/


// Вывести <head>, дочерний элемент <body>,
// дочерний дочернего

/*alert(document.documentElement.firstChild);
alert(document.body.children[2]);
alert(document.body.children[2].children[2]);*/


// Существуют ли дети?
/*
if (document.body.firstChild == null) {
    alert('No elements here')
}
alert('Here are some elements');
*/


// Выделить диагональ в таблице
/*
var table = document.body.children[0];

for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}
*/


// Текст каждого <li> и кол-во вложенных <li>
/*
list = document.getElementsByTagName("li");
alert(list.length);
for (var i = 0; i < list.length; i++) {
    alert(list[i].firstChild.data +
          " count: " +
          list[i].getElementsByTagName("li").length);
};*/


// Полифилл для matches
(function() {
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();


//Полифилл для closest
(function() {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        }
    }
})();


//Полифилл для textContent
(function() {
    if (!Element.prototype.textContent === undefined) {
        Object.defineProperty(Element.prototype, 'innerText', {
            get: function() {
                return this.innerText();
            },
            set: function(value) {
                this.innerText = value;
            }
        });
    }
})();


// Получаем пользовательский атрибут
/*
constDiv = document.getElementsById("widget");
constAttr = elem.getAttribute("data-widget-name");
alert(constAttr);*/


// Добавить класс ссылкам
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    if (link[i].getAttribute('href') == null ||
        link[i].getAttribute('href').indexOf('://') == -1 ||
        link[i].getAttribute('href').indexOf('http://internal.com/') != -1) {
            continue;
    }
    link[i].classList.add('external');
}

//OR
var css = 'a[href*="://"]:not([href^="http://internal.com"])';
var links = document.querySelectorAll(css);
for (var i = 0; i < links.length; i++) {
    links[i].classList.add('external');
}


// Полифилл для удаления элементов
if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (Element.prototype.parentNode) {
            Element.prototype.parentNode.removeChild(this);
        }
    }
}
document.body.children[0].remove();


// Добавляем элемент после
function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


// Удаляем всех потомков
function removeChild(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
}

//OR
function removeChild(elem) {
    elem.innerHTML = '';
}

// Создаем список из ответов пользователя
var ul = document.createElement('ul');
document.body.appendChild(ul);

while (true) {
    data = prompt('Insert some information to add it');
    if (!data) {
        break;
    }
    else {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(data));
        ul.appendChild(li);
    }
}


// Создаем список из объекта (сама сделать не смогла)
var data = {
    "Fish": {
        "Salmon": {},
        "Tuna": {}
    },

    "Tree": {
        "Branch": {
            "Flower": {},
            "Leaves": {}
        }
    }
};

function createTreeFromObject(container, obj) {
    container.appendChild(createTreeDom(obj));
}
function createTreeDom(obj) {
    if (isObjectEmpty(obj)) {
        return;
    }
    var ul = document.createElement('ul');

    for (var key in obj) {
        var li = document.createElement('li');
        li.innerHTML = key;

        var childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
            li.appendChild(childrenUl);
        }
        ul.appendChild(li);
    }
    return ul;
}

function isObjectEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var container = document.getElementById('container');
createTreeFromObject(container, data);


// Добавить к <li> количество вложенных в него элементов
var liList = document.getElementsByTagName('li');
for (i = 0; i < liList.length; i++) {
    var childCount = liList[i].getElementsByTagName('li').length;
    if (childCount > 0) {
        liList[i].firstChild.data += " [" + childCount + "]";
    }
}


// Примитивный живой календарь
function calendarCreating(id, year, month) {
    var elem = document.getElementById(id),
        mon = month - 1,
        d = new Date(year, mon),
        table = '<table><tr>' +
            '<th>Mon</th>' +
            '<th>Tue</th>' +
            '<th>Wed</th>' +
            '<th>Thu</th>' +
            '<th>Fri</th>' +
            '<th>Sat</th>' +
            '<th>Sun</th>' +
            '</tr><tr>';
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';
        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }
    table += '</tr></table>';
    elem.innerHTML = table;
}
function getDay(date) {
    var day = date.getDay();
    if (day == 0) day == 7;
    return day - 1;
}
/*
createCalendar("calendar", 2018, 12);*/


// Маленькие чааасики смеются тик-тааак

var currentTime;

function updateTime() {
    var clock = document.getElementById('clock'),
        date = new Date(),
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        if (hours < 10) hours = '0' + hours;
        clock.children[0].innerHTML = hours;

        if (minutes < 10) minutes = '0' + minutes;
        clock.children[1].innerHTML = minutes;

        if (seconds < 10) seconds = '0' + seconds;
        clock.children[2].innerHTML = seconds;
}
function clockStart() {
    setInterval(update, 1000);
    update();
}
/*
clockStart();*/


// Добавляем элементы в список с insertAdjacent
document.body.children[0].insertAdjacent("beforeEnd", "<li>3</li><li>4</li><li>5</li>");


// Кнопка только на js
var a = document.createElement('a');
a.className = 'button';
a.appendChild(document.createTextNode('Press Me!'));
a.href = '/';
var s = a.style
        s.MozBorderRadius = s.WebkitBorderRadius = s.BorderRadius = '8px';
        s.border = '2px groove green';
        s.display = 'block';
        s.height = s.LineHeight = '30px';
        s.width = '100px';
        s.textDecoration = 'none';
        s.textAlign = 'center';
        s.color = 'red';
        s.fontWeight = 'bold';
var div = document.body.children[0];
div.appendChild(a);


// Уведомление, пропадающее через 1.5 секунды
function showNotification(options) {
    var notification = document.createElement('div');
    document.body.appendChild(notification);
    notification.className = 'notification';
    if (options.className) {
        notification.classList.add(options.className);
    };
    if (options.cssText) {
        notification.style.cssText = options.cssText;
    };
    notification.style.top = (options.top || 0) + 'px';
    notification.style.right = (options.right || 0) + 'px';
    notification.innerHTML = options.html;

    setTimeout(function () {
        document.body.removeChild(notification);
    }, 1500);
}


// Найти высоту прокрутки снизу
//alert(elem.scrollHeight - elem.scrollTop - elem.clientHeight);


// Узнать ширину полосы прокрутки
//alert(elem.offsetWidth - elem.clientWidth);


// Подмена div
var div = document.getElementById('moving-div'),
    anotherDiv = document.createElement('div');
anotherDiv.style.Height = div.offsetHeight + 'px';


// Хочу отметить, что это не я ничего не делаю,
// это некоторые задачи необходимо решать там же.

// 1 Размещение заметки рядом с элементом
// 2 Position: absolute
// 3 Размещение заметки внутри элемента
function positionAt(anch, pos, elem) {

    var anchCoords = anchor.getBoundingClientRect();

    switch(position) {
        case "bottom":
            elem.style.left = anchCoords.left + 'px';
            elem.style.top = anchCoords.bottom + 'px';
            break;
        case "top":
            elem.style.left = anchCoords.left + 'px';
            elem.style.top = anchCoords.top - elem.offsetHeight + 'px';
            break;
        case "right":
            elem.style.left = anchCoords.right + "px";
            elem.style.top = anchCoords.top + "px";
            break;
    }
}
function showNote(anch, pos, html) {
    var note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.appendChild(note);

    positionAt(anch, pos, note);
}


// Текущая прокрутка и область видимости для документа
var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
function getDocumentScroll() {
    return {
        top: pageYOffset,
        bottom: pageYOffset + document.documentElement.clientHeight,
        height: scrollHeight
    };
}


// Прячем элемент по клику на кнопку

document.getElementById('hider').onclick = function() {
    document.getElementById('text').style.display = 'none';
};

// Прячем саму кнопку по клику на неё

document.getElementById('hider').onclick = function () {
    document.getElementById('hider').style.display = 'none';
};
//OR
document.getElementById('hider').onclick = function () {
    this.style.display = 'none';
};


// Двигаем мячи по клику мыши.
var field = document.getElementById("field");
var ball = document.getElementById("ball");

field.onclick = function(event) {

    var fieldCoords = this.getBoundingClientRect();

    var ballCoords = {
        top: event.clientY - (fieldCoords.top + field.clientTop) - ball.clientHeight / 2,
        left: event.clientX - (fieldCoords.left + field.clientLeft) - ball.clientWidth / 2
    };

    if (ballCoords.left < 0) ballCoords.left = 0;

    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth
    };

    if (ballCoords.top < 0) ballCoords.top = 0

    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    };

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
};


// Сортируем таблицу, нажимая на th
var thead = document.getElementsByTagName("thead")[0];
var tbody = document.getElementsByTagName("tbody")[0];
var tr = tbody.getElementsByTagName("tr");
var th = thead.getElementsByTagName("th");
// Добавляем к каждому <th> атрибут "data-num"
for (var i = 0; i < th.length; i++) {
    th[i].setAttribute("data-num", i)
}
// Функция сортировки
thead.addEventListener("click", function(event) {

    var target = event.target;
    // если клик не на <th>, прерываем функцию
    if(target.tagName != "TH") {
        return;
    }
    // если клик на <th>, сортируем
    else {
        // записываем в переменную элементы с атрибутами "data-num"
        var thNum = target.getAttribute("data-num");
        // создаем массив из элементов <tr>
        var arr = [].slice.apply(tr);
        // сортируем массив
        arr.sort(function(a, b) {
            var a = a.children[thNum].innerHTML;
            var b = b.children[thNum].innerHTML;
            // если сортируемые элементы численные - возвращаем их разницу
            if(+a) return a - b;
            // если сортируемые элементы строчные - сравниваем побуквенно
            if(a > b) return 1;
            return -1;
        });
        arr.forEach(function(x) {
            tbody.appendChild(x);
        });
    }
});


// Всплывающие подсказки по наведению мыши (не сама)
var showingTooltip;

document.addEventListener('mouseover', function(event) {

    var target = event.target;

    var tooltip = target.getAttribute('data-tooltip');

    // если по наведению существует элемент с таким атрибутом:
    if (tooltip) {

        // добавляем новый div
        var tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        tooltipElem.innerHTML = tooltip;
        document.body.appendChild(tooltipElem);

        // определяем его местоположение
        var coords = target.getBoundingClientRect();

        // если не влезает слева, двигаем
        var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) {
            left = 0;
        }
        // если не влезает сверху, двигаем
        var top = coords.top - tooltipElem.offsetHeight - 5;
        if (top < 0) {
            top = coords.top + target.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';

        showingTooltip = tooltipElem;
    }
});

document.addEventListener('mouseout', function(event) {
    // если подсказка показана, убираем.
    if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip.remove();
    }
});


// Спрашиваем, точно ли пользователь хочет перейти по ссылке
document.getElementById('contents').onclick = function(event) {

    function pleaseStay(href) {
        var isLeaving = confirm('Do you really-really want to leave me alone and go to ' + href + '?');
        if (!isLeaving) return false;
    }

    var target = event.target;

    while (target != this) {
        if (target.nodeName == 'A') {
            return pleaseStay(target.getAttribute('href'));
        }
        target = target.parentNode;
    }
};