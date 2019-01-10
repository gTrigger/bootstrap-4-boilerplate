
// npm install <name.js> --save || --save-dev

let arr = [];
var menu = document.getElementById('menu');
var descr = document.getElementsByClassName('container-descr')[0];
var table = document.getElementsByClassName('container-table')[0];
var graph = document.getElementsByClassName('container-graph')[0];
var tableActions = document.getElementsByClassName('table-actions')[0];
var containerTableInput = document.getElementsByClassName('container-table-input')[0];
var tableData = document.getElementsByClassName('table-data')[0];
var containerWelcomeAlertBox = document.getElementsByClassName('container-welcome-alert-box')[0];
var containerConfirmAlertBox = document.getElementsByClassName('container-confirm-alert-box')[0];
var closeAlertBtn = document.getElementsByClassName('remove-button')[0];
var rowID;


$(function () {
    $('.datepicker').datepicker( {
        format: 'dd/mm/yyyy',
        autoclose: true
    })
});

$(document).ready(function () {
    'use strict';
    // Алерт с приветствием, по нажатию кнопки снимаем блюр и убираем алерт
    if (!localStorage.getItem("alert")) {
        containerWelcomeAlertBox.classList.toggle('hidden');
    }
    closeAlertBtn.onclick = function () {
        localStorage.setItem("alert", "disabled");
        containerWelcomeAlertBox.classList.toggle('hidden');
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
            fillTableWithRows(
                returnArr[i].date,
                returnArr[i].name,
                returnArr[i].projectID,
                returnArr[i].client,
                returnArr[i].comment,
                returnArr[i].id)
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

                    fillTableWithRows(
                        form.elements.actionDate.value,
                        form.elements.actionName.value,
                        form.elements.actionProjectID.value,
                        form.elements.actionClientName.value,
                        form.elements.actionComment.value,
                        obj.id);
                    containerTableInput.classList.toggle('hidden');
                }

                else if (event.target.classList.contains('form-cancel-btn')) {
                    containerTableInput.classList.toggle('hidden');
                }
            }
        }
        //Удаляем всю таблицу и очищаем localStorage
        /*else if (event.target.classList.contains('table-trash-btn')) {
            if (confirm("Are you sure you want to delete entire table?") === true) {
                var tBody = tableData.getElementsByTagName('tbody')[0];
                localStorage.removeItem('newRowData');
                arr = [];
                while (tBody.childNodes.length > 2) {
                    tBody.removeChild(tBody.firstChild);
                }
            }
        }*/
    };
    //Удаляем строку из таблицы и из localStorage
    /*tableData.onclick = function () {
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
    }*/
});
// Заполняем таблицу из локального хранилища
function fillTableWithRows(date, name, projectID, client, comment, id) {
    var newRow = tableData.insertRow(1);
    newRow.innerHTML =
        "<td>" + date + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + projectID + "</td>" +
        "<td>" + client + "</td>" +
        "<td>" + comment + "</td>" +
        "<td><i class=\"fa fa-trash-o row-trash-btn\" onclick='returnRowToDeleteID()'></i></td>";
    newRow.setAttribute("id", id);
}
// Удаляем данные в таблице и в хранилище
function deleteEntireTable() {
    clearTable();
    localStorage.removeItem('newRowData');
    arr = [];
}
//Очищаем таблицу
function clearTable() {
    var tBody = tableData.getElementsByTagName('tbody')[0];
    while (tBody.childNodes.length > 2) {
        tBody.removeChild(tBody.firstChild);
    }
}

function returnRowToDeleteID() {
    containerConfirmAlertBox.classList.toggle("hidden");
    rowID = event.target.parentNode.parentNode.getAttribute('id');
}

//Удаляем строку таблицы
function deleteRow() {
    var storedActions = JSON.parse(localStorage.getItem("newRowData"));
    var filteredActions = storedActions.filter(function(storedActions) {
        return +storedActions.id !== +rowID;
    });
    localStorage.setItem('newRowData', JSON.stringify(filteredActions));
    clearTable();
    let returnArr = arr = JSON.parse(localStorage.getItem("newRowData")) || [];
    for (var i = 0; i < returnArr.length; i++) {
        fillTableWithRows(
            returnArr[i].date,
            returnArr[i].name,
            returnArr[i].projectID,
            returnArr[i].client,
            returnArr[i].comment,
            returnArr[i].id)
    }
    hideAlertBox();
}

/*function deleteRow() {
    var rowToDeleteID = event.target.parentNode.parentNode.getAttribute('id');
    var storedActions = JSON.parse(localStorage.getItem("newRowData"));
    var filteredActions = storedActions.filter(function(storedActions) {
        return +storedActions.id !== +rowToDeleteID;
    });
    event.relatedTarget.parentNode.parentNode.remove();
    localStorage.setItem('newRowData', JSON.stringify(filteredActions));
    hideAlertBox();
}*/

function hideAlertBox() {
    containerConfirmAlertBox.classList.toggle("hidden");
}
//Поиск по таблице
function tableSearch() {
    var searchBox = document.getElementById('table-searchbox');
    var tableRows = tableData.getElementsByTagName('tbody')[0].rows;
    var searchPhrase = new RegExp(searchBox.value, 'i');
    var flag = false;
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
//Очищаем поле
function clearSearchbox() {
    var tableRows = tableData.getElementsByTagName('tbody')[0].rows;
    for (var i = 0; i < tableRows.length; i++) {
        tableRows[i].style.display = "";
    }
    document.getElementById('table-searchbox').value = '';
}