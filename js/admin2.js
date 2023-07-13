// управление кнопками
const adminButtons = {
    "USER": {
        elem: document.querySelector(".reg_users"),
        src: "/user/admin/req",
        tmp: [
    {
        "id": 7,
        "surname": "Норм",
        "name": "Нормович",
        "patronymic": "Норменков",
        "post": "Человек",
        "placeWorkOrStudy": "СГТУ",
        "phone": "+79231552311",
        "email": "dasail@mail.ru",
        "createdAt": "2023-07-13T11:10:39.631Z",
        "updatedAt": "2023-07-13T13:21:36.554Z",
        "credentialId": 8
    },
    {
        "id": 2,
        "surname": "Kash",
        "name": "Gog",
        "patronymic": "A",
        "post": "student",
        "placeWorkOrStudy": "SSTU",
        "phone": "+79238816623",
        "email": "2316656@mail.ru",
        "createdAt": "2023-07-05T07:11:31.074Z",
        "updatedAt": "2023-07-05T07:11:31.074Z",
        "credentialId": 3
    },
    {
        "id": 1,
        "surname": "Ovch",
        "name": "Alex",
        "patronymic": "A",
        "post": "student",
        "placeWorkOrStudy": "SSTU",
        "phone": "+79063028764",
        "email": "345w2111@mail.ru",
        "createdAt": "2023-07-05T07:02:02.046Z",
        "updatedAt": "2023-07-05T07:02:02.046Z",
        "credentialId": 2
    }
],
        action: (data) => getUsers(data)
    },
    "FEEDBACK": {
        elem: document.querySelector(".reg_feedbacks"),
        src: "/feedback/",
        tmp: [
    {
        "id": 7,
        "commentatorName": "Виктория",
        "commentatorSurname": "Середенкина",
        "comment": "Где",
        "estimation": 5,
        "status": "REJECTED",
        "createdAt": "2023-07-13T13:19:15.884Z",
        "updatedAt": "2023-07-13T13:20:26.235Z",
        "guestRequestId": 26
    },
    {
        "id": 6,
        "commentatorName": "Александр",
        "commentatorSurname": "Овчинников",
        "comment": "dsadsadsadsa",
        "estimation": 5,
        "status": "MODERATION",
        "createdAt": "2023-07-13T11:35:25.940Z",
        "updatedAt": "2023-07-13T11:35:25.940Z",
        "guestRequestId": 20
    },
    {
        "id": 3,
        "commentatorName": "Влад",
        "commentatorSurname": "Владов",
        "comment": "0/10",
        "estimation": 3,
        "status": "REJECTED",
        "createdAt": "2023-07-09T22:07:35.030Z",
        "updatedAt": "2023-07-13T07:39:01.359Z",
        "guestRequestId": 9
    },
    {
        "id": 2,
        "commentatorName": "Влад",
        "commentatorSurname": "Владов",
        "comment": "ААААААА",
        "estimation": 5,
        "status": "MODERATION",
        "createdAt": "2023-07-07T10:28:41.005Z",
        "updatedAt": "2023-07-13T07:39:25.128Z",
        "guestRequestId": 9
    },
    {
        "id": 1,
        "commentatorName": "Влад",
        "commentatorSurname": "Владов",
        "comment": "ААААААА",
        "estimation": 5,
        "status": "MODERATION",
        "createdAt": "2023-07-07T10:28:36.551Z",
        "updatedAt": "2023-07-11T15:51:36.357Z",
        "guestRequestId": 9
    }
],
        action: (data) => getFeedbacks(data)
    },
}

//получить таблицу пользователей
const getUsers = (data) => {

    const holder = document.querySelector(".pg-data-holder");

    if (data.length == 0) {
        holder.innerHTML = "<p>Пользователей не найдено</p>";
        return;
    }
    else holder.innerHTML = "";

    const sorts = createUserSorts(data);
    const reg = createUserReg();

    const table = document.createElement("div");
    table.className = "table";
    table.innerHTML = 
    `
    <div class="table-header">
        <div class="table-row">
            <p class="table-cell user-cell">№</p>
            <p class="table-cell user-cell">Дата Создания</p>
            <p class="table-cell user-cell">ФИО</p>
            <p class="table-cell user-cell">Должность</p>
            <p class="table-cell user-cell">Место работы/учёбы</p>
            <p class="table-cell user-cell">Телефон</p>
            <p class="table-cell user-cell">Почта</p>
            <p class="table-cell user-cell">Действие</p>
        </div>
    </div>
    <div class="table-body pg-admins">

    </div>
    `

    const admins = table.querySelector(".pg-admins");
    data.forEach(elem => {
        admins.appendChild(createTableRowUser(elem));
    });

    holder.appendChild(reg);
    holder.appendChild(sorts);
    holder.appendChild(table);
}

