import { api } from './api';


function init() {
    api.getUser(1).then(res => console.log(res)).catch(error => console.error(error));
    api.createToken((Math.floor(Math.random()*10000))).then(res => console.log(res)).catch(error => console.error(error));
}


export default init;