$(document).ready(function () {

    // Блюрим фон и выдаем алерт с приветствием, по нажатию кнопки снимаем блюр и убираем алерт
    var container = document.getElementsByClassName('container-alert-box')[0];
    var overlay = document.getElementById('overlay');
    var removeBtn = document.getElementsByClassName('remove-button')[0];

    var removeBtnClick = function (event) {
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
    var trashBtn = tableActions.getElementsByClassName('trash-btn')[0];
    var addBtn = tableActions.getElementsByClassName('add-btn')[0];
    var containerTableInput = document.getElementsByClassName('container-table-input')[0];

    tableActions.onclick = function(event) {
        if (event.target.classList.contains('add-btn')) {
            containerTableInput.classList.toggle('hidden');
            containerTableInput.onclick = function (event) {
                if (event.target.classList.contains('fa-check')) {
                    alert('ok, i got it, maaan!');
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
