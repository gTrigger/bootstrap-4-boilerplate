// npm install <name.js> --save || --save-dev

let arr = [];
var menu = document.getElementById('menu');
var descr = document.getElementsByClassName('container-descr')[0];
var table = document.getElementsByClassName('container-table')[0];
var graph = document.getElementsByClassName('container-graph')[0];
var tableActions = document.getElementsByClassName('table-actions')[0];
var containerTableInput = document.getElementsByClassName('container-table-input')[0];
var tableData = document.getElementsByClassName('table-data')[0];
var container = document.getElementsByClassName('container-alert-box')[0];
var overlay = document.getElementById('overlay');
var removeBtn = document.getElementsByClassName('remove-button')[0];

$(document).ready(function () {
    'use strict';
    window.GLOBAL.Module1.init({self: window.GLOBAL.Module1});


    window.GLOBAL.Module1.filter();
    window.GLOBAL.Module1.filter();
    window.GLOBAL.Module1.filter();
    window.GLOBAL.Module1.filter();

    // Блюрим фон и выдаем алерт с приветствием, по нажатию кнопки снимаем блюр и убираем алерт
    if (!localStorage.getItem("alert")) {
        container.classList.toggle("hidden");
    }
    /*else overlay.classList.remove('blur');
*/
    removeBtn.onclick = function () {
        localStorage.setItem("alert", "disabled");
        container.classList.toggle("hidden");
        /*overlay.classList.remove('blur');
        overlay.classList.add('blur-out');*/
    };

    // Переключаем видимость блоков
    menu.onclick = function (event) {
        if (event.target.classList.contains('show-profile-btn')) {
            descr.classList.toggle('hidden');
        }
        else if (event.target.classList.contains('show-table-btn')) {
            table.classList.toggle('hidden');
            document.getElementById('welcome-cat').hidden = !document.getElementById('welcome-cat').hidden;
        }
        else if (event.target.classList.contains('show-graph-btn')) {
            graph.classList.toggle('hidden');
        }
    };

    // Работаем с таблицей
    // 1. Заполняем из localStorage при загрузке
    window.onload = function loadData() {
        let returnArr = arr = JSON.parse(localStorage.getItem("newRowData")) || [];
        for (var i = 0; i < returnArr.length; i++) {
            var newRow = tableData.insertRow(1);
            newRow.innerHTML =
                "<td>" + returnArr[i].date + "</td>" +
                "<td>" + returnArr[i].name + "</td>" +
                "<td>" + returnArr[i].projectID + "</td>" +
                "<td>" + returnArr[i].client + "</td>" +
                "<td>" + returnArr[i].comment + "</td>" +
                "<td><i class=\"fa fa-trash-o trash-btn\"></i></td>";
            newRow.setAttribute("id", returnArr[i].id);
        }
    };

    // 2. Сохраняем-удаляем элементы.
    tableActions.onclick = function () {
        if (event.target.classList.contains('table-add-btn')) {
            containerTableInput.classList.toggle('hidden');
            containerTableInput.onclick = function (event) {

                if (event.target.classList.contains('form-check-btn')) {
                    var form = document.forms["table-input-box"];
                    var obj = {
                        date: form.elements.actionDate.value,
                        name: form.elements.actionName.value,
                        projectID: form.elements.actionProjectID.value,
                        client: form.elements.actionClientName.value,
                        comment: form.elements.actionComment.value,
                        id: Math.round(Math.random()*10000)
                    };
                    arr.push(obj);
                    localStorage.setItem("newRowData", JSON.stringify(arr));

                    var newRow = tableData.insertRow(1);
                    newRow.innerHTML =
                        "<td>" + form.elements.actionDate.value + "</td>" +
                        "<td>" + form.elements.actionName.value + "</td>" +
                        "<td>" + form.elements.actionProjectID.value + "</td>" +
                        "<td>" + form.elements.actionClientName.value + "</td>" +
                        "<td>" + form.elements.actionComment.value + "</td>" +
                        "<td><i class=\"fa fa-trash-o row-trash-btn\"></i></td>";
                    newRow.setAttribute("id", obj.id);

                    containerTableInput.classList.toggle('hidden');
                }

                else if (event.target.classList.contains('form-cancel-btn')) {
                    containerTableInput.classList.toggle('hidden');
                }
            }
        }
        //Удаляем всю таблицу и очищаем localStorage
        else if (event.target.classList.contains('table-trash-btn')) {
            if (confirm("Are you sure you want to delete entire table?") === true) {
                var tBody = tableData.getElementsByTagName('tbody')[0];

                localStorage.removeItem('newRowData');

                while (tBody.childNodes.length > 2) {
                    tBody.removeChild(tBody.firstChild);
                }
            }
        }
    };
    //Удаляем строку из таблицы и из localStorage
    tableData.onclick = function () {
        if (event.target.classList.contains('row-trash-btn')) {
            var rowToDeleteID = event.target.parentNode.parentNode.getAttribute('id');
            console.log(event.target.parentNode.parentNode.getAttribute('id'));
            if (confirm("Are you sure you want to delete this row?") === true) {

                var storedActions = JSON.parse(localStorage.getItem("newRowData"));
                var filteredActions = storedActions.filter(function(storedActions) {
                    return +storedActions.id !== +rowToDeleteID;
                });
                event.target.parentNode.parentNode.remove();
                console.log(filteredActions);
                localStorage.setItem('newRowData', JSON.stringify(filteredActions));
            }
        }
    }
});
//Поиск по таблице
function tableSearch() {
    var searchBox = document.getElementById('table-searchbox');
    var tableRows = tableData.getElementsByTagName('tbody')[0].rows;
    var searchPhrase = new RegExp(searchBox.value, 'i');
    var flag = false;
    console.log(searchPhrase);
    for (var i = 0; i < tableRows.length; i++) {
        flag = false;
        for (var j = 0; j < tableRows[i].cells.length; j++) {

            flag = searchPhrase.test(tableRows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            tableRows[i].style.display = "";
        }
        else {
            tableRows[i].style.display = "none";
        }
    }
}
function clearSearchbox() {
    var tableRows = tableData.getElementsByTagName('tbody')[0].rows;
    for (var i = 0; i < tableRows.length; i++) {
        tableRows[i].style.display = "";
    }
    document.getElementById('table-searchbox').value = '';
}

