import { GET_PRODUCTS } from "../shared/store/actions/productsAction";
import { REMOVE_CONTACT } from "../shared/store/actions/productsAction";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validLoginData = (email, password) => {
  return email.length > 0 && password.length > 0 && emailRegex.test(email);
};
export const valid = (newTypeFood, newSub) => {
  return newTypeFood.length > 0 && newSub.length > 0;
};
export const fetchLoginAPI = (email, password) => {
  return fetch("https://traineer-064a.restdb.io/rest/accounts", {
    async: true,
    crossDomain: true,
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": "5f81fab25799e648a5a8eec6",
      "cache-control": "no-cache",
    },
  })
    .then((responce) => responce.json())
    .then((data) => {
      const user = data.find(
        (item) => item.email === email && item.password === password
      );
      if (user) {
        const userId = user._id;
        fetch("https://traineer-064a.restdb.io/rest/accounts/" + userId, {
          async: true,
          crossDomain: true,
          method: "PUT",
          headers: {
            "content-type": "application/json",
            "x-apikey": "5f81fab25799e648a5a8eec6",
            "cache-control": "no-cache",
          },
        }).then((responce1) => responce1.json());
        return true;
      } else {
        return false;
      }
    });
};

export const fetchFoodAPI = () => {
  return fetch("https://traineer-064a.restdb.io/rest/category", {
    async: true,
    crossDomain: true,
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": "5f81fab25799e648a5a8eec6",
      "cache-control": "no-cache",
    },
  }).then((responce_type) => responce_type.json());
};

export const getAllFoodAPI = () => (dispatch) => {
  return fetch("https://traineer-064a.restdb.io/rest/foods", {
    async: true,
    crossDomain: true,
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": "5f81fab25799e648a5a8eec6",
      "cache-control": "no-cache",
    },
  })
    .then((responce_type) => responce_type.json())
    .then((data) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    });
};

export const fetchAPIAddFood = (Menu) => {
  return fetch("https://traineer-064a.restdb.io/rest/foods", {
    async: true,
    crossDomain: true,
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-apikey": "5f81fab25799e648a5a8eec6",
      "cache-control": "no-cache",
    },
    body: JSON.stringify(Menu),
  }).then((responcefood) => responcefood.json());
};

export const fetchAPIAddnewFood = (New) => {
  return fetch("https://traineer-064a.restdb.io/rest/category", {
    async: true,
    crossDomain: true,
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-apikey": "5f81fab25799e648a5a8eec6",
      "cache-control": "no-cache",
    },
    body: JSON.stringify(New),
  }).then((responcenewfood) => responcenewfood.json());
};
