import { ref } from "vue";

export async function getUsers() {
  const data = ref(null);
  const error = ref(null);

  try {
    const response = await fetch('http://localhost:8080/api/user');
    const users = await response.json();
    data.value = users;
  } catch (err) {
    error.value = err;
  }

  return { data, error };
}
export async function createUser(user) {
  const data = ref(null);
  const error = ref(null);

  try {
    const response = await fetch('http://localhost:8080/api/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    const users = await response.json();

    if (response.status === 400) {
      console.log('ошибка');
      error.value = users.error;
      return {data, error};
    }
    data.value = users;
    console.log('пользователь успешно создан', users);
  } catch (error) {
    console.error(error.message)
    error.value = error;
  }
  return {data, error}

}
export async function createFakeUsers() {
  const data = ref(null);
  const error = ref(null);

  try {
    const response = await fetch('http://localhost:8080/api/create-users', {
      method: 'POST'
    });
    const users = await response.json();
    data.value = users;
  } catch (err) {
    error.value = err;
  }

  return { data, error };
}
export async function removeUserById(id) {
  const data = ref(null);
  const error = ref(null);

  try {
    const response = await fetch('http://localhost:8080/api/user', {
      method: 'DELETE',
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ id }), // body data type must match "Content-Type" header
    });
    if (!response.ok) {
      console.error('Ошибка при удалении пользователя:', response.status);
      return {status: response.status}
    }
    console.log(`Пользователь с id ${id} удален`);

    return  {status: response.status};
  } catch (err) {
    error.value = err;
    console.log('произошла ошибка при удаления пользователя по id');
  }

  return { error };
}
export async function updateUser(user) {
  console.log('updateUser', user);
  const error = ref(null);
  try {
    const response = await fetch('http://localhost:8080/api/user', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ id: user.id, name: user.name, email: user.email, phone: user.phone, room: user.room, floor: user.floor,  }), // body data type must match "Content-Type" header
    });
    if (response.ok) {
      console.log('Данные пользователя успешно обновлены');
    } else {
      console.error('Ошибка при обновлении пользователя:', response.status);
    }
  } catch (err) {
    error.value = err;
    console.error('Ошибка при выполнении запроса:', error);
  }

  return { error };
}
