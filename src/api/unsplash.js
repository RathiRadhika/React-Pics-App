import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID a6xX_K12e0f5JaYiP5kz_lAexD5mRCUpnaL9VtvDZMM'
    }
});