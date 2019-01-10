let arr = [];
let rowID;
let menu = document.getElementById('menu');
let containerWelcomeAlertBox = document.getElementById('welcomeModal');
let containerConfirmAlertBox = document.getElementById('confirmModal');
let containerTableInput = document.getElementById('table-input');
let tableData = document.getElementsByClassName('table-data')[0];

$('.datepicker').datepicker( {
        format: 'dd/mm/yyyy',
        autoclose: true,
});

// Заполняем из localStorage при загрузке
window.onload = function() {
    if (!localStorage.getItem("alert")) {
        toggle(containerWelcomeAlertBox);
    }
    document.getElementsByClassName('btn')[0].onclick = function () {
        localStorage.setItem("alert", "disabled");
        toggle(containerWelcomeAlertBox);
    };
    loadData();
};

// Загрузка данных из хранилища
function loadData() {
    let returnArr = arr = JSON.parse(localStorage.getItem("newRowData")) || [];
    for (let i = 0; i < returnArr.length; i++) {
        fillTableWithRows(
            returnArr[i].date,
            returnArr[i].name,
            returnArr[i].projectID,
            returnArr[i].client,
            returnArr[i].comment,
            returnArr[i].id)
    }
}

// Прячем киску! (и показываем таблицу)
function toggleTable() {
    toggle(document.getElementById('table'));
    document.getElementById('welcome-cat').hidden = !document.getElementById('welcome-cat').hidden;
}

// Переключаем видимость окна
function toggle(container) {
    container.classList.toggle("hidden");
}

// Создаем модальное окно
function makeModal(data, f1, f2) {
    containerConfirmAlertBox.innerHTML =
        "<div class=\"alert-box modal-open\">" +
        "<h1 class=\"modal-header\">Attention!</h1>" +
        "<div class=\"modal-body\">" +
        "<p class=\"alert-box-text\">Are you sure you want to delete the whole " + data + "?</p>" +
        "</div>" +
        "<div class=\"modal-footer\">" +
        "<button type=\"button\" class=\"btn\" onclick=\"" + f1 + "\">No</button>" +
        "<button type=\"button\" class=\"btn\" onclick=\"" + f2 + "\">Yes</button>" +
        "</div>" +
        "</div>";
    toggle(containerConfirmAlertBox);
}

// Добавляем данные в таблицу и хранилище
function addNewRow() {
    let form = document.forms["table-input-box"];
    let obj = {
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
    toggle(containerTableInput);
}

// Заполняем таблицу из локального хранилища
function fillTableWithRows(date, name, projectID, client, comment, id) {
    let newRow = tableData.insertRow(1);
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
    toggle(containerConfirmAlertBox);
}

//Очищаем таблицу
function clearTable() {
    let tBody = tableData.getElementsByTagName('tbody')[0];
    while (tBody.childNodes.length > 2) {
        tBody.removeChild(tBody.firstChild);
    }
}

function returnRowToDeleteID() {
    makeModal("row", "toggleContainer(containerConfirmAlertBox)", "deleteRow()");
    rowID = event.target.parentNode.parentNode.getAttribute('id');
}

//Удаляем строку таблицы
function deleteRow() {
    let storedActions = JSON.parse(localStorage.getItem("newRowData"));
    let filteredActions = storedActions.filter(function(storedActions) {
        return +storedActions.id !== +rowID;
    });
    localStorage.setItem('newRowData', JSON.stringify(filteredActions));
    clearTable();
    let returnArr = arr = JSON.parse(localStorage.getItem("newRowData")) || [];
    for (let i = 0; i < returnArr.length; i++) {
        fillTableWithRows(
            returnArr[i].date,
            returnArr[i].name,
            returnArr[i].projectID,
            returnArr[i].client,
            returnArr[i].comment,
            returnArr[i].id)
    }
    toggle(containerConfirmAlertBox);
}

//Поиск по таблице
function tableSearch() {
    let searchBox = document.getElementById('table-searchbox');
    let tableRows = tableData.getElementsByTagName('tbody')[0].rows;
    let searchPhrase = new RegExp(searchBox.value, 'i');
    let flag = false;
    for (let i = 0; i < tableRows.length; i++) {
        flag = false;
        for (let j = 0; j < tableRows[i].cells.length; j++) {

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

//Очищаем поле поиска по таблице
function clearSearchbox() {
    let tableRows = tableData.getElementsByTagName('tbody')[0].rows;
    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].style.display = "";
    }
    document.getElementById('table-searchbox').value = '';
}
