//Содержит все методы для работы приложения

class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }
  //функция, которая обрабатывает ответ от сервера
  _handleResponse(response) {
    //принимает ответ от сервера
    if (response.ok) {
      return response.json(); //парсинг, переводим json в форма понятный для js
    }
    return Promise.reject(`Произошла ошибка: ${response.status}`); //отлавливаем ошибку
  }
  //функция, которая отправляет запрос на сервер
  _request(url, options) {
    //ассинхронный запрос на сервер
    return fetch(url, options).then(this._handleResponse);
  }

  //Получение всех пользователей
  getAllUser() {
    return this._request(`${this._baseUrl}example=all`, {
      method: "GET",
      headers: this._headers,
    });
  }
  //Получение всех пользователей определенного департамента
  getAllUserDepart(depart) {
    return this._request(`${this._baseUrl}example=${depart}`, {
      method: "GET",
      headers: this._headers,
    });
  }

  //Запрос, который вернет ошибку
  returnError() {
    return this._request(`${this._baseUrl}code=500&__dynamic=true`, {
      method: "GET",
      headers: this._headers,
    });
  }
}

const api = new Api({
  baseUrl:
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__",
  headers: {
    "Content-Type": "application/json",
    accept: "Application/json",
  },
});

export default api;
