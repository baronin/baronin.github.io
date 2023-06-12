<script setup>
import { api } from "@/api/index.js";
import { ref, onMounted } from "vue";
import TextField from "@/components/text-field.vue";

const users = ref([]);
const usersError = ref([]);
const errorsCreateUsersFake = ref('');
const isModalActive = ref(false);
const newUser = ref({
  name: "",
  email: "",
  phone: "",
  room: "",
  floor: "",
});

const errorNewUser = ref([]);

const onChangeField = (user, field, event) => {
  user[field] = event.target.value;
};

onMounted(async () => {
  try {
    const { data, error } = await api.getUsers();
    users.value = data.value.map((user) => ({ ...user, isChange: false }));
    usersError.value = error;
  } catch (error) {
    console.log(error.message);
    usersError.value = error.message;
  }
});

const createUser = async () => {
  errorNewUser.value.splice(0, errorNewUser.value.length);

  const { name, email, phone, room, floor } = newUser.value;
  if (!(name || email || phone || room || floor)) {
    errorNewUser.value.push("Введите все поля");
    return;
  }

  try {
    const { data, error } = await api.createUser(newUser.value);
    if (error.value) {
      errorNewUser.value.push(error.value);
      return;
    }
    users.value.unshift(newUser.value);
  } catch (error) {
    console.log(error);
  } finally {
    newUser.value = {
      name: "",
      email: "",
      phone: "",
      room: "",
      floor: "",
    };
    isModalActive.value = false;
  }
};

const createFakeUsers = async () => {
  const { data, error } = await api.createFakeUsers();
  if (data.value.length) users.value.unshift(...data.value)
  if (data.value.error) errorsCreateUsersFake.value = data.value.error;
};

const deleteUserById = async (userId) => {
  try {
    const index = users.value.findIndex((user) => user.id === userId);
    if (index !== -1) {
      await api.removeUserById(userId);
      users.value.splice(index, 1);
    } else {
      console.error("Пользователь не найден");
    }
  } catch (error) {
    // Обработка ошибки удаления пользователя
    console.error("Ошибка при удалении пользователя:", error.message);
  }
};

const toggleEditMode = async (user) => {
  users.value = users.value.map((u) => ({
    ...u,
    isChange: u.id === user.id,
  }));
};
const updateUserById = async (user) => {
  users.value = users.value.map((u) => {
    if (u.isChange) {
      const updatedUser = {
        id: u.id,
        room: u.room,
        floor: u.floor,
        name: u.name,
        phone: u.phone,
        email: u.email,
      };
      api.updateUser(updatedUser).catch(() => console.log("Не удалось обновить данные пользователя"));
      return { ...u, isChange: false };
    }
    return u;
  });
};
</script>

<template>
  <div class="content">
    <div>
      <h4 class="mt-5">Добавить жильца</h4>
      <button type="button" class="button is-primary" @click="isModalActive = true">add</button>
      <div class="modal" :class="{'is-active': isModalActive}">
        <div class="modal-background" @click="isModalActive = false"></div>
        <div class="modal-content">
          <div class="form-create-user mb-2">
            <text-field
              label="Apartment"
              placeholder="room"
              class="mr-2"
              :value="newUser.room"
              @update:value="newUser.room = $event"
            />
            <text-field
              type="number"
              label="Floor"
              placeholder="floor"
              class="mr-2"
              :value="newUser.floor"
              @update:value="newUser.floor = $event"
            />
            <text-field
              label="Name"
              placeholder="Username"
              class="mr-2"
              :value="newUser.name"
              icon-classes="fas fa-user"
              @update:value="newUser.name = $event"
            />
            <text-field
              label="Phone"
              placeholder="phone"
              class="mr-2"
              icon-classes="fas fa-phone"
              :value="newUser.phone"
              @update:value="newUser.phone = $event"
            />
            <text-field
              label="Email"
              placeholder="email"
              class="mr-2"
              :value="newUser.email"
              @update:value="newUser.email = $event"
              icon-classes="fas fa-envelope"
            />
            <div class="field mr-2">
              <div class="control">
                <label class="label checkbox">
                  Admin
                  <input type="checkbox" />
                </label>
              </div>
            </div>

            <div class="field is-grouped is-align-self-center">
              <div class="control">
                <button class="button is-primary" @click="createUser">Submit</button>
              </div>
            </div>
          </div>
          <div v-if="errorNewUser.length > 0">
            <div v-for="error in errorNewUser" :key="error">
              {{ error }}
            </div>
          </div>
          <button class="modal-close is-large" aria-label="close" @click="isModalActive = false"></button>
        </div>
      </div>
    </div>
    <hr>
    <div class="mb-4">
      <button class="button" @click="createFakeUsers">Создать фейковых жильцов</button>
      <p class="mt-1 has-text-danger">{{errorsCreateUsersFake}}</p>
    </div>
    <table  v-if="users.length" class="table is-bordered is-hoverable is-narrow">
      <caption>Жильцы дома</caption>
      <thead>
        <tr>
          <th class="is-1 mr-1">Квартира</th>
          <th>Этаж</th>
          <th>Имя</th>
          <th>Телефон</th>
          <th>Почта</th>
          <th class="table__td">Изменить</th>
          <th class="table__td">Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <div class="control">
              <input
                type="text"
                class="input"
                :value="user.room"
                :readonly="!user.isChange"
                @input="onChangeField(user, 'room', $event)"
              />
            </div>
          </td>
          <td>
            <div class="control">
              <input
                type="text"
                class="input"
                :value="user.floor"
                :readonly="!user.isChange"
                @input="onChangeField(user, 'floor', $event)"
              />
            </div>
          </td>
          <td>
            <div class="control">
              <input
                class="input"
                type="text"
                :value="user.name"
                :readonly="!user.isChange"
                @input="onChangeField(user, 'name', $event)"
              />
            </div>
          </td>
          <td>
            <div class="control has-icons-left has-icons-righ">
              <input
                class="input"
                type="phone"
                :value="user.phone"
                :readonly="!user.isChange"
                @input="onChangeField(user, 'phone', $event)"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-phone fa-xs"></i>
              </span>
            </div>
          </td>
          <td>
            <div class="control has-icons-left has-icons-righ">
              <input
                class="input"
                type="email"
                :value="user.email"
                :readonly="!user.isChange"
                @input="onChangeField(user, 'email', $event)"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope fa-xs"></i>
              </span>
            </div>
          </td>

          <td class="table__td">
            <div v-if="user.isChange">
              <button type="button" @click="updateUserById(user)">
                <span class="icon has-text-danger">
                  <i class="fas fa-check"></i>
                </span>
              </button>
            </div>
            <div v-else>
              <button type="button" @click="toggleEditMode(user)">
                <span class="icon has-text-danger">
                  <i class="fas fa-pen"></i>
                </span>
              </button>
            </div>
          </td>
          <td class="table__td">
            <button class="delete" @click="deleteUserById(user.id)"></button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>Список жильцов пока пуск</div>
  </div>
</template>

<style lang="scss">
.content .table .table__td {
  text-align: center;
  vertical-align: middle;
}

.table .input[readonly] {
  border-color: transparent;
}

.modal-content {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;

  .modal-close {
    position: absolute;
    top: 10px;
    background-color: #3bc1a0;
  }
}
</style>
