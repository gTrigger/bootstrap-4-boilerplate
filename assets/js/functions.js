// npm install <name.js> --save || --save-dev
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
    var tableActions = document.getElementsByClassName('table-actions')[0];
    var containerTableInput = document.getElementsByClassName('container-table-input')[0];
    var tableData = document.getElementsByClassName('table-data')[0];
    let arr = [];

    // 1. Заполняем из localStorage при загрузке
    window.onload = function loadData() {

        var returnArr = JSON.parse(localStorage.getItem("newRowData"));

        for (var i = 0; i < returnArr.length; i++) {
            var newRow = tableData.insertRow(1);

            for (var elem in returnArr[i]) {
                var newCell = newRow.insertCell();
                newCell.innerText = returnArr[i][elem];
            }
            var deleteCell = newRow.insertCell();
            deleteCell.innerHTML = "<td><i class=\"fa fa-trash-o trash-btn\"></i></td>";
        }
    };

    // 2. Сохраняем-удаляем элементы.
    tableActions.onclick = function () {
        if (event.target.classList.contains('add-btn')) {
            containerTableInput.classList.toggle('hidden');
            containerTableInput.onclick = function (event) {

                if (event.target.classList.contains('fa-check')) {
                    var form = document.forms["table-input-box"];
                    var obj = {
                        date: form.elements[0].value,
                        name: form.elements[1].value,
                        id: form.elements[2].value,
                        client: form.elements[3].value,
                        comment: form.elements[4].value
                    };
                    arr.push(obj);
                    localStorage.setItem("newRowData", JSON.stringify(arr));

                        var newRow = tableData.insertRow(1);
                        for (var elem in obj) {
                            var newCell = newRow.insertCell();
                            newCell.innerHTML = obj[elem];
                        }
                        var deleteCell = newRow.insertCell();
                        deleteCell.innerHTML = "<td><i class=\"fa fa-trash-o trash-btn\"></i></td>";

                    containerTableInput.classList.toggle('hidden');
                }

                else if (event.target.classList.contains('fa-close')) {
                    containerTableInput.classList.toggle('hidden');
                }
            }
        }
        else if (event.target.classList.contains('trash-btn')) {
            if (confirm("Are you sure you want to delete entire table?") == true) {
                var tBody = tableData.getElementsByTagName('tbody')[0];

                while(tBody.hasChildNodes())
                {
                    tBody.removeChild(tBody.lastChild);
                }
            }
        }
    };
    tableData.onclick = function () {
        if (event.target.classList.contains('trash-btn')) {
            if (confirm("Are you sure you want to delete this row?") == true) {
                event.target.parentNode.parentNode.remove();
            }
        }
    }
});
