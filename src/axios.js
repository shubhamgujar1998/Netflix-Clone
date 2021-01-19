import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});
// https://api.themoviedb.org/3/discover/tv?api_key=1ed58ae32291ae34782ccea832e74259&with_networks=213
export default instance;