//создать строку в таблице
const createTableRowUser = (elem) => {
    let tableRow = document.createElement("div");
    tableRow.className = "table-row";
    tableRow.innerHTML = 
    `
    <p class="table-cell user-cell">${elem.id}</p>
    <p class="table-cell user-cell">${new Date(elem.createdAt).toLocaleString()}</p>
    <p class="table-cell user-cell">${elem.surname + " " + elem.name + " " + elem.patronymic}</p>
    <p class="table-cell user-cell">${elem.post}</p>
    <p class="table-cell user-cell">${elem.placeWorkOrStudy}</p>
    <p class="table-cell user-cell">${elem.phone}</p>
    <p class="table-cell user-cell">${elem.email}</p>
    <p class="table-cell user-cell">
        <button type="button" class="pg-reduct read-button td-button">Посмотреть</button>
        <button type="button" class="pg-delete delete-button td-button">Удалить</button>
    </p>
    `

    tableRow.querySelector(".pg-reduct").onclick = () => {
        command = "/user/admin/req/";

        let tmp = {
            "id": 1,
            "surname": "Aдмин",
            "name": "Админ",
            "patronymic": "A",
            "post": "student",
            "placeWorkOrStudy": "SSTU",
            "phone": "+79063028764",
            "email": "345w2111@mail.ru",
            "createdAt": "2023-07-05T07:02:02.046Z",
            "updatedAt": "2023-07-05T07:02:02.046Z",
            "credentialId": 2,
            "credential": {
                "id": 2,
                "login": "mrp",
                "password": "$2b$05$ZsJkFwynmafzvr/1T3fAY./W1/0ujzjM7Dnq0rkqKTPF2pNGHOcgC",
                "role": "ADMIN",
                "createdAt": "2023-07-05T07:02:02.040Z",
                "updatedAt": "2023-07-05T07:02:02.040Z"
            }
        }

        showUser(tmp);
    }
    

    return tableRow;
}

const createFormUser = () => {
    let form = document.createElement("form");
    form.innerHTML = 
    `
    <div class="req-comments-header margintop10">
        <p class="req-comments-title">Регистрация</p>
    </div>

    <div class="admin-user-info margintop10">
        <div class="req-info user-info">
            <label class="req-info-title">Логин:</label>
            <input class="req-info-value user-info-value" type="text" placeholder="логин" id="login-user" required>
        </div>

        <div class="req-info user-info">
            <label class="req-info-title">Пароль:</label>
            <input class="req-info-value user-info-value" type="password" placeholder="пароль" id="password-user" required>
            <input class="req-info-value user-info-value" type="password" placeholder="повторите пароль" id="confirm-password-user" required>
        </div>
        
        <div class="req-info user-info">
            <label class="req-info-title">Роль:</label>
            <select id="role-user" required>
                <option selected value="VOLUNTEER">Волонтёр</option>
                <option value="ADMIN">Админ</option>
            <select>
        </div>

        <div class="req-info user-info">
            <p class="req-info-title">ФИО:</p>
            <input class="req-info-value user-info-value" type="text" placeholder="фамилия" id="surname-user" required>
            <input class="req-info-value user-info-value" type="text" placeholder="имя" id="name-user" required>
            <input class="req-info-value user-info-value" type="text" placeholder="отчество" id="patronymic-user" required>
        </div>

        <div class="req-info user-info">
            <label class="req-info-title">Должность:</label>
            <input class="req-info-value user-info-value" type="text" placeholder="должность" id="post-user" required>
        </div>

        <div class="req-info user-info">
            <label class="req-info-title">Место работы/учёбы:</label>
            <input class="req-info-value user-info-value" type="text" placeholder="место работы/учёбы" id="place-work-or-study-user" required>
        </div>

        <div class="req-info user-info">
            <label class="req-info-title">Телефон:</label>
            <input class="req-info-value user-info-value" type="text" placeholder="телефон" id="phone-user" required>
        </div>

        <div class="req-info user-info">
            <label class="req-info-title">Почта:</label>
            <input class="req-info-value user-info-value" type="text" placeholder="почта" id="email-user" required>
        </div>

        <button class="req-form-submit" type="submit">Зарегистрировать</button>
    </div>
    `
    form.onsubmit = (e) => {

        e.preventDefault();

        const login = form.querySelector("#login-user").value;
        const password = form.querySelector("#password-user").value;
        const confirmPassword = form.querySelector("#confirm-password-user").value;
        const role = form.querySelector("#role-user").value;
        const surname = form.querySelector("#surname-user").value;
        const name = form.querySelector("#name-user").value;
        const patronymic = form.querySelector("#patronymic-user").value;
        const post = form.querySelector("#post-user").value;
        const placeWorkOrStudy = form.querySelector("#place-work-or-study-user").value;
        const phone = form.querySelector("#phone-user").value;
        const email = form.querySelector("#email-user").value;
        command = "/user/registration";
        
       
    }

    return form;
}

