function fetchUsers($list) {
    fetch('/data/users.json')
        .then(data => data.json())
        .then(({ users }) => {
            users.forEach(user => {
                updateList($list, user)
            })
        })
}

function updateList($list, user) {
    $list.append(`
        <li class="list-item">
            <img class="avatar" src="${user.avatarUrl}" alt="Avatar" />
            <p>${user.name}</p>
        </li>
    `)   
}

$(document).ready(function () {

    const $btn = $('.js-load-data');
    const $list = $('.js-list')

    $btn.click(() => {
        fetchUsers($list)
    });

});