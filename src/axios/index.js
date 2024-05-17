// const { default: axios } = require("axios");

import axios from "axios"



const instance = axios.create({
	baseURL: 'https://662b5477de35f91de157dddb.mockapi.io/mebel'
})

export default instance