//показать подробные сведения о пользователе
const showUser = (data) => {
    const holder = document.querySelector(".pg-data-holder");
    holder.innerHTML = "";
    holder.appendChild(createUserCard(data));
}

//создать карточку пользователя
const createUserCard = (elem) => {

    let card = document.createElement("div");
    card.className = "req-card";
    card.innerHTML = 
    `
    <div class="req-card-header">
        <div class="req-card-header-data">
            <p class="req-card-title">Пользователь №${elem.id}</p>
            <p class="req-card-date">${new Date(elem.createdAt).toLocaleString()}</p>
        </div>
        <button class="pg-close req-card-close">x</button>
    </div>

    <div class="req-comments-header margintop10">
        <p class="req-comments-title">Сведения о пользователе</p>
    </div>

    <form class="admin-user-info margintop10 pg-user">
        <div class="req-info user-info">
            <label class="req-info-title">ФИО:</label>
            <input type="text" class="pg-surname req-info-value user-info-value" value="${elem.surname}">
            <input type="text" class="pg-name req-info-value user-info-value" value="${elem.name}">
            <input type="text" class="pg-patronymic req-info-value user-info-value" value="${elem.patronymic}">
        </div>
        <div class="req-info user-info">
            <lable class="req-info-title">Должность:</label>
            <input type="text" class="pg-post req-info-value user-info-value" value="${elem.post}">
        </div>
        <div class="req-info user-info">
            <label class="req-info-title">Место работы/учёбы:</label>
            <input type="text" class="pg-place req-info-value user-info-value" value="${elem.placeWorkOrStudy}">
        </div>
        <div class="req-info user-info">
            <label class="req-info-title">Телефон:</label>
            <input type="text" class="pg-phone req-info-value user-info-value" value="${elem.phone}">
        </div>
        <div class="req-info user-info">
            <label class="req-info-title">Почта:</label>
            <input type="text" class="pg-email req-info-value user-info-value" value="${elem.email}">
        </div>

        <button type="submit" class="req-form-submit">Сохранить изменения</button>
    </form>

    <div class="req-comments-header margintop10">
        <p class="req-comments-title">Учетные данные пользователя</p>
    </div>

    <div class="admin-user-info margintop10 pg-cred">
        <div class="req-info user-info">
            <p class="req-info-title">Логин:</p>
            <p class="req-info-value user-info-value">${elem.credential.login}</p>
        </div>
        <form class="req-info user-info pg-change-password">
            <label class="req-info-title">Изменить пароль:</label>
            <input type="password" class="req-info-value user-info-value pg-new-password">
            <button type="submit" class="req-form-submit user-form-submit">Изменить</button>
        </form>
        <div class="req-info user-info">
            <p class="req-info-title">Роль:</p>
            <p class="req-info-value user-info-value">${elem.credential.role}</p>
        </div>
    </div>
    `

    return card;
}

