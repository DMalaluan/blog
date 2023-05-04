import axios from 'axios';

export default axios.create({
    baseURL: 'http://b6f3-2607-fb90-8f9d-5849-8ccb-fe50-303d-f414.ngrok.io' 
    // Have to change url everytime you tunnel a new session
});