
import {inject, InjectionKey} from "vue";
import axios, {AxiosStatic} from "axios";
//import VueAxios from "vue-axios";

const AxiosKey = Symbol() as InjectionKey<AxiosStatic>;

/* Composition API Axios utilities */


export const setupApi = () => {
    const axiosInstance = axios.create({
        headers: {
            "Content-Type": "application/json",
        }
    });

    return axiosInstance

    //app.use(VueAxios, axiosInstance);
    //app.provide(AxiosKey, axiosInstance);
};

export const useInjectAxios = axios;