//получить таблицу пользователей
const getFeedbacks = (data) => {

    const holder = document.querySelector(".pg-data-holder");

    if (data.length == 0) {
        holder.innerHTML = "<p>Отзывов не найдено</p>";
        return;
    }
    else holder.innerHTML = "";

    const sorts = createFeedbackSorts(data);

    const table = document.createElement("div");
    table.className = "table";
    table.innerHTML = 
    `
    <div class="table-header">
        <div class="table-row">
            <p class="table-cell feedback-cell">№</p>
            <p class="table-cell feedback-cell">Дата Создания</p>
            <p class="table-cell feedback-cell">ФИ</p>
            <p class="table-cell feedback-cell">Комментарий</p>
            <p class="table-cell feedback-cell">Оценка</p>
            <p class="table-cell feedback-cell">Статус</p>
            <p class="table-cell feedback-cell">Действие</p>
        </div>
    </div>
    <div class="table-body pg-admins">

    </div>
    `

    const admins = table.querySelector(".pg-admins");
    data.forEach(elem => {
        admins.appendChild(createTableRowFeedback(elem));
    });

    holder.appendChild(sorts);
    holder.appendChild(table);
}

//создать строку в таблице
const createTableRowFeedback = (elem) => {
    let tableRow = document.createElement("div");
    tableRow.className = "table-row";
    tableRow.innerHTML = 
    `
    <p class="table-cell feedback-cell">${elem.id}</p>
    <p class="table-cell feedback-cell">${new Date(elem.createdAt).toLocaleString()}</p>
    <p class="table-cell feedback-cell">${elem.commentatorSurname + " " + elem.commentatorName}</p>
    <p class="table-cell feedback-cell">${elem.comment}</p>
    <p class="table-cell feedback-cell">${elem.estimation}</p>
    <p class="table-cell feedback-cell">${matches.values[matches.keys.indexOf(elem.status)]}</p>
    <p class="table-cell feedback-cell">
        <button type="button" class="pg-reduct read-button td-button">Обработать</button>
        <button type="button" class="pg-delete delete-button td-button">Удалить</button>
    </p>
    `

    tableRow.querySelector(".pg-reduct").onclick = () => {
        let tmp = 
        {
            "id": 7,
            "commentatorName": "Виктория",
            "commentatorSurname": "Середенкина",
            "comment": "Где????",
            "estimation": 5,
            "status": "REJECTED",
            "createdAt": "2023-07-13T13:19:15.884Z",
            "updatedAt": "2023-07-13T13:20:26.235Z",
            "guestRequestId": 26
        }
    
        showFeedback(tmp);
        
    }
    
    return tableRow;
}

//показать подробные сведения об отзыве
const showFeedback = (data) => {
    const holder = document.querySelector(".pg-data-holder");
    holder.innerHTML = "";
    holder.appendChild(createFormFeedback(data));
}

//создать карточку отзыва
const createFormFeedback = (elem) => {

    let form = document.createElement("form");
    form.innerHTML = 
    `
    <div class="req-card-header feedback-card-header">
        <div class="req-card-header-data">
            <p class="req-card-title">Заявка №${elem.id}</p>
            <p class="req-card-date">${new Date(elem.createdAt).toLocaleString()}</p>
        </div>
        <button type="button" class="pg-close req-card-close">x</button>
    </div>

    <div class="req-card-guest feedback-card-comment">
        <div class="req-guest-data">
            <p class="req-guest-name">${elem.commentatorSurname + " " + elem.commentatorName}</p>

            <label class="req-guest-phone">Оценка</label>
            <select class="pg-select-mark">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            <select>

            <label class="req-guest-phone">Статус</label>
            <select class="pg-select-status">
                <option value="MODERATION">Не опубликован</option>
                <option value="PUBLISHED">Опубликован</option>
                <option value="REJECTED">Отклонен</option>
            <select>
        </div>
        <p class="req-guest-comment feedback-guset-comment">${elem.comment}</p>

        <button type="submit" class="req-form-submit">Сохранить изменения</button>
    </div>
    
    `;

    form.querySelector(`.pg-select-mark option[value="${elem.estimation}"]`).selected = true;
    form.querySelector(`.pg-select-status option[value="${elem.status}"]`).selected = true;

    form.querySelector(".pg-close").onclick = () => {
        document.querySelector(".reg_feedbacks").click();
    }

    form.onsubmit = (e) => {

        e.preventDefault();

        let status = form.querySelector(".pg-select-status").value;
        let mark = form.querySelector(".pg-select-mark").value;


    }

    return form;
}

