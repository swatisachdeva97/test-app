const axios = require("axios");
const APIURL = "https://random-data-api.com/api/users/random_user?size=16";


export const getUserData = () => axios.get(`${APIURL}`);

