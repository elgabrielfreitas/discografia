import axios from "axios";

export default axios.create({
  baseURL: "https://tiao.supliu.com.br/api/",
  headers: {
    'Authorization': "bielfreitascontato@gmail.com"
  }
});