//шаблон сортировок
const adminSorts = {
    date: {
        name: "По дате создания",
        class: "pg-date-sort",
        options: [
            {value: "new", name: "Сначала новые", sort: (data) => data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))},
            {value: "old", name: "Сначала старые", sort: (data) => data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))},
        ],
        currOption: 0,
        maxOption: 2,
    }
}

//блок сортировки
const createUserSorts = (data) => {
    const block = document.createElement("div");
    block.className = "request-sorts";
    block.innerHTML =
    `
    <p class="request-sorts-title">Сортировки</p>
    <div class="pg-sorts request-sorts-keeper">
        
    </div>
    `
    const sorts = block.querySelector(".pg-sorts");
    for (let key in adminSorts){

        let sort = document.createElement("div");
        let elem = adminSorts[key];
        
        sort.innerHTML =
        `
            <button type="button" class="${elem.class} request-sorts-button" value="${elem.options[elem.currOption].value}">${elem.options[elem.currOption].name}</button>
        `
        let button = sort.querySelector(`.${elem.class}`);
        button.onclick = () => {
            elem.currOption = (elem.currOption + 1) % elem.maxOption;
            button.value = elem.options[elem.currOption].value;
            button.innerHTML = elem.options[elem.currOption].name;
            getUsers(elem.options[elem.currOption].sort(data), key);
        }

        sorts.appendChild(sort);
    }
    return block;
}

// регистрация
const createUserReg = () => {
    const block = document.createElement("div");
    block.className = "request-sorts";
    block.innerHTML =
    `
    <p class="request-sorts-title">Регистрация</p>
    <div class="pg-sorts request-sorts-keeper">
        <button type="button" class="user-reg pg-form-registration request-sorts-button">Создать пользователя</button>
    </div>
    `
    
    block.querySelector(".pg-form-registration").onclick = () => {
        const holder = document.querySelector(".pg-data-holder");
        holder.innerHTML = "";
        holder.appendChild(createFormUser())
    }
    return block;
}

//блок сортировки
const createFeedbackSorts = (data) => {
    const block = document.createElement("div");
    block.className = "request-sorts";
    block.innerHTML =
    `
    <p class="request-sorts-title">Сортировки</p>
    <div class="pg-sorts request-sorts-keeper">
        
    </div>
    `
    const sorts = block.querySelector(".pg-sorts");
    for (let key in adminSorts){

        let sort = document.createElement("div");
        let elem = adminSorts[key];
        
        sort.innerHTML =
        `
            <button type="button" class="${elem.class}  request-sorts-button" value="${elem.options[elem.currOption].value}">${elem.options[elem.currOption].name}</button>
        `

        let button = sort.querySelector(`.${elem.class}`);
        button.onclick = () => {
            elem.currOption = (elem.currOption + 1) % elem.maxOption;
            button.value = elem.options[elem.currOption].value;
            button.innerHTML = elem.options[elem.currOption].name;
            getFeedbacks(elem.options[elem.currOption].sort(data), key);
        }

        sorts.appendChild(sort);
    }
    return block;
}

const getStatusStatistics = (dataSt) => {
    const holder = document.querySelector(".pg-data-holder");
    holder.innerHTML = "<canvas id='statusStatistics' width='300' height='100'></canvas>";
    var ctx = document.getElementById('statusStatistics').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["NEW","AT WORK","CANCELLED","COMPLETED","ALL"],
            datasets: [{
                label: 'Count',
                data: [dataSt["NEW"],dataSt["AT WORK"],dataSt["CANCELLED"],dataSt["COMPLETED"],dataSt["ALL"]],
                backgroundColor: [
                    'rgba(216, 27, 96, 0.6)',
                    'rgba(3, 169, 244, 0.6)',
                    'rgba(255, 152, 0, 0.6)',
                    'rgba(29, 233, 182, 0.6)',
                    'rgba(156, 39, 176, 0.6)'
                ],
                borderColor: [
                    'rgba(216, 27, 96, 1)',
                    'rgba(3, 169, 244, 1)',
                    'rgba(255, 152, 0, 1)',
                    'rgba(29, 233, 182, 1)',
                    'rgba(156, 39, 176, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Stacked Bar chart for pollution status'
                },
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });
}

