$(document).ready(function () {

// Блюрим фон и выдаем алерт с приветствием, по нажатию кнопки снимаем блюр и убираем алерт
    var container = document.getElementsByClassName('container-alert-box')[0];
    var overlay = document.getElementById('overlay');
    var removeBtn = document.getElementsByClassName('remove-button')[0];

    if (!localStorage.getItem("alert")) {
        container.classList.toggle("hidden");
    }
    else overlay.classList.remove('blur');

    var removeBtnClick = function (event) {
        localStorage.setItem("alert", "disabled");
        container.classList.toggle("hidden");
        overlay.classList.remove('blur');
        overlay.classList.add('blur-out');
    };
    removeBtn.onclick = removeBtnClick;

// Переключаем видимость блоков
    var menu = document.getElementById('menu');
    var descr = document.getElementsByClassName('container-descr')[0];
    var table = document.getElementsByClassName('container-table')[0];
    var graph = document.getElementsByClassName('container-graph')[0];
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

    var form = document.forms["table-input-box"];
    var arr = [];
    var obj = {
        date: form.elements[0].value,
        name: form.elements[1].value,
        id: form.elements[2].value,
        client: form.elements[3].value,
        comment: form.elements[4].value
    };
    arr.push(obj);

    function saveData() {
        localStorage.setItem("newRowData", JSON.stringify(arr));
    }

    function loadData() {
        return JSON.parse(localStorage.getItem("newRowData"));
    }

    function render() {
        var tableData = document.getElementsByClassName('table-data')[0];
        var returnObj = JSON.parse(localStorage.getItem("newRowData"));

        for (var i = 0; i < returnObj.length; i++) {
            var newRow = tableData.insertRow(1);
            var newCell = newRow.insertCell(0);
            newCell.innerHTML = returnObj[i].date.value;
            newCell = newRow.insertCell(1);
            newCell.innerHTML = returnObj[i].name.value;
            newCell = newRow.insertCell(2);
            newCell.innerHTML = returnObj[i].id.value;
            newCell = newRow.insertCell(3);
            newCell.innerHTML = returnObj[i].client.value;
            newCell = newRow.insertCell(4);
            newCell.innerHTML = returnObj[i].comment.value;
        }
    }

    var containerTableInput = document.getElementsByClassName('container-table-input')[0];
    var tableActions = document.getElementsByClassName('table-actions')[0];

    tableActions.onclick = function (event) {
        if (event.target.classList.contains('add-btn')) {
            containerTableInput.classList.toggle('hidden');
            containerTableInput.onclick = function (event) {
                if (event.target.classList.contains('fa-check')) {
                    saveData();
                    loadData();
                    render();
                    containerTableInput.classList.toggle('hidden');
                }
                else if (event.target.classList.contains('fa-close')) {
                    containerTableInput.classList.toggle('hidden');
                }
            }
        }
        else if (event.target.classList.contains('delete-btn')) {
            alert('ok-ok, i will delete it later');
        }
    }

});
