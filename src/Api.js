// const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

const baseHost = "https://wedev-api.sky.pro/api/kanban";

const userHost = "https://wedev-api.sky.pro/api/user";

//get
export async function getTodos({ token }) {
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.status === 200) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}


//post
export async function postTodos({ taskData, token }) {
    console.log(taskData);
    const { date, description, title, topic } = taskData;
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
            date, description, title, topic
        }),
    });

    if (!response.status === 201) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}


//put
export async function putTodo({ taskData, id, token }) {
    const response = await fetch(baseHost + `/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify({
            text: taskData,
        }),
    });

    if (!response.status === 201) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}

//del
export async function delTodo({ id, token }) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body: JSON.stringify({
            text,
        }),
    });

    if (!response.status === 201) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}


export async function getUsersList({ token }) {
    const response = await fetch(userHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.status === 200) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}


//РЕГИСТРАЦИЯ
export function signUp({ login, name, password }) {
    return fetch(userHost, {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Такой пользователь уже существует");
        }
        return response.json();
    });
}


//АВТОРИЗАЦИЯ
export function signIn({ login, password }) {
    return fetch(userHost + "/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Неверный логин или пароль");
        }
        return response.json();
    });
}