const getAssistanceStatistics = (dataSt) => {
    const holder = document.querySelector(".pg-data-holder");
    holder.innerHTML = "<canvas id='assistanceStatistics' width='300' height='100'></canvas>";
    var ctx = document.getElementById('assistanceStatistics').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["ADDRESS","PSYCHO","HUMANITARIAN","OTHER","ALL"],
            datasets: [{
                label: 'Count',
                data: [dataSt["ADDRESS"],dataSt["PSYCHO"],dataSt["HUMANITARIAN"],dataSt["OTHER"],dataSt["ALL"]],
                backgroundColor: [
                    'rgba(216, 27, 96, 0.6)',
                    'rgba(3, 169, 244, 0.6)',
                    'rgba(255, 152, 0, 0.6)',
                    'rgba(29, 233, 182, 0.6)',
                    'rgba(156, 39, 176, 0.6)'
                ],
                borderColor: [
                    'rgba(216, 27, 96, 1)',
                    'rgba(3, 169, 244, 1)',
                    'rgba(255, 152, 0, 1)',
                    'rgba(29, 233, 182, 1)',
                    'rgba(156, 39, 176, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Stacked Bar chart for pollution status'
                },
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });
}

const getComplexStatistics = (dataSt) => {
    const holder = document.querySelector(".pg-data-holder");
    holder.innerHTML = "<canvas id='ComplexStatistics' width='300' height='100'></canvas>";
    var ctx = document.getElementById('ComplexStatistics').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["ADDRESS","PSYCHO","HUMANITARIAN","OTHER"],
            datasets: [{
                label: 'NEW',
                data: [dataSt["ADDRESS"]["NEW"],dataSt["PSYCHO"]["NEW"],dataSt["HUMANITARIAN"]["NEW"],dataSt["OTHER"]["NEW"],],
                backgroundColor: 
                    'rgba(216, 27, 96, 0.6)'
                ,
                borderColor: 
                    'rgba(216, 27, 96, 1)'
                ,
                borderWidth: 1
            },
            {
                label: 'AT WORK',
                data: [dataSt["ADDRESS"]["AT WORK"],dataSt["PSYCHO"]["AT WORK"],dataSt["HUMANITARIAN"]["AT WORK"],dataSt["OTHER"]["AT WORK"],],
                backgroundColor: 
                    'rgba(3, 169, 244, 0.6)'
                ,
                borderColor: 
                    'rgba(3, 169, 244, 1)'
                ,
                borderWidth: 1
            },
            {
                label: 'CANCELLED',
                data: [dataSt["ADDRESS"]["CANCELLED"],dataSt["PSYCHO"]["CANCELLED"],dataSt["HUMANITARIAN"]["CANCELLED"],dataSt["OTHER"]["CANCELLED"],],
                backgroundColor: 
                    'rgba(255, 152, 0, 0.6)'
                ,
                borderColor: 
                    'rgba(255, 152, 0, 1)'
                ,
                borderWidth: 1
            },
            {
                label: 'COMPLETED',
                data: [dataSt["ADDRESS"]["COMPLETED"],dataSt["PSYCHO"]["COMPLETED"],dataSt["HUMANITARIAN"]["COMPLETED"],dataSt["OTHER"]["COMPLETED"],],
                backgroundColor: 
                    'rgba(29, 233, 182, 0.6)'
                ,
                borderColor: 
                    'rgba(29, 233, 182, 1)'
                ,
                borderWidth: 1
            },
            {
                label: 'ALL',
                data: [dataSt["ADDRESS"]["ALL"],dataSt["PSYCHO"]["ALL"],dataSt["HUMANITARIAN"]["ALL"],dataSt["OTHER"]["ALL"],],
                backgroundColor: 
                    'rgba(156, 39, 176, 0.6)'
                ,
                borderColor:
                'rgba(156, 39, 176, 1)'
                ,
                borderWidth: 1
            },]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Stacked Bar chart for pollution status'
                },
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });
}

