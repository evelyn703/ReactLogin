import axios from 'axios';
import * as linkConfig from './config';

export const LoginAPI = async (username, password) => {
    try {
        const httpClient = axios.create();
        httpClient.defaults.timeout = 60000;

        const req = {
            "username": username,
            "password": password,
            "expiresIn": 60000
        }

        const serverDataParsed = await httpClient.post("https://www.mecallapi.com/api/login", req, {
            headers: {
                "Content-Type": "application/json",
            }
        })
       
        const data = serverDataParsed.data;
        linkConfig.data = data;
        console.log(data);

        if (data.status === "ok") {
            return 0;
        }
        else {
            return -1;
        }

    }
    catch (error) {
        console.error('Failure!');
      //  throw new Error(error);
        return -1;
    }

}