for (let key in adminButtons) {
    adminButtons[key].elem.onclick = () => {

            const buttonHolder = document.querySelector(".pg-extra-nav");
            if (buttonHolder) buttonHolder.remove();

            adminButtons[key].action(adminButtons[key].tmp)
    }
}

const createButtonHolder = (className) => {
    let buttonHolder = document.createElement("div");
    buttonHolder.className = className;
    return buttonHolder;
}

const requestButtons = {
    "NEW": {
        classes: "request-nav-button request-nav-button-dis",
        targClass: "new_requests",
        src: "/guestRequest/volunteer/forNewApplication",
        tmp: [],
        showType: false,
        buttonName: "Обработать",
        haveForm: true
    },
    "AT WORK": {
        classes: "request-nav-button request-nav-button-dis",
        targClass: "work_requests",
        src: "/guestRequest/volunteer/forWorkApplication",
        tmp: [
            {
                "id": 17,
                "surname": "Рвфывыфвыф",
                "name": "Пвыфвыфвф",
                "patronymic": "",
                "phone": "+79271592540",
                "commentGuest": "dsadsadsadsa",
                "status": "AT WORK",
                "typeAssistance": "PSYCHO",
                "createdAt": "2023-07-12T10:44:58.418Z",
                "updatedAt": "2023-07-13T11:36:47.328Z"
            },
            {
                "id": 13,
                "surname": "Фвыфвыфв",
                "name": "Фвыфвыф",
                "patronymic": "",
                "phone": "+73124442211",
                "commentGuest": "afdsdfsadafs",
                "status": "AT WORK",
                "typeAssistance": "HUMANITARIAN",
                "createdAt": "2023-07-09T18:03:53.505Z",
                "updatedAt": "2023-07-11T16:03:43.164Z"
            }
        ],
        showType: true,
        buttonName: "Редактировать",
        haveForm: true
    },
    "CANCELLED": {
        classes: "request-nav-button request-nav-button-dis",
        targClass: "cancelled_requests",
        src: "/guestRequest/volunteer/forCancelledApplication",
        tmp: [
            {
                "id": 9,
                "surname": "Владов",
                "name": "Влад",
                "patronymic": "",
                "phone": "+79235551122",
                "commentGuest": "ААААААААААА",
                "status": "CANCELLED",
                "typeAssistance": "OTHER",
                "createdAt": "2023-07-07T10:27:53.604Z",
                "updatedAt": "2023-07-07T17:39:20.966Z"
            },
            {
                "id": 3,
                "surname": "Уставший",
                "name": "Евгений",
                "patronymic": "Игоревич",
                "phone": "+79231672244",
                "commentGuest": "Я устал",
                "status": "CANCELLED",
                "typeAssistance": "OTHER",
                "createdAt": "2023-07-04T21:12:00.000Z",
                "updatedAt": "2023-07-03T21:12:00.000Z"
            }
        ],
        showType: true,
        buttonName: "Просмотреть",
        haveForm: false
    },
    "COMPLETED": {
        classes: "request-nav-button request-nav-button-dis",
        targClass: "completed_requests",
        src: "/guestRequest/volunteer/forCompletedApplication",
        tmp: [
            {
                "id": 9,
                "surname": "Владов",
                "name": "Влад",
                "patronymic": "",
                "phone": "+79235551122",
                "commentGuest": "ААААААААААА",
                "status": "COMPLETED",
                "typeAssistance": "OTHER",
                "createdAt": "2023-07-07T10:27:53.604Z",
                "updatedAt": "2023-07-07T17:39:20.966Z"
            },
            {
                "id": 3,
                "surname": "Уставший",
                "name": "Евгений",
                "patronymic": "Игоревич",
                "phone": "+79231672244",
                "commentGuest": "Я устал",
                "status": "COMPLETED",
                "typeAssistance": "OTHER",
                "createdAt": "2023-07-04T21:12:00.000Z",
                "updatedAt": "2023-07-03T21:12:00.000Z"
            }
        ],
        showType: true,
        buttonName: "Просмотреть",
        haveForm: false
    },
}

document.querySelector(".requests").onclick = () => {

    const pgData = document.querySelector(".pg-data-holder");

    let buttonHolder = document.querySelector(".pg-extra-nav");
    if (buttonHolder) buttonHolder.remove();
    buttonHolder = createButtonHolder("extra-nav pg-extra-nav");

    for (let key in requestButtons){

        let button = document.createElement("button");
        button.type = "button";
        button.className = requestButtons[key].targClass + " " + requestButtons[key].classes
        button.innerHTML = matches.values[matches.keys.indexOf(key)];

        button.onclick = () => {
            createRequestsTable(requestButtons[key].tmp)
        }

        buttonHolder.appendChild(button);
    }

    pgData.innerHTML = "";
    pgData.before(buttonHolder);
    buttonHolder.childNodes[0].click();
}

const statisticsButtons = {
    "STATUSSTATISTICS": {
        class: "status_statistics statistics-nav-button statistics-nav-button-dis",
        //elem: document.querySelector(".status_statistics"),
        src: "/guestRequest/admin/statusStatistics",
        tmp: {
            "NEW": 0,
            "AT WORK": 3,
            "CANCELLED": 4,
            "COMPLETED": 7,
            "ALL": 14
        },
        action: (data) => getStatusStatistics(data)
    },
    "ASSISTANCESTATISTICS": {
        class: "assistance_statistics statistics-nav-button statistics-nav-button-dis",
        //elem: document.querySelector(".assistance_statistics"),
        src: "/guestRequest/admin/assistanceStatistics",
        tmp:
        {
            "ADDRESS": 2,
            "PSYCHO": 7,
            "HUMANITARIAN": 2,
            "OTHER": 3,
            "ALL": 14
        },
        action: (data) =>  getAssistanceStatistics(data)
    },
    "COMPLEXSTATISTICS": {
        class: "complex_statistics statistics-nav-button statistics-nav-button-dis",
        //elem: document.querySelector(".complex_statistics"),
        src: "/guestRequest/admin/complexStatistics",
        tmp:
        {
            "ADDRESS": {
                "NEW": 0,
                "AT WORK": 0,
                "CANCELLED": 1,
                "COMPLETED": 1,
                "ALL": 2
            },
            "PSYCHO": {
                "NEW": 0,
                "AT WORK": 2,
                "CANCELLED": 0,
                "COMPLETED": 5,
                "ALL": 7
            },
            "HUMANITARIAN": {
                "NEW": 0,
                "AT WORK": 1,
                "CANCELLED": 0,
                "COMPLETED": 1,
                "ALL": 2
            },
            "OTHER": {
                "NEW": 0,
                "AT WORK": 0,
                "CANCELLED": 3,
                "COMPLETED": 0,
                "ALL": 3
            }
        },
        action: (data) => getComplexStatistics(data)
    },
}

document.querySelector(".statistics").onclick = () => {

    const pgData = document.querySelector(".pg-data-holder");

    let buttonHolder = document.querySelector(".pg-extra-nav");
    if (buttonHolder) buttonHolder.remove();
    buttonHolder = createButtonHolder("extra-nav pg-extra-nav");

    for (let key in statisticsButtons){

        let button = document.createElement("button");
        button.type = "button";
        button.className = statisticsButtons[key].class
        button.innerHTML = matches.values[matches.keys.indexOf(key)];

        button.onclick = () => {
            statisticsButtons[key].action(statisticsButtons[key].tmp)
        }

        buttonHolder.appendChild(button);
    }

    pgData.innerHTML = "";
    pgData.before(buttonHolder);
    buttonHolder.childNodes[0].click();
}


addEventListener("click", (e) => {
    let targ = e.target;

    if (targ.classList.contains("statistics-nav-button-dis")){

        let active = document.querySelector(".statistics-nav-button-active");

        if (active){
            active.classList.remove("statistics-nav-button-active");
            active.classList.add("statistics-nav-button-dis");
        }

        targ.classList.remove("statistics-nav-button-dis");
        targ.classList.add("statistics-nav-button-active");
    }
})

addEventListener("click", (e) => {
    let targ = e.target;

    if (targ.classList.contains("main-nav-button-dis")){

        let active = document.querySelector(".main-nav-button-active");

        if (active){
            active.classList.remove("main-nav-button-active");
            active.classList.add("main-nav-button-dis");
        }

        targ.classList.remove("main-nav-button-dis");
        targ.classList.add("main-nav-button-active");
    }
})

document.querySelector(".requests").click();